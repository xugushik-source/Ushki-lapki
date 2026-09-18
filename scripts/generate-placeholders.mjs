// Generates clearly-labeled placeholder SVGs for every photo slot the site
// expects (see src/config/images.config.ts). Real photography drops into
// these exact paths later with zero component changes — that is the whole
// point of the image-mapping config (brief section 52).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public", "images");

const palette = [
  ["#EDE6D6", "#CFDCC7"],
  ["#E3E9DE", "#C9D8C0"],
  ["#EFE2CE", "#D8C39A"],
  ["#E6EEEA", "#B9CDBF"],
];

function svg(label, sub, w, h, seed = 0) {
  const [c1, c2] = palette[seed % palette.length];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/>
      <stop offset="1" stop-color="${c2}"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <g fill="#1F3D2E" opacity="0.55">
    <circle cx="${w / 2}" cy="${h / 2 - 46}" r="34"/>
  </g>
  <text x="50%" y="${h / 2 + 40}" font-family="Arial, sans-serif" font-size="${Math.max(18, w / 28)}" fill="#1F3D2E" text-anchor="middle" font-weight="600">${label}</text>
  <text x="50%" y="${h / 2 + 70}" font-family="Arial, sans-serif" font-size="${Math.max(13, w / 55)}" fill="#3E5347" text-anchor="middle">${sub}</text>
</svg>`;
}

const manifest = [
  { path: "hero/hero-main.svg", label: "HERO PHOTO", sub: "Veterinarian with dog — replace me", w: 1920, h: 2200 },
  { path: "emergency/emergency-1.svg", label: "EMERGENCY", sub: "Emergency care photo", w: 1600, h: 1200 },
  { path: "about/philosophy.svg", label: "ABOUT — PHILOSOPHY", sub: "Clinic photo", w: 1600, h: 2000 },
  { path: "about/gallery-1.svg", label: "CLINIC GALLERY 1", sub: "Reception / interior", w: 1400, h: 1000 },
  { path: "about/gallery-2.svg", label: "CLINIC GALLERY 2", sub: "Exam room", w: 1400, h: 1000 },
  { path: "about/gallery-3.svg", label: "CLINIC GALLERY 3", sub: "Surgical suite", w: 1400, h: 1000 },
  { path: "about/gallery-4.svg", label: "CLINIC GALLERY 4", sub: "Team at work", w: 1400, h: 1000 },
  { path: "pets/dog.svg", label: "PET — DOG", sub: "", w: 1200, h: 1200 },
  { path: "pets/cat.svg", label: "PET — CAT", sub: "", w: 1200, h: 1200 },
  { path: "pets/other.svg", label: "PET — OTHER", sub: "", w: 1200, h: 1200 },
  { path: "story/chapter-1.svg", label: "STORY 1", sub: "Where it started", w: 1400, h: 1700 },
  { path: "story/chapter-2.svg", label: "STORY 2", sub: "Growing with patients", w: 1400, h: 1700 },
  { path: "story/chapter-3.svg", label: "STORY 3", sub: "The team today", w: 1400, h: 1700 },
  { path: "story/chapter-4.svg", label: "STORY 4", sub: "What stays the same", w: 1400, h: 1700 },
  { path: "before-after/dentistry-before.svg", label: "DENTISTRY — BEFORE", sub: "", w: 1200, h: 900 },
  { path: "before-after/dentistry-after.svg", label: "DENTISTRY — AFTER", sub: "", w: 1200, h: 900 },
  { path: "before-after/dermatology-before.svg", label: "DERMATOLOGY — BEFORE", sub: "", w: 1200, h: 900 },
  { path: "before-after/dermatology-after.svg", label: "DERMATOLOGY — AFTER", sub: "", w: 1200, h: 900 },
];

const services = [
  "consultation", "diagnostics", "vaccination", "surgery", "dentistry",
  "laboratory", "dermatology", "cardiology", "inpatient-care",
  "emergency-care", "exotic-animals", "preventive-care",
];
services.forEach((slug, i) =>
  manifest.push({ path: `services/${slug}.svg`, label: slug.toUpperCase().replace("-", " "), sub: "Service photo", w: 1400, h: 1100, seed: i }),
);

const doctors = ["elena-popova", "marco-ferrari", "julia-becker", "thomas-wright", "sara-nguyen", "david-cohen", "amelie-laurent", "noah-schmidt"];
doctors.forEach((slug, i) =>
  manifest.push({ path: `doctors/${slug}.svg`, label: slug.replace("-", " ").toUpperCase(), sub: "Doctor portrait", w: 1200, h: 1500, seed: i }),
);

const reviewPets = ["pet-1", "pet-2", "pet-3", "pet-4", "pet-5", "pet-6"];
reviewPets.forEach((slug, i) =>
  manifest.push({ path: `reviews/${slug}.svg`, label: "REVIEW PET", sub: slug, w: 800, h: 800, seed: i }),
);

const blogSlugs = [
  "puppy-first-year", "cat-indoor-enrichment", "senior-pet-checkups",
  "dental-home-care", "nutrition-weight", "emergency-warning-signs", "vaccination-schedule",
];
blogSlugs.forEach((slug, i) =>
  manifest.push({ path: `blog/${slug}.svg`, label: "ARTICLE", sub: slug, w: 1400, h: 1000, seed: i }),
);

for (const item of manifest) {
  const fullPath = join(publicDir, item.path);
  mkdirSync(dirname(fullPath), { recursive: true });
  writeFileSync(fullPath, svg(item.label, item.sub, item.w, item.h, item.seed ?? 0));
}

console.log(`Generated ${manifest.length} placeholder images under public/images/`);
