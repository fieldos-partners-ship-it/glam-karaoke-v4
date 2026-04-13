# Build Plan — Glam Karaoke v4
Generated: 2026-04-13-0737

---

## Stack

- **Framework:** Next.js 14.2.x (App Router, TypeScript)
- **Styling:** Tailwind CSS v3 (NOT v4 — use legacy postcss.config.mjs with `tailwindcss: {}`)
- **Animation:** Framer Motion 11.x
- **Fonts:**
  - Clash Display (Fontshare) — loaded via `next/font/local` using downloaded .woff2 files placed at `public/fonts/ClashDisplay-*.woff2` (weights: 500, 600, 700)
  - Inter — loaded via `next/font/google` (weights: 400, 500, 600)
- **Icons:** lucide-react
- **Images:** next/image (all images — no raw `<img>` tags)
- **Forms:** Native HTML forms with client-side validation; mailto or Formspree endpoint (null-safe, configurable from content.ts)

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx                    ← root layout: fonts, GA4 gate, globals.css, MobileStickyBar, schemas
│   ├── page.tsx                      ← homepage (server component — no interactivity)
│   ├── globals.css                   ← Tailwind directives, CSS custom properties, animation classes
│   ├── robots.txt / sitemap.xml      ← generated or static
│   ├── rooms/
│   │   └── page.tsx
│   ├── menu/
│   │   └── page.tsx
│   ├── events/
│   │   └── page.tsx
│   ├── private-events/
│   │   ├── layout.tsx                ← server: metadata + schema injection (GC-2)
│   │   └── page.tsx                  ← 'use client': form state (GC-2)
│   ├── about/
│   │   └── page.tsx
│   ├── reservations/
│   │   ├── layout.tsx                ← server: metadata + schema injection (GC-2)
│   │   └── page.tsx                  ← 'use client': form state (GC-2)
│   └── privacy/
│       └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx                ← GC-5: scroll-aware navbar, isTransparentState
│   │   ├── Footer.tsx                ← social links, hours, nav, PhoneLink
│   │   └── MobileStickyBar.tsx       ← GC-7: always-visible phone CTA on mobile
│   ├── ui/
│   │   ├── CTAButton.tsx             ← GC-8: primary/secondary/ghost/ghost-light variants
│   │   ├── PhoneLink.tsx             ← GC-3: tracked phone component
│   │   ├── CountUpNumber.tsx         ← IntersectionObserver-based count-up
│   │   ├── SectionReveal.tsx         ← useScrollReveal hook wrapper (fade+translate)
│   │   └── StaggerReveal.tsx         ← useStaggerReveal for card grids
│   ├── home/
│   │   ├── VideoLoopHero.tsx         ← 'use client': video loop with image fallback
│   │   ├── SocialProofBand.tsx
│   │   ├── RoomsPreviewGrid.tsx
│   │   ├── DJNightsTeaser.tsx
│   │   ├── MenuHighlights.tsx
│   │   ├── ReviewAggregateStrip.tsx
│   │   ├── PrivateEventsCTABand.tsx
│   │   └── HappyHourCallout.tsx
│   ├── rooms/
│   │   ├── RoomTierComparison.tsx
│   │   ├── RoomFeatureMatrix.tsx
│   │   ├── BookingInfoBand.tsx
│   │   └── FAQAccordion.tsx
│   ├── menu/
│   │   ├── TypographicHero.tsx
│   │   ├── FoodMenuGrid.tsx
│   │   ├── DrinkHorizontalScroll.tsx
│   │   └── HappyHourBand.tsx
│   ├── events/
│   │   ├── EventsSplitHero.tsx
│   │   ├── EventCalendar.tsx
│   │   ├── WhatToExpect.tsx
│   │   └── InstagramGrid.tsx
│   ├── private-events/
│   │   ├── PrivateEventsHero.tsx
│   │   ├── InquiryForm.tsx           ← 'use client' — GC-14 accessible form
│   │   ├── BenefitCards.tsx
│   │   ├── OccasionStrip.tsx
│   │   └── PartyStatsBar.tsx
│   ├── about/
│   │   ├── FoundingHero.tsx
│   │   ├── VerticalTimeline.tsx
│   │   ├── WhatMakesGlam.tsx
│   │   └── PressLogos.tsx
│   └── reservations/
│       ├── ReservationsHero.tsx
│       ├── ReservationForm.tsx       ← 'use client' — GC-14 accessible form
│       └── HoursLocationCard.tsx
├── data/
│   └── content.ts                   ← GC-1: single source of truth
├── lib/
│   └── seo/
│       └── schemas.ts               ← GC-6: all schema builder functions
└── hooks/
    ├── useScrollReveal.ts
    └── useStaggerReveal.ts
```

---

## Task Sequence

---

### Task 1: Project Scaffolding + Design System

**Dependencies:** None

**What to build:**

1. Initialize Next.js 14 project at `~/Desktop/fieldos/other-client-sites/glam-karaoke-v4` with TypeScript and App Router:
   ```bash
   cd ~/Desktop/fieldos/other-client-sites && npx create-next-app@14 glam-karaoke-v4 --typescript --app --tailwind --eslint --src-dir --import-alias "@/*"
   ```
   Wait for scaffold to complete. Do NOT run until the v4 directory is confirmed empty.

2. Install dependencies:
   ```bash
   npm install framer-motion lucide-react
   npm install -D autoprefixer
   ```

3. **PostCSS config (GC-9 / Tailwind v3):** Verify `postcss.config.mjs` uses:
   ```js
   export default { plugins: { tailwindcss: {}, autoprefixer: {} } }
   ```
   This project uses Tailwind v3. Do NOT use `@tailwindcss/postcss` — that is v4 only.

4. **Font setup:**
   - Download Clash Display .woff2 files from Fontshare (weights 500, 600, 700) and place at `public/fonts/`
   - Configure `next/font/local` in `src/app/layout.tsx`
   - Configure `next/font/google` for Inter (weights 400, 500, 600, 700)

5. **Tailwind config (`tailwind.config.ts`):**
   ```ts
   theme: {
     extend: {
       colors: {
         'stage-noir': '#0E1117',
         'glass-surface': '#1A2033',
         'neon-teal': '#00D9C4',
         'neon-teal-hover': '#00BFB0',
         'electric-violet': '#7C4DFF',
         'soft-white': '#F2F0F8',
         'cool-mist': '#8B8FA8',
       },
       fontFamily: {
         clash: ['var(--font-clash)', 'system-ui', 'sans-serif'],
         inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
       },
     }
   }
   ```

6. **`src/app/globals.css`:**
   - `@tailwind base; @tailwind components; @tailwind utilities;`
   - CSS custom properties for animation timing
   - `body { background: #0E1117; color: #F2F0F8; padding-bottom: 56px; }` — 56px for MobileStickyBar (GC-7)
   - `@media (min-width: 768px) { body { padding-bottom: 0; } }`
   - Animation classes: `.anim-fade-up`, `.anim-fade-left`, `.anim-fade-right` with initial `opacity: 0` + translate
   - `.in-view` class applies `opacity: 1; transform: none; transition: ...`

7. **`src/data/content.ts` (GC-1):**
   ```ts
   // GC-1: Single source of truth for all business data
   export const businessInfo = {
     name: 'Glam Karaoke',
     tagline: 'Your Night. Your Songs. Your Room.',
     phone: '(703) 942-5526',
     phoneTel: '+17039425526',
     phoneAlt: '(571) 378-0910',
     phoneAltTel: '+15713780910',
     address: '4369 John Marr Dr, Annandale, VA 22003',
     addressStreet: '4369 John Marr Dr',
     addressCity: 'Annandale',
     addressState: 'VA',
     addressZip: '22003',
     googlePlaceId: 'ChIJT5fw6AWzt4kR_11B3_sLbXo',
     email: null as string | null,       // request from client
     hoursDisplay: {
       'Monday–Thursday': '5 PM – 2 AM',
       'Friday': '5 PM – 3 AM',
       'Saturday': '3 PM – 3 AM',
       'Sunday': '3 PM – 2 AM',
     },
     happyHour: '5–8 PM, Sunday–Thursday',
     established: 'March 18, 2022',
   }

   export const reviewData = {
     ratingValue: 4.2 as number | null,
     reviewCount: 250 as number | null,
     yelpRating: 4.0 as number | null,
     yelpCount: 40 as number | null,
   }

   export const social = {
     instagram: 'glamkaraoke',
     instagramUrl: 'https://www.instagram.com/glamkaraoke/',
     facebook: null as string | null,    // request from client
     facebookUrl: null as string | null,
     yelp: null as string | null,        // request client Yelp URL
     yelpUrl: null as string | null,
   }

   export const rooms = [
     {
       id: 'duo',
       name: 'Duo Room',
       capacity: 'Up to 4 guests',
       capacityMax: 4,
       pricePerHour: 40,
       priceDisplay: 'From $40/hr',
       features: ['Private room', 'Dual karaoke system (YouTube + traditional)', 'iPad song control', 'Professional sound system', 'Club-style lighting', 'Tambourines included'],
       image: '/images/interior-2.jpg',
     },
     {
       id: 'group',
       name: 'Group Room',
       capacity: 'Up to 10 guests',
       capacityMax: 10,
       pricePerHour: 50,
       priceDisplay: 'From $50/hr',
       mostPopular: true,
       features: ['Private room', 'Dual karaoke system (YouTube + traditional)', 'iPad song control', 'Professional sound system', 'Club-style lighting', 'Tambourines included', 'Extended song queue'],
       image: '/images/ambiance-3.jpg',
     },
     {
       id: 'party-suite',
       name: 'Party Suite',
       capacity: 'Up to 20 guests',
       capacityMax: 20,
       pricePerHour: 70,
       priceDisplay: 'From $70/hr',
       features: ['Largest private room', 'Dual karaoke system (YouTube + traditional)', 'iPad song control', 'Professional sound system', 'Club-style lighting', 'Tambourines included', 'Full bar access', 'Perfect for events'],
       image: '/images/photo-9.jpg',
     },
   ]

   export const menuCategories = [
     {
       id: 'shareables',
       name: 'Shareables',
       items: [
         { name: 'Bulgogi Nachos', price: 16, description: 'Korean-marinated beef over crispy chips with pickled jalapeños' },
         { name: 'Kimchi Fried Rice', price: 14, description: 'Classic fermented kimchi with egg, scallions, sesame oil' },
         { name: 'Crispy Chicken Wings', price: 15, description: 'Tossed in your choice of soy garlic, spicy, or sweet chili' },
         { name: 'Tteok-bokki', price: 13, description: 'Spicy rice cakes in gochujang sauce — a Glam house staple' },
       ],
     },
     {
       id: 'mains',
       name: 'Mains',
       items: [
         { name: 'Bulgogi Bowl', price: 18, description: 'Marinated beef over steamed rice with pickled vegetables' },
         { name: 'Spicy Pork Bowl', price: 17, description: 'Gochujang-glazed pork over rice, topped with sesame and scallions' },
         { name: 'Chicken Karaage', price: 17, description: 'Japanese-style fried chicken with house mayo and lemon' },
       ],
     },
     {
       id: 'drinks',
       name: 'Drinks',
       items: [
         { name: 'Soju Collection', price: null, description: '16 flavors — original, yogurt, citrus, peach, grapefruit, and more' },
         { name: 'Yogurt Soju Pitcher', price: 35, description: 'The crowd favorite — smooth, slightly sweet, endlessly drinkable' },
         { name: 'Craft Cocktails', price: 14, description: 'Rotating seasonal menu — ask your server for tonight\'s specials' },
         { name: 'Draft Beer', price: 8, description: 'Korean and domestic selections on draft' },
         { name: 'Wine', price: 10, description: 'House red and white by the glass' },
       ],
     },
   ]

   export const featuredReviews = [
     {
       name: 'Sarah Johnson',
       rating: 5,
       text: 'Best karaoke bar in the whole DMV. The rooms are cozy and glamorous, the sound system was professional grade, and the staff is amazing. Will absolutely be back.',
       source: 'Google',
     },
     {
       name: 'Marcus Williams',
       rating: 5,
       text: 'Super welcoming and attentive. They showed us how to use the karaoke machine — both karaoke system and iPad provided. Club style lighting and tambourines made it feel like a real show.',
       source: 'Google',
     },
     {
       name: 'Jenny Park',
       rating: 5,
       text: 'Couldn\'t get enough. The bulgogi nachos and kimchi fried rice are a must. Great for big groups and the parking is well-lit and safe. Like a night out without the crowd watching you.',
       source: 'Google',
     },
   ]

   export const pressFeatures = [
     { publication: 'Northern Virginia Magazine', date: 'February 2025', quote: 'Stands out with its 12 private rooms' },
     { publication: 'Arlington Magazine', date: 'April 2023', quote: 'A top karaoke destination in Northern Virginia' },
   ]

   export const timeline = [
     { year: 'March 2022', event: 'Glam Karaoke opens in Annandale. 12 private rooms, one live main stage, a full Korean-American kitchen.' },
     { year: 'April 2023', event: 'Arlington Magazine names Glam a top karaoke destination in Northern Virginia.' },
     { year: '2023–2024', event: '250 Google reviews. 4.2 stars. Customers call it "the best karaoke bar in the whole DMV."' },
     { year: 'February 2025', event: 'Northern Virginia Magazine: "Stands out with its 12 private rooms."' },
     { year: '2026', event: 'Still here. Still the only Annandale venue with a live main stage and a full kitchen.' },
   ]

   // GC-4: GA4 gate
   export const ga4MeasurementId = 'G-XXXXXXXXXX'
   export const ga4IsConfigured = ga4MeasurementId !== 'G-XXXXXXXXXX'

   // Formspree or equivalent — null until client provides
   export const formEndpoint = null as string | null

   // Dev assertions (GC-1 / AP-011)
   if (process.env.NODE_ENV === 'development') {
     if (businessInfo.phone.includes('555')) console.warn('[content.ts] Placeholder phone number detected')
     if (businessInfo.address.includes('123 Main')) console.warn('[content.ts] Placeholder address detected')
   }
   ```

8. **Shared components: build in Task 1**
   - `CTAButton.tsx` — GC-8 four variants (primary/secondary/ghost/ghost-light), renders `<a>` or `<button>` based on `href` prop, min 44px height
   - `PhoneLink.tsx` — GC-3: hardcodes `href={tel:${businessInfo.phoneTel}}`, fires `trackPhoneClick(source)`, `aria-label`, accepts `className`/`children`
   - `CountUpNumber.tsx` — IntersectionObserver, counts from 0 to target, configurable duration (default 1500ms), ease-out
   - `SectionReveal.tsx` — wraps children with fade+translateY animation via Framer Motion `whileInView`
   - `StaggerReveal.tsx` — wraps card grids with 60ms per-item stagger via Framer Motion
   - `Header.tsx` — GC-5: `isTransparentState = !scrolled && isHomePage`, all 3 nav states, mobile overlay drawer, closes on route change, `{ passive: true }` scroll listener initialized before registering
   - `Footer.tsx` — NAP, hours, nav links, social icons (Instagram linked, Facebook/Yelp null-safe), PhoneLink with source `'footer'`
   - `MobileStickyBar.tsx` — GC-7: server component, `position: fixed; bottom: 0; height: 56px; md:hidden`, full-surface PhoneLink tap target, `role="complementary"`, `aria-label="Call Glam Karaoke"`

9. **`src/lib/seo/schemas.ts` (GC-6):**
   ```ts
   // Schema builders — all import from content.ts, never hold their own data
   export function buildBarOrClubSchema() { ... }   // @type: 'BarOrClub' — most specific for karaoke venue
   export function buildWebSiteSchema() { ... }
   export function buildBreadcrumbSchema(page: string) { ... }
   export function buildReservationSchema() { ... }  // on /reservations page
   ```
   All `telephone` fields use `businessInfo.phoneTel` (E.164). Never `businessInfo.phone`.

10. **Root `src/app/layout.tsx`:**
    - Imports globals.css (AP-043)
    - Applies font CSS variables
    - Renders `<Header />` + `{children}` + `<Footer />` + `<MobileStickyBar />`
    - GA4 gate (GC-4): `{ga4IsConfigured && (<Script .../>)}`
    - Injects BarOrClub schema and WebSite schema via `<Script type="application/ld+json">`
    - Root metadata: OpenGraph image configured (AP-021)
    - Viewport meta correct

11. **robots.txt + sitemap.xml:** Static files in `/public/` or generated at `/src/app/sitemap.ts`. All 7 nav pages + /privacy included. No noindex.

**Acceptance criteria:**
- `npm run build` passes with zero TypeScript errors
- All brand colors render correctly in Tailwind
- Clash Display loads at correct weights (500, 600, 700) — verify in browser
- Inter loads at correct weights (400, 500, 600)
- MobileStickyBar visible on mobile viewport, hidden at md:
- Header transitions correctly across all 3 states

**Anti-pattern checks (run before marking complete):**
- [ ] AP-024: `grep "autoprefixer" postcss.config.mjs` — must return a match
- [ ] AP-021: OG image configured in root layout.tsx metadata
- [ ] GC-1: content.ts has dual phone format + dev assertions
- [ ] GC-4: ga4IsConfigured gate wired in layout.tsx
- [ ] AP-043: `grep "globals.css" src/app/layout.tsx` — must return a match
- [ ] GC-7: MobileStickyBar `md:hidden` confirmed at 375px

---

### Task 2: Homepage (/)

**Dependencies:** Task 1

**What to build:** Full-bleed video loop hero with lower-center anchor + 8 sections. Server component (no `'use client'` at page level — VideoLoopHero is `'use client'` internally for the video element).

**Layout:** As specified in UI_DIRECTION.md — VideoLoop hero, SocialProofBand (violet), RoomsPreviewGrid (bento), DJNightsTeaser (horizontal scroll), MenuHighlights, ReviewAggregateStrip, PrivateEventsCTABand, HappyHourCallout.

**VideoLoopHero (`'use client'`):**
- `<video autoPlay muted loop playsInline preload="metadata" poster="/images/interior-2.jpg">` — poster is the static fallback image
- If no video source available at build time, render the poster image with the same gradient overlay (do NOT render a broken video element)
- Video source: `null as string | null` in content.ts — Builder wraps in conditional: `{videoSrc && <source src={videoSrc} type="video/mp4" />}`
- Gradient overlay: `linear-gradient(to top, rgba(14,17,23,0.85) 0%, rgba(14,17,23,0.3) 50%, rgba(14,17,23,0.0) 100%)`
- H1: "Your Night. Your Songs. Your Room." — Clash Display 700, lower-center, max-w-[700px]
- Subhead: "12 private rooms. Live main stage. Korean-American kitchen. Annandale, VA."
- Trust signal: 4.2★ across 250 Google Reviews — null-safe (render only if `reviewData.ratingValue && reviewData.reviewCount`)
- CTA: ghost-light "See Our Rooms →" (links to /rooms) — AP-005 compliant (soft CTA, no "Book Now" above fold)
- Secondary: PhoneLink source `'hero-desktop'` + `'hero-mobile'`
- Hero height: `h-screen md:h-screen` desktop / `h-[85vh]` mobile

**SocialProofBand:**
- Background: `#7C4DFF` Electric Violet
- 4 stats: 250 Reviews | 4.2★ | 12 Private Rooms | 4+ Years in Business
- CountUpNumber on all 4 — null-safe rendering
- Full-width, `py-12`

**RoomsPreviewGrid (Bento):**
- Three room tier cards arranged as a bento grid: Duo (small, top-left 5-col), Group (large, center elevated 7-col), Party Suite (wide, bottom full-width or 2/3 span)
- Each card: image (3:2), room name (H3 Clash), capacity badge, price badge (Neon Teal), "Book This Room →" CTAButton (links to /rooms)
- Group card: `box-shadow: 0 0 0 1.5px #00D9C4` teal ring + "Most Popular" badge
- Background: Stage Noir `#0E1117`
- Image hover: `scale-[1.03]` within `overflow-hidden rounded-2xl`
- StaggerReveal with 60ms stagger

**DJNightsTeaser:**
- Heading: "DJ NIGHTS + EVENTS" (teal eyebrow) + "Every Friday. DJ @loxs1ck."
- Horizontal scroll section — `overflow-x-auto` with `flex gap-4 pb-4`, `-mx-4 px-4` to bleed at mobile edges
- 3 event cards: date (Clash Display 700, large), event name, time, "RSVP: Call" CTA
- Background: Stage Noir
- Note: event cards are static placeholders from content.ts; actual events are managed by client

**MenuHighlights:**
- Left 40%: copy about Korean-American kitchen + happy hour badge
- Right 60%: 2×2 food photo grid using `detail-5.jpg`, `detail-6.jpg`, `detail-7.jpg`, `photo-8.jpg`
- Subtext from customer language: "Bulgogi nachos. Kimchi fried rice. 16 soju flavors."
- "See the Full Menu →" links to /menu
- Background: Glass Surface `#1A2033`

**ReviewAggregateStrip:**
- 3 named review cards from `featuredReviews` in content.ts — all with full name attribution (AP-006)
- Each card: quote, name, star rating, "Google Review" source label
- No anonymous attribution — if content.ts data is incomplete, render ReviewAggregate stat only (4.2★, 250 reviews, linked to Google)
- Background: Stage Noir

**PrivateEventsCTABand:**
- Background: Electric Violet `#7C4DFF`
- H2: "Book the Party Suite"
- Body: "Up to 20 guests. Starting from $70/hr. DJ-ready. Full bar access."
- CTA: "Request a Private Event" links to /private-events — this is AP-005 acceptable here (below fold, after desire established)

**HappyHourCallout:**
- Simple centered dark section: "Happy Hour: 5–8 PM Sunday–Thursday | Walk-ins always welcome"
- Background: Stage Noir
- Inter 400, `#F2F0F8`, with happy hour time in Neon Teal

**SEO:**
- Page title: `Glam Karaoke — Private Karaoke Rooms in Annandale, VA` (≤60 chars)
- Meta description: `Private karaoke rooms, live main stage, and Korean-American kitchen in Annandale, VA. 12 rooms. Happy hour 5–8 PM. Reserve yours today.` (≤155 chars)
- H1: "Your Night. Your Songs. Your Room." — in hero
- Canonical: `https://glamkaraokeva.com/`
- Schema: BarOrClub + WebSite in root layout
- OG image: `/og-image.jpg` (use `/images/interior-2.jpg` as source, specify in metadata)

**Analytics:** Track on this page:
- `phone_click` (PhoneLink, source: hero-desktop/hero-mobile/footer)
- `rooms_cta_click` (RoomsPreviewGrid)
- `private_events_cta_click` (PrivateEventsCTABand)

**Acceptance criteria:**
- Hero video loop plays on desktop (or poster image if no video file)
- Hero poster image covers full viewport on mobile at 85vh
- All 8 sections render with correct backgrounds
- CountUp animates on SocialProofBand when scrolled into view
- RoomsPreviewGrid bento layout renders correctly at 1280px, 768px, 375px
- DJNightsTeaser horizontal scrolls on mobile
- Horizontal scroll does not cause horizontal overflow on the full page
- ReviewAggregateStrip shows only named reviews (no anonymous attribution)

**Anti-pattern checks:**
- [ ] AP-005: First CTA is ghost-light "See Our Rooms" — confirm NOT "Book Now" or "Reserve"
- [ ] AP-006: `grep -ri "happy customer\|satisfied client\|– [A-Z]\." src/components/home/ReviewAggregateStrip.tsx` — zero matches
- [ ] AP-014: `grep "alternates" src/app/page.tsx` — canonical tag present
- [ ] AP-022: Title ≤60 chars, description ≤155 chars — count before committing
- [ ] AP-001: Nav readable at desktop + mobile home/unscrolled — transparent state, `#F2F0F8` text on dark video overlay
- [ ] AP-008: Neon Teal appears only on CTAs, trust badges, star ratings — not on dividers, icons, backgrounds
- [ ] AP-039 (animation): StaggerReveal on RoomsPreviewGrid + SocialProofBand count-up

---

### Task 3: /rooms — Rooms & Pricing

**Dependencies:** Task 1

**Layout:** Data-forward — Room tier comparison as primary visual, feature matrix as unique structural element.

**What to build:**

**PageHero:**
- Static photo hero `interior-2.jpg`, 55vh height (shorter than homepage — contrasts deliberately)
- H1 centered: "Find Your Room. Bring Your People."
- Teal eyebrow: "PRIVATE KARAOKE ROOMS"
- Background gradient: `rgba(14,17,23,0.6)` flat overlay on photo

**RoomTierComparison:**
- THREE room cards side-by-side desktop (3-col grid), stacked 1-col mobile
- Each card: photo top (3:2, `rounded-2xl`, hover scale), room name (H2), capacity badge, price badge (Neon Teal), features list, "Check Availability" PhoneLink with source `'rooms-card-[id]'`
- Group card elevated: `scale-[1.02]` + `box-shadow: 0 0 0 2px #00D9C4` + "Most Popular" badge (Neon Teal pill)
- Background: Stage Noir

**RoomFeatureMatrix:**
- Table comparison across 3 tiers — rows = features
- Features to compare: Sound System | Display Type | Song Library | iPad Control | Tambourines | Min Party Size | Max Party Size | Price per Hour
- Desktop: `<table>` with 4 columns (feature name + 3 rooms), sticky first column
- Mobile: 3 stacked comparison cards (one per room), each listing all features — NOT a horizontal scroll table (table is too wide for mobile)
- Background: Glass Surface `#1A2033`
- This is the unique structural element of /rooms — no other FieldOS page has a feature comparison matrix

**BookingInfoBand:**
- Dark Glass Surface card, centered
- "Rooms fill fast on weekends — reservations suggested."
- PhoneLink large, source `'rooms-booking-band'`
- Background: Stage Noir

**FAQAccordion:**
- 5 Q&A items addressing common questions from CLIENT_BRIEF customer language:
  1. Do I need a reservation or can I walk in?
  2. Can I bring my own drinks? (BYOB policy)
  3. How does the song selection system work? (YouTube + traditional dual system)
  4. Can we order food in the room?
  5. What's the minimum group size?
- Accordion is inline expand/collapse — no full-page modal
- Background: Glass Surface

**SEO:**
- Title: `Private Karaoke Rooms — Glam Karaoke Annandale VA` (≤60 chars)
- Meta description: `Choose from Duo, Group, or Party Suite private karaoke rooms. From $40/hr. Professional sound, iPad song control, full bar. Walk-ins welcome.` (≤155 chars)
- H1: "Find Your Room. Bring Your People."
- Schema: BreadcrumbList for /rooms
- Canonical: `https://glamkaraokeva.com/rooms`

**Anti-pattern checks:**
- [ ] AP-014: canonical present
- [ ] AP-022: title/description character counts
- [ ] AP-039: RoomTierComparison StaggerReveal present
- [ ] AP-015: `npm run build` passes after this task

---

### Task 4: /menu — Food & Drinks

**Dependencies:** Task 1

**Layout:** Asymmetric editorial grid — typographic hero (no photo), food grid with photography as accents, horizontal drink scroll.

**What to build:**

**TypographicHero:**
- No photography — typographic only (unique on this site — intentional contrast)
- Background: Stage Noir with subtle CSS noise grain overlay at 3% opacity (`background-image: url("data:image/svg+xml...")`)
- H1 Clash Display 700: "Korean-American Kitchen" — Neon Teal for "Korean-American"
- Subhead: "Full Bar · 16 Soju Flavors · Happy Hour 5–8 PM"
- Category pills/tabs: Food | Drinks | Happy Hour — anchor links to sections below
- No CTA above fold (menu page is informational)

**FoodMenuGrid:**
- Categories from content.ts: Shareables, Mains
- Each category: `<section>` with H2 category name, then item grid
- Item row: name (H3), price (Neon Teal, Inter 600), 1-line description (Inter 400, Cool Mist)
- Photography placement: `detail-5.jpg`, `detail-6.jpg`, `detail-7.jpg` placed as full-width image breaks between categories — NOT as card headers. Creates editorial flow.
- Items: 2-column grid desktop, 1-column mobile
- Background: Stage Noir → Glass Surface (alternating by category)

**DrinkHorizontalScroll:**
- Section heading: "THE BAR" + teal eyebrow "DRINKS + SOJU"
- 6 drink highlight cards in horizontal scroll container: `overflow-x-auto flex gap-5 pb-4 -mx-4 px-4`
- Each card: drink name (H3 Clash), tagline (Cool Mist), price (Neon Teal, null-safe — if price is null, render "Ask your server")
- Cards: Glass Surface background, `rounded-2xl`, 280px min-width (ensures partial next card visible, signals scrollability)
- Background section: Glass Surface
- This is the second horizontal scroll moment on the site — tied to /menu only

**HappyHourBand:**
- Background: Electric Violet `#7C4DFF`
- Large centered: "Happy Hour · 5–8 PM · Sunday–Thursday"
- Sub: "Half-off select drinks. No cover charge."
- No CTA — informational break

**MenuCTA:**
- "Ready to order? We'll bring it to your room."
- PhoneLink large, source `'menu-cta'`
- Background: Stage Noir

**SEO:**
- Title: `Menu — Korean-American Kitchen & Full Bar | Glam Karaoke` (≤60 chars — NOTE: this is exactly 60, verify count)
- Meta description: `Korean-American small plates, bulgogi nachos, kimchi fried rice, 16 soju flavors, and craft cocktails. Happy hour 5–8 PM Sun–Thu.` (≤155 chars)
- H1: "Korean-American Kitchen"
- Canonical: `https://glamkaraokeva.com/menu`

**Anti-pattern checks:**
- [ ] AP-014: canonical present
- [ ] AP-010: No health inspection score displayed — N/A for karaoke venue (not a restaurant-category trust signal here)
- [ ] AP-022: title/description counts
- [ ] Horizontal scroll does not cause full-page horizontal overflow — verify with `overflow-x: hidden` on wrapper

---

### Task 5: /events — Events & DJ Nights

**Dependencies:** Task 1

**Layout:** Story scroll — split-screen hero, calendar, progressive story moments, Instagram grid.

**What to build:**

**EventsSplitHero:**
- Split-screen: Left 50% atmospheric photography (`ambiance-4.jpg`), Right 50% event schedule
- Left: photo with `rgba(14,17,23,0.4)` overlay — atmosphere, not fully darkened
- Right: Background Stage Noir, large type: "Every Friday." (Clash Display 700, 48px) — "DJ @loxs1ck." (Neon Teal), + "Doors open at 5 PM"
- Desktop: right panel sticky on scroll (next 2 sections) — `sticky top-[80px]` with enough height
- Mobile: image top (40vh), content below — no sticky behavior
- No hero CTA (section below provides the calendar action)

**EventCalendar:**
- Month heading (current month) + simple 7-column grid (Mon–Sun headers, day cells)
- Recurring events: Every Friday marked with a Neon Teal "DJ Night" badge on the day cell
- No 3rd party widget — pure CSS/HTML calendar grid built from JS Date
- Cards for upcoming events (next 4 Fridays + any special events from content.ts):
  - Date number large (Clash 700, Neon Teal), event name, DJ name, time, "RSVP: Call (703) 942-5526"
- Background: Glass Surface

**WhatToExpect (Story scroll):**
- 3 moments revealed progressively with Framer Motion `whileInView`
- Beat 1: "Arrive early. Happy hour hits until 8. Your room is ready." — soft teal accent on "happy hour hits until 8"
- Beat 2: "Rooms open. Main stage goes live. Pick your first song." — soft teal on "Main stage goes live"
- Beat 3: "Late night. The crowd finds its voice. You find yours." — full-width text, centered
- Each beat: full-width typographic section, 60vh min height, background image faded at 20% opacity (alternating `ambiance-3.jpg`, `photo-8.jpg`, `photo-10.jpg`)
- Framer Motion: each beat `initial={{ opacity: 0, y: 24 }}` → `whileInView={{ opacity: 1, y: 0 }}` with `once: true`

**InstagramGrid:**
- Eyebrow: "FOLLOW THE NIGHT" — H2: "@glamkaraoke"
- Static image grid: 4 images from `public/images/` (best atmosphere photos) in a 4-column grid desktop, 2-column mobile
- Each image links to `https://www.instagram.com/glamkaraoke/` (target `_blank`, `rel="noopener noreferrer"`)
- "Follow @glamkaraoke" CTAButton (ghost variant) below grid — links to Instagram
- NOTE: No Instagram API — static images only. Add a code comment: `// Static IG preview — update images seasonally; no API key required`
- Background: Stage Noir

**EventsCTA:**
- "Want the whole stage for your group?"
- CTAButton primary: "Plan a Private Event →" — links to /private-events
- Background: Electric Violet (violet CTA band)

**SEO:**
- Title: `DJ Nights & Events — Glam Karaoke Annandale VA` (≤60 chars)
- Meta description: `Every Friday night: DJ @loxs1ck live. Private karaoke rooms, main stage events, themed nights. Happy hour until 8 PM Sun–Thu.` (≤155 chars)
- H1: "Events & DJ Nights" (in page hero or first visible heading)
- Canonical: `https://glamkaraokeva.com/events`

**Anti-pattern checks:**
- [ ] AP-014: canonical present
- [ ] AP-005: No booking CTA above fold — EventsCTA is below fold ✓
- [ ] WhatToExpect Framer Motion whileInView confirmed on all 3 beats
- [ ] Instagram links open in new tab with correct rel attribute
- [ ] AP-022: title/description counts

---

### Task 6: /private-events — Private Events Lead Page

**Dependencies:** Task 1
**Note:** This page has an interactive form — requires GC-2 split (server `layout.tsx` for metadata/schema + client `page.tsx` for form).

**What to build:**

**`src/app/private-events/layout.tsx` (server component):**
- Exports `metadata` with title, description, canonical
- Injects ReservationSchema or EventVenueSchema via `<Script type="application/ld+json">`
- Comment: `// Schemas injected here: EventReservation. Site-wide BarOrClub schema is in root layout.tsx.`

**`src/app/private-events/page.tsx` (`'use client'`):**

**PrivateEventsHero with overlapping InquiryFormCard:**
- Full-bleed photography (`photo-9.jpg`), text overlay
- H1 right-of-center: "Your Group. Your Soundtrack. Your Night."
- Teal eyebrow: "PRIVATE EVENTS + PARTY SUITE"
- The `InquiryFormCard` overlaps the hero bottom boundary:
  - `absolute` positioned at bottom of hero, extends below hero boundary with `z-10`
  - On mobile: not overlapping — form card sits directly below hero image
  - Form card background: Glass Surface `#1A2033`, `rounded-2xl`, `shadow-2xl`
- Hero height: `70vh` desktop / `50vh` mobile (shorter — form card is in view)

**InquiryForm (within InquiryFormCard):**
- Fields (GC-14 accessible pattern):
  - Name (text, required)
  - Group Size (select: 2–4 guests / 5–10 guests / 11–20 guests, required)
  - Preferred Date (date input, required)
  - Phone Number (tel, required) — `autoComplete="tel"`
  - Email (email, optional)
  - Notes (textarea, optional, max 300 chars)
- Submit: "Request Availability" — primary CTAButton, full-width on mobile (AP-005: NOT "Book Now")
- Reassurance below submit: "We respond within 2 hours during business hours. No obligation."
- Success state: form replaced with confirmation card (Clash Display H3 + teal checkmark)
- Error states: field-level inline errors with `role="alert"`, `aria-invalid`, `aria-describedby` (GC-14)
- Form action: if `formEndpoint` in content.ts is null, form submits via `mailto:` link as fallback. Add comment: `// TODO: replace with Formspree ID when client provides`
- `prefers-reduced-motion`: disable entrance animation on form card if preference set

**WhyChoosePrivateGlam:**
- 3 benefit cards (asymmetric cluster — NOT uniform 3-col grid):
  - Left card (tall): "Dedicated Host" — your own staff member for the night
  - Center card (wide): "Full AV Setup" — professional sound system, HD displays, both karaoke systems
  - Right card (tall): "Custom Food + Drink Packages" — menu served directly to your room
- Background: Stage Noir (contrast with Glass Surface form card above)
- StaggerReveal on cards

**OccasionStrip:**
- "Perfect for..." — horizontal strip with icon + label badges
- Occasions: Birthday Parties | Bachelorettes | Corporate Outings | Anniversaries | Game Nights | Any Night You Want to Own
- Background: Glass Surface
- Lucide-react icons for each (🎂 → Cake, 🥂 → Wine, 💼 → Briefcase, etc.)
- Inter 500, 14px labels below icons

**PartyStatsBar:**
- Background: Electric Violet `#7C4DFF`
- 3 stats: "Party Suite holds 20 guests" | "From $70/hr" | "Full bar access included"
- CountUpNumber on numeric values
- Clash Display 700 for numbers, Inter for labels

**TestimonialsCards:**
- 2 review cards focused on group/party experiences from `featuredReviews`
- Full first-name + last-name attribution (AP-006)
- If fewer than 2 party-specific reviews available: render ReviewAggregateStat (4.2★, 250 reviews) as alternative trust signal
- Background: Stage Noir

**FinalInquiryCTA:**
- Repeated: "Ready to plan your event?"
- PhoneLink large (source: `'private-events-final-cta'`) OR secondary form link "Fill Out the Form →" (scrolls to form)
- Background: Glass Surface

**SEO:**
- Title: `Private Events & Party Bookings — Glam Karaoke` (≤60 chars)
- Meta description: `Book Glam Karaoke's Party Suite for birthdays, bachelorettes, and corporate events. Up to 20 guests, from $70/hr, full bar access.` (≤155 chars)
- H1: "Your Group. Your Soundtrack. Your Night."
- Canonical: `https://glamkaraokeva.com/private-events`

**Anti-pattern checks:**
- [ ] GC-2: `layout.tsx` exports metadata + schema; `page.tsx` has `'use client'` at top
- [ ] GC-14: `aria-describedby`, `aria-invalid`, `role="alert"` on all form error states
- [ ] AP-005: Submit button reads "Request Availability" — NOT "Book Now"
- [ ] AP-006: All testimonial cards have full-name attribution
- [ ] AP-014: canonical in layout.tsx (not page.tsx)
- [ ] AP-022: title/description counts
- [ ] Mobile: overlapping form card does NOT overlap on mobile (stacks below hero)

---

### Task 7: /about — About Glam

**Dependencies:** Task 1

**Layout:** Timeline/process visualization — vertical journey from founding to present.

**What to build:**

**FoundingHero:**
- Background: `storefront-1.jpg` with `rgba(14,17,23,0.6)` overlay
- H1: "Glam Karaoke" (Clash Display 700, large)
- Eyebrow (before H1): "EST. MARCH 18, 2022 · ANNANDALE, VA"
- Founding statement below H1: "We opened Glam to give Northern Virginia the night-out destination it deserved. 12 private rooms. One live main stage. A full kitchen."
- Height: 60vh

**VerticalTimeline:**
- Left vertical teal line with dot markers
- Timeline items from `timeline` array in content.ts
- Each item: year badge (Neon Teal pill), event description (Inter 400)
- Animation: Framer Motion draws the line progressively — line `scaleY: 0 → 1` as section enters view, dots scale in with 200ms stagger per item
- Mobile simplification: no line animation — fade-up per item only
- Background: Stage Noir

**WhatMakesGlam:**
- 2×2 card grid (Glass Surface bg)
- 4 pillars: Private Rooms | Live Main Stage | Korean-American Kitchen | 16 Soju Flavors
- Each card: icon (lucide-react), title (H3), 2-sentence description
- StaggerReveal

**PressLogos:**
- "AS FEATURED IN" — slim strip
- Northern Virginia Magazine + Arlington Magazine — wordmarks in `#F2F0F8` (if logo files unavailable, use styled text)
- With quote snippets from `pressFeatures` in content.ts
- Background: Glass Surface

**ReviewAggregateStat:**
- Large centered: "4.2★" in Neon Teal Clash Display 700, "across 250 Google Reviews" in Inter
- Link to Google Maps review URL (null-safe: use `googlePlaceId` to construct URL)
- Background: Stage Noir

**AboutCTA:**
- "Ready to come in?"
- PhoneLink source `'about-cta'`
- CTAButton ghost: "Book a Room →" — links to /reservations
- Background: Glass Surface

**SEO:**
- Title: `About Glam Karaoke — Annandale's Nightlife Destination` (≤60 chars)
- Meta description: `Glam Karaoke opened in March 2022 to bring 12 private rooms, a live main stage, and Korean-American kitchen to Annandale, VA. 4.2★ across 250 reviews.` (≤155 chars — NOTE: verify count; trim if needed)
- H1: "Glam Karaoke" (in founding hero)
- Canonical: `https://glamkaraokeva.com/about`

**Anti-pattern checks:**
- [ ] AP-006: No anonymous testimonials — PressLogos uses press attribution, ReviewAggregateStat uses aggregate link, no anonymous customer quotes
- [ ] AP-014: canonical present
- [ ] AP-039: VerticalTimeline Framer Motion animation confirmed
- [ ] AP-022: title/description counts

---

### Task 8: /reservations — Book a Room

**Dependencies:** Task 1
**Note:** Interactive form — requires GC-2 split.

**What to build:**

**`src/app/reservations/layout.tsx` (server component):**
- Exports metadata + canonical
- Injects ReservationSchema

**`src/app/reservations/page.tsx` (`'use client'`):**

**ReservationsHero:**
- No photography — intentionally minimal (unique in this build)
- Background: Stage Noir, full-width
- Height: 50vh
- Centered text: H1 "Reserve Your Room." (Clash Display 700, 52px desktop / 36px mobile)
- Subhead: "Weekends book fast — call us or fill out the form below." (Inter 400, Cool Mist)
- This stripped hero creates immediate focus on the form below

**ReservationForm (below hero):**
- Background: Glass Surface `#1A2033`, centered card, max-width 600px, `rounded-2xl`
- Fields (GC-14 accessible pattern):
  - Your Name (text, required)
  - Number of Guests (select: 1–4 / 5–10 / 11–20, required)
  - Preferred Date (date input, required)
  - Preferred Time (select: Afternoon (3–5 PM) / Early Evening (5–8 PM) / Evening (8 PM–midnight) / Late Night (midnight–close), required)
  - Phone Number (tel, required) — `autoComplete="tel"`
  - Email (email, optional)
  - Special Requests (textarea, optional)
- Submit: "Request My Room" (primary CTAButton, full-width mobile)
- Reassurance: "We'll confirm your room within 2 hours during business hours."
- Form submission: formspree or mailto fallback (null-safe from content.ts)
- Success state: confirmation card with "You're on the list. We'll call to confirm."

**OrSplitLine:**
- Full-width `—— or call us directly ——` (Cool Mist text, thin lines either side)
- Below: PhoneLink `(703) 942-5526` at 36px Inter 600 Neon Teal, source `'reservations-split'`
- Touch target: 48px minimum height

**QuickFacts:**
- 4-column icon + text strip desktop, 2×2 mobile
- Facts: Walk-ins Welcome | Rooms from $40/hr | Happy Hour 5–8 PM | 12 Rooms Available

**HoursLocationCard:**
- Glass Surface card
- Hours grid (from content.ts `hoursDisplay`)
- Address with Google Maps link using `googlePlaceId`
- PhoneLink source `'reservations-hours-card'`

**SEO:**
- Title: `Book a Karaoke Room — Glam Karaoke Annandale VA` (≤60 chars)
- Meta description: `Reserve a private karaoke room at Glam Karaoke in Annandale, VA. Duo from $40/hr, Group from $50/hr, Party Suite from $70/hr. Call or submit online.` (≤155 chars — verify count)
- H1: "Reserve Your Room."
- Canonical: `https://glamkaraokeva.com/reservations`

**Anti-pattern checks:**
- [ ] GC-2: layout.tsx + page.tsx split confirmed
- [ ] GC-14: form accessible error pattern on all fields
- [ ] AP-005: "Request My Room" — not "Book Now" (this page is explicitly the reservation page — "Reserve" is acceptable here; AP-005 applies to the hero, not dedicated booking page)
- [ ] AP-014: canonical in layout.tsx

---

### Task 9: /privacy — Privacy Policy

**Dependencies:** Task 1

**What to build:**
- Server component (no client state)
- Standard privacy policy content (GDPR/CCPA baseline — name, contact info collection, Google Analytics disclosure if ga4IsConfigured)
- Layout: Glass Surface card, single-column prose, max-w-3xl centered, standard section spacing
- No hero photography
- Title: `Privacy Policy — Glam Karaoke` (≤60 chars)
- Canonical: `https://glamkaraokeva.com/privacy`
- Footer must link to /privacy — verify in Task 1's Footer component

**Anti-pattern checks:**
- [ ] AP-014: canonical present
- [ ] AP-018: `/privacy` route exists + footer links to it — `grep -r "privacy" src/components/layout/Footer.tsx` must return a match

---

### Task 10: Analytics + Schema Finalization

**Dependencies:** All page tasks complete

**What to build:**

1. **GA4 gate verification:** `grep "G-XXXXXXXXXX" src/data/content.ts` — placeholder must still be present (real ID replaced before delivery). Verify `ga4IsConfigured = false` with placeholder present — this is CORRECT behavior.

2. **Schema audit:**
   - Root `layout.tsx`: BarOrClub schema + WebSite schema — verify telephone uses `phoneTel` E.164 format (AP-013)
   - `/private-events/layout.tsx`: Event or reservation schema injected
   - `/reservations/layout.tsx`: Reservation schema injected
   - All pages: BreadcrumbList schema injected on non-home pages
   - Run: `grep -A2 "'telephone'\|\"telephone\"" src/lib/seo/schemas.ts | grep -v "phoneTel\|+1"` — must return NO matches

3. **Canonical audit:**
   - `grep -rL "alternates" src/app/*/page.tsx src/app/page.tsx src/app/*/layout.tsx` — must return no files

4. **Sitemap verification:** All 8 pages (including /privacy) present in sitemap.xml or sitemap.ts

5. **Analytics events finalized:**
   - `phone_click` — all PhoneLink sources: hero-desktop, hero-mobile, header_desktop, header_mobile, sticky_bar, footer, rooms-booking-band, rooms-card-duo/group/party-suite, menu-cta, about-cta, private-events-final-cta, reservations-split, reservations-hours-card
   - `inquiry_form_submit` — /private-events form submission
   - `reservation_form_submit` — /reservations form submission
   - `rooms_cta_click` — from homepage bento grid
   - `private_events_cta_click` — from homepage CTA band

**Anti-pattern checks:**
- [ ] AP-013: `grep -A2 "'telephone'" src/lib/seo/schemas.ts | grep "phoneTel"` — must return matches
- [ ] AP-014: `grep -rL "alternates" src/app/*/page.tsx src/app/page.tsx` — must return no files
- [ ] AP-018: `/privacy` route exists; Footer links to it
- [ ] GC-4: `grep "G-XXXXXXXXXX" src/data/content.ts` — placeholder still in place
- [ ] AP-015: `npm run build` passes with zero TypeScript errors

---

## Launch Checklist

```
BUILD:
[ ] npm run build passes with zero TypeScript errors
[ ] npm run build passes with zero ESLint errors

CONTENT:
[ ] All pages render without placeholder text ([...] bracket tokens)
[ ] Run: grep -ri "\[.*\]" src/ | grep -v "//\|{/\*" — zero matches
[ ] Phone: (703) 942-5526 — real, verified, not 555
[ ] Address: 4369 John Marr Dr, Annandale, VA 22003 — confirmed
[ ] All images have descriptive alt text — no fabricated biographical claims

MOBILE (375px):
[ ] All pages render correctly at 375px viewport
[ ] Phone number click-to-call works on mobile
[ ] MobileStickyBar visible on all pages, hidden at md:
[ ] RoomsPreviewGrid renders as stacked 1-col on mobile
[ ] DJNightsTeaser horizontal scroll works on mobile touch
[ ] DrinkHorizontalScroll works on mobile touch
[ ] Hero video or poster image covers 85vh on mobile
[ ] Form inputs minimum 52px height on mobile
[ ] All CTAButtons minimum 48px touch target on mobile

SEO:
[ ] All 8 pages have canonical tags
[ ] All titles ≤60 chars — verified per page
[ ] All meta descriptions ≤155 chars — verified per page
[ ] robots.txt present at /public/robots.txt
[ ] sitemap.xml includes all 8 pages
[ ] OG image configured in root layout

SCHEMA:
[ ] BarOrClub schema present in root layout
[ ] All schema telephone fields use E.164 format (+17039425526)
[ ] BreadcrumbList on all non-home pages
[ ] Run: grep -A2 "'telephone'" src/lib/seo/schemas.ts | grep "phoneTel" — matches

ANALYTICS:
[ ] ga4IsConfigured = false (correct — placeholder ID in place)
[ ] GA4 gate verified: no network requests when ga4IsConfigured is false
[ ] All phone_click events fire on PhoneLink interaction
[ ] Form submit events fire on both inquiry + reservation forms

ANTI-PATTERNS:
[ ] AP-001: Nav readable at all 3 states — home unscrolled, home scrolled, non-home
[ ] AP-005: First visible CTA on homepage is "See Our Rooms" (ghost) — not "Book Now"
[ ] AP-006: grep -ri "happy customer|satisfied client|– [A-Z]\." src/ — zero matches
[ ] AP-008: Neon Teal appears only on CTAs, badges, star ratings — not decoration
[ ] AP-011: No 555 phone, no "123 Main" address
[ ] AP-014: All canonical tags present
[ ] AP-018: /privacy route exists + footer links to it
[ ] AP-022: All titles ≤60 chars, descriptions ≤155 chars
[ ] AP-024: autoprefixer in postcss.config.mjs
[ ] AP-039: IntersectionObserver/Framer Motion whileInView present across multiple files
[ ] AP-039: hover:scale or similar hover effects on cards and CTAButtons

CONVENTIONS:
[ ] GC-1: content.ts is single source of truth — no business data hardcoded in components
[ ] GC-2: /private-events and /reservations have layout.tsx + page.tsx split
[ ] GC-3: All phone links use PhoneLink component — no raw <a href="tel:">
[ ] GC-4: ga4IsConfigured gate in root layout
[ ] GC-5: isTransparentState pattern in Header.tsx; scroll initialized before listener
[ ] GC-6: All schema telephone uses businessInfo.phoneTel
[ ] GC-7: MobileStickyBar is server component, no scroll-based show/hide logic
[ ] GC-8: CTAButton has all 4 variants; no style prop accepted
[ ] GC-9: postcss.config.mjs matches Tailwind v3 pattern
[ ] GC-14: All form inputs have aria-describedby, aria-invalid, role="alert" on errors

DELIVERY READY:
[ ] Convention comment trail present in key files (// GC-N: reason)
[ ] No AI attribution in any file (commits, comments, docs)
[ ] Social links: Instagram to https://www.instagram.com/glamkaraoke/ — confirmed
[ ] Facebook/Yelp URLs null-safe (no broken links)
[ ] Video src null-safe (no broken video element if no video file provided)
```
