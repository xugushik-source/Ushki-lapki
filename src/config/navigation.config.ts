import { RouteKey } from "./routes.config";

export interface NavItem {
  labelKey: string;
  routeKey: RouteKey;
}

export const primaryNav: NavItem[] = [
  { labelKey: "nav.services", routeKey: "services" },
  { labelKey: "nav.doctors", routeKey: "doctors" },
  { labelKey: "nav.about", routeKey: "about" },
  { labelKey: "nav.prices", routeKey: "prices" },
  { labelKey: "nav.petCare", routeKey: "blog" },
  { labelKey: "nav.contacts", routeKey: "contacts" },
];

export const footerLegalRouteKeys: RouteKey[] = [
  "legalPrivacy",
  "legalCookies",
  "legalTerms",
];
