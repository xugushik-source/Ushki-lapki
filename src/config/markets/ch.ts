import { MarketConfig } from "@/types";

// Switzerland is deliberately its own market, not a German alias:
// four working languages and CHF, never EUR.
export const chMarket: MarketConfig = {
  code: "ch",
  countryName: {
    en: "Switzerland",
    de: "Schweiz",
    fr: "Suisse",
    it: "Svizzera",
    ru: "Швейцария",
  },
  currency: "CHF",
  numberFormatLocale: "de-CH",
  locales: ["de", "fr", "it", "en"],
  defaultLocale: "de",
  usesWhatsApp: true,
};
