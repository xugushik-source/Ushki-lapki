import { notFound } from "next/navigation";
import { LOCALES, Locale } from "@/types";
import { routeSegments, RouteKey } from "@/config/routes.config";

// Next's typed-routes generator sees [locale] as a plain string, so every
// page/layout receives params as Promise<{ locale: string }>. This is the
// single place that narrows it to Locale (or 404s on garbage input).
export function resolveLocale(raw: string): Locale {
  if (!LOCALES.includes(raw as Locale)) notFound();
  return raw as Locale;
}

export function localePath(locale: Locale, path: string = "") {
  return `/${locale}${path ? `/${path}` : ""}`;
}

export function routePath(locale: Locale, key: RouteKey, ...rest: string[]) {
  const segment = routeSegments[locale][key];
  return localePath(locale, [segment, ...rest].join("/"));
}

// Builds the equivalent URL in another locale so the language switcher never
// drops the visitor back on the homepage (brief section 40).
export function switchLocalePath(
  currentPath: string,
  fromLocale: Locale,
  toLocale: Locale,
): string {
  const parts = currentPath.split("/").filter(Boolean);
  if (parts[0] === fromLocale) parts.shift();
  if (parts.length === 0) return localePath(toLocale);

  const [firstSegment, ...restSegments] = parts;
  const matchedKey = (Object.keys(routeSegments[fromLocale]) as RouteKey[]).find(
    (key) => routeSegments[fromLocale][key].split("/")[0] === firstSegment,
  );

  if (!matchedKey) return localePath(toLocale, parts.join("/"));

  const translatedFirst = routeSegments[toLocale][matchedKey];
  return localePath(toLocale, [translatedFirst, ...restSegments].join("/"));
}
