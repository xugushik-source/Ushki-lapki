"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { Locale } from "@/types";
import { Dictionary } from "@/locales";
import { clinicConfig } from "@/config/clinic.config";
import { primaryNav } from "@/config/navigation.config";
import { routePath, localePath } from "@/lib/routes";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenuButton } from "./MobileMenu";
import { cn } from "@/lib/cn";

const navLabelMap = (dict: Dictionary) => ({
  services: dict.nav.services,
  doctors: dict.nav.doctors,
  about: dict.nav.about,
  prices: dict.nav.prices,
  blog: dict.nav.petCare,
  contacts: dict.nav.contacts,
});

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const labels = navLabelMap(dict);
  // Only the homepage hero gets a transparent header (brief section 17) —
  // every other page starts already-scrolled, so it opts out automatically.
  const isHomepage = pathname === localePath(locale);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isTransparent = isHomepage && !scrolled;

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all duration-500",
        isTransparent
          ? "bg-transparent"
          : "border-b border-border/70 bg-background/80 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
        <Link href={localePath(locale)} className="flex items-center gap-2">
          <Image
            src={clinicConfig.logoMark[locale]}
            alt={`${clinicConfig.name[locale]} — ${clinicConfig.legalSuffix[locale]}`}
            width={56}
            height={56}
            className="h-14 w-14 rounded-full object-contain"
            priority
          />
          <span
            className={cn(
              "hidden font-serif text-lg sm:inline",
              isTransparent ? "text-white" : "text-foreground",
            )}
          >
            {clinicConfig.name[locale]}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link
              key={item.routeKey}
              href={routePath(locale, item.routeKey)}
              className={cn(
                "relative text-sm font-medium after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full",
                isTransparent ? "text-white" : "text-foreground",
              )}
            >
              {labels[item.routeKey as keyof typeof labels]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher
            locale={locale}
            label={dict.common.language}
            variant={isTransparent ? "dark" : "light"}
            className="hidden lg:flex"
          />
          <a
            href={`tel:${clinicConfig.phone}`}
            aria-label={clinicConfig.phoneDisplay}
            className={cn(
              "flex items-center gap-1.5 text-sm font-medium",
              isTransparent ? "text-white" : "text-foreground",
            )}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">{clinicConfig.phoneDisplay}</span>
          </a>
          <Button href={routePath(locale, "booking")} size="md" className="hidden sm:inline-flex">
            {dict.common.bookAppointment}
          </Button>
          <MobileMenuButton
            locale={locale}
            dict={dict}
            isTransparent={isTransparent}
          />
        </div>
      </div>
    </header>
  );
}
