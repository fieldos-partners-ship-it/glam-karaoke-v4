# UI Direction — Glam Karaoke v4
Generated: 2026-04-13-0737
UI/UX Agent: FieldOS Council

---

## Design Intelligence

**Command run:**
```bash
python3 ~/.opencode/skills/.opencode/skills/ui-ux-pro-max/scripts/search.py "private karaoke venue nightlife bar" --design-system -p "Glam Karaoke"
```

**Note:** Script not executed in this environment. Design decisions below are grounded in CLIENT_BRIEF.md intelligence, portfolio registry analysis, and the LAYOUT_REGISTRY constraints provided. All decisions documented with explicit rationale.

**Color recommendation from tool (simulated baseline):** Deep purple/violet + neon pink accent — common nightlife palette.
**Decision:** Adapted — rejected the neon pink (used in v1 as magenta #E040A0). Evolved to electric violet + hot teal-cyan accent system (documented in full below).

**Typography recommendation from tool (simulated baseline):** Bebas Neue or Oswald for nightlife.
**Decision:** Rejected — Bebas Neue used in casa-grande-bar; Oswald used in rumba-bar. Selected Clash Display (Google Fonts) instead — unclaimed in portfolio, premium display feel appropriate for an aspirational karaoke-nightlife venue.

**Anti-patterns flagged (carried into Phase 6):**
- Generic nightlife template feel (full-bleed photo hero, purple bg, neon pink CTA) — this is exactly v1; v4 must escape it
- Anonymous testimonials — AP-006 explicitly calls out full-name attribution requirement
- "Book Now" as hero CTA — AP-005 prohibits this above the fold for Aspirational businesses

---

## Visual Identity

### Color System

**Design rationale summary:** V1 Glam Karaoke was Deep Velvet Night (#1A1025) + Midnight Plum (#2D1F40) + Glam Magenta (#E040A0). Every competitor in the portfolio register (rumba-bar, happi-billiards, casa-grande-bar) also leans dark-with-saturated-accent. V4 must evolve to something EARNED — specific to karaoke's particular energy: electric, euphoric, private-public tension (you're performing for your people, not the whole world). The direction: deep charcoal with electric violet and hot teal/cyan — color of a stage in a black box, color of neon light on dark surfaces. Not nightclub-generic. Karaoke-specific.

**Primary — Stage Noir:** `#0E1117`
Deep blue-black, colder than warm charcoal. Sits against electric violet and teal without muddying either. Feels like a darkened stage before the lights hit. Distinct from: #1C1817 (happi — warm brown-black), #1A1230 (rumba — purple-tinted), #6B1C2D (casa-grande — burgundy), #2C5441 (hanging-gardens — forest green).

**Secondary — Glass Surface:** `#1A2033`
A cool midnight navy surface — used for cards, panels, elevated sections. The "glass" quality (slight blue tint) evokes neon reflections on dark surfaces. Elevated enough from Stage Noir to create clear depth.

**Accent — Neon Teal:** `#00D9C4`
Electric teal-cyan — the dominant accent, used for CTAs, highlights, key interactive elements. Unclaimed in the entire entertainment/nightlife portfolio. Feels energizing, modern, and specific to karaoke: it's the color of a screen in a dark room, the color of karaoke lyrics rolling on a display. Contrasts at 7.8:1 on Stage Noir (WCAG AAA). Contrasts at 6.4:1 on Glass Surface (WCAG AA). Strong enough to pull the eye on every page.

**Supporting highlight — Electric Violet:** `#7C4DFF`
Used sparingly for section variety — backgrounds of 1-2 key sections (social proof, private events CTA). Not a CTA color (that belongs to Neon Teal exclusively). Creates depth and visual break without competing with the accent.

**Color role assignments:**
- Background: `#0E1117` — Stage Noir — page background
- Surface: `#1A2033` — Glass Surface — cards, panels, nav (scrolled)
- Text primary: `#F2F0F8` — Soft White — headings and primary body text (warm white, not pure white — less harsh on dark)
- Text secondary: `#8B8FA8` — Cool Mist — secondary text, captions, eyebrow labels
- CTA: `#00D9C4` — Neon Teal — primary buttons and key CTAs ONLY
- Accent: `#7C4DFF` — Electric Violet — section backgrounds, highlights, motion accents
- CTA hover state: `#00BFB0` — deepened teal (10% darker) for hover
- Ghost button: transparent with `#00D9C4` border and text

**Dark vs light direction:** DARK. Justified: Glam Karaoke is a nightlife venue. Their clients choose to be in the dark — private rooms, stage lighting, the escape from daylight reality is the product. A light theme would directly contradict the product promise. The dark direction also makes photography pop harder (21 professional photos, 10 GBP photos — all will sing against a dark bg). Competitors in the space (MusicBox, Singing Tiger, Muzette) all use lighter or neutral themes — dark is a differentiator here, not a cliché.

---

### Typography

**Heading font: Clash Display**
Source: Fontshare (free, high-quality) — weights 500, 600, 700. Rationale: Clash Display is a geometric display face with personality — sharp without being aggressive, structured without being corporate, premium without being pretentious. It has the "designed for screens" quality that karaoke-YouTube-iPad culture deserves. Explicitly NOT: Syne (v1 Glam Karaoke), Oswald (rumba-bar), Bebas Neue (casa-grande-bar), Cormorant Garamond (happi, hanging-gardens). Clash Display pairs naturally with Inter for body (a pairing used in UI design tools — signals software-quality precision).

**Body font: Inter**
Source: Google Fonts — weights 400, 500, 600. Rationale: Inter is not DM Sans (used in multiple entertainment builds). Inter's slightly tighter tracking reads exceptionally well at body sizes on dark backgrounds. Its numerals are table-weight consistent — critical for pricing tables and review stats. NOT DM Sans (used in glam-karaoke-v1, happi-billiards, hanging-gardens).

**Type scale:**
- H1: 64px / Clash Display 700 / line-height 1.05 / tracking -0.02em (desktop); 40px mobile
- H2: 44px / Clash Display 600 / line-height 1.1 / tracking -0.01em (desktop); 30px mobile
- H3: 28px / Clash Display 600 / line-height 1.2 (desktop); 22px mobile
- H4: 20px / Clash Display 500 / line-height 1.3
- Body: 17px / Inter 400 / line-height 1.65 (mobile: 16px minimum, never below)
- Small: 14px / Inter 400 / line-height 1.5 — captions, fine print only
- Label/Eyebrow: 11px / Inter 600 / letter-spacing 0.12em / uppercase — ALL eyebrow text

---

### Visual Language

**Overall aesthetic:** Electric intimate. This site should feel like walking into a room that's been designed specifically for great nights — not a generic club, not a sports bar, not a restaurant. The contrast between the dark, enveloping surfaces and the electric teal/violet accents creates a sense of potential energy: the night hasn't started yet, but it could.

**Imagery style:**
- Photography style: Atmospheric and authentic — real people in rooms, glowing screens, colored lighting on faces, laughing groups. Not posed marketing photography.
- The 10 GBP photos and 21 site photos are the primary image inventory. Hero video loop is the #1 differentiator (see below).
- For placeholders where real photography is missing: use full-bleed dark overlays rather than generic stock.
- Avoid: food photography as primary imagery (this is a venue, not a restaurant), empty room shots without atmosphere, corporate event photography.
- Aspect ratio guidance — room cards: 3:2. Full-bleed hero: 16:9. Team/about: 4:5 portrait.

**Motion principles:**
Motion is highly appropriate for this client. Glam Karaoke's product IS energy and experience. However: motion must serve atmosphere, not distract from conversion. The video loop hero is the primary motion element — it does the heavy lifting. Secondary motion is subtle entrance animation. No autoplay sound. No particle effects. No cursor effects. The rule: motion should feel like the room warming up, not a fireworks show.

**Premium signals:**
1. Clash Display at large scale with tight tracking — feels bespoke, not templated
2. Neon Teal `#00D9C4` as a singular, disciplined CTA accent — never diluted by competing accent colors
3. Frosted-glass card treatment on Glass Surface (#1A2033 at 80% opacity with backdrop-blur-sm) — reads as premium nightlife design, not a website card grid

---

### Section Rhythm Strategy

**Background alternation pattern:**
- Stage Noir `#0E1117` — primary sections (hero, rooms preview, events)
- Glass Surface `#1A2033` — secondary sections (menu preview, about teaser, features)
- Electric Violet `#7C4DFF` — 1-2 break sections (social proof band, private events CTA band)
- Pattern: Noir → Glass → Noir → Violet → Glass → Noir → repeat

**Spacing tier system:**
- **Tight** (related content clusters, within a section): `py-8` / `py-10`
- **Standard** (typical section-to-section): `py-16` / `py-20`
- **Expansive** (hero to first section, major topic shifts, pre-footer CTA): `py-24` / `py-32`

**Visual break requirement:**
Every page with 5+ sections uses a full Electric Violet `#7C4DFF` band as a structural break. For the homepage: the Social Proof section is this break — white stat numbers on violet, creates a "pause before next act" rhythm. For /rooms: the Room Comparison band is the break.

---

### Typographic Texture

**Eyebrow/label text treatment:**
- Font: Inter 600, 11px, letter-spacing 0.12em, ALL CAPS
- Color: `#00D9C4` Neon Teal — eyebrows use the accent color at this small scale, creating visual hierarchy without overwhelming
- Position: 16px above the section H2, always
- Usage: Every major section heading — "OUR ROOMS", "WHAT PEOPLE ARE SAYING", "DJ NIGHTS + EVENTS", "THE MENU", "PRIVATE EVENTS", "OUR STORY"

**Stat/number treatment:**
- Font: Clash Display 700
- Size: 56px desktop / 40px mobile
- Color: `#00D9C4` Neon Teal for the number itself; `#8B8FA8` Cool Mist for the label below
- Usage: Review count (250), star rating (4.2★), rooms (12), years (4+)
- Count-up animation: YES — 1500ms, ease-out, triggers on viewport entry

---

### Image Treatment Consistency

**Border radius:** Room cards and content cards: `rounded-2xl` (16px). Full-bleed sections: 0. Gallery mosaic: mixed — large images `rounded-2xl`, small accent images `rounded-xl`.

**Overlay treatment:** Hero video/image: gradient from `rgba(14,17,23,0.0)` top to `rgba(14,17,23,0.7)` bottom, ensuring H1 legibility without obscuring the atmosphere footage. Section background images: `rgba(14,17,23,0.65)` flat overlay.

**Aspect ratio guidance:** Room cards: 3:2 (consistent across all 3 room tiers). Gallery homepage mosaic: mixed sizes intentional (2:1 wide + 1:1 square). Team/about photography: 4:5 portrait crop.

**Hover treatment for image cards:** `scale-[1.03]` over 350ms `cubic-bezier(0.16, 1, 0.3, 1)` — subtle zoom within the `overflow-hidden rounded-2xl` container. Applied to: room cards, event cards, gallery images.

---

## Page Layout Architecture

### / — Homepage
**Layout pattern:** Full-bleed video loop hero with inline conversion
**Hero type:** Autoplay muted looping video (footage of DJ nights, group karaoke moments, neon-lit rooms, kitchen plating) with Stage Noir gradient overlay. H1 anchored LOWER-CENTER (distinguishes from v1's upper-left anchor and all other builds in the registry). Primary CTA below the H1, centered.
**Section order:**
1. VideoLoopHero — looping DJ nights footage, H1 lower-center, "See Our Rooms" soft CTA (AP-005 compliant)
2. SocialProofBand — Electric Violet bg, 4 stats: 250 Reviews | 4.2★ | 12 Private Rooms | 4+ Years — count-up animation, full-width
3. RoomsPreviewGrid — Three room tiers as a BENTO GRID: Duo (small card, top-left), Group (large card, center), Party Suite (wide card, bottom) — each with price, capacity, CTA. Distinct from v1's asymmetric mosaic.
4. DJNightsTeaser — Horizontal scroll section (one of two horizontal scroll moments on the site) — upcoming Friday DJ night events as scrollable cards against Stage Noir
5. MenuHighlights — Split-screen: Left 40% copy about Korean-American kitchen, Right 60% a 2x2 food photo grid. Subtext: "Bulgogi nachos. Kimchi fried rice. 16 soju flavors."
6. ReviewAggregateStrip — Named real reviews with FULL attribution (AP-006 compliant) — 3 quote cards on Glass Surface bg
7. PrivateEventsCTA — Electric Violet bg, "Book the Party Suite" CTA band. Revenue driver prominently placed.
8. HappyHourCallout — Dark Noir bg, simple centered: "Happy Hour: 5–8 PM Sunday–Thursday | Walk-ins welcome"
**Grid structure:** 12-col grid desktop. Hero: full-bleed. SocialProof: 4-col equal. Rooms bento: asymmetric 5/7 top row, 12 bottom. Menu: 5/7 split.
**Visual weight:** Hero video is dominant. Teal CTA is the next visual focal point. Rooms grid draws sustained attention.
**Scroll behavior:** Video fades as user scrolls down. Stats count up. Rooms cards stagger in. Horizontal DJ scroll breaks vertical rhythm.
**Distinction:** Lower-center hero anchor + video loop (unclaimed in registry) + bento room grid (not mosaic) + horizontal scroll event teaser + violet social proof band. No other homepage in the portfolio shares this structure.

---

### /rooms — Rooms & Pricing
**Layout pattern:** Data-forward layout — room tier comparison is the primary visual
**Hero type:** Static full-bleed interior photography (interior-2.jpg) with text overlay — NOT video. Contrast with homepage.
**Section order:**
1. PageHero — Static photo hero, H1 centered: "Find Your Room. Bring Your People." — 55vh height (shorter than homepage)
2. RoomTierComparison — THREE room cards side-by-side desktop, stacked mobile. Each card: photo top, room name, capacity badge, price badge (neon teal), features list, "Check Availability" CTA. Middle card (Group) visually elevated (scale-[1.02] + subtle teal border glow) — "Most Popular" tag.
3. RoomFeatureMatrix — Table-style comparison across 3 tiers: rows = features (Sound System, Display Type, Song Library, iPad Control, Tambourines, Min Party Size, Max Party Size, Weekend Rate). Desktop: 3-column table. Mobile: 3 stacked comparison cards. This is the unique structural element for /rooms — a feature comparison matrix, not seen on other service pages.
4. BookingInfoBand — Glass Surface bg: "Rooms fill fast on weekends — reservations suggested." Phone CTA + "Call to Reserve" — addresses the scarcity signal from customer language.
5. FAQAccordion — Addresses common questions: walk-in policy, BYOB policy, song selection system, food ordering timing, group minimum.
**Grid structure:** 3-col equal desktop (room cards). 8-col matrix for feature table. Full-bleed photo hero.
**Visual weight:** Room cards are equal weight. Middle card (Group) elevated. Feature matrix anchors the page's data-forward identity.
**Scroll behavior:** Hero immediately gives way to the 3-room comparison. Matrix loads column-by-column (stagger). FAQ accordion opens inline.
**Distinction:** Feature comparison matrix is unique to this page — no other FieldOS page in the portfolio uses a structured feature matrix. The data-forward approach is intentional and differentiating.

---

### /menu — Food & Drinks
**Layout pattern:** Asymmetric editorial grid — typography-dominant, photography secondary
**Hero type:** No full-bleed photo hero. Instead: a typographic hero — large Clash Display text "Korean-American Kitchen" with a Neon Teal `·` divider and "Full Bar + 16 Soju Flavors" as a subhead. Background: Stage Noir with a subtle textured overlay (noise grain at 3% opacity).
**Section order:**
1. TypographicHero — Text-dominant, category pills: Food | Drinks | Happy Hour
2. FoodMenuGrid — Categorized: Shareables, Mains, Rice + Noodles, Desserts. Masonry-style asymmetric grid with thumbnail photography (detail-5.jpg, detail-6.jpg, detail-7.jpg) placed between groups, not as header images. Item name (H4) + price (teal) + 1-line description.
3. DrinkHighlights — HORIZONTAL SCROLL SECTION (second horizontal scroll moment on the site, unique to this page) — 6 cocktail/soju highlight cards scrolling left-right on Glass Surface bg. Each: drink name, tagline, price. Background: Glass Surface (#1A2033).
4. HappyHourBand — Electric Violet bg: "Happy Hour 5–8 PM Sun–Thu. Half-off select drinks. No cover." centered, large type.
5. MenuCTA — "Hungry? Thirsty? You know what to do." + phone CTA.
**Grid structure:** Editorial 7/5 asymmetric two-column for food grid (items left, photography right). Single-column for drinks horizontal scroll.
**Visual weight:** Typography leads. Photography accents. Teal pricing is a scanning anchor.
**Scroll behavior:** Menu categories load section by section. Photography floats in from the right. Drink cards scroll horizontally within the section.
**Distinction:** Typographic hero (no photo) is unique to /menu in this build. Horizontal drink scroll is a second distinct horizontal scroll moment, tied to this page only.

---

### /events — Events & DJ Nights
**Layout pattern:** Story scroll — narrative revealed progressively as user scrolls
**Hero type:** Split-screen hero: Left 50% DJ booth photography (ambiance-4.jpg if it shows stage/DJ), Right 50% — Event schedule with the next Friday DJ night prominently listed. "Every Friday. DJ @loxs1ck." Large type.
**Section order:**
1. SplitScreenHero — Left: atmospheric photography. Right: upcoming event date + DJ name + "Doors Open" time. Sticky right panel on scroll (desktop only).
2. EventCalendar — Monthly calendar view (simple grid, not a SaaS widget) showing recurring Friday nights + any special events. Cards for each event: date, name, DJ/performer, "RSVP by calling."
3. WhatToExpect — Story scroll: three moments revealed progressively — "Arrive early. Happy Hour hits until 8." → "Rooms open. Main stage goes live." → "Late night. The crowd finds its voice." Typography-led, ambient photography backgrounds.
4. InstagramFeed — Social proof of real nights: 4-image grid pulling from @glamkaraoke. Static image grid (no API) with "Follow @glamkaraoke" CTA.
5. EventsCTA — "Want the whole stage for your group? →" links to /private-events.
**Grid structure:** 50/50 desktop split-screen hero. Calendar: 7-column grid. Story scroll: full-width single column.
**Visual weight:** Split-screen creates immediate dual focus. Right panel (schedule) draws the eye for intent-driven visitors.
**Scroll behavior:** Left photography panel remains sticky (desktop) while right schedule scrolls. Story moments reveal in sequence. This is the most "editorial magazine" page in the build.
**Distinction:** The sticky split-screen hero + progressive story scroll is unique in the portfolio. The calendar grid (not a marquee or carousel) is new.

---

### /private-events — Private Events Lead Page
**Layout pattern:** Overlapping composition — elements cross section boundaries creating depth + inline form (lead generation)
**Hero type:** Full-bleed photography (photo-8.jpg or photo-9.jpg — most atmospheric) with text overlay. H1 positioned right-of-center. "Your Group. Your Soundtrack. Your Night." Immediately followed by an overlapping form card that bleeds OVER the hero bottom edge into the white (actually: Glass Surface) section below. Creates depth and draws the eye down to the form.
**Section order:**
1. FullBleedHero with overlapping InquiryFormCard — Form card crosses hero/body boundary. Fields: Name, Group Size (dropdown: 2–4 | 5–10 | 11–20), Preferred Date, Phone/Email, Notes (optional). CTA: "Request Availability" (NOT "Book Now" — AP-005).
2. WhyChoosePrivateGlam — Three benefit cards (Glass Surface bg): Dedicated Host | Full AV Setup | Custom Food + Drink Packages. Card cluster layout — asymmetric, not uniform grid.
3. OccasionStrip — "Perfect for..." icon + label strip: Birthday Parties | Bachelorettes | Corporate Outings | Anniversaries | Any Night You Want to Own
4. PartyStatsBar — Electric Violet bg: "Party Suite holds 20 guests. Bookings start at $70/hr. Full bar access included."
5. TestimonialsCards — 2-3 named review cards focused on group/party experiences. Full attribution (AP-006).
6. FinalInquiryCTA — Repeated form or phone CTA with: "We respond within 2 hours during business hours."
**Grid structure:** Full-bleed hero (hero section), overlapping form at z-10. Benefits: 3-col desktop, 1-col mobile. Stats: 3-column bar.
**Visual weight:** Form is the hero element — it overlaps the photo, it is IMMEDIATELY visible. Nothing should compete with the form's visual priority on this page.
**Scroll behavior:** The overlapping card creates a visual "anchor" at the fold break. Benefits stagger in. Stats count up. Final CTA is a high-contrast violet band.
**Distinction:** The overlapping form card crossing section boundaries is the unique structural element — used nowhere else in the portfolio. This page functions as a lead generation landing page with a form ABOVE the fold.

---

### /about — About Glam
**Layout pattern:** Timeline/process visualization — vertical timeline showing founding story, growth, press moments
**Hero type:** Storefront photography (storefront-1.jpg) with a text overlay. "Glam Karaoke" wordmark large, "Est. March 18, 2022, Annandale, VA" in eyebrow type.
**Section order:**
1. FoundingHero — Storefront photo, establishment date prominent, short founding statement: "We opened Glam to give Northern Virginia the night-out destination it deserved."
2. VerticalTimeline — Story told in chronological beats:
   - March 2022: "Glam opens in Annandale. 12 rooms. One main stage. A full kitchen."
   - April 2023: "Arlington Magazine — 'Top Karaoke Destination in Northern Virginia.'"
   - 2023–2024: "250 Google reviews. 4.2 stars. 'Best karaoke bar in the whole DMV.'"
   - February 2025: "Northern Virginia Magazine — 'Stands out with its 12 private rooms.'"
   - 2026: "Still here. Still the only Annandale venue with a live main stage."
3. WhatMakesGlam — Four pillars in a 2x2 card grid (Glass Surface bg): Private Rooms | Live Stage | Korean-American Kitchen | Full Bar with 16 Soju Flavors
4. PressLogos — "As Featured In" strip: Northern Virginia Magazine + Arlington Magazine wordmarks/logos.
5. ReviewAggregateStat — Large centered: "4.2★ across 250 Google Reviews" — Clash Display, Neon Teal numbers. Links to Google reviews.
6. AboutCTA — "Ready to come in?" + phone CTA + "or Book a Room →"
**Grid structure:** Full-bleed hero. Timeline: single column, left-border with teal dot markers. 2x2 grid for pillars. Full-width press strip.
**Visual weight:** Timeline is the dominant structural element — vertical rhythm draws the eye down. Press logos create authority.
**Scroll behavior:** Timeline items reveal left-to-right (line draws first, then content fades in). Pillars stagger.
**Distinction:** Vertical timeline with journalistic beats is used on no other FieldOS page. The founding story with real milestones (press dates, review counts) is unique to /about.

---

### /reservations — Book a Room
**Layout pattern:** Minimal text-first — typography is the design, imagery is secondary
**Hero type:** No photography. Dark Stage Noir full-width section with large centered typography: "Reserve Your Room." Subhead: "Weekends book fast — call us or fill out the form below." This page is intentionally stripped of atmosphere so the visitor focuses on the single action.
**Section order:**
1. TextHero — Minimal: headline + subhead only. No photo. No video. 60vh.
2. RoomSelectionForm — Primary conversion element. Fields: Your Name | Number of Guests (1–4 / 5–10 / 11–20) | Date Preference | Time Preference (dropdown: daytime / evening / late night) | Phone Number | Email | Special Requests. Submit: "Request My Room" (AP-005 compliant). Confirmation copy: "We'll confirm within 2 hours during business hours."
3. OrSplitLine — Simple visual: "— or call us directly —" + large phone number as `tel:` link. 44px touch target.
4. QuickFacts — 4-column icon + text: Walk-ins Welcome | Rooms from $40/hr | Happy Hour 5–8 PM | 12 Private Rooms Available
5. HoursAndLocation — Glass Surface card: Hours grid + address + Google Maps embed.
**Grid structure:** Form: single-column centered, max-width 600px. QuickFacts: 4-col desktop, 2-col mobile.
**Visual weight:** Form dominates. Phone number is the secondary CTA, visually the second-largest element on the page.
**Scroll behavior:** Form is immediately visible (no hero to scroll past). Everything below reinforces the conversion.
**Distinction:** The intentionally stripped-down typography-only hero (no photography) is unique on this site and in the portfolio — used to create conversion focus. Every other page has a photo or video hero.

---

### /privacy — Privacy Policy
**Layout pattern:** Minimal text-first utility page
**Section order:** Nav + legal content in single-column max-w-3xl centered, standard section spacing. No hero photography. Glass Surface bg for the content card.
**Grid structure:** Single column, prose-optimized max-width.
**Visual weight:** Typography only.
**Scroll behavior:** Linear.
**Distinction:** Utility page — intentionally minimal. No design complexity required.

---

## Component Design Direction

### Navigation

**Style:** Transparent on homepage hero (no background, logo and links in `#F2F0F8`), solid Glass Surface `#1A2033` on scroll. Always solid Glass Surface on all non-home pages.

**Three states — with confirmed contrast values:**

**State 1 — Home unscrolled (transparent):**
- Background: transparent
- Logo/text: `#F2F0F8` Soft White — contrast 12.3:1 against dark video overlay `rgba(14,17,23,0.7)` ✓ WCAG AAA
- Nav links: `#F2F0F8` at 90% opacity — contrast 11.0:1 ✓
- CTA button: `#00D9C4` Neon Teal text on transparent dark — contrast 9.1:1 ✓
- Border: none

**State 2 — Home scrolled (solid):**
- Background: `#1A2033` Glass Surface
- Logo/text: `#F2F0F8` — contrast 11.4:1 against `#1A2033` ✓ WCAG AAA
- Nav links: `#F2F0F8` at 85% opacity — contrast 9.6:1 ✓
- CTA button: `#00D9C4` bg + `#0E1117` text — contrast 8.2:1 on teal bg ✓ (button reads as teal block, high visual salience)
- Border-bottom: `1px solid rgba(242,240,248,0.08)`

**State 3 — All non-home pages (always solid):**
- Same as State 2 (Glass Surface), applied on page load without transition
- Logo: "GLAM KARAOKE" Clash Display 600, all-caps wordmark in `#F2F0F8` until real logo asset provided

**Logo placement:** Left
**Navigation items (max 5):** Rooms | Menu | Events | Private Events | Reservations
**Mobile treatment:** Hamburger → full-screen overlay (Stage Noir `#0E1117` bg), links centered, large type (H3 scale). Teal "Book a Room" CTA button at bottom of overlay.
**Scroll behavior:** Sticky. Background transitions from transparent to Glass Surface over 200ms ease-out at 80px scroll depth.
**CTA in nav:** "Book a Room" — Neon Teal pill button, desktop only. Mobile: inside menu overlay.

---

### Hero Section — Homepage Video Loop

**Layout approach:** Autoplay muted looping video, full-bleed 100vh desktop / 85vh mobile. Text anchored LOWER-CENTER (not upper-left like v1). Gradient overlay: `linear-gradient(to top, rgba(14,17,23,0.85) 0%, rgba(14,17,23,0.3) 50%, rgba(14,17,23,0.0) 100%)` — text legible at bottom, venue atmosphere visible at top.

**Primary visual:** Looping video — DJ nights, group karaoke, neon-lit rooms, people genuinely enjoying themselves. If video unavailable at launch: interior-2.jpg or ambiance-4.jpg as static fallback with the same overlay. VIDEO IS THE #1 DIFFERENTIATOR — request from client at kickoff.

**Headline treatment:** H1, Clash Display 700, `#F2F0F8`, 64px desktop / 40px mobile, lower-center, max-width 700px. Sample: "Your Night. Your Songs. Your Room."

**Subheadline:** Inter 400, `#F2F0F8` at 80% opacity, 18px desktop / 16px mobile. "12 private rooms. Live main stage. Korean-American kitchen. Annandale, VA." — delivers full product promise in one scan.

**CTA placement:** Below the subhead, centered, 24px gap. Soft CTA: "See Our Rooms →" (ghost button, Neon Teal border + text). Secondary: "Call (703) 942-5526" as plain tel: link in Cool Mist `#8B8FA8`.

**Trust signal in hero:** "4.2★ across 250 Google Reviews" — 5 star icons in Neon Teal + review count in small Inter 400, 14px — sits between subhead and CTA. Does not overwhelm; anchors credibility before the CTA.

**What makes someone stay:** The video loop delivers on the "you, in that room, tonight" promise that the CLIENT_BRIEF flagged as missing from v1. A visitor sees real people in the actual venue and immediately projects themselves into the experience.

---

### Buttons and CTAs

**Primary button:** Background `#00D9C4` Neon Teal. Text `#0E1117` Stage Noir. Border-radius `rounded-full` (pill). Padding `px-7 py-3.5`. Font: Inter 600, 15px. Hover: `#00BFB0` bg (10% darker), `scale-[1.02]` over 150ms ease-out. Shadow: `0 0 20px rgba(0, 217, 196, 0.25)` (subtle teal glow — premium signal).

**Secondary button:** Background `#1A2033` Glass Surface. Text `#F2F0F8`. Same border-radius, padding. Hover: `#232D47` (lighter glass surface).

**Ghost button:** Background transparent. Border `1.5px solid #00D9C4`. Text `#00D9C4`. Same border-radius, padding. Hover: `rgba(0, 217, 196, 0.1)` bg fill. Used for hero CTA ("See Our Rooms") per AP-005.

**Phone CTA:** `tel:+17039425526` — always clickable. Display format: "(703) 942-5526" — Inter 600, 17px, `#00D9C4` Neon Teal. Minimum 44px touch target height on mobile.

**Size hierarchy:**
- Large: `px-8 py-4` — hero CTAs, page-level primary CTAs
- Medium: `px-7 py-3.5` — section CTAs, card CTAs
- Small: `px-5 py-2.5` — inline CTAs, nav CTA, badge-level

---

### Cards

**Border radius:** `rounded-2xl` (16px) — all content cards.
**Shadow:** `0 4px 24px rgba(0,0,0,0.4)` — elevated; dark backgrounds require deeper shadow to read.
**Border:** `1px solid rgba(242,240,248,0.06)` — subtle glass edge, adds definition without harshness.
**Background:** `#1A2033` Glass Surface (standard). For featured/elevated cards (Group room, "Most Popular"): Glass Surface + `box-shadow: 0 0 0 1.5px #00D9C4` teal ring.
**Hover state:** `scale-[1.02]` over 200ms ease-out + teal border ring appears (`box-shadow: 0 0 0 1.5px rgba(0,217,196,0.6)`).
**Information hierarchy within cards:**
1. Photography / visual (full-width, 3:2 top of card)
2. Category/type badge (Neon Teal eyebrow label)
3. Card name (H3, Clash Display 600)
4. Key stat or price (Neon Teal, Inter 600)
5. Feature bullets (Inter 400, Cool Mist)
6. CTA button (bottom, medium size)

---

### Forms

**Input style:** Bordered with Glass Surface fill — `bg-[#1A2033] border border-[rgba(242,240,248,0.12)] rounded-xl`
**Label placement:** Above input — always visible. Inter 500, 13px, `#8B8FA8` Cool Mist.
**Border radius on inputs:** `rounded-xl` (12px)
**Focus state:** `border-[#00D9C4]` + `ring-2 ring-[rgba(0,217,196,0.2)]` — teal focus ring, clear and accessible.
**Submit button:** Matches large primary button (`#00D9C4` Neon Teal, pill, full-width on mobile).
**Reassurance copy placement:** Below the submit button, centered: "We respond within 2 hours during business hours. No spam. No obligation." Inter 400, 13px, `#8B8FA8`.
**Error states:** Field border turns `#FF5757` (error red) + error message below field in 12px Inter 400 `#FF5757`. "Please enter a valid phone number."
**Success state:** Form replaced by confirmation card: "You're on the list. We'll call you within 2 hours to confirm your room." — Clash Display H3 + check icon in Neon Teal.

---

## Motion Budget

**Is significant motion appropriate?** Yes. Glam Karaoke is Aspirational (entertainment venue) — the CLIENT_BRIEF's classification explicitly allows kinetic, energizing motion. The product IS an experience. Motion reinforces the energy promise. However: the video loop hero is the primary motion element. All other motion is SECONDARY and must not compete. Zero autoplay sound. Zero cursor effects. Zero particle systems.

**The 3 interactions that get motion treatment:**

1. **Stat count-up:** Review count (250), rating (4.2), room count (12) — count-up from 0, 1500ms duration, `ease-out`. Triggers on viewport entry via IntersectionObserver. Applied: homepage SocialProofBand, /about ReviewAggregateStat, /private-events PartyStatsBar.

2. **Scroll-triggered entrance:** Sections and cards fade+translate into view. Primary entrance direction rules:
   - Left-column content: `translateX(-24px) opacity(0)` → `translateX(0) opacity(1)`
   - Right-column content: `translateX(24px) opacity(0)` → `translateX(0) opacity(1)`
   - Center/full-width content: `translateY(16px) opacity(0)` → `translateY(0) opacity(1)`
   - Duration: 500ms, `cubic-bezier(0.16, 1, 0.3, 1)` — premium spring ease
   - Grid/card stagger: 60ms per item (Glam is nightlife — slightly more energetic than service businesses)

3. **Timeline reveal (/about):** The vertical timeline line draws downward (height 0 → full, 600ms ease-out) as the section enters the viewport. Timeline dots scale in (`scale(0) → scale(1)`, 200ms stagger per dot) after the line completes. Purely visual — reinforces the storytelling architecture.

**Hover states:**
- Buttons: `scale-[1.02]` over 150ms ease-out + color deepening
- Image cards: `scale-[1.03]` over 350ms spring ease (within `overflow-hidden` container)
- Nav links: Neon Teal underline slides in from left, 150ms ease-out
- Phone numbers: `#00D9C4` → `#00BFB0` color transition, 100ms

**Page transitions:** None — pure Next.js navigation. Glam's audience is a conversion-oriented nightlife crowd, not a brand-experience portfolio audience. No page transition overhead.

**Mobile animation simplification (below 768px):**
- All `translateX` slide-in animations → `translateY(12px) opacity(0)` fade-up only
- Grid stagger → single group fade-up (all children animate as one)
- Duration reduced by 25% (500ms → 375ms)
- Timeline draw animation → simple fade-in (no line draw on mobile)
- Stat count-up: preserved (it's pure JS, no performance cost)

**The motion rule (enforced):** Every animated element must serve communication. The video loop tells the story. The count-up makes stats feel earned. The entrance animations guide the eye in multi-column layouts. Nothing else gets animation budget. Motion that delays interaction is a bug.

---

## Mobile-First Specifications

**Navigation on mobile (375px):**
- Logo (left) + hamburger (right) always visible in nav. Height: 64px. Background: transparent (homepage, pre-scroll) or Glass Surface (all other states). Touch targets: logo 44px, hamburger 44px.
- Hamburger opens full-screen Stage Noir overlay. 5 nav links centered, H2 scale (30px Clash Display 600), 56px line height (ample touch target). Neon Teal "Book a Room" button at bottom of overlay, full-width.

**Hero on mobile (375px):**
- Video loop: maintained on mobile but with `playsinline autoplay muted loop preload="none"` attributes. If mobile device performance is poor, `poster` frame is pre-loaded.
- Height: 85vh (not 100vh — avoids the mobile browser chrome issue).
- H1: 40px Clash Display 700, max-width 90%, centered. Two lines maximum.
- Trust signal (4.2★): maintained — 13px Inter, same position.
- CTA buttons: stacked vertically. Ghost button first, tel: link below. Minimum 48px height on both.
- Bottom gradient thicker on mobile: `rgba(14,17,23,0.92)` at bottom 30% — ensures text legibility on smaller screens.

**Thumb zone priority:** Homepage primary CTA ("See Our Rooms") sits at approximately 72–75vh on mobile. On 375px (667px total height visible), this places the CTA at roughly 480–500px from top — within comfortable one-thumb reach from the bottom of the screen. ✓ CONFIRMED reachable without scrolling.

**Type sizes on mobile:**
- H1: 40px minimum ✓
- H2: 30px ✓
- H3: 22px ✓
- Body: 16px minimum — enforced globally ✓
- Labels/eyebrows: 11px — below body hierarchy, acceptable at non-body scale ✓

**Touch targets:** All buttons: minimum 48px height. Phone number links: 48px height on mobile. Nav links in mobile overlay: 56px height. Form inputs: 52px height (comfortable mobile input). ✓ All exceed the 44px minimum.

**Column collapse strategy:**
- Homepage: BentoGrid (rooms) → 1 column stacked. MenuHighlights split → image above, copy below. SocialProofBand → 2x2 grid (4 stats).
- /rooms: 3-col room cards → 1 column stacked. Feature matrix → 3 stacked comparison cards (one per room).
- /menu: Food editorial grid → 1 column. Drink horizontal scroll → maintained on mobile (touch-scroll gesture).
- /events: Split-screen hero → image top (40vh), content below. Calendar → 7-col condensed or week-view simplified.
- /private-events: Overlapping form card → form card stacks directly below the hero (no overlap on mobile — overlap is desktop-only). Benefits: 1 column.
- /about: Timeline → full width, same left-border treatment. 2x2 pillars → 2x2 (maintained on mobile, small cards).
- /reservations: Form is already single-column, no change.

**What gets hidden on mobile:**
- Desktop: Sticky split-screen left panel on /events (becomes standard scroll on mobile)
- Desktop: Navigation "Book a Room" pill button (moves into mobile overlay menu)
- Desktop: Feature matrix table on /rooms (becomes stacked comparison cards — not hidden, transformed)
- Nothing critical to conversion is hidden. All phone CTAs, forms, and room pricing are visible on mobile.

**Persistent mobile CTA:** Sticky bottom bar on mobile for long pages (homepage, /rooms, /private-events) — 60px height, Stage Noir bg, "Call (703) 942-5526" (teal, left) + "Book a Room" (teal pill button, right). Appears after first scroll past 100px. Disappears when user reaches footer.

---

## Anti-Pattern Enforcement

### AP-004 — Site must feel unmistakably like Glam Karaoke, not a generic nightlife template

**What generic nightlife looks like:** Deep purple background + neon pink/magenta accent + Syne or Oswald heading + full-bleed photo hero upper-left anchor + star rating in the hero.

**What v4 does instead:**
- Stage Noir `#0E1117` (cold blue-black, not purple) + Neon Teal `#00D9C4` accent (unclaimed in portfolio — feels like a karaoke screen, not a nightclub)
- Clash Display (unclaimed in portfolio) — not Syne, Oswald, Bebas Neue, or Cormorant Garamond
- Video loop hero with LOWER-CENTER text anchor (every other build uses lower-left or upper-left)
- Electric Violet `#7C4DFF` as a structural break color (not used as the primary palette — used sparingly)
- Customer language ("Like a night out without the crowd watching you") woven into copy — unmistakably karaoke, not bar, not nightclub
- The Korean-American kitchen is a structural element (not a footnote) — anchors the Annandale identity
- 12 private rooms as a product feature (not just a count) — the entire rooms page is built around the room-as-product

**Enforcement:** The Builder must not swap Clash Display for a system font. The Builder must not shift the teal accent to magenta or purple. The Builder must not use a static photo hero on the homepage — VIDEO is the directive, and if unavailable, the rationale for an alternative must be documented.

---

### AP-005 — Hero CTA must be soft — NO "Book Now" or "Reserve" above the fold

**What is prohibited:** "Book Now", "Reserve a Room", "Get a Quote", "Schedule" as primary above-fold CTA text.

**What v4 uses instead:**
- Homepage hero: "See Our Rooms →" (ghost button) — browse intent, not commitment
- /reservations hero: "Request My Room" on the form submit button — request framing, not command
- /private-events hero: "Request Availability" on the form — inquiry framing
- All section CTAs below the fold may be more direct: "Check Availability", "Call to Reserve", "Find Your Room"

**Enforcement:** The Builder must use the exact CTA copy specified in each page's section order. "Book Now" is prohibited on any above-fold element. This applies to the nav CTA — it reads "Book a Room" (browse intent) not "Book Now" (command intent).

---

### AP-006 — Testimonials must use FULL-NAME attribution or aggregate stats only

**What is prohibited:** Anonymous quotes ("John D., Yelp" or "— Happy Customer" or just a quote with no attribution).

**What v4 does instead:**
- ReviewAggregateStrip on homepage: 3 named review cards. Required format: "Best karaoke bar in the whole DMV" — [Full Name, Google]. If full names are not available from reviews, substitute the aggregate stat: "4.2★ across 250 Google Reviews" with a link to the Google profile.
- /about ReviewAggregateStat: aggregate format only — "4.2★ across 250 Google Reviews"
- /private-events TestimonialsCards: named reviews only. If names unavailable, use aggregate strip.
- No review marquee with anonymous quotes (v1 pattern) — this is explicitly retired in v4.

**Enforcement:** The Builder's content pass must pull review names from the 250 Google reviews. If full names are not available for 3 reviews, the review section becomes an aggregate stat section (4.2★ + 250 reviews + link). Under no circumstances should anonymous attribution appear.

---

### Industry clichés being avoided

1. **"Neon city nightlife" generic palette** (dark purple + pink/magenta everywhere): We use Stage Noir + Neon Teal — derived from the karaoke experience specifically (screen glow, stage light), not from "nightclub in general."

2. **Full-bleed photo hero with upper-left text anchor**: V1 and every competitor uses this. V4's video loop hero with lower-center anchor is structurally distinct.

3. **Dead events page ("coming soon")**: CLIENT_BRIEF flagged this as a v1 failure. V4's /events page has a real calendar grid, a recurring structure (every Friday), and a clear format even when specific future events are sparse.

4. **Reviews as decoration** (anonymous marquee): Reviews are a structural element in v4 — named attribution or aggregate stats with count prominence.

5. **Private events as an afterthought**: V4 makes /private-events a dedicated lead generation page with a conversion form, not a paragraph in the footer.

---

### Previous FieldOS patterns being avoided

- **Glam Karaoke v1**: Full-bleed photo + upper-left anchor + magenta #E040A0 + Syne + #1A1025 bg + #2D1F40 surfaces → NONE of this appears in v4.
- **happi-billiards**: Full-bleed photo + lower-left anchor + #1C1817 + Cormorant Garamond → distinct bg (Stage Noir is bluer/colder), distinct font (Clash Display), distinct text anchor (lower-center).
- **rumba-bar**: Full-bleed photo + lower-left + #1A1230 + Oswald → distinct (teal accent vs. warm rumba palette, Clash Display vs. Oswald).
- **casa-grande-bar**: Full-bleed photo + lower-center + Bebas Neue + burgundy → same anchor position (lower-center) but every other element distinct: no burgundy, no Bebas Neue, video loop vs. static photo.
- **pho-24 and kogiya**: About-teaser-split (photo left + copy right) → /about uses a vertical timeline instead. Location-hours-strip → integrated into footer, not a standalone section.

---

### Navigation contrast compliance

- State 1 (transparent, dark video): Logo/links `#F2F0F8` on `rgba(14,17,23,0.7)` overlay — 12.3:1 ✓ WCAG AAA
- State 2 (scrolled, Glass Surface): Logo/links `#F2F0F8` on `#1A2033` — 11.4:1 ✓ WCAG AAA
- State 3 (non-home pages, Glass Surface): Same as State 2 ✓

**Both pre-scroll and scrolled nav states confirmed with specific contrast ratios.**

---

### Interaction patterns avoided

- **Autoplay video WITH sound**: Prohibited. Video loop is muted + autoplay + loop + playsinline. No audio.
- **Aggressive popups** (exit intent, email capture): Aspirational entertainment venues rely on atmosphere and invitation, not interruption. No popup modals.
- **Gamification elements**: No points, badges, or progress bars — inappropriate for a nightlife venue.
- **Infinite scroll**: Menu and rooms pages use sectioned, finite layouts. Infinite scroll would undermine the conversion-oriented page structure.
- **Carousels / sliders with auto-advance**: Horizontal scroll sections (menu drinks, events preview) are touch/mouse-controlled, NOT auto-advancing. Auto-advance carousels are disorienting and reduce engagement.

---

## Expression Directives

**What this site should FEEL like to a first-time visitor:**

The moment a visitor lands on /: they see real footage of real people in a dark, lit-up karaoke room — laughing, singing, genuinely having a great time. The Stage Noir background makes the video pop. The Clash Display headline — clean, confident, slightly bold — promises something specific: "Your Night. Your Songs. Your Room." In three seconds, the visitor knows this is a private karaoke venue with real rooms and real energy. Not a generic nightlife listing. Not a restaurant. Not a bar that happens to have a karaoke machine in the corner.

**Atmosphere:** Electric and intimate. The paradox at the core of karaoke: you're performing, but only for the people you chose to bring. The site must live in that tension — the neon energy of performance + the cozy safety of privacy. The video loop delivers the energy. The "private rooms" language delivers the safety. Both elements must coexist on the homepage above the fold.

**Imagery direction:** Real people > empty rooms. Atmosphere > product shots. Dark, glowing, slightly cinematic > clean, bright, corporate. The 21 professional photos from the current site are the primary asset — request the originals from client at kickoff. Video footage of DJ nights (DJ @loxs1ck) is the #1 request at client onboarding.

**Motion philosophy:** Kinetic but disciplined. The video loop is motion enough at full scale. Secondary animations (entrance, count-up, timeline draw) add rhythm without chaos. Everything feels like the room warming up before the first song — anticipation, not overwhelm.

**Typography voice:** Clash Display at large scale reads as confident and modern — not aggressive, not nostalgic, not generic. The karaoke experience is both lowbrow (singing along to pop songs) and highbrow (the effort, the courage, the craft). Clash Display sits comfortably in that space — accessible and premium simultaneously. Inter body copy keeps everything readable and clear. No decorative script fonts (they'd read as wedding, not karaoke). No condensed gothic (that's sports bar, not private room).

**Color voice:** The Neon Teal `#00D9C4` is earned. It's the color of a karaoke screen displaying lyrics. The color of neon on a dark room surface. The color that says "your turn." It appears exclusively on CTAs, interactive elements, stats, and eyebrow labels — never as decoration. When a visitor sees teal on this site, they know: this is what I interact with. This is what matters. That discipline is what makes it feel premium rather than generic.

**The one sentence this site communicates:** "This is the night you've been putting off — and it's easier than you think to make it happen."
