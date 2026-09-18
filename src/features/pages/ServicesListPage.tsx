import { Locale } from "@/types";
import { getDictionary } from "@/locales";
import { services } from "@/config/services.config";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { ServiceCard } from "@/components/cards/ServiceCard";

export function ServicesListPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <Section className="pt-32 sm:pt-40">
      <Container>
        <Heading as="h1" eyebrow={dict.nav.services}>
          {dict.servicesListPage.heading}
        </Heading>
        <p className="mt-4 max-w-xl text-muted-foreground">{dict.servicesListPage.subheading}</p>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:auto-rows-[220px]">
          {services.map((service) => (
            <ServiceCard
              key={service.slug[locale]}
              service={service}
              locale={locale}
              cardCta={dict.servicesSection.cardCta}
              cursorLabel={dict.common.view}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
