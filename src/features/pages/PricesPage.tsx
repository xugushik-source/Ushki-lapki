import { Locale } from "@/types";
import { getDictionary } from "@/locales";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { PricesTable } from "@/components/prices/PricesTable";

export function PricesPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <Section className="pt-32 sm:pt-40">
      <Container className="max-w-3xl">
        <Heading as="h1">{dict.pricesPage.heading}</Heading>
        <p className="mt-4 text-muted-foreground">{dict.pricesPage.subheading}</p>
        <div className="mt-10">
          <PricesTable locale={locale} dict={dict} />
        </div>
      </Container>
    </Section>
  );
}
