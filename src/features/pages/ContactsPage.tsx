import { Phone, Mail, Clock, MapPin, Siren, Car } from "lucide-react";
import { Locale } from "@/types";
import { getDictionary } from "@/locales";
import { clinicConfig } from "@/config/clinic.config";
import { socialConfig } from "@/config/social.config";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/ui/FadeUp";
import { Map } from "@/components/ui/Map";
import { localPages } from "@/data/demo/localPages";
import { localePath } from "@/lib/routes";

export function ContactsPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  const rows = [
    { icon: MapPin, label: dict.contactsPage.addressLabel, value: clinicConfig.address },
    { icon: Phone, label: dict.contactsPage.phoneLabel, value: clinicConfig.phoneDisplay, href: `tel:${clinicConfig.phone}` },
    { icon: Mail, label: dict.contactsPage.emailLabel, value: clinicConfig.email, href: `mailto:${clinicConfig.email}` },
  ];

  return (
    <Section className="pt-32 sm:pt-40">
      <Container className="grid gap-14 lg:grid-cols-2">
        <FadeUp>
          <Heading as="h1">{dict.contactsPage.heading}</Heading>
          <p className="mt-4 text-muted-foreground">{dict.contactsPage.subheading}</p>

          <dl className="mt-8 space-y-5">
            {rows.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-3">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">{label}</dt>
                  {href ? (
                    <dd>
                      <a href={href} className="font-medium text-foreground hover:text-primary">
                        {value}
                      </a>
                    </dd>
                  ) : (
                    <dd className="font-medium text-foreground">{value}</dd>
                  )}
                </div>
              </div>
            ))}

            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">{dict.contactsPage.hoursLabel}</dt>
                <dd className="space-y-0.5">
                  {clinicConfig.openingHours.map((row) => (
                    <p key={row.days[locale]} className="text-sm font-medium text-foreground">
                      {row.days[locale]}: {row.hours}
                    </p>
                  ))}
                </dd>
              </div>
            </div>

            {clinicConfig.emergency.enabled ? (
              <div className="flex items-start gap-3">
                <Siren className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">{dict.contactsPage.emergencyLabel}</dt>
                  <dd>
                    <a href={`tel:${clinicConfig.emergency.phone}`} className="font-medium text-foreground hover:text-primary">
                      {clinicConfig.emergency.phone}
                    </a>
                    {clinicConfig.emergency.is24_7 ? (
                      <span className="ml-2 text-sm text-secondary">24/7</span>
                    ) : null}
                  </dd>
                </div>
              </div>
            ) : null}

            <div className="flex items-start gap-3">
              <Car className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">{dict.contactsPage.parkingLabel}</dt>
                <dd className="text-sm text-foreground">{dict.contactsPage.parkingText}</dd>
              </div>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span>{dict.contactsPage.socialLabel}:</span>
            {socialConfig.map((s) => (
              <a key={s.platform} href={s.url} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">
                {s.label}
              </a>
            ))}
          </div>

          <Button href={clinicConfig.mapsUrl} variant="outline" className="mt-8">
            {dict.common.directions}
          </Button>

          {locale === "en" ? (
            <div className="mt-10 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">Serving Boston</p>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                {Object.values(localPages).map((page) => (
                  <Link key={page.slug} href={`${localePath(locale)}/${page.slug}`} className="underline-offset-4 hover:underline">
                    {page.h1}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </FadeUp>

        <FadeUp delay={0.1}>
          <Map className="h-full min-h-[420px] w-full" />
        </FadeUp>
      </Container>
    </Section>
  );
}
