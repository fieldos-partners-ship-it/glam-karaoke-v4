# Glam Karaoke v4 — Session Context

## Session: 2026-04-18 — Mobile Hero Polish

### What Was Done

1. **Eyebrow text color** (`VideoLoopHero.tsx`) — "Annandale, VA · 12 Private Rooms" changed from `text-neon-teal` → `text-white`

2. **Mobile-only background image swap** (`VideoLoopHero.tsx`) — Split into two responsive images:
   - Mobile (`md:hidden`): `photo-9.jpg` (karaoke room with TV screen)
   - Tablet + desktop (`hidden md:block`): `ambiance-3.jpg` (original moody interior)

3. **Logo overlay on mobile hero** — `Logo PNG.png` (neon sign photo) centered at `top-[35%]`, `rounded-2xl overflow-hidden`, mobile only

4. **Purple neon glow animation** — Framer Motion `motion.div` wraps the logo:
   - Idle: 3.2s breathing pulse, triple-layer `drop-shadow` in purple
   - Tap: spring to 108% scale + full-blast purple burst (40/80/120px spread)

### Files Changed
- `src/components/home/VideoLoopHero.tsx`

### Pushed
- Commit `2c705ef` → `main`

### Open Items (carried forward)
- Google Maps Embed API key, GA4 ID, Formspree endpoint
- Verify GBP phone (703-942-5526 vs 571-378-0910)
- Verify rating still 4.2★ / 250 reviews before launch

---

## Session: 2026-04-15 — Optimize v2, Phase 4B: Content Fixer — COMPLETE

### What Was Done

**Phase 4B: Content Fixer — COMPLETE**

Build: PASS — 0 TypeScript errors — 14 static routes (was 13 before contact page added)

#### Critical (CRITICAL / P1 SEO + Conversion):

1. **Viewport meta export** (`layout.tsx`) — Added `export const viewport: Viewport` with `width: 'device-width', initialScale: 1, maximumScale: 5`. Without this, Next.js 14 App Router was not injecting the viewport meta tag, causing desktop rendering on mobile.

2. **Contact page built** (`src/app/contact/page.tsx` + `layout.tsx`) — Full NAP (name/address/phone), clickable PhoneLink (large display), hours table, Google Maps link (placeholder — API key needed from client), two CTAs (call + See Rooms), unique metadata + OG + canonical. Added to sitemap + footer nav. Contact schema (LocalBusiness) + breadcrumb schema injected via layout.

3. **Branded 404** (`src/app/not-found.tsx`) — "Wrong Room." headline, links to /rooms and /reservations, PhoneLink CTA, nav footer recovery links, noindex metadata.

4. **FAQPage schema** (`schemas.ts` + `rooms/layout.tsx`) — `buildFAQSchema()` added, pulls data from exported `faqItems` in content.ts. FAQAccordion now imports from content.ts (same source). `/rooms` layout.tsx created with FAQPage + BreadcrumbList schema injection.

5. **Mobile hero phone CTA pill** (`VideoLoopHero.tsx`) — Mobile PhoneLink wrapped in pill: border + bg-white/10 + min-h-[48px], includes PhoneCall icon + "(703) 942-5526 — Reserve Now". Visual prominence for primary revenue action.

6. **Mobile header "Call" pill** (`Header.tsx`) — Compact PhoneLink between logo and hamburger, md:hidden, pill styling with neon-teal border + PhoneCall icon.

#### P2 Conversion/Copy:

7. **RoomsPreviewGrid CTA** — "Book This Room →" → "Reserve This Room →", href `/rooms` → `/reservations`
8. **RoomTierComparison PhoneLinks** — "Check Availability" → "Call to Reserve [room.name]" / "Call and Lock Your Room" for Group
9. **RoomMatchStrip PhoneLinks** — "Call for {room.name}" → room-specific: "Call to Claim Your Duo Room" / "Call to Lock Your Group Room" / "Call and Claim the Suite"
10. **PrivateEventsCTABand** — "Request a Private Event" → "Plan Your Private Event →"
11. **InquiryForm reassurance** — "Not a booking confirmation. We'll follow up within 2 hours." → "We respond within 2 hours. Your info is only used to confirm your booking — no spam, ever."
12. **HappyHourBand PhoneLink** — Added "Call us to lock a room for happy hour →" as conversion path from dead-end Happy Hour tab
13. **HappyHourCallout** — Added CTAButton ("Reserve Your Room →") + PhoneLink CTA at homepage bottom
14. **Events page H2** — "Want the whole stage for your group? →" → "Your group. Your whole stage. One night."
15. **Events page CTA label** — "Book a Private Event" → "Plan Your Private Event →"
16. **Menu page bottom CTA** — "Hungry? Thirsty? You know what to do." → "Order from the room. Skip the wait." + better subtext
17. **About page bottom CTA** — "Ready to come in?" → "Your room is waiting. Make it your night."

#### P2 SEO:

18. **OG tags** — Per-page openGraph + twitter overrides added to /rooms, /menu, /events, /about pages; /private-events added to existing layout
19. **About H1** (`FoundingHero.tsx`) — "Glam Karaoke" → "Annandale's Karaoke Destination"
20. **Events H1** (`EventsSplitHero.tsx`) — "Every Friday. DJ @loxs1ck." → "DJ Nights at Glam Karaoke — Every Friday."
21. **Menu heroTitle** (`content.ts`) — "Glam Karaoke Menu." → "Glam Karaoke Kitchen & Bar — Annandale, VA"
22. **Menu title tag** — "Menu — Korean-American Kitchen & Bar | Glam Karaoke" → "Korean-American Kitchen & Bar — Glam Karaoke Annandale"
23. **BreadcrumbList schemas** — Deployed on /rooms (new layout), /menu (new layout), /events (new layout), /about (new layout), /private-events (added to existing layout), /reservations (added to existing layout), /contact (new layout)

#### P2-11 Testimonials:
24. **Alyssa Kim review contexts** — Added 'reservations' (strongest objection-handler for phone reservation flow)
25. **Jenny Park review contexts** — Added 'rooms' and 'reservations' (parking trust signal)

#### Content.ts:
26. **`faqItems` exported** — 7 FAQ items (added parking + session-length Q&As for rich result coverage)

### Next Steps (Phase 5)

1. Re-rate design post Design Fixer (expected Premium)
2. Final build verification (done — 0 errors)
3. Push to GitHub
4. Client handoff items:
   - Google Maps Embed API key (for contact page iframe)
   - GA4 measurement ID (replace G-XXXXXXXXXX in content.ts)
   - Formspree endpoint (replace null in content.ts)
   - Real logo SVG/PNG
   - Verify GBP primary phone (703-942-5526 vs 571-378-0910)
   - Verify Google rating still 4.2★ / 250 reviews before launch

## Session: 2026-04-15 — Optimize v2, Phase 4A: Design Fixer

### What Was Done

**Phase 4A: Design Fixer — COMPLETE**

9 targeted fixes implemented. Build passes: 0 TypeScript errors, 13/13 static pages.

#### Fixed (Design Fixer scope):

1. **Hero background image swap** (`VideoLoopHero.tsx`)
   - `storefront-1.jpg` (brightness 136.7, sat 32.9 — daytime exterior) → `ambiance-3.jpg` (sat 82.9, brightness 76.7 — moody neon interior)
   - Also updated video `poster` attribute to match
   - `storefront-1.jpg` remains correct on `FoundingHero` (About page)

2. **H1 mobile font size** (`VideoLoopHero.tsx`)
   - `text-[52px]` → `text-[42px]` at base breakpoint to prevent overflow at 375px
   - Scale: `text-[42px] xs:text-[48px] sm:text-[64px] md:text-[88px]`

3. **RoomTierComparison `group` class** (`RoomTierComparison.tsx`)
   - Added `group` to the `motion.div` card root so `group-hover:scale-[1.03]` on image wrapper can fire
   - Was dead code on primary booking page; homepage version was correct

4. **DJNightsTeaser background** (`DJNightsTeaser.tsx`)
   - `bg-stage-noir` → `bg-glass-surface`
   - Restores Noir→Glass→Noir rhythm per UI_DIRECTION section rhythm strategy
   - Previously ran 3 consecutive near-black sections (Hero → RoomsPreviewGrid → DJNightsTeaser)

5. **DiscoBall mobile simplification** (`DiscoBall.tsx`)
   - Added `discoTilesMobile` array: ~30 tiles (every other row/col) vs 121 full tiles
   - Extracted shared `DiscoBallInner` component that accepts `tiles` prop
   - Mobile viewports (`sm:hidden`): render simplified 30-tile version
   - Desktop viewports (`hidden sm:block`): render full 121-tile showpiece
   - Reduces animation budget on mid-range Android at 375px

6. **RoomFeatureMatrix "Most Popular" mobile elevation** (`RoomFeatureMatrix.tsx`)
   - Added `shadow-[0_0_0_1px_#E51997,0_8px_24px_rgba(229,25,151,0.18)]` to most popular card
   - Desktop communicates "Most Popular" via `md:scale-[1.02]`; mobile now gets glow shadow equivalent

7. **ReservationsHero mobile min-height** (`ReservationsHero.tsx`)
   - Right panel: `min-h-[500px]` → `min-h-[280px] sm:min-h-[400px] lg:min-h-[620px]`
   - Prevents DiscoBall from pushing phone CTA below fold on 375px

8. **Footer phone tap target** (`Footer.tsx`)
   - Removed `w-fit` from footer PhoneLink className
   - Tap target now spans full container width on mobile (was text-width only)

9. **EventsSplitHero mobile padding** (`EventsSplitHero.tsx`)
   - Right panel: `px-8` → `px-6` at mobile breakpoint
   - Reduces edge crowding on 375px

### Decisions Made

- Chose `ambiance-3.jpg` over `interior-2.jpg` for hero: ambiance-3 has highest saturation (82.9) in inventory; interior-2 (46.7 sat) is already used in ReservationsHero card — avoid repetition
- DiscoBall simplification via CSS show/hide (not `useWindowSize` hook) — avoids hydration mismatch and no extra dependencies
- `xs:` breakpoint used in H1 sizing — check if `tailwind.config.ts` defines this breakpoint

### Design Elevation Rating Change

Pre-fix: **Polished**
Post-fix: Expected **Premium** (hero image swap + mobile elevation were the two named blockers in design-elevation-review.md)

### Next Steps (Phase 4B — Content Fixer)

1. Viewport meta export in `src/app/layout.tsx` (CRITICAL — MOBILE-07)
2. Build `/contact` page with NAP, PhoneLink, Maps embed, hours
3. Build `src/app/not-found.tsx` — branded 404
4. FAQPage schema on `/rooms` — `buildFAQSchema()` in schemas.ts, inject via rooms layout
5. Mobile hero phone CTA pill treatment
6. Mobile header phone pill (between logo and hamburger)
7. RoomsPreviewGrid "Book This Room" routing fix (→ /reservations, not /rooms)
8. Per-page OG tags for /rooms, /menu, /events, /private-events, /about
9. Breadcrumb schema deployment on all interior pages
10. H1 keyword improvements: About, Events, Menu
11. Title tag fixes (Menu page)

### Open Items / Notes for Content Fixer

- Check if `xs:` breakpoint exists in tailwind.config.ts — if not, the `xs:text-[48px]` class in VideoLoopHero H1 silently does nothing (safe, just doesn't add the intermediate size)
- `storefront-1.jpg` is only used in `FoundingHero` now — correct placement for exterior context
- The `/* VIDEO_TODO */` comment in VideoLoopHero.tsx notes poster should be updated when client provides video — poster is now `ambiance-3.jpg` (already updated)
