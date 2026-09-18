export { LOCALES, DEFAULT_LOCALE } from "@/types";
export type { Locale } from "@/types";

export const localeNames: Record<string, string> = {
  en: "English",
  de: "Deutsch",
  fr: "Français",
  it: "Italiano",
  ru: "Русский",
};

// Visual hint that the site is multilingual at a glance — paired with the
// language name/code everywhere the switcher renders.
export const localeFlags: Record<string, string> = {
  en: "🇺🇸",
  de: "🇩🇪",
  fr: "🇫🇷",
  it: "🇮🇹",
  ru: "🇷🇺",
};

// Reserved for future markets (section 4 of the brief) — adding one of these
// only needs a dictionary + an entry here + a routeSegments row, no component changes.
export const futureLocales = [
  "es",
  "pt",
  "nl",
  "pl",
  "ka",
  "hy",
] as const;
