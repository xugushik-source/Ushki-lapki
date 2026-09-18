import type { MetadataRoute } from "next";

// Required by `output: "export"` — this route has no per-request input, so
// it's safe to bake into a static robots.txt at build time.
export const dynamic = "force-static";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example-clinic.pages.dev";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
