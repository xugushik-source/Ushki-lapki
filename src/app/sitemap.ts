import type { MetadataRoute } from "next";
import { LOCALES } from "@/types";
import { routePath, localePath } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo";
import { services } from "@/config/services.config";
import { doctors } from "@/config/doctors.config";
import { demoBlog } from "@/data/demo/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    entries.push({ url: absoluteUrl(localePath(locale)), changeFrequency: "weekly", priority: 1 });

    for (const key of ["services", "doctors", "prices", "about", "contacts", "faq", "blog"] as const) {
      entries.push({ url: absoluteUrl(routePath(locale, key)), changeFrequency: "weekly", priority: 0.8 });
    }

    for (const service of services) {
      entries.push({
        url: absoluteUrl(routePath(locale, "services", service.slug[locale])),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }

    for (const doctor of doctors) {
      entries.push({
        url: absoluteUrl(routePath(locale, "doctors", doctor.slug)),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }

    for (const post of demoBlog) {
      entries.push({
        url: absoluteUrl(routePath(locale, "blog", post.slug)),
        changeFrequency: "monthly",
        priority: 0.5,
      });
    }

    for (const key of ["legalPrivacy", "legalCookies", "legalTerms"] as const) {
      entries.push({ url: absoluteUrl(routePath(locale, key)), changeFrequency: "yearly", priority: 0.3 });
    }
  }

  return entries;
}
