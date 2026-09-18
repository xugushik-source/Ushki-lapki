import type { Metadata } from "next";
import { resolveLocale, assertRouteSegment, routePath } from "@/lib/routes";
import { buildAlternates, absoluteUrl } from "@/lib/seo";
import { getDictionary } from "@/locales";
import { ServicesListPage } from "@/features/pages/ServicesListPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const dict = getDictionary(locale);
  return {
    title: dict.servicesListPage.heading,
    description: dict.servicesListPage.subheading,
    alternates: { canonical: absoluteUrl(routePath(locale, "services")), ...buildAlternates("services") },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  assertRouteSegment(locale, "services", "servizi");
  return <ServicesListPage locale={locale} />;
}
