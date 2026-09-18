import { getDictionary } from "@/locales";
import { DEFAULT_LOCALE } from "@/types";
import { localePath } from "@/lib/routes";

// Static export bakes this into out/404.html — the single fallback page
// GitHub Pages serves for any path with no matching file, including ones
// [locale]/[...catchAll] never got to enumerate. No locale param is
// available here either, so it uses the default locale like its
// [locale]/not-found.tsx counterpart. Renders inside app/layout.tsx's
// <html>/<body>, so it supplies neither itself.
export default function RootNotFound() {
  const dict = getDictionary(DEFAULT_LOCALE);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center font-sans">
      <p className="text-6xl text-neutral-400">404</p>
      <h1 className="text-3xl font-semibold">{dict.common.page404Title}</h1>
      <p className="max-w-md text-neutral-500">{dict.common.page404Body}</p>
      <a href={localePath(DEFAULT_LOCALE)} className="mt-4 underline">
        {dict.common.backToHome}
      </a>
    </div>
  );
}
