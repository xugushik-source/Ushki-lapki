import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { LOCALES } from "@/types";
import { getDictionary } from "@/locales";
import { resolveLocale } from "@/lib/routes";
import { ACTIVE_THEME } from "@/config/theme.config";
import { clinicConfig } from "@/config/clinic.config";
import { localePath } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { ConsentBanner } from "@/components/analytics/ConsentBanner";
import { AnalyticsScripts } from "@/components/analytics/AnalyticsScripts";
import "../globals.css";

// Playfair Display, not Fraunces: Fraunces ships no Cyrillic glyphs, which
// would silently break every RU heading (brief section 3 forbids leftover
// foreign-script fallbacks).
const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-serif",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
});

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const dict = getDictionary(locale);
  const title = `${clinicConfig.name[locale]} — ${clinicConfig.legalSuffix[locale]}`;

  return {
    title: { default: title, template: `%s — ${clinicConfig.name[locale]}` },
    description: dict.hero.subtitle,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const locale = resolveLocale((await params).locale);
  const dict = getDictionary(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    name: `${clinicConfig.name[locale]} ${clinicConfig.legalSuffix[locale]}`,
    image: absoluteUrl(clinicConfig.logo[locale]),
    telephone: clinicConfig.phone,
    email: clinicConfig.email,
    address: { "@type": "PostalAddress", streetAddress: clinicConfig.address },
    geo: {
      "@type": "GeoCoordinates",
      latitude: clinicConfig.coordinates.lat,
      longitude: clinicConfig.coordinates.lng,
    },
    url: absoluteUrl(localePath(locale)),
    openingHoursSpecification: clinicConfig.openingHours.map((row) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: row.days.en,
      opens: row.hours.split(" – ")[0],
      closes: row.hours.split(" – ")[1],
    })),
  };

  return (
    <html lang={locale} data-theme={ACTIVE_THEME} className={`${playfair.variable} ${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a href="#main-content" className="skip-link">
          {dict.common.skipToContent}
        </a>
        <Header locale={locale} dict={dict} />
        <main id="main-content" className="flex-1 pb-20 lg:pb-0">
          {children}
        </main>
        <Footer locale={locale} dict={dict} />
        <MobileActionBar locale={locale} dict={dict} />
        <ConsentBanner locale={locale} dict={dict} />
        <AnalyticsScripts />
      </body>
    </html>
  );
}
