import { Locale } from "@/types";
import { getDictionary } from "@/locales";
import { legalDocuments } from "@/data/demo/legal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const titleKeyMap = {
  privacy: "privacyTitle",
  cookies: "cookieTitle",
  terms: "termsTitle",
} as const;

export function LegalPage({
  locale,
  kind,
}: {
  locale: Locale;
  kind: "privacy" | "cookies" | "terms";
}) {
  const dict = getDictionary(locale);
  const doc = legalDocuments[kind];
  const title = dict.legalPage[titleKeyMap[kind]];

  return (
    <Section className="pt-32 sm:pt-40">
      <Container className="max-w-2xl">
        <h1 className="font-serif text-4xl text-foreground">{title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {dict.legalPage.lastUpdated}: {new Date(doc.updatedAt).toLocaleDateString(locale)}
        </p>
        <p className="mt-6 rounded-2xl bg-surface p-5 text-sm text-muted-foreground">
          {dict.legalPage.jurisdictionNotice}
        </p>

        <div className="mt-10 space-y-8">
          {doc.sections.map((section) => (
            <div key={section.heading[locale]}>
              <h2 className="font-serif text-xl text-foreground">{section.heading[locale]}</h2>
              <p className="mt-2 text-muted-foreground">{section.body[locale]}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
