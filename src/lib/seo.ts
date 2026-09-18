import { LOCALES, Locale } from "@/types";
import { routePath, localePath } from "@/lib/routes";
import { RouteKey } from "@/config/routes.config";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example-clinic.pages.dev";

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path}`;
}

// Builds the hreflang alternate map for a page that exists at the same
// conceptual URL in every locale (brief section 44) — pass a per-locale
// slug resolver for pages whose slug differs by language.
export function buildAlternates(
  routeKey: RouteKey | "home",
  slugForLocale?: (locale: Locale) => string | undefined,
) {
  const languages: Record<string, string> = {};

  for (const locale of LOCALES) {
    const slug = slugForLocale?.(locale);
    const path =
      routeKey === "home"
        ? localePath(locale)
        : routePath(locale, routeKey, ...(slug ? [slug] : []));
    languages[locale] = absoluteUrl(path);
  }
  languages["x-default"] = languages[LOCALES[0]];

  return { languages };
}
