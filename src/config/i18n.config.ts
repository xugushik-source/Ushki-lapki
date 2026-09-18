export { LOCALES, DEFAULT_LOCALE } from "@/types";
export type { Locale } from "@/types";

export const localeNames: Record<string, string> = {
  en: "English",
  de: "Deutsch",
  fr: "Français",
  it: "Italiano",
  ru: "Русский",
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
