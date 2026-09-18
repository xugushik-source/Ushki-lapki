import type { Metadata } from "next";
import { resolveLocale, assertRouteSegment, routePath } from "@/lib/routes";
import { buildAlternates, absoluteUrl } from "@/lib/seo";
import { getDictionary } from "@/locales";
import { BlogDetailPage } from "@/features/pages/BlogDetailPage";
import { demoBlog } from "@/data/demo/blog";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = resolveLocale(rawLocale);
  const dict = getDictionary(locale);
  const item = demoBlog.find((p) => p.slug === slug);
  const alternates = item
    ? buildAlternates("blog", () => item.slug)
    : undefined;
  return {
    title: item?.title[locale] ?? dict.blogPage.heading,
    description: item?.excerpt[locale] ?? dict.blogPage.subheading,
    alternates: { canonical: absoluteUrl(routePath(locale, "blog", slug)), ...alternates },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = resolveLocale(rawLocale);
  assertRouteSegment(locale, "blog", "pet-care");
  return <BlogDetailPage locale={locale} slug={slug} />;
}
