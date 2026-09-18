import { Locale } from "@/types";
import { Dictionary } from "@/locales";
import { services } from "@/config/services.config";
import { routePath } from "@/lib/routes";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/ui/FadeUp";
import { ServiceCard } from "@/components/cards/ServiceCard";

export function ServicesBento({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const featured = services.slice(0, 8);

  return (
    <Section id="services">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <FadeUp>
            <Heading eyebrow={dict.nav.services}>{dict.servicesSection.heading}</Heading>
            <p className="mt-4 max-w-lg text-muted-foreground">{dict.servicesSection.subheading}</p>
          </FadeUp>
          <Button href={routePath(locale, "services")} variant="outline" className="shrink-0">
            {dict.servicesSection.viewAll}
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:auto-rows-[220px]">
          {featured.map((service) => (
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
