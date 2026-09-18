"use client";

import { useState, useSyncExternalStore } from "react";
import { Palette, X } from "lucide-react";
import { ThemeName, themeNames, ACTIVE_THEME } from "@/config/theme.config";
import { cn } from "@/lib/cn";

const THEME_STORAGE_KEY = "demo-theme";
const THEME_EVENT = "demo-theme-change";
const swatches: Record<ThemeName, string> = {
  forest: "#1f3d2e",
  sand: "#6b4f31",
  blue: "#1d4d4f",
  dark: "#14201a",
};

function subscribe(callback: () => void) {
  window.addEventListener(THEME_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(THEME_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): ThemeName {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY) as ThemeName | null;
    return stored && stored in themeNames ? stored : ACTIVE_THEME;
  } catch {
    return ACTIVE_THEME;
  }
}

function getServerSnapshot(): ThemeName {
  return ACTIVE_THEME;
}

// Sales-demo tool only — lets Order Profit flip through the theme presets
// live in front of a client without a redeploy. A real clinic site ships
// with ACTIVE_THEME fixed in theme.config.ts and no visitor-facing switcher.
export function ThemeDemoSwitcher() {
  const [open, setOpen] = useState(false);
  // useSyncExternalStore, not useState+useEffect, for the same reason as
  // useCookieConsent: this reads an external store (localStorage) that can
  // also change from outside React (the anti-flash script, another tab).
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function apply(next: ThemeName) {
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // ignore
    }
    window.dispatchEvent(new Event(THEME_EVENT));
  }

  return (
    <div className="fixed right-4 top-20 z-40 hidden lg:block">
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Preview color themes (demo tool)"
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-surface text-foreground shadow-[var(--shadow-soft)] ring-1 ring-border"
        >
          {open ? <X className="h-4 w-4" /> : <Palette className="h-4 w-4" />}
        </button>

        {open ? (
          <div className="absolute right-0 top-14 w-56 rounded-2xl bg-surface p-4 shadow-[var(--shadow-soft)] ring-1 ring-border">
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
              Demo tool — theme preview
            </p>
            <p className="mb-3 text-xs text-muted-foreground">
              Not part of the live site — for showing palette options.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {(Object.keys(themeNames) as ThemeName[]).map((name) => (
                <button
                  key={name}
                  onClick={() => apply(name)}
                  className={cn(
                    "flex items-center gap-2 rounded-xl border px-2.5 py-2 text-xs font-medium transition-colors",
                    theme === name ? "border-primary" : "border-border",
                  )}
                >
                  <span
                    className="h-4 w-4 shrink-0 rounded-full ring-1 ring-black/10"
                    style={{ backgroundColor: swatches[name] }}
                  />
                  {themeNames[name]}
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
