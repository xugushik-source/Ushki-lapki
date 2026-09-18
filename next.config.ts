import type { NextConfig } from "next";

// GitHub Pages serves a project repo (not a custom domain or a
// <user>.github.io root repo) from /<repo-name>/ — every asset and link
// needs that prefix or CSS/JS/images 404 while the HTML still loads.
// Set via the deploy workflow (see .github/workflows/deploy-pages.yml) and
// mirrored in src/lib/imageLoader.ts; leave unset for local dev/build,
// where no prefix is wanted. Must be NEXT_PUBLIC_-prefixed, not just read
// here, because the image loader below also needs it inlined client-side.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Static export: GitHub Pages only serves files, it cannot run the
  // Next.js server, so there is no middleware, no image-optimization
  // endpoint and no on-demand rendering — everything must be pre-built.
  output: "export",
  basePath,
  // Without this, pages export as "route.html" next to an empty "route/"
  // folder, and next/link points at the extensionless "/route" — most
  // static file servers (GitHub Pages included) don't reliably resolve
  // that to the .html file. "route/index.html" does, universally.
  trailingSlash: true,
  images: {
    // next/image's built-in "unoptimized" src builder doesn't itself
    // prepend basePath to local images (a known Next.js gap), so a custom
    // loader does it by hand — see src/lib/imageLoader.ts. This also means
    // there's no optimizer endpoint to configure (no unoptimized flag,
    // no dangerouslyAllowSVG needed).
    loader: "custom",
    loaderFile: "./src/lib/imageLoader.ts",
  },
};

export default nextConfig;
