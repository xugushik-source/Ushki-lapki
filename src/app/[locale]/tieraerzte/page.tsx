import type { Metadata } from "next";
import { resolveLocale, assertRouteSegment, routePath } from "@/lib/routes";
import { buildAlternates, absoluteUrl } from "@/lib/seo";
import { getDictionary } from "@/locales";
import { DoctorsListPage } from "@/features/pages/DoctorsListPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const dict = getDictionary(locale);
  return {
    title: dict.doctorsListPage.heading,
    description: dict.doctorsListPage.subheading,
    alternates: { canonical: absoluteUrl(routePath(locale, "doctors")), ...buildAlternates("doctors") },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  assertRouteSegment(locale, "doctors", "tieraerzte");
  return <DoctorsListPage locale={locale} />;
}
