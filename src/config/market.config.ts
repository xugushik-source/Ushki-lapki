import { MarketCode, MarketConfig } from "@/types";
import { usMarket } from "./markets/us";
import { deMarket } from "./markets/de";
import { frMarket } from "./markets/fr";
import { chMarket } from "./markets/ch";
import { atMarket } from "./markets/at";
import { itMarket } from "./markets/it";

export const markets: Record<MarketCode, MarketConfig> = {
  us: usMarket,
  de: deMarket,
  fr: frMarket,
  ch: chMarket,
  at: atMarket,
  it: itMarket,
};

// The single switch a reseller flips per clinic deployment.
// Everything currency/number-format related reads from here — never hardcoded in components.
export const ACTIVE_MARKET: MarketCode = "us";

export const activeMarket = markets[ACTIVE_MARKET];
