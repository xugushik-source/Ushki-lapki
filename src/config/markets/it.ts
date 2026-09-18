import { MarketConfig } from "@/types";

export const itMarket: MarketConfig = {
  code: "it",
  countryName: {
    en: "Italy",
    de: "Italien",
    fr: "Italie",
    it: "Italia",
    ru: "Италия",
  },
  currency: "EUR",
  numberFormatLocale: "it-IT",
  locales: ["it", "en"],
  defaultLocale: "it",
  usesWhatsApp: true,
};
