import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const DIST_DIR = path.join(ROOT, "dist");

const staticFiles = [
  path.join(DIST_DIR, "robots.txt"),
  path.join(DIST_DIR, "sitemap.xml"),
];

function hasMetaDescription(html) {
  const lower = html.toLowerCase();
  return (
    lower.includes("<meta") &&
    lower.includes('name="description"') &&
    lower.includes("content=")
  );
}

function hasCanonical(html) {
  const lower = html.toLowerCase();
  return (
    lower.includes("<link") &&
    lower.includes('rel="canonical"') &&
    lower.includes("href=")
  );
}

function hasTitle(html) {
  return /<title>[^<]+<\/title>/i.test(html);
}

function hasJsonLd(html) {
  return /<script\s+type=["']application\/ld\+json["']>.+<\/script>/is.test(
    html,
  );
}

const errors = [];

if (!fs.existsSync(DIST_DIR)) {
  errors.push("Missing dist directory. Run npm run build first.");
}

for (const filePath of staticFiles) {
  if (!fs.existsSync(filePath)) {
    errors.push(
      `Missing required static file: ${path.relative(ROOT, filePath)}`,
    );
  }
}

const indexFile = path.join(DIST_DIR, "index.html");
if (!fs.existsSync(indexFile)) {
  errors.push("Missing dist/index.html");
} else {
  const html = fs.readFileSync(indexFile, "utf8");

  if (!hasTitle(html)) {
    errors.push("Missing <title> tag in dist/index.html");
  }

  if (!hasMetaDescription(html)) {
    errors.push("Missing meta description in dist/index.html");
  }

  if (!hasCanonical(html)) {
    errors.push("Missing canonical link in dist/index.html");
  }

  if (!hasJsonLd(html)) {
    errors.push("Missing JSON-LD script in dist/index.html");
  }
}

if (errors.length > 0) {
  console.error("SEO checks failed:\n");
  for (const err of errors) {
    console.error(`- ${err}`);
  }
  process.exit(1);
}

console.log("SEO checks passed for SPA build artifacts and core metadata.");
