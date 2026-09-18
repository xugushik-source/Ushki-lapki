import type { Metadata } from "next";
import { resolveLocale, assertRouteSegment, routePath } from "@/lib/routes";
import { buildAlternates, absoluteUrl } from "@/lib/seo";
import { getDictionary } from "@/locales";
import { ServiceDetailPage } from "@/features/pages/ServiceDetailPage";
import { services } from "@/config/services.config";

export function generateStaticParams() {
  const locales = ["it"] as const;
  return locales.flatMap((locale) => services.map((s) => ({ locale, slug: s.slug[locale] })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = resolveLocale(rawLocale);
  const dict = getDictionary(locale);
  const item = services.find((s) => s.slug[locale] === slug);
  const alternates = item
    ? buildAlternates("services", (loc) => item.slug[loc])
    : undefined;
  return {
    title: item?.name[locale] ?? dict.servicesListPage.heading,
    description: item?.shortDescription[locale] ?? dict.servicesListPage.subheading,
    alternates: { canonical: absoluteUrl(routePath(locale, "services", slug)), ...alternates },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = resolveLocale(rawLocale);
  assertRouteSegment(locale, "services", "servizi");
  return <ServiceDetailPage locale={locale} slug={slug} />;
}
