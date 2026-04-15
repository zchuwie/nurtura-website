import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Logo.png";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
          theme?: "light" | "dark";
          size?: "normal" | "compact" | "flexible";
        },
      ) => string;
    };
  }
}

interface NavLink {
  label: string;
  to: string;
}

const navLinks: NavLink[] = [
  { label: "Product", to: "/product" },
  { label: "Technology", to: "/technology" },
  { label: "Pricing", to: "/pricing" },
  { label: "About Us", to: "/about" },
  { label: "FAQ", to: "/faq" },
];

const CONTACT_EMAIL = "lots.loamtechsolutions@gmail.com";
const CONTACT_SUBJECT = "Nurtura Inquiry";
const CONTACT_BODY = `Hello Nurtura Team,

I would like to ask about:
- Topic:
- Current setup/location:
- Preferred contact method:
- Details:

Name:
Organization (optional):
Contact number (optional):

Thank you.`;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] =
    useState<boolean>(false);
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const [turnstileError, setTurnstileError] = useState<string>("");
  const [isSubmittingDownload, setIsSubmittingDownload] =
    useState<boolean>(false);
  const location = useLocation();
  const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY as
    | string
    | undefined;
  const isTurnstileConfigured = Boolean(turnstileSiteKey);
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    CONTACT_EMAIL,
  )}&su=${encodeURIComponent(CONTACT_SUBJECT)}&body=${encodeURIComponent(CONTACT_BODY)}`;

  useEffect(() => {
    if (!isDownloadModalOpen) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsDownloadModalOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isDownloadModalOpen]);

  useEffect(() => {
    if (!isDownloadModalOpen || !isTurnstileConfigured) {
      return;
    }

    const scriptId = "cf-turnstile-script";
    const existingScript = document.getElementById(scriptId);

    const renderWidget = () => {
      const widgetContainer = document.getElementById("turnstile-widget");
      if (!widgetContainer || !window.turnstile || !turnstileSiteKey) {
        return;
      }

      widgetContainer.innerHTML = "";
      setTurnstileToken("");
      setTurnstileError("");

      window.turnstile.render(widgetContainer, {
        sitekey: turnstileSiteKey,
        theme: "light",
        size: window.innerWidth < 380 ? "compact" : "flexible",
        callback: (token: string) => {
          setTurnstileToken(token);
          setTurnstileError("");
        },
        "expired-callback": () => {
          setTurnstileToken("");
          setTurnstileError("Verification expired. Please verify again.");
        },
        "error-callback": () => {
          setTurnstileToken("");
          setTurnstileError("Verification failed. Please retry.");
        },
      });
    };

    if (existingScript) {
      renderWidget();
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src =
      "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.onload = renderWidget;
    script.onerror = () => {
      setTurnstileError(
        "Unable to load verification. Please refresh and retry.",
      );
    };
    document.head.appendChild(script);
  }, [isDownloadModalOpen, isTurnstileConfigured, turnstileSiteKey]);

  useEffect(() => {
    const openDownloadModal = () => {
      setIsDownloadModalOpen(true);
    };

    window.addEventListener("open-download-modal", openDownloadModal);
    return () => {
      window.removeEventListener("open-download-modal", openDownloadModal);
    };
  }, []);

  const closeDownloadModal = () => {
    setIsDownloadModalOpen(false);
    setTurnstileToken("");
    setTurnstileError("");
    setIsSubmittingDownload(false);
  };

  const handleDownloadSubmit = () => {
    if (!turnstileToken) {
      setTurnstileError("Please complete the verification first.");
      return;
    }

    setIsSubmittingDownload(true);
    setTurnstileError("");

    const form = document.createElement("form");
    form.method = "POST";
    form.action = "/api/download-apk";
    form.style.display = "none";

    const tokenInput = document.createElement("input");
    tokenInput.type = "hidden";
    tokenInput.name = "turnstileToken";
    tokenInput.value = turnstileToken;
    form.appendChild(tokenInput);

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    closeDownloadModal();
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#F9FAFB] border-b border-[#E5EDCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="Nurtura Logo" className="w-6 h-6" />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "text-[#86975A]"
                    : "text-[#282828] hover:text-[#86975A]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsDownloadModalOpen(true)}
              className="px-4 py-2 text-sm font-medium text-[#86975A] border border-[#86975A] rounded-full hover:bg-[#86975A] hover:text-white transition-all"
            >
              Download the App
            </button>
            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-semibold bg-[#86975A] text-white rounded-full hover:bg-[#6e7d48] transition-all"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[#282828]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.25">
              <span
                className={`block h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-1.75" : ""}`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-1.75" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#E5EDCF] bg-[#F9FAFB] px-4 sm:px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium ${
                location.pathname === link.to
                  ? "text-[#86975A]"
                  : "text-[#282828]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-3 border-t border-[#E5EDCF]">
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                setIsDownloadModalOpen(true);
              }}
              className="px-4 py-2 text-sm font-medium text-center text-[#86975A] border border-[#86975A] rounded-full"
            >
              Download the App
            </button>
            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 text-sm font-semibold text-center bg-[#86975A] text-white rounded-full"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}

      {isDownloadModalOpen && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center px-3 sm:px-4"
          style={{
            background: "rgba(40,40,40,0.58)",
            backdropFilter: "blur(2px)",
          }}
          onClick={closeDownloadModal}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="download-modal-title"
            aria-describedby="download-modal-description"
            className="w-full max-w-md rounded-2xl p-4 sm:p-7 shadow-2xl max-h-[90vh] overflow-y-auto"
            style={{
              background: "#E5EDCF",
              border: "1px solid #6e7d48",
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <p className="inline-flex items-center rounded-full bg-[#d9e3ba] px-3 py-1 text-xs font-semibold tracking-wide text-[#516136]">
              Secure download
            </p>
            <h3
              id="download-modal-title"
              className="mt-3 text-2xl sm:text-3xl font-black text-[#282828]"
            >
              Download Nurtura App
            </h3>
            <p
              id="download-modal-description"
              className="mt-2 text-sm sm:text-base leading-relaxed text-[#7d8a5a]"
            >
              Complete verification, then your download will begin.
            </p>

            {!isTurnstileConfigured ? (
              <p className="mt-4 rounded-xl border border-[#d97706] bg-[#fff7ed] px-4 py-3 text-sm text-[#9a3412]">
                Download is unavailable. Missing Turnstile site key setup.
              </p>
            ) : (
              <div className="mt-4 rounded-xl border border-[#c6d3a1] bg-[#f3f7e8] p-2.5 sm:p-4">
                <p className="mb-2 text-xs font-medium text-[#5f6d40]">
                  Verify to continue
                </p>
                <div
                  id="turnstile-widget"
                  className="min-h-16 w-full overflow-hidden flex justify-center"
                />
                {turnstileError ? (
                  <p className="mt-2 text-sm text-[#b91c1c]">
                    {turnstileError}
                  </p>
                ) : null}
              </div>
            )}

            <div className="mt-6 flex flex-col-reverse sm:flex-row sm:justify-end gap-2.5 sm:gap-3">
              <button
                type="button"
                onClick={closeDownloadModal}
                className="px-5 py-2.5 rounded-full text-sm font-semibold min-h-11 border border-[#86975A] text-[#6e7d48] hover:bg-[#d9e3ba] transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDownloadSubmit}
                disabled={!isTurnstileConfigured || isSubmittingDownload}
                className="px-5 py-2.5 rounded-full text-sm font-bold min-h-11 bg-[#86975A] text-white hover:bg-[#6e7d48] transition-colors disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmittingDownload ? "Starting download..." : "Download now"}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
