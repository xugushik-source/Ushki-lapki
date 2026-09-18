import type { Metadata } from "next";
import { resolveLocale, assertRouteSegment } from "@/lib/routes";
import { getDictionary } from "@/locales";
import { BookingPage } from "@/features/pages/BookingPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const dict = getDictionary(locale);
  return { title: dict.booking.pageTitle, description: dict.booking.pageSubtitle };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  assertRouteSegment(locale, "booking", "booking");
  return <BookingPage locale={locale} />;
}
