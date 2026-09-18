import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Locale, LOCALES } from "@/types";
import { Dictionary } from "@/locales";
import { clinicConfig } from "@/config/clinic.config";
import { socialConfig } from "@/config/social.config";
import { primaryNav, footerLegalRouteKeys } from "@/config/navigation.config";
import { routePath, localePath } from "@/lib/routes";
import { Container } from "@/components/ui/Container";

const navLabelMap = (dict: Dictionary) => ({
  services: dict.nav.services,
  doctors: dict.nav.doctors,
  about: dict.nav.about,
  prices: dict.nav.prices,
  blog: dict.nav.petCare,
  contacts: dict.nav.contacts,
});

const legalLabelMap = (dict: Dictionary) => ({
  legalPrivacy: dict.legalPage.privacyTitle,
  legalCookies: dict.legalPage.cookieTitle,
  legalTerms: dict.legalPage.termsTitle,
});

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const labels = navLabelMap(dict);
  const legalLabels = legalLabelMap(dict);

  return (
    <footer className="bg-primary pb-28 pt-16 text-primary-foreground lg:pb-16">
      <Container>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href={localePath(locale)} className="flex items-center gap-2">
              <Image
                src={clinicConfig.logo[locale]}
                alt={clinicConfig.name[locale]}
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-contain"
              />
              <span className="font-serif text-xl">{clinicConfig.name[locale]}</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-primary-foreground/75">{dict.footer.description}</p>
            <div className="mt-6 flex gap-4 text-sm text-primary-foreground/75">
              {socialConfig.map((s) => (
                <a key={s.platform} href={s.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">
              {dict.footer.quickLinksHeading}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/80">
              {primaryNav.map((item) => (
                <li key={item.routeKey}>
                  <Link href={routePath(locale, item.routeKey)} className="hover:text-accent">
                    {labels[item.routeKey as keyof typeof labels]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">
              {dict.footer.contactsHeading}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                {clinicConfig.address}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                <a href={`tel:${clinicConfig.phone}`} className="hover:text-accent">
                  {clinicConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                <a href={`mailto:${clinicConfig.email}`} className="hover:text-accent">
                  {clinicConfig.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">
              {dict.footer.hoursHeading}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/80">
              {clinicConfig.openingHours.map((row) => (
                <li key={row.days[locale]} className="flex justify-between gap-4">
                  <span>{row.days[locale]}</span>
                  <span>{row.hours}</span>
                </li>
              ))}
            </ul>
            <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-accent">
              {dict.footer.languageHeading}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2 text-sm text-primary-foreground/80">
              {LOCALES.map((l) => (
                <li key={l}>
                  <Link
                    href={localePath(l)}
                    className="rounded-full border border-white/20 px-3 py-1 hover:border-accent hover:text-accent"
                  >
                    {l.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {clinicConfig.name[locale]} {clinicConfig.legalSuffix[locale]}. {dict.footer.rights}
          </p>
          <div className="flex gap-4">
            {footerLegalRouteKeys.map((key) => (
              <Link key={key} href={routePath(locale, key)} className="hover:text-accent">
                {legalLabels[key as keyof typeof legalLabels]}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
