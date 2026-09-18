import { notFound } from "next/navigation";
import { LOCALES } from "@/types";

// `output: "export"` requires at least one generated path per dynamic
// segment, so every genuinely unmatched deep link can't be enumerated —
// GitHub Pages falls back to the prebuilt out/404.html for those. This one
// path per locale (…/404) exists so each locale also gets its own styled,
// translated not-found page at a stable, linkable URL.
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale, catchAll: ["404"] }));
}

// Any unmatched path under a valid locale falls through here so the
// localized not-found.tsx renders instead of Next's generic default.
export default function CatchAll() {
  notFound();
}
