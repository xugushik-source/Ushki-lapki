# Paws & Ears — Veterinary Engine

A multi-language, multi-market website engine for veterinary clinics, built
with Next.js (App Router), TypeScript, and Tailwind CSS. One codebase, many
clinics: swap a handful of config/data files and the whole site — branding,
languages, currency, services, team, prices — updates with no changes to
components.

The current content (`Paws & Ears` / `Ушки-Лапки`, its address, doctors,
prices, etc.) is **demo data**, kept in `src/data/demo/` and
`src/config/*.config.ts`, ready to be replaced for a real clinic.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it redirects to your
browser's preferred language, or English by default.

## Languages & markets

- Languages: English, Deutsch, Français, Italiano, Русский — routed as
  `/en`, `/de`, `/fr`, `/it`, `/ru`. The bare `/` is a static page
  (`src/app/page.tsx`) that redirects client-side to the visitor's browser
  language; see `src/locales/` for the dictionaries.
- Content sections use **localized URL segments**
  (`/en/services/dentistry` ↔ `/de/leistungen/zahnmedizin` ↔
  `/fr/services/dentisterie`, etc.) — defined in `src/config/routes.config.ts`.
  Switching language on any page lands on the equivalent page, not the homepage.
- Markets (currency + number formatting) live in `src/config/markets/*.ts`,
  selected via `ACTIVE_MARKET` in `src/config/market.config.ts`.

## Onboarding a new clinic

Most of a new deployment is editing these files — no component changes:

| What | Where |
|---|---|
| Clinic name, logo, phone, hours, address, stats | `src/data/demo/clinic.ts` |
| Active market / currency | `src/config/market.config.ts` |
| Color theme | `src/config/theme.config.ts` + `src/app/globals.css` |
| Navigation items | `src/config/navigation.config.ts` |
| Services, prices | `src/data/demo/services.ts` |
| Doctors | `src/data/demo/doctors.ts` |
| Reviews, blog, FAQ | `src/data/demo/{reviews,blog,faq}.ts` |
| Social links | `src/config/social.config.ts` |
| Booking method (WhatsApp / email / external URL) | `src/config/booking.config.ts` |
| Photos | `src/config/images.config.ts` + files under `public/images/` |

Photos currently point to generated placeholder SVGs
(`scripts/generate-placeholders.mjs`) — drop real photography into the same
paths and nothing else needs to change.

## Environment variables

See `.env.example`. `NEXT_PUBLIC_SITE_URL` feeds canonical URLs, hreflang
alternates, the sitemap and JSON-LD. Analytics IDs are optional and only
activate after a visitor accepts the cookie banner.

## Deploying to GitHub Pages

The site builds as a fully static export (`output: "export"` in
`next.config.ts`) — no Node server needed at runtime.

1. In the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.
2. Push to this repo's default branch. `.github/workflows/deploy-pages.yml`
   builds and deploys automatically from there — nothing else to configure;
   it derives the GitHub Pages base path and site URL from the repo name.
3. The site is published at `https://<owner>.github.io/<repo>/`.

To reproduce that build locally (e.g. to preview the exported `out/`
folder before pushing):

```bash
NEXT_PUBLIC_BASE_PATH=/ushki-lapki \
NEXT_PUBLIC_SITE_URL=https://xugushik-source.github.io/ushki-lapki \
npm run build
```

`out/` is then a self-contained static site; serve it with any static file
server rooted one level above an `ushki-lapki/` folder to preview it exactly
as GitHub Pages will.

## Architecture notes

- `src/config/` — the engine's editable configuration.
- `src/data/demo/` — the current tenant's demo content (clearly separated
  from config shape so it's obvious what a reseller replaces).
- `src/features/pages/` — the actual page implementations (one per page
  type); `src/app/[locale]/**/page.tsx` files are thin, localized-URL
  wrappers around them.
- `src/lib/booking/adapters.ts` — the booking wizard talks to this adapter
  interface, not to WhatsApp/email directly, so a future CRM/API integration
  drops in without touching the UI.
- `src/components/ui/` — motion/animation primitives and generic UI;
  `src/components/layout/` — header/footer/nav; `src/components/sections/` —
  homepage/marketing sections; `src/components/cards/` — content cards.
