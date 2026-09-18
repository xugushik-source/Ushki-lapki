import type { Metadata } from "next";
import { resolveLocale } from "@/lib/routes";
import { getDictionary } from "@/locales";
import { LegalPage } from "@/features/pages/LegalPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const dict = getDictionary(locale);
  return { title: dict.legalPage.privacyTitle };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  return <LegalPage locale={locale} kind="privacy" />;
}
