# Raza Fitness Hub — Website

A single-page marketing site for Raza Fitness Hub (a premium gym in Lahore), built with **Next.js (App Router) + TypeScript + Tailwind CSS v4**.

## Getting Started

```bash
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
│  └─ api/contact/      # contact-form endpoint (stub)
├─ components/
│  ├─ layout/           # Navbar, MobileMenu, Footer
│  ├─ sections/         # Hero, About, Programs, Pricing, Trainers, Testimonials, Branches, Contact
│  ├─ ui/               # Button, Container, SectionHeading, Reveal (shared primitives)
│  └─ forms/            # ContactForm
├─ content/             # ← ALL placeholder copy & data lives here
├─ types/               # shared TypeScript types
└─ lib/                 # cn() className helper
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

The form posts to `POST /api/contact`, which currently validates the payload and logs
it to the server console. **Before launch**, wire up a real email service (e.g. Resend or
Nodemailer) or a CRM in `src/app/api/contact/route.ts` so submissions actually reach the
client. (Look for the `TODO` in that file.)
