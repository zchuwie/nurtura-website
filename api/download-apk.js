const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

function getClientIp(req) {
  const xForwardedFor = req.headers["x-forwarded-for"];
  if (Array.isArray(xForwardedFor) && xForwardedFor.length > 0) {
    return String(xForwardedFor[0]).split(",")[0].trim();
  }

  if (typeof xForwardedFor === "string") {
    return xForwardedFor.split(",")[0].trim();
  }

  return undefined;
}

function getTokenFromBody(body) {
  if (!body) return "";

  if (typeof body === "string") {
    const params = new URLSearchParams(body);
    return params.get("turnstileToken") || "";
  }

  if (typeof body === "object") {
    const value = body.turnstileToken;
    return typeof value === "string" ? value : "";
  }

  return "";
}

async function verifyTurnstile({ token, secretKey, remoteIp }) {
  const payload = new URLSearchParams();
  payload.append("secret", secretKey);
  payload.append("response", token);

  if (remoteIp) {
    payload.append("remoteip", remoteIp);
  }

  const verificationResponse = await fetch(TURNSTILE_VERIFY_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: payload,
  });

  if (!verificationResponse.ok) {
    return { success: false };
  }

  return verificationResponse.json();
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const turnstileSecretKey = process.env.TURNSTILE_SECRET_KEY;
  const githubReleaseApkUrl = process.env.GITHUB_RELEASE_APK_URL;

  if (!turnstileSecretKey || !githubReleaseApkUrl) {
    return res.status(500).json({ error: "Server is not fully configured" });
  }

  const turnstileToken = getTokenFromBody(req.body);
  if (!turnstileToken) {
    return res.status(400).json({ error: "Missing Turnstile token" });
  }

  try {
    const verificationResult = await verifyTurnstile({
      token: turnstileToken,
      secretKey: turnstileSecretKey,
      remoteIp: getClientIp(req),
    });

    if (!verificationResult.success) {
      return res.status(403).json({ error: "Turnstile verification failed" });
    }

    res.setHeader("Cache-Control", "no-store");
    return res.redirect(302, githubReleaseApkUrl);
  } catch {
    return res.status(500).json({ error: "Unable to process download request" });
  }
}
