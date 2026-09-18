import { notFound } from "next/navigation";
import { LOCALES, Locale } from "@/types";
import { routeSegments, RouteKey } from "@/config/routes.config";
import { services } from "@/config/services.config";

// Next's typed-routes generator sees [locale] as a plain string, so every
// page/layout receives params as Promise<{ locale: string }>. This is the
// single place that narrows it to Locale (or 404s on garbage input).
export function resolveLocale(raw: string): Locale {
  if (!LOCALES.includes(raw as Locale)) notFound();
  return raw as Locale;
}

// Each localized segment word (e.g. "leistungen") physically exists as its
// own folder under every locale, since Next.js needs real files to route to.
// This guards against /de/services (the English word under German) resolving
// to content instead of a 404 — only /de/leistungen should.
export function assertRouteSegment(locale: Locale, key: RouteKey, segment: string) {
  if (routeSegments[locale][key] !== segment) notFound();
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

  // Services also carry a per-locale slug (brief section 22's own example:
  // .../dentistry <-> .../zahnmedizin) — doctors and blog slugs are the same
  // string in every locale, so only this content type needs translating.
  let translatedRest = restSegments;
  if (matchedKey === "services" && restSegments.length > 0) {
    const service = services.find((s) => s.slug[fromLocale] === restSegments[0]);
    if (service) translatedRest = [service.slug[toLocale], ...restSegments.slice(1)];
  }

  return localePath(toLocale, [translatedFirst, ...translatedRest].join("/"));
}
