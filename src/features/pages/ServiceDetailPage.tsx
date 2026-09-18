import { notFound } from "next/navigation";
import Image from "next/image";
import { Locale } from "@/types";
import { getDictionary } from "@/locales";
import { services } from "@/config/services.config";
import { doctors } from "@/config/doctors.config";
import { clinicConfig } from "@/config/clinic.config";
import { images } from "@/config/images.config";
import { activeMarket } from "@/config/market.config";
import { formatPriceFrom } from "@/lib/currency";
import { routePath, localePath } from "@/lib/routes";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/ui/FadeUp";
import { Accordion } from "@/components/ui/Accordion";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { DoctorCard } from "@/components/cards/DoctorCard";

export function ServiceDetailPage({ locale, slug }: { locale: Locale; slug: string }) {
  const dict = getDictionary(locale);
  const service = services.find((s) => s.slug[locale] === slug);
  if (!service) notFound();

  const serviceDoctors = doctors.filter((d) => service.doctorSlugs.includes(d.slug));
  const beforeAfterKey = service.slug.en as keyof typeof images.beforeAfter;
  const beforeAfterImages = images.beforeAfter[beforeAfterKey];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name[locale],
    description: service.shortDescription[locale],
    provider: {
      "@type": "VeterinaryCare",
      name: `${clinicConfig.name[locale]} ${clinicConfig.legalSuffix[locale]}`,
    },
    areaServed: clinicConfig.addressCountry[locale],
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: localePath(locale) },
      {
        "@type": "ListItem",
        position: 2,
        name: dict.nav.services,
        item: routePath(locale, "services"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.name[locale],
        item: routePath(locale, "services", slug),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <section className="relative flex min-h-[50vh] items-end overflow-hidden bg-primary pt-32">
        <Image
          src={service.image}
          alt={service.name[locale]}
          fill
          sizes="100vw"
          className="object-cover opacity-40"
          style={{ objectPosition: images.serviceHeroPosition(service.slug.en) }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent" />
        <Container className="relative z-10 pb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">{dict.nav.services}</p>
          <h1 className="max-w-2xl font-serif text-4xl text-white sm:text-5xl">{service.name[locale]}</h1>
          <p className="mt-4 max-w-xl text-white/85">{service.shortDescription[locale]}</p>
        </Container>
      </section>

      <Section>
        <Container className="grid gap-16 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-14">
            <FadeUp>
              <Heading as="h2">{dict.serviceDetail.overviewHeading}</Heading>
              <p className="mt-4 text-muted-foreground">{service.overview[locale]}</p>
            </FadeUp>

            <FadeUp>
              <Heading as="h3">{dict.serviceDetail.whenToVisitHeading}</Heading>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {service.whenToVisit[locale].map((item) => (
                  <li key={item} className="rounded-xl bg-surface px-4 py-3 text-sm text-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </FadeUp>

            {service.symptoms ? (
              <FadeUp>
                <Heading as="h3">{dict.serviceDetail.symptomsHeading}</Heading>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
                  {service.symptoms[locale].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </FadeUp>
            ) : null}

            <FadeUp>
              <Heading as="h3">{dict.serviceDetail.treatmentHeading}</Heading>
              <p className="mt-4 text-muted-foreground">{service.treatment[locale]}</p>
            </FadeUp>

            {service.technology ? (
              <FadeUp>
                <Heading as="h3">{dict.serviceDetail.technologyHeading}</Heading>
                <p className="mt-4 text-muted-foreground">{service.technology[locale]}</p>
              </FadeUp>
            ) : null}

            {beforeAfterImages ? (
              <FadeUp>
                <BeforeAfter
                  before={beforeAfterImages.before}
                  after={beforeAfterImages.after}
                  beforeLabel="Before"
                  afterLabel="After"
                />
              </FadeUp>
            ) : null}

            {serviceDoctors.length ? (
              <FadeUp>
                <Heading as="h3">{dict.serviceDetail.doctorsHeading}</Heading>
                <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {serviceDoctors.map((doctor) => (
                    <DoctorCard key={doctor.slug} doctor={doctor} locale={locale} viewProfileLabel={dict.common.viewProfile} />
                  ))}
                </div>
              </FadeUp>
            ) : null}

            <FadeUp>
              <Heading as="h3">{dict.serviceDetail.faqHeading}</Heading>
              <div className="mt-6">
                <Accordion
                  items={service.faq.map((item) => ({
                    question: item.question[locale],
                    answer: item.answer[locale],
                  }))}
                />
              </div>
            </FadeUp>
          </div>

          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <div className="rounded-[var(--radius)] bg-primary p-8 text-primary-foreground shadow-[var(--shadow-soft)]">
              {service.priceFrom ? (
                <p className="text-sm text-primary-foreground/70">
                  {formatPriceFrom(service.priceFrom, activeMarket.numberFormatLocale, dict.common.from)}
                </p>
              ) : null}
              <h3 className="mt-2 font-serif text-2xl">{dict.serviceDetail.ctaHeading}</h3>
              <p className="mt-2 text-sm text-primary-foreground/80">{dict.serviceDetail.ctaBody}</p>
              <Button href={routePath(locale, "booking")} variant="secondary" className="mt-6 w-full">
                {dict.common.bookAppointment}
              </Button>
            </div>
          </aside>
        </Container>
      </Section>
    </>
  );
}
