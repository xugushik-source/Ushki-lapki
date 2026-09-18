import { ClinicContent } from "@/types";

// DEMO TENANT DATA — replace every field below when selling this engine to a
// real clinic. Nothing here is real: address, phone, stats and hours are
// illustrative only (brief section 20/54).
export const demoClinicContent: ClinicContent = {
  name: {
    en: "Paws & Ears",
    de: "Pfoten & Ohren",
    fr: "Pattes & Oreilles",
    it: "Zampe & Orecchie",
    ru: "Ушки-Лапки",
  },
  legalSuffix: {
    en: "Veterinary Clinic",
    de: "Tierklinik",
    fr: "Clinique Vétérinaire",
    it: "Clinica Veterinaria",
    ru: "Ветеринарная клиника",
  },
  tagline: {
    en: "Care they can feel.",
    de: "Fürsorge, die sie spüren.",
    fr: "Des soins qu’ils peuvent ressentir.",
    it: "Cure che possono sentire.",
    ru: "Забота, которую они чувствуют.",
  },
  logo: {
    en: "/brand/logo-en.png",
    de: "/brand/logo-de.png",
    fr: "/brand/logo-fr.png",
    it: "/brand/logo-it.png",
    ru: "/brand/logo-ru.png",
  },
  phone: "+16175550142",
  phoneDisplay: "+1 (617) 555-0142",
  whatsappNumber: "16175550142",
  whatsappEnabled: true,
  email: "hello@pawsandears.example",
  address: "128 Harbor View Lane, Boston, MA 02110",
  addressCountry: {
    en: "United States",
    de: "Vereinigte Staaten",
    fr: "États-Unis",
    it: "Stati Uniti",
    ru: "США",
  },
  coordinates: { lat: 42.3551, lng: -71.0656 },
  mapsUrl: "https://maps.google.com/?q=42.3551,-71.0656",
  openingHours: [
    {
      days: { en: "Mon – Fri", de: "Mo – Fr", fr: "Lun – Ven", it: "Lun – Ven", ru: "Пн – Пт" },
      hours: "08:00 – 20:00",
    },
    {
      days: { en: "Saturday", de: "Samstag", fr: "Samedi", it: "Sabato", ru: "Суббота" },
      hours: "09:00 – 18:00",
    },
    {
      days: { en: "Sunday", de: "Sonntag", fr: "Dimanche", it: "Domenica", ru: "Воскресенье" },
      hours: "10:00 – 16:00",
    },
  ],
  emergency: {
    enabled: true,
    is24_7: true,
    phone: "+16175550199",
  },
  foundedYear: 2010,
  stats: {
    yearsOfCare: 15,
    patients: "20,000+",
    veterinarians: 8,
    emergencyAvailability: "24/7",
  },
};
