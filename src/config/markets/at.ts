import { MarketConfig } from "@/types";

export const atMarket: MarketConfig = {
  code: "at",
  countryName: {
    en: "Austria",
    de: "Österreich",
    fr: "Autriche",
    it: "Austria",
    ru: "Австрия",
  },
  currency: "EUR",
  numberFormatLocale: "de-AT",
  locales: ["de", "en"],
  defaultLocale: "de",
  usesWhatsApp: true,
};
