import { Locale } from "@/types";
import { getDictionary } from "@/locales";
import { demoFaq } from "@/data/demo/faq";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { FadeUp } from "@/components/ui/FadeUp";
import { Accordion } from "@/components/ui/Accordion";

export function FaqPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: demoFaq.map((item) => ({
      "@type": "Question",
      name: item.question[locale],
      acceptedAnswer: { "@type": "Answer", text: item.answer[locale] },
    })),
  };

  return (
    <Section className="pt-32 sm:pt-40">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Container className="max-w-2xl">
        <FadeUp>
          <Heading as="h1">{dict.faqPage.heading}</Heading>
          <p className="mt-4 text-muted-foreground">{dict.faqPage.subheading}</p>
        </FadeUp>
        <div className="mt-10">
          <Accordion
            items={demoFaq.map((item) => ({
              question: item.question[locale],
              answer: item.answer[locale],
            }))}
          />
        </div>
      </Container>
    </Section>
  );
}
