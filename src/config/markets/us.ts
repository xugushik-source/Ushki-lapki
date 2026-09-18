import { MarketConfig } from "@/types";

export const usMarket: MarketConfig = {
  code: "us",
  countryName: {
    en: "United States",
    de: "Vereinigte Staaten",
    fr: "États-Unis",
    it: "Stati Uniti",
    ru: "США",
  },
  currency: "USD",
  numberFormatLocale: "en-US",
  locales: ["en", "ru"],
  defaultLocale: "en",
  usesWhatsApp: true,
};
