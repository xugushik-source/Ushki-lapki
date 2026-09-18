// Central image-mapping config (brief section 52). Every photo slot the
// site uses is named here — swap a path to drop in real photography
// without touching any component.
//
// Real photography has started landing in public/images/real/ and is
// mapped in per slug below; anything not yet covered still falls back to
// the generated placeholder SVG so a missing photo is obvious, not silently
// broken. Before/after and the single-pet icons (pets.*, reviewPet) are
// deliberately left on placeholders — none of the supplied photos document
// an actual treatment outcome or show a pet with no person in frame, and
// using them there would misrepresent what they show.
const real = "/images/real";

export const images = {
  heroMain: `${real}/consultation-1.jpg`,
  emergency: `${real}/surgery-theatre.jpg`,
  aboutPhilosophy: `${real}/puppy-family.jpg`,
  aboutGallery: [
    `${real}/diagnostics-ultrasound.jpg`,
    `${real}/laboratory-microscope.jpg`,
    `${real}/surgery-theatre.jpg`,
    `${real}/inpatient-kennel.jpg`,
  ],
  pets: {
    dog: "/images/pets/dog.svg",
    cat: "/images/pets/cat.svg",
    other: "/images/pets/other.svg",
  },
  storyChapters: [
    `${real}/consultation-1.jpg`,
    `${real}/cardiology-exam.jpg`,
    `${real}/surgery-theatre.jpg`,
    `${real}/puppy-family.jpg`,
  ],
  beforeAfter: {
    dentistry: {
      before: "/images/before-after/dentistry-before.svg",
      after: "/images/before-after/dentistry-after.svg",
    },
    dermatology: {
      before: "/images/before-after/dermatology-before.svg",
      after: "/images/before-after/dermatology-after.svg",
    },
  },
  service: (slug: string) => serviceOverrides[slug] ?? `/images/services/${slug}.svg`,
  // The wide, short service-detail hero banner crops a portrait source photo
  // to a landscape strip — object-cover alone centers that crop, which cuts
  // off the animal in a few of the supplied photos (e.g. the rabbit sits in
  // the lower half of its source). This nudges the crop toward where the
  // subject actually is, per brief section 61's "not cropping faces" check.
  serviceHeroPosition: (slug: string) => serviceHeroPositions[slug] ?? "center",
  doctor: (slug: string) => doctorOverrides[slug] ?? `/images/doctors/${slug}.svg`,
  reviewPet: (index: number) => `/images/reviews/pet-${index}.svg`,
  blog: (slug: string) => blogOverrides[slug] ?? `/images/blog/${slug}.svg`,
};

const serviceOverrides: Record<string, string> = {
  "general-consultation": `${real}/consultation-2.jpg`,
  diagnostics: `${real}/diagnostics-ultrasound.jpg`,
  vaccination: `${real}/consultation-1.jpg`,
  surgery: `${real}/surgery-theatre.jpg`,
  dentistry: `${real}/dentistry-exam.jpg`,
  laboratory: `${real}/laboratory-microscope.jpg`,
  dermatology: `${real}/dermatology-exam.jpg`,
  cardiology: `${real}/cardiology-exam.jpg`,
  "inpatient-care": `${real}/inpatient-kennel.jpg`,
  "emergency-care": `${real}/surgery-theatre.jpg`,
  "exotic-animals": `${real}/exotic-rabbit.jpg`,
  "preventive-care": `${real}/puppy-family.jpg`,
};

const serviceHeroPositions: Record<string, string> = {
  cardiology: "center 65%",
  dermatology: "center 80%",
  "exotic-animals": "center 75%",
  "preventive-care": "center 45%",
};

// All 8 doctors now have a real photo.
const doctorOverrides: Record<string, string> = {
  "elena-popova": `${real}/cardiology-exam.jpg`,
  "thomas-wright": `${real}/dermatology-exam.jpg`,
  "sara-nguyen": `${real}/laboratory-microscope.jpg`,
  "julia-becker": `${real}/exotic-rabbit.jpg`,
  "amelie-laurent": `${real}/inpatient-kennel.jpg`,
  "marco-ferrari": `${real}/dentistry-exam.jpg`,
  "david-cohen": `${real}/david-cohen-portrait.jpg`,
  "noah-schmidt": `${real}/noah-schmidt-portrait.jpg`,
};

const blogOverrides: Record<string, string> = {
  "puppy-first-year": `${real}/puppy-family.jpg`,
  "cat-indoor-enrichment": `${real}/vet-two-cats.jpg`,
  "senior-pet-checkups": `${real}/cardiology-exam.jpg`,
  "dental-home-care": `${real}/dentistry-exam.jpg`,
  "nutrition-weight": `${real}/consultation-2.jpg`,
  "emergency-warning-signs": `${real}/surgery-theatre.jpg`,
  "vaccination-schedule": `${real}/consultation-1.jpg`,
};
