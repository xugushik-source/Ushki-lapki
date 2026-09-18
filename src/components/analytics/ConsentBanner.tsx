"use client";

import { Locale } from "@/types";
import { Dictionary } from "@/locales";
import { Button } from "@/components/ui/Button";
import { routePath } from "@/lib/routes";
import { useCookieConsent, setCookieConsent } from "@/lib/cookieConsent";

export function ConsentBanner({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const consent = useCookieConsent();

  if (consent !== null) return null;

  return (
    // bottom-20 clears the mobile action bar (fixed, lg:hidden) below lg;
    // lg:bottom-4 repositions it once that bar is gone.
    <div className="fixed inset-x-0 bottom-20 z-50 border-t border-border bg-surface p-5 shadow-[var(--shadow-soft)] lg:bottom-4 lg:left-4 lg:right-auto lg:max-w-sm lg:rounded-[var(--radius)] lg:border">
      <p className="text-sm text-muted-foreground">
        {dict.common.cookieBannerText}{" "}
        <a href={routePath(locale, "legalCookies")} className="font-medium underline">
          {dict.legalPage.cookieTitle}
        </a>
      </p>
      <div className="mt-3 flex gap-2">
        <Button size="md" onClick={() => setCookieConsent("accepted")}>
          {dict.common.cookieAccept}
        </Button>
        <Button size="md" variant="outline" onClick={() => setCookieConsent("declined")}>
          {dict.common.cookieDecline}
        </Button>
      </div>
    </div>
  );
}
