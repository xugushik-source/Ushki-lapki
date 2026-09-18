"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Locale } from "@/types";
import { Dictionary } from "@/locales";
import { clinicConfig } from "@/config/clinic.config";
import { socialConfig } from "@/config/social.config";
import { primaryNav } from "@/config/navigation.config";
import { routePath } from "@/lib/routes";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { cn } from "@/lib/cn";

const navLabelMap = (dict: Dictionary) => ({
  services: dict.nav.services,
  doctors: dict.nav.doctors,
  about: dict.nav.about,
  prices: dict.nav.prices,
  blog: dict.nav.petCare,
  contacts: dict.nav.contacts,
});

export function MobileMenuButton({
  locale,
  dict,
  isTransparent,
}: {
  locale: Locale;
  dict: Dictionary;
  isTransparent: boolean;
}) {
  const [open, setOpen] = useState(false);
  const labels = navLabelMap(dict);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={dict.common.menu}
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full lg:hidden",
          isTransparent ? "text-white" : "text-foreground",
        )}
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex flex-col bg-primary text-primary-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-center justify-between px-5 py-4">
              <span className="font-serif text-lg">{clinicConfig.name[locale]}</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={dict.common.close}
                className="flex h-10 w-10 items-center justify-center rounded-full"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <motion.nav
              aria-label="Mobile"
              className="flex flex-1 flex-col gap-1 overflow-y-auto px-6 py-4"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06 } } }}
            >
              {primaryNav.map((item) => (
                <motion.div
                  key={item.routeKey}
                  variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                >
                  <Link
                    href={routePath(locale, item.routeKey)}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/10 py-4 font-serif text-2xl"
                  >
                    {labels[item.routeKey as keyof typeof labels]}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            <div className="flex flex-col gap-4 border-t border-white/10 px-6 py-6">
              <Link
                href={routePath(locale, "booking")}
                onClick={() => setOpen(false)}
                className="rounded-full bg-accent px-6 py-3 text-center font-medium text-primary"
              >
                {dict.common.bookAppointment}
              </Link>
              <a
                href={`tel:${clinicConfig.emergency.phone}`}
                className="rounded-full border border-white/30 px-6 py-3 text-center font-medium"
              >
                {dict.common.emergencyCare}
              </a>
              <div className="flex items-center justify-between text-sm text-primary-foreground/80">
                <a href={`tel:${clinicConfig.phone}`} className="flex items-center gap-2">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {clinicConfig.phoneDisplay}
                </a>
                <LanguageSwitcher locale={locale} label={dict.common.language} variant="dark" />
              </div>
              <p className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                {clinicConfig.address}
              </p>
              <div className="flex gap-4 text-sm text-primary-foreground/70">
                {socialConfig.map((s) => (
                  <a key={s.platform} href={s.url} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
