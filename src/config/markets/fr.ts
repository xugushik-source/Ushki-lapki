import { MarketConfig } from "@/types";

export const frMarket: MarketConfig = {
  code: "fr",
  countryName: {
    en: "France",
    de: "Frankreich",
    fr: "France",
    it: "Francia",
    ru: "Франция",
  },
  currency: "EUR",
  numberFormatLocale: "fr-FR",
  locales: ["fr", "en"],
  defaultLocale: "fr",
  usesWhatsApp: true,
};
