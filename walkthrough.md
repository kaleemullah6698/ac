# AC Pro Jeddah — Website Rebuild Walkthrough

## What Was Delivered

A complete, production-level **Next.js 16 App Router** website rebuilt from scratch for an AC & Refrigerator Repair business in Jeddah, Saudi Arabia.

---

## Live Dev Server

**URL:** [http://localhost:3000](http://localhost:3000)

---

## Pages Built (9 total)

| Route | Title | Purpose |
|---|---|---|
| `/` | Home | Main conversion page |
| `/services/ac-repair` | AC Repair Jeddah | Service SEO page |
| `/services/fridge-repair` | Refrigerator Repair Jeddah | Service SEO page |
| `/services/installation` | AC Installation Jeddah | Service SEO page |
| `/locations/jeddah-al-hamra` | AC Repair Al Hamra | Local SEO page |
| `/locations/jeddah-al-rawdah` | AC Repair Al Rawdah | Local SEO page |
| `/locations/jeddah-al-naseem` | AC Repair Al Naseem | Local SEO page |
| `/about` | About AC Pro Jeddah | Trust building |
| `/contact` | Contact Us | Lead capture form |

---

## Components Built

| Component | Type | Purpose |
|---|---|---|
| `Header.tsx` | Client | Sticky nav with dropdowns + CTA buttons |
| `Footer.tsx` | Client | NAP info, links, service areas |
| `HeroSection.tsx` | Client | Main hero with trust badges |
| `ServicesGrid.tsx` | Client | 3-service card grid |
| `WhyChooseUs.tsx` | Client | Trust/reasons + 6-point feature grid |
| `Testimonials.tsx` | Server | 6-review grid with ratings |
| `ServiceAreas.tsx` | Client | Jeddah district coverage grid |
| `FAQ.tsx` | Client | Accessible accordion FAQ |
| `CTASection.tsx` | Client | Reusable CTA section |
| `FloatingWhatsApp.tsx` | Client | Floating WhatsApp button |
| `MobileBottomBar.tsx` | Client | Sticky mobile call/WhatsApp bar |
| `LocationCards.tsx` | Client | Reusable cards for location pages |
| `Contact.tsx` | Client | Full contact form with success state |

---

## SEO Implementation

### Per-Page Metadata
Every page exports a `metadata` object with:
- `title` (with template `%s | AC Pro Jeddah`)
- `description`
- `keywords`
- `openGraph` with image, URL, title, description
- `twitter` card
- `alternates.canonical`

### Schema Markup (JSON-LD)
- **Root layout** — `LocalBusiness` schema with address, phone, hours, rating, geo coordinates
- **Service pages** — `Service` schema with `areaServed`
- **Location pages** — `Service` schema targeting specific district

### Technical SEO Files
- `sitemap.ts` → auto-generates `/sitemap.xml`
- `robots.ts` → auto-generates `/robots.txt`
- `not-found.tsx` → Custom 404 page

### Local SEO Keywords Used Naturally
- "AC repair Jeddah"
- "Air conditioner repair Jeddah"
- "Refrigerator repair Jeddah"
- "Fridge technician Jeddah"
- "Emergency AC service Jeddah"
- Arabic keywords in root layout metadata

---

## Design System

| Token | Value |
|---|---|
| Deep Navy Blue | `#0B1F3B` |
| Dark Slate | `#111827` |
| CTA Green | `#22C55E` |
| White | `#FFFFFF` |
| Soft Gray | `#F8FAFC` |
| Font | Inter (Google Fonts via `next/font`) |

---

## Mobile UX

- ✅ Sticky mobile bottom bar (Call + WhatsApp)
- ✅ Floating WhatsApp button (always visible)
- ✅ Hamburger menu with animated icon
- ✅ Large touch-friendly CTA buttons
- ✅ Responsive grids with `auto-fit minmax`

---

## What to Replace Before Going Live

1. **Phone number** — Replace `+966500000000` with real number (search: `966500000000`)
2. **Domain** — Replace `acprojeddah.sa` in `layout.tsx`, `sitemap.ts`, all metadata
3. **Address** — Update real street address in `layout.tsx` LocalBusiness schema
4. **OG Image** — Add `/public/og-image.jpg` (1200×630px)
5. **Favicon** — Replace `/app/favicon.ico`
6. **Map embeds** — Replace placeholder map divs with real Google Maps iframes

---

## Commands

```bash
npm run dev    # Development server
npm run build  # Production build
npm run start  # Run production build
```
