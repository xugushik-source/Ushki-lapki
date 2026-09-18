// Central image-mapping config (brief section 52). Every photo slot the
// site uses is named here — swap a path to drop in real photography
// without touching any component.
export const images = {
  heroMain: "/images/hero/hero-main.svg",
  emergency: "/images/emergency/emergency-1.svg",
  aboutPhilosophy: "/images/about/philosophy.svg",
  aboutGallery: [
    "/images/about/gallery-1.svg",
    "/images/about/gallery-2.svg",
    "/images/about/gallery-3.svg",
    "/images/about/gallery-4.svg",
  ],
  pets: {
    dog: "/images/pets/dog.svg",
    cat: "/images/pets/cat.svg",
    other: "/images/pets/other.svg",
  },
  storyChapters: [
    "/images/story/chapter-1.svg",
    "/images/story/chapter-2.svg",
    "/images/story/chapter-3.svg",
    "/images/story/chapter-4.svg",
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
  service: (slug: string) => `/images/services/${slug}.svg`,
  doctor: (slug: string) => `/images/doctors/${slug}.svg`,
  reviewPet: (index: number) => `/images/reviews/pet-${index}.svg`,
  blog: (slug: string) => `/images/blog/${slug}.svg`,
};
