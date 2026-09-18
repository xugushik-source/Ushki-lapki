import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { resolveLocale, localePath } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo";
import { localPages } from "@/data/demo/localPages";
import { LocalLandingPage } from "@/features/pages/LocalLandingPage";

const SLUG = "veterinarian-boston";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const page = localPages[SLUG];
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: absoluteUrl(`${localePath(locale)}/${SLUG}`) },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  // Boston/English-market page only — see data/demo/localPages.ts.
  if (locale !== "en") notFound();
  return <LocalLandingPage locale={locale} slug={SLUG} />;
}
