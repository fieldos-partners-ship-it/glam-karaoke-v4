# SEO Technical Audit — Glam Karaoke
**Date:** 2026-04-15
**Reviewer:** FieldOS Council v2 — SEO Agent
**Site:** glamkaraokeva.com
**Pages audited:** /, /menu, /rooms, /events, /private-events, /about, /reservations, /privacy

---

## P1 — Must Fix

### P1-01 — No dedicated /contact page
**Impact:** No crawlable contact page means Google cannot verify a complete NAP in one place. Aspirational venue buyers (birthday parties, bachelorettes, corporate) expect a dedicated contact page — its absence is an implicit trust failure. The site routes all contact to phone, but there is no URL that a Google business snippet or local search result can point to for "contact" queries.
**File:** `src/app/` — no `contact/` directory exists
**Fix:** Create `src/app/contact/page.tsx` with:
- Unique title: `"Contact Glam Karaoke — Annandale, VA | (703) 942-5526"` (60 chars)
- Canonical tag pointing to `/contact`
- H1: "Contact Glam Karaoke"
- Full NAP in crawlable text (not just via component)
- Google Maps embed (embed URL needed from client — use `place_id:ChIJT5fw6AWzt4kR_11B3_sLbXo`)
- PhoneLink + address block
- Hours summary

---

### P1-02 — /reservations page has NO metadata (title, description, canonical)
**Impact:** The reservations page is the primary conversion page of the site — the highest-priority ranking target after the homepage. Without a title tag, Google generates its own from whatever it finds on the page, which is unpredictable and almost always worse. This page will not rank for "book karaoke room Annandale" or "karaoke reservation Annandale VA."
**File:** `src/app/reservations/page.tsx` — lines 1-15
```tsx
// Current: no export const metadata, no title, no description, no alternates
export default function ReservationsPage() {
```
**Fix:** Add metadata export to `src/app/reservations/page.tsx`. Note that the metadata CAN be in the layout (`src/app/reservations/layout.tsx`) and it IS there — but the layout file shows it's correctly configured. The **actual issue** is the metadata IS present in `layout.tsx` (lines 8-15) but NOT in `page.tsx`. In Next.js App Router, metadata in a segment layout applies to all children. The layout sets:
```tsx
title: 'Book a Karaoke Room — Glam Karaoke Annandale VA',
description: 'Call Glam Karaoke...',
alternates: { canonical: `${siteUrl}/reservations` }
```
This is correctly handled by the layout — **not a P1**. Reclassify to P3 documentation note.

**REVISED P1-02 REPLACEMENT:** See P1-03 below.

---

### P1-03 — No 404 / not-found page
**Impact:** When Google crawls any URL that doesn't exist (broken links from other sites, old URLs, misspellings), it receives Next.js's default 404 — which is not branded, does not contain NAP, and does not provide recovery paths. This is an indexing signal issue: a bare 404 response without a helpful page is a minor signal that the site is not well-maintained.
**File:** `src/app/not-found.tsx` — does not exist
**Fix:** Create `src/app/not-found.tsx` with:
- Brand-consistent 404 message
- Link to `/rooms` and `/reservations`
- PhoneLink CTA
- NoIndex metadata (robots: noindex)

---

### P1-04 — FAQAccordion has FAQ content but NO FAQPage schema
**Impact:** The FAQ section on `/rooms` has 5 well-written question/answer pairs covering walk-ins, BYOB, song selection, food, and minimums. Without FAQPage schema, Google cannot render these as FAQ rich results in search. FAQ rich results expand the search result footprint by 2-4x in height — a significant CTR improvement, especially on mobile where a taller result dominates the screen. This is a direct missed rich result.
**File:** `src/components/rooms/FAQAccordion.tsx` — lines 10-36 (FAQ data)
**File:** `src/lib/seo/schemas.ts` — no `buildFAQSchema` function exists
**Fix:**
1. Add `buildFAQSchema()` to `src/lib/seo/schemas.ts`:
```ts
export function buildFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
```
2. Create `src/app/rooms/layout.tsx` (currently missing) to inject FAQ schema via `<Script>` tag
3. Export the FAQ data from `src/data/content.ts` so it's accessible to both the component and the schema builder

---

## P2 — Should Fix

### P2-01 — OG tags missing on all interior pages (only set in root layout)
**Impact:** The root layout (`src/app/layout.tsx` lines 40-54) sets global OG tags with a single image and generic description. Interior pages (rooms, menu, events, private-events, about, reservations) do NOT override `og:description` or `og:url` via their individual page metadata. When shared on social, all pages show the homepage description. For an aspirational venue where social sharing drives traffic, this is a material loss.
**File:** `src/app/rooms/page.tsx`, `src/app/menu/page.tsx`, `src/app/events/page.tsx`, `src/app/about/page.tsx`
**Fix:** Add `openGraph` key to each page's metadata export. Example for /rooms:
```tsx
openGraph: {
  title: 'Private Karaoke Rooms — Glam Karaoke Annandale VA',
  description: 'Duo from $40/hr, Group from $50/hr, Party Suite from $70/hr. Professional sound, iPad control, club lighting.',
  url: `${siteUrl}/rooms`,
  images: [{ url: '/images/photo-10.jpg', width: 1200, height: 630, alt: 'Private karaoke room at Glam Karaoke Annandale VA' }],
},
```

---

### P2-02 — BreadcrumbList schema not deployed on any page
**Impact:** `buildBreadcrumbSchema()` is defined in `src/lib/seo/schemas.ts` (line 64) but is never called anywhere in the codebase — no page layout imports or uses it. Breadcrumb schema replaces raw URLs in search results with readable paths (e.g., "Glam Karaoke > Rooms"), increasing CTR and signaling site structure to Google.
**File:** `src/lib/seo/schemas.ts` line 64 (function exists); no calls found in any page file
**Fix:** Add breadcrumb schema injection to each interior page layout. For pages that don't have a dedicated `layout.tsx` (rooms, menu, events, about), either create a layout file or inject the schema via a server component wrapper. At minimum, deploy breadcrumbs on: /rooms, /menu, /events, /private-events, /about, /reservations.
Example for /rooms (add to `src/app/rooms/layout.tsx` — needs to be created):
```ts
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: siteUrl },
  { name: 'Private Karaoke Rooms', url: `${siteUrl}/rooms` },
])
```

---

### P2-03 — About page H1 contains no service keyword or location signal
**Impact:** The About page H1 (`src/components/about/FoundingHero.tsx` line 36) is literally "Glam Karaoke" — the business name alone. The page title is `"About Glam Karaoke — Annandale's Nightlife Destination"` which is good, but the H1 must reinforce the keyword for Google. A bare business name H1 wastes the most powerful on-page signal.
**File:** `src/components/about/FoundingHero.tsx` — line 36
```tsx
<h1 className="menu-heading mb-4 text-[52px] md:text-[76px]">
  Glam Karaoke  {/* ← no keyword, no location */}
</h1>
```
**Fix:** Update H1 to include a differentiator and location:
```tsx
Annandale's Karaoke Destination
```
Or: `"Glam Karaoke — Annandale, VA"` — either brings in the location keyword.

---

### P2-04 — Events page H1 lacks venue name and location — thin keyword signal
**Impact:** The events page H1 (`src/components/events/EventsSplitHero.tsx` line 36) is `"Every Friday. DJ @loxs1ck."` — evocative copy, but contains zero crawlable keywords. Google cannot determine this page is about a karaoke venue's DJ nights in Annandale from the H1 alone. The page title has "Glam Karaoke Annandale VA" but the H1 needs to reinforce it.
**File:** `src/components/events/EventsSplitHero.tsx` — line 36
```tsx
<h1 className="menu-heading mb-4 text-[48px] md:text-[68px]">
  Every Friday.<br />
  DJ @loxs1ck.  {/* ← no venue, no location */}
</h1>
```
**Fix:** Retain the vibe headline but add a supporting keyword eyebrow that reads like body text, OR update H1:
```tsx
DJ Nights at Glam Karaoke — Every Friday
```

---

### P2-05 — /menu H1 is the data title string "Glam Karaoke Menu." — minimal keyword
**Impact:** `src/components/menu/TypographicHero.tsx` line 63 renders the `menuExperience.heroTitle` value: `"Glam Karaoke Menu."` — This is fine (business name + "Menu"), but misses the location keyword and cuisine specificity that Google needs for local searches like "Korean food Annandale VA" or "karaoke bar menu Annandale."
**File:** `src/data/content.ts` line 158 (`heroTitle: 'Glam Karaoke Menu.'`)
**File:** `src/components/menu/TypographicHero.tsx` line 63
**Fix:** Update `heroTitle` in content.ts:
```ts
heroTitle: 'Glam Karaoke Kitchen & Bar — Annandale, VA'
```

---

### P2-06 — Sitemap includes /events but /events is in the sitemap as a recurring page without lastmod reflecting actual event data
**Impact:** Minor — the sitemap (`src/app/sitemap.ts` line 27) lists /events with `changeFrequency: 'weekly'` and `priority: 0.8`, which is correct. However, `lastModified: now` means every build tells Google this page changed today regardless of actual content changes. This causes unnecessary crawl budget usage. Low severity but worth noting.
**File:** `src/app/sitemap.ts` — lines 27-33
**Fix:** For static event data, use a hardcoded `lastModified` date tied to when the event schedule last changed, rather than `now`. This is minor — acceptable to leave as-is for launch.

---

### P2-07 — Google Maps embed missing on /reservations — reduces local signal
**Impact:** The /reservations page and HoursLocationCard only link out to Google Maps (`CTAButton href="https://www.google.com/maps/place/..."`) rather than embedding it. For a business where customers visit in person, an embedded map is a P2 local SEO signal: it proves physical presence to Google's local algorithm. The /contact page (not built yet per P1-01) should have the embed, and /reservations should as well.
**File:** `src/components/reservations/HoursLocationCard.tsx` — line 74 (only "Open in Maps" link, no embed)
**Fix:** When the /contact page is built (P1-01), embed the Google Maps iframe there. For /reservations, add a simple iframe embed beneath the HoursLocationCard address:
```html
<iframe
  src="https://www.google.com/maps/embed/v1/place?key=[API_KEY]&q=place_id:ChIJT5fw6AWzt4kR_11B3_sLbXo"
  width="100%"
  height="300"
  style="border:0;"
  allowfullscreen
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  title="Glam Karaoke location map"
/>
```
Note: Requires Google Maps Embed API key from client.

---

### P2-08 — Title tag for /menu is 52 characters — format mismatch from other pages
**Impact:** The /menu title `"Menu — Korean-American Kitchen & Bar | Glam Karaoke"` is 52 chars (within limit) but leads with a generic "Menu" rather than a keyword-rich opener. Compare /rooms: `"Private Karaoke Rooms — Glam Karaoke Annandale VA"` — location keyword in title. /menu has no Annandale mention in the title tag.
**File:** `src/app/menu/page.tsx` — line 11
```tsx
title: 'Menu — Korean-American Kitchen & Bar | Glam Karaoke',
```
**Fix:**
```tsx
title: 'Korean-American Kitchen & Bar — Glam Karaoke Annandale',
```
(55 chars — within limit, adds location, leads with the keyword)

---

## P3 — Nice to Have

### P3-01 — Twitter card tags present globally but not per-page (same issue as OG)
**Impact:** Twitter card is set globally in root layout (line 55-58) but not overridden per page. Low priority since Twitter/X traffic for a local nightlife venue is minimal, but would improve appearances when sharing specific pages.
**File:** `src/app/layout.tsx` lines 55-58
**Fix:** Add `twitter` key alongside `openGraph` in each page metadata export (same fix pass as P2-01).

---

### P3-02 — FAQPage schema opportunity on /rooms only partially addresses customer questions
**Impact:** The FAQAccordion covers 5 questions well. However, several high-search-volume questions are missing: "Is there parking at Glam Karaoke?" (multiple reviews mention it), "What is the age requirement?", "Can I bring a cake?", and "How long are sessions?" Adding these to the FAQ data in content.ts and the FAQAccordion would both improve the schema and directly answer searcher questions.
**File:** `src/components/rooms/FAQAccordion.tsx` — FAQ data array lines 10-36
**Fix:** Add to FAQ data in content.ts (or directly in FAQAccordion.tsx):
- "Is there parking at Glam Karaoke?" — Answer: "Yes — Glam Karaoke has free, well-lit parking on-site. Multiple customers specifically mention the parking as a highlight, especially for late-night visits."
- "What is the minimum age to visit?" — Get answer from client
- "Can we bring a birthday cake?" — Get answer from client
- "How long are room sessions?" — "Room rental is by the hour with no set minimum. Most groups book 2-3 hours. Weekend nights, especially Friday and Saturday, are most in-demand — calling ahead is strongly recommended."

---

### P3-03 — /about page missing breadcrumb schema
**Impact:** The about page has breadcrumb schema builder available but unused. Low priority compared to /rooms and /private-events.
**Fix:** Add to about page schema injection (part of P2-02 breadcrumb deployment).

---

### P3-04 — AggregateRating schema is conditional but always renders (reviewData is populated)
**Impact:** The `buildBarOrClubSchema()` function (schemas.ts line 34) correctly guards AggregateRating with null-check. `reviewData.ratingValue: 4.2` and `reviewData.reviewCount: 250` are both populated, so AggregateRating IS included in the schema. This is correct. However, the `ratingValue` of 4.2 may not match the live Google rating if it's changed — no mechanism to auto-sync. Flag for client review at handoff.
**Fix:** Note in handoff: Google Business Profile rating should be manually verified and content.ts updated before launch.

---

### P3-05 — Content gap: No location-specific service pages for nearby cities
**Impact:** Glam Karaoke serves the broader DMV area but the site has no pages targeting "karaoke Fairfax VA," "karaoke Falls Church VA," "karaoke Northern Virginia," or "private karaoke room Alexandria VA." These are reachable search queries from nearby populations.
**Fix (post-launch):** Create 3-4 thin location landing pages after launch. Examples:
- `/karaoke-fairfax-va` — "Closest Private Karaoke to Fairfax, VA"
- `/karaoke-falls-church-va` — "Private Karaoke Near Falls Church — Glam Karaoke"
- `/karaoke-northern-virginia` — "Best Karaoke in Northern Virginia"
These pages would be P3 growth work after the main site is live.

---

### P3-06 — No Event schema for recurring DJ nights
**Impact:** The site has an `EventVenue` schema on /private-events (schemas.ts line 119) but no `Event` schema for the recurring Friday DJ nights. Google can display event rich results (with date, time, performer) for scheduled recurring events. DJ @loxs1ck every Friday is a concrete, schedulable event.
**File:** `src/lib/seo/schemas.ts` — no `buildDJEventSchema` function
**Fix (post-launch):** Add `buildDJEventSchema()` and inject on /events page. Use `EventSeries` or recurring `Event` pattern:
```ts
{
  '@type': 'Event',
  name: 'Friday DJ Night with @loxs1ck — Glam Karaoke',
  startDate: '[next Friday ISO date]',
  endDate: '[next Friday close time]',
  location: { '@type': 'Place', name: 'Glam Karaoke', ... },
  performer: { '@type': 'Person', name: 'DJ loxs1ck' },
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
}
```

---

### P3-07 — No /contact page in footer nav — contact info buried
**Impact:** The footer nav (`src/components/layout/Footer.tsx` lines 29-36) lists 6 links: Rooms, Menu, Events, Private Events, About, Reservations. No /contact link. If the client wants a standalone contact page (P1-01), it should be added to the footer nav as well.
**Fix:** After building the /contact page (P1-01), add to the `navLinks` array in Footer.tsx.

---

## Mobile SEO — Specific Issues

### MOBILE-01 — MobileStickyBar covers page content without sufficient bottom padding on some pages
**Impact:** `globals.css` line 29 sets `padding-bottom: 56px` on `body` to account for the MobileStickyBar height. This is generally correct. However, on pages with fixed bottom CTAs (like the /private-events final CTA section with `py-16`), the last visible content may be clipped or obscured by the sticky bar on short screens (375px height ~667px). Verify on physical device that the final CTA text on each page clears the sticky bar.
**File:** `src/app/globals.css` — lines 24-39 (MobileStickyBar padding)
**Severity:** Mobile P2 — affects conversion on the most important mobile interaction.
**Fix:** On pages with a primary phone/book CTA at the bottom, add `pb-24 md:pb-16` instead of `py-16` to ensure the final CTA visually clears the sticky bar on 375px screens.

---

### MOBILE-02 — Hero font size at 375px (52px) may cause layout issues
**Impact:** The homepage H1 in VideoLoopHero.tsx (line 71) uses `text-[52px]` as the mobile size (`sm:text-[64px] md:text-[88px]`). At 375px viewport, 52px League Spartan (heavy display typeface) for a 3-line tagline ("Your Night. Your Songs. Your Room.") could produce 3 lines that extend to the edge of the screen, potentially causing horizontal overflow or truncation. League Spartan at 52px = ~208px per line at ~4 chars — needs visual verification.
**File:** `src/components/home/VideoLoopHero.tsx` — line 71
**Fix:** Test at 375px. If overflow occurs, drop to `text-[42px]` as mobile base and `sm:text-[56px]`.

---

### MOBILE-03 — Hero CTA layout: mobile users only see the mobile PhoneLink, not the "See Our Rooms" button
**Impact:** The hero CTA block (`src/components/home/VideoLoopHero.tsx` lines 101-115) has `flex-col sm:flex-row`. On mobile below 640px, CTAs stack vertically. The desktop PhoneLink is `hidden sm:flex` and mobile PhoneLink is `flex sm:hidden`. This means mobile users see: [See Our Rooms button] + [mobile phone CTA]. This is correct behavior — no issue. However, the `See Our Rooms` button uses `ghost-light` variant which renders as white border on dark background. Verify contrast is sufficient on the hero image at 375px.
**File:** `src/components/home/VideoLoopHero.tsx` — lines 101-115
**Fix:** No code change needed — verify visually on 375px. Acceptable if contrast passes.

---

### MOBILE-04 — Reservations hero DiscoBall component creates min-height 500px container on mobile
**Impact:** `src/components/reservations/ReservationsHero.tsx` line 77 wraps the DiscoBall and image in `relative min-h-[500px] lg:min-h-[620px]`. On 375px screens this creates a 500px tall section that may push the primary phone CTA out of the initial viewport (above the fold). On the reservations page — the conversion page — the CTA being below the fold on mobile is a meaningful conversion loss.
**File:** `src/components/reservations/ReservationsHero.tsx` — line 77
**Fix:** On mobile, collapse the right column entirely or reduce `min-h-[500px]` to `min-h-[280px]` for small screens: `min-h-[280px] sm:min-h-[400px] lg:min-h-[620px]`. The DiscoBall decoration is non-essential on mobile and can be hidden at `sm:hidden` if needed.

---

### MOBILE-05 — Events split hero: left photo is `h-64` on mobile — ratio feels cramped before the event info
**Impact:** `src/components/events/EventsSplitHero.tsx` line 11 sets the left photo panel to `h-64` (256px) on mobile. This creates a short landscape photo strip before the event text. On 375px screens, 256px is fine, but the photo then transitions to a stacked text block with `px-8 py-16` — a significant left/right padding that reduces available text width to ~311px. At 48px H1 font, "Every Friday." and "DJ @loxs1ck." will each take 1-2 lines, but the right padding may push content close to the edge.
**File:** `src/components/events/EventsSplitHero.tsx` — lines 9-11, 29
**Fix:** Reduce horizontal padding on mobile for the event text block: `px-6 md:px-12 lg:px-16` (was `px-8`). Check at 375px.

---

### MOBILE-06 — Private Events inquiry form: side-by-side Phone+Email inputs below 640px
**Impact:** `src/components/private-events/InquiryForm.tsx` line 139: `grid grid-cols-1 sm:grid-cols-2 gap-5`. Below 640px, Phone and Email each get full width — this is correct. However, the form `min-h-[44px]` inputs at `text-base` on mobile will trigger iOS zoom if the font-size is below 16px. Currently `text-base` = 16px in Tailwind, which is the iOS zoom threshold — this is correct. No issue.
**File:** `src/components/private-events/InquiryForm.tsx` — line 96 (input classes include `text-base`)
**Fix:** No change needed — `text-base` = 16px prevents iOS auto-zoom.

---

### MOBILE-07 — Viewport meta tag: Next.js 14 App Router does not inject viewport meta by default without explicit `viewport` export
**Impact:** In Next.js 14 App Router, the `<meta name="viewport">` tag is NOT automatically injected unless you either export a `viewport` constant from layout.tsx or set it via the `metadata` object. The current `src/app/layout.tsx` does NOT export a `viewport` or include viewport in the metadata object. Without this, the page renders without mobile viewport scaling — a catastrophic mobile SEO failure.
**File:** `src/app/layout.tsx` — no viewport export, no viewport in metadata (lines 34-63)
**Fix:** Add to `src/app/layout.tsx`:
```tsx
import type { Metadata, Viewport } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5, // allow user zoom for accessibility
}
```
This injects `<meta name="viewport" content="width=device-width, initial-scale=1">`.
**Priority: CRITICAL** — without this, the site may render as desktop-width on mobile devices, breaking all mobile SEO signals and user experience.

> **Note:** Next.js 14 App Router documentation specifies that the viewport meta tag IS NOT automatically added — it requires an explicit `viewport` export or `metadata.viewport` field. Verify this is indeed missing by checking for the tag in the rendered HTML of the dev build. If Next.js 14 adds it by default in practice (behavior has changed between minor versions), this finding can be downgraded to P3.

---

### MOBILE-08 — Header height 112px (h-28) unscrolled pushes hero content down by 112px on mobile
**Impact:** `src/components/layout/Header.tsx` line 60: `h-28 md:h-32` (112px mobile unscrolled). The VideoLoopHero is `h-[85vh] md:h-screen` and anchors content at the bottom. The top eyebrow `absolute inset-x-0 top-28` (112px from top) is calibrated for this. On 375px × 667px screens, the header takes 17% of the viewport — acceptable. On compressed scrolled state it shrinks to `h-20` (80px). No issue — this is intentional design.
**File:** `src/components/layout/Header.tsx` — lines 59-61
**Fix:** No change needed — intentional design decision with proper compensation in hero layout.

---

### MOBILE-09 — Tap targets: All PhoneLink, CTAButton, nav links verified at min-h-[44px] — PASS
All PhoneLink components include `min-h-[44px]` in className prop usage. CTAButton enforces `min-h-[44px]` for sm/md and `min-h-[48px]` for lg (CTAButton.tsx line 36-38). Mobile nav links use `min-h-[56px]` (Header.tsx line 147). Footer social icons use `min-h-[44px] min-w-[44px]` (Footer.tsx lines 72-73). MobileStickyBar is full-width `h-14` (56px). All tap targets compliant with 44×44px minimum.
**Status:** PASS — no action needed.

---

### MOBILE-10 — Text readability at 375px: base font sizes
**Font sizes at 375px mobile:**
- Body copy: `text-base` (16px) ✓
- Menu kicker: `0.82rem` (~13px) — borderline, but uppercase tracking makes it readable ✓
- Footer text: `text-sm` (14px) ✓
- FAQ answers: `text-base` (16px) ✓
- Review card text: check TestimonialCarousel
**Status:** Acceptable. No fixes needed for readability at 375px.

---

## Page-by-Page Summary

```
Page             | Title (chars)    | H1                              | Meta Desc (chars) | OG Override | Schema           | Canonical | Mobile | Status
---              | ---              | ---                             | ---               | ---         | ---              | ---       | ---    | ---
/                | 52 ✓             | "Your Night. Your Songs..."     | 122 ✓             | Root only   | BarOrClub+WebSite| ✓         | Good   | Clean
/menu            | 52 ✓             | "Glam Karaoke Menu."            | 143 ✓             | Root only   | None             | ✓         | Good   | P2-01,P2-05,P2-08
/rooms           | 50 ✓             | "Find Your Room. Bring..."      | 139 ✓             | Root only   | None (FAQ exists)| ✓         | Good   | P1-04,P2-01,P2-02
/events          | 47 ✓             | "Every Friday. DJ @loxs1ck."   | 117 ✓             | Root only   | None             | ✓         | Check  | P2-01,P2-04,MOBILE-05
/private-events  | 47 ✓             | "Your Group. Your Soundtrack."  | 130 ✓             | Root only   | EventVenue       | ✓         | Good   | P2-01,P2-02,MOBILE-04
/about           | 55 ✓             | "Glam Karaoke" (bare name)     | 150 ✓             | Root only   | None             | ✓         | Good   | P2-01,P2-02,P2-03
/reservations    | 49 ✓ (layout)    | "Cue the lights. Call..."       | 134 ✓ (layout)    | Root only   | EntertainmentBiz | ✓         | Watch  | P2-01,P2-07,MOBILE-04
/privacy         | 30 ✓             | "Privacy Policy"               | 77 ✓              | N/A         | None             | ✓         | Fine   | noindex ✓
/contact         | MISSING          | MISSING                         | MISSING           | MISSING     | MISSING          | MISSING   | N/A    | P1-01
```

---

## Summary

**Total findings:** P1: 4 | P2: 8 | P3: 7 | Mobile: 10

**Critical path for launch:**
1. MOBILE-07 — Verify viewport meta tag is being injected (check rendered HTML). If missing, add `export const viewport` to root layout. This is the highest-risk item.
2. P1-01 — Build /contact page
3. P1-03 — Build /not-found.tsx
4. P1-04 — Add FAQPage schema to /rooms (high CTR impact from rich results)
5. P2-01 — Add OG overrides to all interior pages (1-2 hour pass)
6. P2-03 — Fix About H1 to include location keyword
7. P2-04 — Fix Events H1 to include venue name

**Post-launch growth:**
- P2-02 Breadcrumb schema deployment
- P3-05 Location pages
- P3-06 Event schema for DJ nights

---

## NAP Consistency Check

| Source | Name | Address | Phone |
|--------|------|---------|-------|
| content.ts businessInfo | Glam Karaoke | 4369 John Marr Dr, Annandale, VA 22003 | (703) 942-5526 |
| BarOrClub schema | Glam Karaoke | 4369 John Marr Dr, Annandale, VA 22003 | +17039425526 |
| Footer address | 4369 John Marr Dr, Annandale, VA 22003 | — | (703) 942-5526 |
| Privacy page address | 4369 John Marr Dr, Annandale, VA 22003 | — | (703) 942-5526 |
| CLIENT_BRIEF.md | Glam Karaoke | 4369 John Marr Dr, Annandale, VA 22003 | (703) 942-5526 |

**NAP CONSISTENT — PASS.** All instances agree. Phone format varies (display vs E.164) but this is schema-appropriate; display format is consistent at (703) 942-5526.

Note: CLIENT_BRIEF.md also lists `(571) 378-0910` as a GBP alternate number. This number does NOT appear anywhere on the site. Recommend verifying with client: is this the correct primary number for GBP, or should it be listed as an alternate on the contact page?
