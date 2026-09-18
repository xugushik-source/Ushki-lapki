import type { Metadata } from "next";
import { resolveLocale, assertRouteSegment, routePath } from "@/lib/routes";
import { buildAlternates, absoluteUrl } from "@/lib/seo";
import { getDictionary } from "@/locales";
import { AboutPage } from "@/features/pages/AboutPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const dict = getDictionary(locale);
  return {
    title: dict.aboutPage.heading,
    description: dict.aboutPage.philosophyBody,
    alternates: { canonical: absoluteUrl(routePath(locale, "about")), ...buildAlternates("about") },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  assertRouteSegment(locale, "about", "ueber-uns");
  return <AboutPage locale={locale} />;
}
