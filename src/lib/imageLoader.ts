// Static export has no server to run the image-optimization endpoint, and
// next/image's own "unoptimized" src builder doesn't prepend basePath to
// local images (a known Next.js gap — the URL just comes out as
// "/images/foo.jpg" even when the site is served from a GitHub Pages
// project subpath). This loader stands in for the optimizer and does that
// prefixing by hand; it otherwise returns the source untouched, since
// there's nothing to resize or reformat without a server.
export default function imageLoader({ src }: { src: string; width: number; quality?: number }) {
  if (/^https?:\/\//.test(src)) return src;

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${basePath}${src}`;
}
