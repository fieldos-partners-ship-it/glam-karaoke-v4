# Optimize Report — Glam Karaoke v4
Generated: 2026-04-15
Pre-fix Design Elevation Rating: **Polished**
Focus: Mobile UX quality pass
MCP available: No (Claude Code CLI — Phase 1 evidence skipped)

---

## Already Fixed In This Session
- MobileStickyBar phone text now white (was dark on pink, unreadable)
- Hero eyebrow "Annandale, VA · 12 Private Rooms" hidden on mobile, still shows on desktop
- Mobile menu overlay duplicate logo removed (was peeking behind header logo)

---

## P1 — Critical Fixes (6 total)

### SEO (4)
1. **MOBILE-07 CRITICAL** — No `export const viewport` in `src/app/layout.tsx`. Without this, Next.js 14 App Router may not inject the mobile viewport meta, causing desktop-width render on mobile. Verify rendered HTML; add viewport export if missing.
2. **P1-01** — No `/contact` page. Build `src/app/contact/page.tsx` with NAP, PhoneLink, Maps embed, hours.
3. **P1-03** — No `src/app/not-found.tsx`. Build branded 404 with recovery CTAs.
4. **P1-04** — `/rooms` FAQ has 5 Q&As but no FAQPage schema. Add `buildFAQSchema()` to `src/lib/seo/schemas.ts`, inject via `src/app/rooms/layout.tsx`.

### Conversion/Copy (2)
5. **P1-01** — Mobile hero phone link is styled as body text, not a CTA. Wrap `hero-mobile` PhoneLink in a pill button treatment.
6. **P1-02** — No phone button in mobile header (hamburger only). Add a compact "Call" pill between logo and hamburger.

---

## P2 — Important Improvements (22 total)

### SEO (8)
- **P2-01** — OG tags only global; add per-page `openGraph` to /rooms, /menu, /events, /private-events, /about.
- **P2-02** — `buildBreadcrumbSchema()` defined but never called. Deploy on all interior pages.
- **P2-03** — About H1 is bare "Glam Karaoke". Change to "Annandale's Karaoke Destination".
- **P2-04** — Events H1 "Every Friday. DJ @loxs1ck." has zero crawlable keywords. Change to "DJ Nights at Glam Karaoke — Every Friday".
- **P2-05** — Menu hero title "Glam Karaoke Menu." → "Glam Karaoke Kitchen & Bar — Annandale, VA".
- **P2-07** — No Google Maps embed on /reservations or /contact.
- **P2-08** — Menu title tag doesn't lead with keyword. Change to "Korean-American Kitchen & Bar — Glam Karaoke Annandale".

### Conversion/Copy (11)
- **P2-01** — `RoomsPreviewGrid` "Book This Room →" routes to /rooms (info page), not /reservations.
- **P2** — `/rooms` "Check Availability" is passive; change to "Call to Reserve [Room Name]".
- **P2** — Happy Hour tab on /menu has no conversion path, says "ask the team" without phone link.
- **P2** — `HappyHourCallout` at homepage bottom has zero CTA — page ends without a final conversion prompt.
- **P2** — `InquiryForm` submit has no privacy/spam reassurance.
- **P2** — Alyssa Kim "effortless from the first call" review not surfaced on /reservations (best phone-friction objection handler).
- **P2** — 5 more content/CTA specificity issues across rooms, menu, events.

### Design Elevation (3)
- **P2-1** — **Hero uses `storefront-1.jpg`** (flattest daytime exterior, brightness 136.7, saturation 32.9) as static fallback. Swap to `ambiance-3.jpg` or `interior-2.jpg` for moody atmosphere matching the "your night" promise. Single-line change in `VideoLoopHero.tsx`.
- **P2-2** — `/rooms` `RoomTierComparison.tsx` has `group-hover:scale-[1.03]` but no `group` class on ancestor. Dead code on primary booking page. Add `group` class to outer card div.
- **P2-3** — Homepage runs 3 consecutive near-black sections (Hero → RoomsPreviewGrid → DJNightsTeaser). Change `DJNightsTeaser` bg from `bg-stage-noir` to `bg-glass-surface` to restore Noir→Glass→Noir rhythm per UI_DIRECTION.

---

## P3 — Growth Opportunities (19 total)
Location pages for Fairfax, Falls Church, Alexandria, NoVA; Event schema for DJ nights; parking/age/cake FAQ additions; count-up on PartyStatsBar; Twitter card per-page; Instagram pull supplementation.

---

## Mobile-Specific Issues (21 total across agents)

### High priority mobile:
- **SEO MOBILE-07** — Viewport meta (P1 CRITICAL, see above).
- **SEO MOBILE-04** — `ReservationsHero` has `min-h-[500px]` on mobile pushing primary phone CTA below fold. Reduce to `min-h-[280px] sm:min-h-[400px]`.
- **Design Elev** — `DiscoBall` renders 126 animated elements (121 tiles + 5 beams) at full complexity on mobile. Simplify for mobile viewports.
- **Design Elev** — `RoomFeatureMatrix` "Most Popular" card loses elevated treatment on mobile (only thin border, no glow/shadow lift).
- **Conv/Copy** — Footer phone link uses `w-fit` shrinking tap target to text width only.

### Medium priority mobile:
- Events split hero left photo `h-64` + `px-8 py-16` cramped at 375px. Reduce padding to `px-6 md:px-12`.
- `InquiryForm` date input accepts past dates.
- Menu tab labels can crowd at narrow viewports.
- DJ teaser RSVP links missing phone icon in horizontal scroll.

---

## Palette Analysis
- **Current site:** Stage Noir `#0E1117` + hot pink `#E51997` (labeled "neon-teal" in config) + electric violet `#B31269`
- **Extracted from photos:** Dark orange `#5a2610`, blues `#6490d9` / `#1017c9`, neutral dark `#131014`, moody brightness
- **Match:** PARTIAL — Stage noir aligns. Pink/magenta is a valid aspirational choice. BUT the venue's actual blue neon lighting (frequency 14,257 combined blue pixels across photos) is not represented in any site token. Consider adding a supporting electric-blue accent.

---

## Asset Inventory
- GBP images in `public/images/`: 10 real photos + logos
- Instagram: not pulled this run (handle: @glamkaraoke, 77 posts available)
- Placeholder usage: low — most components wired to real photos

---

## Agent Summary
```
Agent            | P1 | P2 | P3 | Mobile
-----------------+----+----+----+-------
SEO              |  4 |  8 |  7 |  10
Conversion/Copy  |  2 | 11 |  5 |   8
Design Elevation |  0 |  3 |  7 |   3
-----------------+----+----+----+-------
Total            |  6 | 22 | 19 |  21
```

---

## Recommended Fix Order

**Phase 4A — Design Fixer will handle:**
1. Hero image swap (storefront → interior-2 or ambiance-3)
2. `group` class on RoomTierComparison cards
3. DJNightsTeaser bg-glass-surface
4. DiscoBall mobile simplification
5. RoomFeatureMatrix "Most Popular" mobile treatment
6. ReservationsHero mobile min-height reduction
7. Footer phone tap target expansion
8. Events hero mobile padding

**Phase 4B — Content Fixer will handle:**
1. Viewport meta export in layout.tsx (CRITICAL)
2. Build /contact page
3. Build /not-found.tsx
4. FAQPage schema on /rooms
5. Mobile hero phone CTA pill + mobile header phone pill
6. RoomsPreviewGrid "Book This Room" routing fix
7. OG tags per page
8. Breadcrumb schema deployment
9. H1 keyword improvements (About, Events, Menu)
10. Title tag fixes
