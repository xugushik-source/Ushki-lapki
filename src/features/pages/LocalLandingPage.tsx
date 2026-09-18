import { notFound } from "next/navigation";
import { Phone, MapPin } from "lucide-react";
import { Locale } from "@/types";
import { getDictionary } from "@/locales";
import { localPages } from "@/data/demo/localPages";
import { clinicConfig } from "@/config/clinic.config";
import { localePath } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/ui/FadeUp";
import { Map } from "@/components/ui/Map";

export function LocalLandingPage({ locale, slug }: { locale: Locale; slug: string }) {
  const dict = getDictionary(locale);
  const page = localPages[slug];
  if (!page) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": absoluteUrl(`/${locale}/${slug}`),
    name: `${clinicConfig.name[locale]} ${clinicConfig.legalSuffix[locale]}`,
    telephone: clinicConfig.phone,
    address: { "@type": "PostalAddress", streetAddress: clinicConfig.address },
    geo: {
      "@type": "GeoCoordinates",
      latitude: clinicConfig.coordinates.lat,
      longitude: clinicConfig.coordinates.lng,
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: localePath(locale) },
      { "@type": "ListItem", position: 2, name: page.h1, item: absoluteUrl(`/${locale}/${slug}`) },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Section className="pt-32 sm:pt-40">
        <Container className="max-w-3xl">
          <FadeUp>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">{page.eyebrow}</p>
            <h1 className="mt-2 font-serif text-4xl text-foreground sm:text-5xl">{page.h1}</h1>
            <p className="mt-5 text-lg text-muted-foreground">{page.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={`tel:${clinicConfig.phone}`}>
                <Phone className="h-4 w-4" aria-hidden="true" />
                {page.ctaLabel}
              </Button>
              <Button href={clinicConfig.mapsUrl} variant="outline">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {dict.common.directions}
              </Button>
            </div>
          </FadeUp>
        </Container>
      </Section>

      <Section tone="surface">
        <Container className="grid gap-16 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-10">
            {page.sections.map((section) => (
              <FadeUp key={section.heading}>
                <h2 className="font-serif text-2xl text-foreground">{section.heading}</h2>
                <p className="mt-3 text-muted-foreground">{section.body}</p>
              </FadeUp>
            ))}

            <FadeUp>
              <h2 className="font-serif text-2xl text-foreground">Neighborhoods we serve</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {page.neighborhoods.map((n) => (
                  <span key={n} className="rounded-full border border-border px-4 py-1.5 text-sm text-foreground">
                    {n}
                  </span>
                ))}
              </div>
            </FadeUp>
          </div>

          <FadeUp>
            <Map className="h-full min-h-[320px] w-full" />
            <div className="mt-6 rounded-[var(--radius)] bg-surface p-6 shadow-[var(--shadow-lift)]">
              <p className="text-sm font-medium text-foreground">{clinicConfig.address}</p>
              <div className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                {clinicConfig.openingHours.map((row) => (
                  <p key={row.days[locale]}>
                    {row.days[locale]}: {row.hours}
                  </p>
                ))}
              </div>
            </div>
          </FadeUp>
        </Container>
      </Section>
    </>
  );
}
