"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Locale } from "@/types";
import { Dictionary } from "@/locales";
import { services } from "@/config/services.config";
import { activeMarket } from "@/config/market.config";
import { formatPrice } from "@/lib/currency";

export function PricesTable({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const categories = useMemo(() => Array.from(new Set(services.map((s) => s.category))), []);

  const filtered = services.filter((s) => {
    const matchesQuery = s.name[locale].toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === "all" || s.category === category;
    return matchesQuery && matchesCategory;
  });

  return (
    <div>
      <div className="mb-8 flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={dict.pricesPage.searchPlaceholder}
            className="w-full rounded-full border border-border bg-surface py-3 pl-11 pr-4 text-foreground"
          />
        </div>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-full border border-border bg-surface px-4 py-3 text-foreground"
        >
          <option value="all">{dict.pricesPage.categoryAll}</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-hidden rounded-[var(--radius)] bg-surface shadow-[var(--shadow-lift)]">
        {filtered.map((service) => (
          <div
            key={service.slug.en}
            className="flex items-center justify-between gap-4 border-b border-border px-6 py-4 last:border-0"
          >
            <div>
              <p className="font-medium text-foreground">{service.name[locale]}</p>
              {service.shortDescription[locale] ? (
                <p className="mt-0.5 text-sm text-muted-foreground">{service.shortDescription[locale]}</p>
              ) : null}
            </div>
            <p className="shrink-0 font-serif text-lg text-primary">
              {dict.common.from} {formatPrice(service.priceFrom ?? 0, activeMarket.numberFormatLocale)}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">{dict.pricesPage.disclaimer}</p>
    </div>
  );
}
