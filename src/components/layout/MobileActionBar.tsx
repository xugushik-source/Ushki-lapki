import { Phone, CalendarCheck, Siren, MessageCircle } from "lucide-react";
import { Locale } from "@/types";
import { Dictionary } from "@/locales";
import { clinicConfig } from "@/config/clinic.config";
import { routePath } from "@/lib/routes";

export function MobileActionBar({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const items = clinicConfig.whatsappEnabled
    ? [
        { href: `tel:${clinicConfig.phone}`, icon: Phone, label: dict.mobileActionBar.call },
        {
          href: `https://wa.me/${clinicConfig.whatsappNumber}`,
          icon: MessageCircle,
          label: dict.mobileActionBar.whatsapp,
        },
        { href: routePath(locale, "booking"), icon: CalendarCheck, label: dict.mobileActionBar.book },
      ]
    : [
        { href: `tel:${clinicConfig.phone}`, icon: Phone, label: dict.mobileActionBar.call },
        { href: routePath(locale, "booking"), icon: CalendarCheck, label: dict.mobileActionBar.book },
        {
          href: `tel:${clinicConfig.emergency.phone}`,
          icon: Siren,
          label: dict.mobileActionBar.emergency,
        },
      ];

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex border-t border-border bg-surface/95 backdrop-blur-md lg:hidden">
      {items.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          className="flex flex-1 flex-col items-center gap-1 py-2.5 text-xs font-medium text-foreground"
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
          {label}
        </a>
      ))}
    </div>
  );
}
