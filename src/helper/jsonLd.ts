// src/helper/jsonLd.ts
// Helper functions for generating JSON-LD structured data for different pages

export function getJsonLd({
  type,
  name,
  description,
  url,
  image,
  publisher,
}: {
  type: string;
  name: string;
  description: string;
  url?: string;
  image?: string;
  publisher?: { name: string };
}) {
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
  };
  if (url) base.url = url;
  if (image) base.image = image;
  if (publisher)
    base.publisher = { "@type": "Organization", name: publisher.name };
  return base;
}
