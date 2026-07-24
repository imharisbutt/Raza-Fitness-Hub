# Raza Fitness Hub — Website

A single-page marketing site for Raza Fitness Hub (a premium gym in Lahore), built with **Next.js (App Router) + TypeScript + Tailwind CSS v4**.

**Live site:** https://imharisbutt.github.io/Raza-Fitness-Hub/

## Getting Started

```bash+
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # run ESLint
```

## Project Structure

```
src/
├─ app/
│  ├─ layout.tsx        # fonts (Bebas Neue + Inter), metadata, Navbar + Footer
│  ├─ page.tsx          # composes all sections in order
│  ├─ globals.css       # Tailwind + design tokens (charcoal + gold theme)
│  ├─ icon.svg           # favicon
│  ├─ opengraph-image.tsx  # generated OG/Twitter share image
│  ├─ robots.ts          # robots.txt
│  └─ sitemap.ts         # sitemap.xml
├─ components/
│  ├─ layout/           # Navbar, MobileMenu, Footer
│  ├─ sections/         # Hero, About, Programs, Pricing, Trainers, Testimonials, Branches, Faq, Contact, ...
│  ├─ ui/               # Button, Container, SectionHeading, Reveal, PageLoader, AnimatedCounter (shared primitives)
│  └─ forms/            # ContactForm (posts to Formspree)
├─ content/             # ← ALL placeholder copy & data lives here
├─ types/               # shared TypeScript types
└─ lib/                 # cn() className helper, focusRing(), withBasePath()

.github/workflows/deploy.yml   # builds + deploys to GitHub Pages on every push to main
```

## Customising Content (start here)

All the text, prices, trainers, testimonials, and branch details are **placeholders**.
You can swap them for real content **without touching any component** — just edit the
files in `src/content/`:

| File                        | What it controls                                    |
| --------------------------- | --------------------------------------------------- |
| `content/siteConfig.ts`     | Gym name, tagline, email, phone, Instagram, WhatsApp |
| `content/programs.ts`       | Program cards + the stats row                        |
| `content/pricing.ts`        | Membership tiers and prices                          |
| `content/trainers.ts`       | Trainer names, specialties, bios, photos             |
| `content/testimonials.ts`   | Member quotes                                        |
| `content/branches.ts`       | The two branch locations                             |

### Swapping images

Placeholder photos are loaded from Unsplash. To use real photos:

1. Drop images into `public/images/`.
2. In the relevant `content/*.ts` file, change the `image` URL to e.g. `/images/trainer-1.jpg`.

(The hero and About images are set directly in `components/sections/Hero.tsx` and
`About.tsx`.) Remote image hosts are allow-listed in `next.config.ts`.

## Theme

The premium **black/charcoal + gold** look is defined once as design tokens in
`src/app/globals.css` (`@theme` block) — e.g. `charcoal-950`, `gold-500`. Use those
token classes (`bg-charcoal-900`, `text-gold-400`, …) rather than raw hex values so the
palette stays consistent.

## Contact Form

The site is deployed as a static export (GitHub Pages has no server), so the form posts
directly to [Formspree](https://formspree.io) instead of an internal API route. The
endpoint lives in `content/siteConfig.ts` as `formspreeEndpoint` — **before launch**,
sign up at formspree.io, create a form, and replace the placeholder with your real
`https://formspree.io/f/xxxxxxxx` URL.

## Deployment

This site is configured to build two ways, controlled by the `GITHUB_PAGES` env var in
`next.config.ts`:

- **Normal build** (`npm run build`, used by Vercel/local) — full Next.js server build.
- **Static export** (`GITHUB_PAGES=true npm run build`) — sets `output: "export"` and a
  `/Raza-Fitness-Hub` `basePath` (since the site is served from a repo sub-path, not the
  domain root), and disables Next's server-side image optimizer.

`.github/workflows/deploy.yml` runs the static export build and publishes it to GitHub
Pages automatically on every push to `main`. Enable it once under **Settings → Pages →
Source → GitHub Actions** on the repo.

Hardcoded `/public` asset paths (like the logo) must go through the `withBasePath()`
helper in `lib/utils.ts` rather than a bare `/logo.png` string, since `next/image` doesn't
auto-prefix `src` with `basePath` the way `next/link` does with `href`.
