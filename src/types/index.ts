// Core domain types for the Paws & Ears veterinary engine.
// Keeping these centralized lets config/data files and components share one contract.

export const LOCALES = ["en", "de", "ru", "fr", "it"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export type LocalizedText = Record<Locale, string>;
export type LocalizedList = Record<Locale, string[]>;

export type CurrencyCode = "USD" | "EUR" | "CHF";
export type MarketCode = "us" | "de" | "fr" | "ch" | "at" | "it";

export type ContactChannel = "call" | "whatsapp" | "book" | "emergency";

export interface OpeningHoursRow {
  days: LocalizedText;
  hours: string;
}

export interface MarketConfig {
  code: MarketCode;
  countryName: LocalizedText;
  currency: CurrencyCode;
  numberFormatLocale: string;
  locales: Locale[];
  defaultLocale: Locale;
  usesWhatsApp: boolean;
}

export interface ServiceContentBlock {
  heading: LocalizedText;
  body: LocalizedText;
}

export interface ServiceDetail {
  slug: Record<Locale, string>;
  category: string;
  icon: string;
  image: string;
  bentoSize: "sm" | "md" | "lg" | "wide";
  name: LocalizedText;
  shortDescription: LocalizedText;
  overview: LocalizedText;
  whenToVisit: LocalizedList;
  symptoms?: LocalizedList;
  treatment: LocalizedText;
  technology?: LocalizedText;
  faq: { question: LocalizedText; answer: LocalizedText }[];
  priceFrom?: number;
  doctorSlugs: string[];
  beforeAfter?: boolean;
}

export interface DoctorConfig {
  slug: string;
  name: string;
  photo: string;
  specialty: LocalizedText;
  experienceYears: number;
  languages: string[];
  education: LocalizedList;
  certificates: LocalizedList;
  areasOfExpertise: LocalizedList;
  bio: LocalizedText;
  serviceSlugs: string[];
}

export interface ReviewEntry {
  id: string;
  ownerName: string;
  petName: string;
  petPhoto: string;
  rating: 1 | 2 | 3 | 4 | 5;
  source: "Google" | "Facebook" | "Clinic";
  text: LocalizedText;
  doctorSlug?: string;
}

export interface BlogPost {
  slug: string;
  category: LocalizedText;
  categoryKey:
    | "dogs"
    | "cats"
    | "preventive"
    | "dental"
    | "nutrition"
    | "emergency"
    | "senior";
  title: LocalizedText;
  excerpt: LocalizedText;
  body: LocalizedText;
  authorName: string;
  reviewerDoctorSlug: string;
  publishedAt: string;
  readingMinutes: number;
  image: string;
  relatedSlugs: string[];
}

export interface FaqItem {
  question: LocalizedText;
  answer: LocalizedText;
}

export interface PriceRow {
  serviceSlug: string;
  name: LocalizedText;
  category: string;
  priceFrom: number;
  description?: LocalizedText;
}

export type PetKind = "dog" | "cat" | "other";

export interface ClinicContent {
  name: LocalizedText;
  legalSuffix: LocalizedText;
  tagline: LocalizedText;
  logo: LocalizedText;
  // Icon-only crop of `logo` (no wordmark) for small/circular slots — the
  // full lockup becomes an unreadable smudge at header/footer sizes.
  logoMark: LocalizedText;
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string;
  whatsappEnabled: boolean;
  email: string;
  address: string;
  addressCountry: LocalizedText;
  coordinates: { lat: number; lng: number };
  mapsUrl: string;
  openingHours: OpeningHoursRow[];
  emergency: {
    enabled: boolean;
    is24_7: boolean;
    phone: string;
  };
  foundedYear: number;
  stats: {
    yearsOfCare: number;
    patients: string;
    veterinarians: number;
    emergencyAvailability: string;
  };
}
