// Replaces the flat labeled placeholder boxes for slots that can never get a
// real photo honestly (before/after pairs, pet-selector icons, review
// avatars) with small hand-drawn flat-illustration SVGs — clearly a
// drawing, not a stand-in trying to pass as a real photo.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public", "images");

const palette = {
  cream: "#faf6ef",
  sand: "#f1e9da",
  sage: "#c9d8c0",
  forest: "#1f3d2e",
  forestLight: "#2f5c48",
  oak: "#c9a177",
  ink: "#1c2620",
};

function wrap(content, size = 400) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">${content}</svg>`;
}

function dogHead(bg, fg) {
  return wrap(`
    <circle cx="200" cy="200" r="200" fill="${bg}"/>
    <g fill="${fg}">
      <path d="M120 150 Q100 90 150 100 Q160 140 140 175 Z"/>
      <path d="M280 150 Q300 90 250 100 Q240 140 260 175 Z"/>
      <ellipse cx="200" cy="220" rx="88" ry="78"/>
    </g>
    <g fill="${bg}">
      <circle cx="168" cy="205" r="9"/>
      <circle cx="232" cy="205" r="9"/>
      <ellipse cx="200" cy="235" rx="16" ry="12"/>
      <path d="M200 247 Q200 262 185 262" stroke="${bg}" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M200 247 Q200 262 215 262" stroke="${bg}" stroke-width="6" fill="none" stroke-linecap="round"/>
    </g>
  `);
}

function catHead(bg, fg) {
  return wrap(`
    <circle cx="200" cy="200" r="200" fill="${bg}"/>
    <g fill="${fg}">
      <path d="M128 160 L110 95 L172 140 Z"/>
      <path d="M272 160 L290 95 L228 140 Z"/>
      <circle cx="200" cy="225" r="82"/>
    </g>
    <g fill="${bg}">
      <ellipse cx="172" cy="212" rx="8" ry="11"/>
      <ellipse cx="228" cy="212" rx="8" ry="11"/>
      <path d="M200 228 L192 240 L208 240 Z"/>
    </g>
    <g stroke="${bg}" stroke-width="3" stroke-linecap="round">
      <path d="M150 245 L110 240"/>
      <path d="M150 253 L110 258"/>
      <path d="M250 245 L290 240"/>
      <path d="M250 253 L290 258"/>
    </g>
  `);
}

function pawOther(bg, fg) {
  return wrap(`
    <circle cx="200" cy="200" r="200" fill="${bg}"/>
    <g fill="${fg}">
      <ellipse cx="200" cy="250" rx="78" ry="62"/>
      <circle cx="122" cy="165" r="30"/>
      <circle cx="180" cy="128" r="32"/>
      <circle cx="248" cy="128" r="32"/>
      <circle cx="292" cy="172" r="28"/>
    </g>
  `);
}

function toothIcon(bg, fg, spots) {
  const spotEls = spots
    ? `<g fill="${palette.oak}" opacity="0.85">
        <circle cx="170" cy="180" r="7"/>
        <circle cx="230" cy="160" r="6"/>
        <circle cx="205" cy="230" r="8"/>
        <circle cx="150" cy="230" r="5"/>
      </g>`
    : `<path d="M175 150 Q185 140 195 150" stroke="${bg}" stroke-width="5" fill="none" stroke-linecap="round" opacity="0.7"/>`;
  return wrap(`
    <rect width="400" height="400" fill="${bg}"/>
    <path d="M200 100 C130 100 120 160 130 210 C138 250 155 300 175 300 C190 300 185 250 200 250 C215 250 210 300 225 300 C245 300 262 250 270 210 C280 160 270 100 200 100 Z" fill="${fg}"/>
    ${spotEls}
  `);
}

function skinIcon(bg, fg, irritated) {
  const marks = irritated
    ? `<g fill="#c0483a" opacity="0.75">
        <circle cx="160" cy="170" r="6"/>
        <circle cx="220" cy="150" r="5"/>
        <circle cx="190" cy="220" r="7"/>
        <circle cx="250" cy="210" r="5"/>
      </g>`
    : `<g stroke="${bg}" stroke-width="6" fill="none" stroke-linecap="round" opacity="0.8">
        <path d="M140 180 Q200 150 260 180"/>
        <path d="M140 220 Q200 190 260 220"/>
        <path d="M140 260 Q200 230 260 260"/>
      </g>`;
  return wrap(`
    <rect width="400" height="400" fill="${bg}"/>
    <ellipse cx="200" cy="210" rx="140" ry="120" fill="${fg}"/>
    ${marks}
  `);
}

const manifest = [
  // Pet selector icons
  { path: "pets/dog.svg", svg: dogHead(palette.sage, palette.forest) },
  { path: "pets/cat.svg", svg: catHead(palette.sand, palette.forest) },
  { path: "pets/other.svg", svg: pawOther(palette.cream, palette.oak) },

  // Review avatars — small rotation of the same motifs in varied tints
  { path: "reviews/pet-1.svg", svg: dogHead(palette.sage, palette.forest) },
  { path: "reviews/pet-2.svg", svg: catHead(palette.sand, palette.forestLight) },
  { path: "reviews/pet-3.svg", svg: dogHead(palette.cream, palette.oak) },
  { path: "reviews/pet-4.svg", svg: pawOther(palette.sage, palette.ink) },
  { path: "reviews/pet-5.svg", svg: catHead(palette.cream, palette.forest) },
  { path: "reviews/pet-6.svg", svg: dogHead(palette.sand, palette.forestLight) },

  // Before/after pairs
  { path: "before-after/dentistry-before.svg", svg: toothIcon(palette.sand, "#e7ddc9", true) },
  { path: "before-after/dentistry-after.svg", svg: toothIcon(palette.sage, "#ffffff", false) },
  { path: "before-after/dermatology-before.svg", svg: skinIcon(palette.sand, "#d9c49a", true) },
  { path: "before-after/dermatology-after.svg", svg: skinIcon(palette.sage, "#e8efe3", false) },
];

for (const item of manifest) {
  const fullPath = join(publicDir, item.path);
  mkdirSync(dirname(fullPath), { recursive: true });
  writeFileSync(fullPath, item.svg);
}

console.log(`Generated ${manifest.length} illustrated placeholders.`);
