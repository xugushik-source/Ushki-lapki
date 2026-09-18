"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { LOCALES, Locale } from "@/types";
import { localeNames, localeFlags } from "@/config/i18n.config";
import { switchLocalePath } from "@/lib/routes";
import { cn } from "@/lib/cn";

export function LanguageSwitcher({
  locale,
  label,
  variant = "light",
  className,
}: {
  locale: Locale;
  label: string;
  variant?: "light" | "dark";
  className?: string;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={label}
        className={cn(
          "flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium transition-colors",
          variant === "light" ? "text-foreground hover:bg-surface" : "text-primary-foreground hover:bg-white/10",
        )}
      >
        <span aria-hidden="true">{localeFlags[locale]}</span>
        {locale.toUpperCase()}
      </button>
      {open ? (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 min-w-[160px] overflow-hidden rounded-2xl bg-surface py-2 shadow-[var(--shadow-soft)]"
        >
          {LOCALES.map((l) => (
            <li key={l}>
              <Link
                href={switchLocalePath(pathname, locale, l)}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 text-sm hover:bg-background",
                  l === locale ? "font-semibold text-primary" : "text-foreground",
                )}
              >
                <span aria-hidden="true">{localeFlags[l]}</span>
                {localeNames[l]}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
