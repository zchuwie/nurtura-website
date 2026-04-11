import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const DIST_DIR = path.join(ROOT, "dist");

const routeFiles = [
  { route: "/", file: path.join(DIST_DIR, "index.html") },
  { route: "/product", file: path.join(DIST_DIR, "product", "index.html") },
  { route: "/pricing", file: path.join(DIST_DIR, "pricing", "index.html") },
  {
    route: "/technology",
    file: path.join(DIST_DIR, "technology", "index.html"),
  },
  { route: "/about", file: path.join(DIST_DIR, "about", "index.html") },
  { route: "/faq", file: path.join(DIST_DIR, "faq", "index.html") },
];

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

function hasFaqEntities(html) {
  return /"@type":"FAQPage"/.test(html) && /"@type":"Question"/.test(html);
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

for (const route of routeFiles) {
  if (!fs.existsSync(route.file)) {
    errors.push(
      `Missing prerendered route file for ${route.route}: ${path.relative(ROOT, route.file)}`,
    );
    continue;
  }

  const html = fs.readFileSync(route.file, "utf8");

  if (!hasTitle(html)) {
    errors.push(`Missing <title> tag in ${route.route}`);
  }

  if (!hasMetaDescription(html)) {
    errors.push(`Missing meta description in ${route.route}`);
  }

  if (!hasCanonical(html)) {
    errors.push(`Missing canonical link in ${route.route}`);
  }

  if (!hasJsonLd(html)) {
    errors.push(`Missing JSON-LD script in ${route.route}`);
  }

  if (route.route === "/faq" && !hasFaqEntities(html)) {
    errors.push("FAQ route is missing Question/Answer entities in JSON-LD");
  }
}

if (errors.length > 0) {
  console.error("SEO checks failed:\n");
  for (const err of errors) {
    console.error(`- ${err}`);
  }
  process.exit(1);
}

console.log("SEO checks passed for prerendered routes and core metadata.");
