import { DEFAULT_LOCALE, LOCALES } from "@/types";

// Static export has no server to read the Accept-Language header (the old
// src/proxy.ts did this and is incompatible with `output: "export"`), so
// the redirect happens client-side instead: this script runs before paint
// and swaps the bare "/" for the visitor's best-matching locale path. The
// target is relative ("./en/"), not basePath-prefixed, so it resolves
// correctly whether the site is served from a custom domain root or a
// GitHub Pages project subpath.
const redirectScript = `(function(){
  try {
    var locales = ${JSON.stringify(LOCALES)};
    var langs = navigator.languages || [navigator.language || "${DEFAULT_LOCALE}"];
    var match = "${DEFAULT_LOCALE}";
    for (var i = 0; i < langs.length; i++) {
      var code = (langs[i] || "").toLowerCase().slice(0, 2);
      if (locales.indexOf(code) !== -1) { match = code; break; }
    }
    location.replace("./" + match + "/");
  } catch (e) {
    location.replace("./${DEFAULT_LOCALE}/");
  }
})();`;

export default function RootRedirect() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: redirectScript }} />
      <noscript>
        <meta httpEquiv="refresh" content={`0; url=./${DEFAULT_LOCALE}/`} />
      </noscript>
    </>
  );
}
