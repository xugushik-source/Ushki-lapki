import { Locale } from "@/types";

// Legal URL segments stay constant across locales on purpose — the brief's
// localized-URL examples (section 22/40) are all about content sections
// (services, doctors, ...), never about /legal/. Translating "legal" itself
// per language would 5x the number of physical route folders for a page
// nobody navigates to by typing a URL, so we keep it in English and localize
// only the page content.
const legalSegments = {
  legalPrivacy: "legal/privacy-policy",
  legalCookies: "legal/cookie-policy",
  legalTerms: "legal/terms",
};

// Localized URL segments. Switching language keeps the visitor on the
// equivalent page instead of bouncing to the homepage (see switchLocalePath in lib/routes.ts).
export const routeSegments: Record<Locale, Record<string, string>> = {
  en: {
    services: "services",
    doctors: "doctors",
    prices: "prices",
    about: "about",
    contacts: "contacts",
    faq: "faq",
    blog: "pet-care",
    booking: "booking",
    ...legalSegments,
  },
  de: {
    services: "leistungen",
    doctors: "tieraerzte",
    prices: "preise",
    about: "ueber-uns",
    contacts: "kontakt",
    faq: "faq",
    blog: "tierratgeber",
    booking: "termin",
    ...legalSegments,
  },
  fr: {
    services: "services",
    doctors: "veterinaires",
    prices: "tarifs",
    about: "a-propos",
    contacts: "contact",
    faq: "faq",
    blog: "conseils-animaux",
    booking: "rendez-vous",
    ...legalSegments,
  },
  it: {
    services: "servizi",
    doctors: "veterinari",
    prices: "prezzi",
    about: "chi-siamo",
    contacts: "contatti",
    faq: "faq",
    blog: "consigli",
    booking: "prenotazione",
    ...legalSegments,
  },
  ru: {
    services: "services",
    doctors: "doctors",
    prices: "prices",
    about: "about",
    contacts: "contacts",
    faq: "faq",
    blog: "care",
    booking: "booking",
    ...legalSegments,
  },
};

export type RouteKey = keyof (typeof routeSegments)["en"];
