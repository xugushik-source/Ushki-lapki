import { MarketConfig } from "@/types";

export const deMarket: MarketConfig = {
  code: "de",
  countryName: {
    en: "Germany",
    de: "Deutschland",
    fr: "Allemagne",
    it: "Germania",
    ru: "Германия",
  },
  currency: "EUR",
  numberFormatLocale: "de-DE",
  locales: ["de", "en"],
  defaultLocale: "de",
  usesWhatsApp: true,
};
