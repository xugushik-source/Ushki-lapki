"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { Globe } from "lucide-react";
import { LOCALES, Locale } from "@/types";
import { localeNames } from "@/config/i18n.config";
import { switchLocalePath } from "@/lib/routes";
import { cn } from "@/lib/cn";

export function LanguageSwitcher({
  locale,
  label,
  variant = "light",
}: {
  locale: Locale;
  label: string;
  variant?: "light" | "dark";
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
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
        <Globe className="h-4 w-4" aria-hidden="true" />
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
                  "block px-4 py-2 text-sm hover:bg-background",
                  l === locale ? "font-semibold text-primary" : "text-foreground",
                )}
              >
                {localeNames[l]}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
