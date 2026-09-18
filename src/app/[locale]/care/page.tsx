import type { Metadata } from "next";
import { resolveLocale, assertRouteSegment, routePath } from "@/lib/routes";
import { buildAlternates, absoluteUrl } from "@/lib/seo";
import { getDictionary } from "@/locales";
import { BlogListPage } from "@/features/pages/BlogListPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const dict = getDictionary(locale);
  return {
    title: dict.blogPage.heading,
    description: dict.blogPage.subheading,
    alternates: { canonical: absoluteUrl(routePath(locale, "blog")), ...buildAlternates("blog") },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  assertRouteSegment(locale, "blog", "care");
  return <BlogListPage locale={locale} />;
}
