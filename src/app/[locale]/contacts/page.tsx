import type { Metadata } from "next";
import { resolveLocale, assertRouteSegment, routePath } from "@/lib/routes";
import { buildAlternates, absoluteUrl } from "@/lib/seo";
import { getDictionary } from "@/locales";
import { ContactsPage } from "@/features/pages/ContactsPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const dict = getDictionary(locale);
  return {
    title: dict.contactsPage.heading,
    description: dict.contactsPage.subheading,
    alternates: { canonical: absoluteUrl(routePath(locale, "contacts")), ...buildAlternates("contacts") },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  assertRouteSegment(locale, "contacts", "contacts");
  return <ContactsPage locale={locale} />;
}
