import type { Metadata } from "next";
import { resolveLocale, assertRouteSegment, routePath } from "@/lib/routes";
import { buildAlternates, absoluteUrl } from "@/lib/seo";
import { getDictionary } from "@/locales";
import { DoctorDetailPage } from "@/features/pages/DoctorDetailPage";
import { doctors } from "@/config/doctors.config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = resolveLocale(rawLocale);
  const dict = getDictionary(locale);
  const item = doctors.find((d) => d.slug === slug);
  const alternates = item
    ? buildAlternates("doctors", (loc) => item.slug)
    : undefined;
  return {
    title: item?.name ?? dict.doctorsListPage.heading,
    description: item?.specialty[locale] ?? dict.doctorsListPage.subheading,
    alternates: { canonical: absoluteUrl(routePath(locale, "doctors", slug)), ...alternates },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = resolveLocale(rawLocale);
  assertRouteSegment(locale, "doctors", "veterinaires");
  return <DoctorDetailPage locale={locale} slug={slug} />;
}
