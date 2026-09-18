import { activeMarket } from "@/config/market.config";

// Never hardcode $ / € / CHF in a component — always format through here so
// swapping ACTIVE_MARKET changes every price on the site at once.
export function formatPrice(amount: number, locale: string = activeMarket.numberFormatLocale) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: activeMarket.currency,
    maximumFractionDigits: amount % 1 === 0 ? 0 : 2,
  }).format(amount);
}

export function formatPriceFrom(amount: number, locale: string, fromWord: string) {
  return `${fromWord} ${formatPrice(amount, locale)}`;
}
