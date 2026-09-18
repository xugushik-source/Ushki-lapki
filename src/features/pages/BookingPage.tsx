import { Locale } from "@/types";
import { getDictionary } from "@/locales";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { BookingWizard } from "@/components/booking/BookingWizard";

export function BookingPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <Section>
      <Container>
        <div className="mb-12 text-center">
          <h1 className="font-serif text-4xl text-foreground sm:text-5xl">{dict.booking.pageTitle}</h1>
          <p className="mt-3 text-muted-foreground">{dict.booking.pageSubtitle}</p>
        </div>
        <BookingWizard locale={locale} dict={dict} />
      </Container>
    </Section>
  );
}
