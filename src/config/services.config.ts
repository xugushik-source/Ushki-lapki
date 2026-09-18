import { Locale } from "@/types";
import { demoServices } from "@/data/demo/services";

// What a reseller edits per clinic: the services list, prices and copy.
// Current values are demo content (brief section 54) — see data/demo/services.ts.
export const services = demoServices;

export function getServiceBySlug(locale: Locale, slug: string) {
  return services.find((s) => s.slug[locale] === slug);
}
