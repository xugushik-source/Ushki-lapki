import type { Metadata } from "next";
import { getDictionary } from "@/locales";
import { resolveLocale } from "@/lib/routes";
import { clinicConfig } from "@/config/clinic.config";
import { Hero } from "@/components/sections/Hero";
import { TrustNumbers } from "@/components/sections/TrustNumbers";
import { ServicesBento } from "@/components/sections/ServicesBento";
import { WhyUs } from "@/components/sections/WhyUs";
import { StorySection } from "@/components/sections/StorySection";
import { DoctorsPreview } from "@/components/sections/DoctorsPreview";
import { PetSelector } from "@/components/sections/PetSelector";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { EmergencySection } from "@/components/sections/EmergencySection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const dict = getDictionary(locale);

  return {
    title: `${clinicConfig.name[locale]} — ${clinicConfig.legalSuffix[locale]}`,
    description: dict.hero.subtitle,
    alternates: {
      canonical: `/${locale}`,
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = resolveLocale((await params).locale);
  const dict = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <TrustNumbers dict={dict} />
      <ServicesBento locale={locale} dict={dict} />
      <WhyUs dict={dict} />
      <StorySection dict={dict} />
      <DoctorsPreview locale={locale} dict={dict} />
      <PetSelector locale={locale} dict={dict} />
      <ReviewsSection locale={locale} dict={dict} />
      <EmergencySection locale={locale} dict={dict} />
    </>
  );
}
