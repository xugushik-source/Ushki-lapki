import Image from "next/image";
import { Locale } from "@/types";
import { getDictionary } from "@/locales";
import { images } from "@/config/images.config";
import { routePath } from "@/lib/routes";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/ui/FadeUp";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { StorySection } from "@/components/sections/StorySection";
import { DoctorsPreview } from "@/components/sections/DoctorsPreview";

export function AboutPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <>
      <Section className="pt-32 sm:pt-40">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <FadeUp>
            <Heading as="h1" eyebrow={dict.aboutPage.heading}>
              {dict.aboutPage.philosophyHeading}
            </Heading>
            <p className="mt-5 text-muted-foreground">{dict.aboutPage.philosophyBody}</p>
          </FadeUp>
          <ImageReveal
            src={images.aboutPhilosophy}
            alt={dict.aboutPage.philosophyHeading}
            className="aspect-4/5 rounded-[var(--radius)]"
          />
        </Container>
      </Section>

      <Section tone="surface">
        <Container className="grid gap-12 sm:grid-cols-2">
          <FadeUp>
            <Heading as="h2">{dict.aboutPage.clinicHeading}</Heading>
            <p className="mt-4 text-muted-foreground">{dict.aboutPage.clinicBody}</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Heading as="h2">{dict.aboutPage.technologyHeading}</Heading>
            <p className="mt-4 text-muted-foreground">{dict.aboutPage.technologyBody}</p>
          </FadeUp>
        </Container>
      </Section>

      <Section>
        <Container>
          <FadeUp className="max-w-xl">
            <Heading>{dict.aboutPage.valuesHeading}</Heading>
          </FadeUp>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {dict.aboutPage.values.map((value) => (
              <FadeUp key={value.title}>
                <div className="rounded-[var(--radius)] bg-surface p-6 shadow-[var(--shadow-lift)]">
                  <h3 className="font-serif text-lg text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </Section>

      <StorySection dict={dict} />

      <DoctorsPreview locale={locale} dict={dict} />

      <Section tone="surface">
        <Container>
          <FadeUp className="max-w-xl">
            <Heading>{dict.aboutPage.teamHeading}</Heading>
            <p className="mt-4 text-muted-foreground">{dict.aboutPage.teamBody}</p>
          </FadeUp>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {images.aboutGallery.map((src, i) => (
              <div key={src} className="relative aspect-square overflow-hidden rounded-2xl">
                <Image src={src} alt="" fill sizes="25vw" className="object-cover" loading={i === 0 ? "eager" : "lazy"} />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="primary">
        <Container className="text-center">
          <FadeUp>
            <h2 className="font-serif text-3xl text-primary-foreground sm:text-4xl">{dict.aboutPage.ctaHeading}</h2>
            <p className="mx-auto mt-4 max-w-lg text-primary-foreground/80">{dict.aboutPage.ctaBody}</p>
            <Button href={routePath(locale, "booking")} variant="secondary" size="lg" className="mt-8">
              {dict.common.bookAppointment}
            </Button>
          </FadeUp>
        </Container>
      </Section>
    </>
  );
}
