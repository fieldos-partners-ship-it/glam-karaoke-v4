# Conversion/Copy Review — Glam Karaoke v4

**Date:** 2026-04-15
**Classification:** Aspirational (nightlife / entertainment venue)
**Decision Speed:** Aspirational — desire before the ask
**Primary conversion action:** Phone call to reserve a room
**Audit scope:** All 7 pages + layout, with extra focus on /menu, /reservations, and /rooms; mobile conversion at 375px

---

## P1 — Must Fix (2 issues)

### P1-01: Hero primary CTA ("See Our Rooms") routes to information, not conversion — no phone CTA is visually prominent above the fold on mobile

**File:** `src/components/home/VideoLoopHero.tsx` lines 101–115

**Finding:** On mobile (375px), the hero renders two CTAs stacked vertically: "See Our Rooms →" (ghost-light, white border, white text) and a plain text `PhoneLink` below it. The phone number appears in cool-mist/70 text with no button frame — it looks like body copy, not a CTA. The MobileStickyBar at the bottom handles the persistent call action, but within the hero itself the phone link has zero visual distinction and is styled identically to supporting text.

Per AP-005 the ghost-light CTA is intentional (aspirational business, soft CTA first), but the consequence is that the phone number — which is the primary revenue action for this business — has no visual weight in the hero. A user scanning the hero on mobile at 375px will see "See Our Rooms →" as the sole button and may not register the phone number as a CTA.

**Specific fix:**
Wrap the mobile phone link in a secondary pill button treatment — or elevate its minimum visual weight. The desktop version (`hidden sm:flex`) is fine as plain text because the sticky header has nav context. The mobile version (`flex sm:hidden`) needs a button-like container:

```tsx
// VideoLoopHero.tsx — replace mobile PhoneLink (lines 111–115) with:
<PhoneLink
  source="hero-mobile"
  className="flex sm:hidden items-center justify-center gap-2 min-h-[48px] px-6 rounded-full border border-white/40 bg-white/10 font-inter font-semibold text-[15px] tracking-[0.05em] text-soft-white hover:bg-white/20"
>
  <PhoneCall className="h-4 w-4" aria-hidden="true" />
  (703) 942-5526 — Reserve Now
</PhoneLink>
```

This preserves AP-005 (soft CTA leads) while ensuring the phone action is thumb-reachable with visual prominence that passes the squint test.

---

### P1-02: No phone number visible in header on mobile — hamburger only

**File:** `src/components/layout/Header.tsx` lines 111–119

**Finding:** On mobile, the header renders only the logo (left) and a hamburger button (right). There is no phone number or "Call" shortcut visible in the header at any scroll position on mobile. A visitor who arrives mid-scroll on an inner page (e.g. /rooms, /menu) has no phone CTA in view until they either scroll to a section with a PhoneLink, reach the MobileStickyBar, or open the mobile menu and notice the "or call (703) 942-5526" microcopy at the bottom.

The MobileStickyBar mitigates this partially, but the sticky bar is at the bottom of the screen — the bottom of the thumb zone, not the top. For a nightlife reservation call, users often land from a direct link or shared URL mid-page and expect the phone in the top nav.

**Specific fix:**
Add a compact phone pill button to the header right of the logo, left of the hamburger, visible only on mobile:

```tsx
// Header.tsx — add after the logo Link, inside the flex row:
<PhoneLink
  source="header-mobile"
  className="md:hidden flex items-center gap-1.5 min-h-[44px] px-3 rounded-full border border-neon-teal/40 bg-neon-teal/10 font-inter font-semibold text-[13px] text-neon-teal"
>
  <PhoneCall className="h-3.5 w-3.5" aria-hidden="true" />
  Call
</PhoneLink>
```

This adds a visible top-zone phone touchpoint without crowding the compact header bar.

---

## P2 — Should Fix (11 issues)

### P2-01: RoomsPreviewGrid CTAs say "Book This Room →" but route to /rooms — not to a booking action

**File:** `src/components/home/RoomsPreviewGrid.tsx` line 135

**Finding:** The CTA button inside each room card reads "Book This Room →" but `href="/rooms"` routes to the /rooms page — which is an information page, not a booking action. The button promises booking and delivers browsing. This is a specificity mismatch that creates friction: the visitor expects to begin a reservation, instead gets the same pricing info they already see in the card.

**Specific fix:**
Either change the copy to match the destination, or change the destination to match the copy:

Option A (preferred — preserves conversion intent):
```tsx
// Change href to /reservations:
<CTAButton href="/reservations" variant="ghost" size="sm">
  Reserve This Room →
</CTAButton>
```

Option B (keeps /rooms destination — lower conversion intent):
```tsx
<CTAButton href="/rooms" variant="ghost" size="sm">
  See Room Details →
</CTAButton>
```

---

### P2-02: RoomTierComparison CTA says "Check Availability" — no outcome specified, reads like a soft confirm

**File:** `src/components/rooms/RoomTierComparison.tsx` line 92

**Finding:** "Check Availability" is a contact-page-style CTA that signals the visitor is about to look something up, not actually reserve. The action underneath is a phone call to reserve — the copy should carry the commitment that the action requires.

**Specific fix:**
```tsx
// Change PhoneLink label to:
>
  Call to Reserve {room.name}
</PhoneLink>
```
Or: "Call and Lock Your Room" for the Group (most popular) card.

---

### P2-03: RoomMatchStrip heading "Pick the vibe. Then call and claim it." — strong, but CTA labels ("Call for Duo Room / Call for Group Room") are generic

**File:** `src/components/reservations/RoomMatchStrip.tsx` line 78

**Finding:** "Call for {room.name}" is mechanical. It names the action (call) and the object (room name) but doesn't carry the benefit or urgency. For an aspirational business, the micro-ask should feel like the start of a night, not a service call.

**Specific fix:**
```tsx
// Change PhoneLink children per room type:
// Duo:        "Call to Claim Your Duo Room"
// Group:      "Call to Lock Your Group Room"
// Party Suite: "Call and Claim the Suite"
```

---

### P2-04: PrivateEventsCTABand CTA "Request a Private Event" uses passive, non-outcome language

**File:** `src/components/home/PrivateEventsCTABand.tsx` line 24

**Finding:** "Request" is soft for a band section designed to capture private event leads. This is the highest revenue-per-booking page on the site. The CTA should create the forward motion of planning, not filing a request.

**Specific fix:**
```tsx
<CTAButton href="/private-events" variant="secondary" size="lg">
  Plan Your Private Event →
</CTAButton>
```

---

### P2-05: InquiryForm on /private-events has no reassurance copy against spam/obligation — only a fine-print disclaimer

**File:** `src/components/private-events/InquiryForm.tsx` lines 209–212

**Finding:** The form ends with: "Not a booking confirmation. We'll follow up within 2 hours." This is a disclaimer that reduces commitment anxiety but is written like a legal caveat. There's no affirmative privacy reassurance: "Will they spam me?" is left unaddressed. Additionally the response time promise ("We respond within 2 hours during business hours") appears at the TOP of the form as body copy but disappears visually by the time the user reaches the submit button — leaving the button itself context-free.

**Specific fix:**
Replace or supplement the fine-print line with:
```tsx
<p className="font-inter text-cool-mist/60 text-xs text-center mt-4">
  We respond within 2 hours. Your info is only used to confirm your booking — no spam, ever.
</p>
```

---

### P2-06: MenuExperience tab "Happy Hour" tab content is vague — no specific drink discounts, and tells users to "ask the team" without a conversion path

**File:** `src/data/content.ts` lines 347–357 / `src/components/menu/HappyHourBand.tsx`

**Finding:** The Happy Hour tab contains: "Ask the team which drinks are included that night." This is accurate — the rotating offer means no specific discount can be committed to. However it's a dead-end for a web visitor: they learn when happy hour is but have no conversion path from the tab itself. There's a "See Drinks" secondary button but no primary "Call to ask / Reserve for happy hour."

For an aspirational business, the happy hour offer is a strong acquisition driver (free early window + social proof of a full venue). It needs a conversion hook.

**Specific fix:**
Add a `PhoneLink` in the "Best Move" card of `HappyHourBand.tsx`:
```tsx
// After the "See Drinks" CTAButton in HappyHourBand.tsx:
<div className="mt-3">
  <PhoneLink
    source="happy-hour-band"
    className="inline-flex items-center gap-2 font-inter font-semibold text-sm text-neon-teal min-h-[44px]"
  >
    Call us to lock a room for happy hour →
  </PhoneLink>
</div>
```

---

### P2-07: /events page final CTA band headline "Want the whole stage for your group? →" — weak H2 with trailing arrow in the heading tag

**File:** `src/app/events/page.tsx` line 37

**Finding:** The arrow `→` inside the `h2` tag is unconventional and doesn't read as a CTA — it reads as a heading trying to be a link. The headline should drive the emotion of the private event offer, and the CTA button should carry the action.

**Specific fix:**
```tsx
<h2 className="font-clash font-bold text-[30px] md:text-[44px] text-soft-white leading-[1.1] tracking-[-0.02em] mb-6">
  Your group. Your whole stage. One night.
</h2>
```

---

### P2-08: Menu page bottom CTA copy "Hungry? Thirsty? You know what to do." — clever but misses the conversion reason

**File:** `src/app/menu/page.tsx` lines 29–36

**Finding:** "You know what to do" assumes the visitor has been warmed up enough to call without context. The phone link that follows is just the raw number — no framing for what happens when they call. This is particularly weak on mobile where the CTA is the last thing before MobileStickyBar.

**Specific fix:**
```tsx
<p className="font-clash font-bold text-[24px] md:text-[32px] text-soft-white tracking-[-0.02em] mb-3">
  Order from the room. Skip the wait.
</p>
<p className="text-cool-mist font-inter text-base mb-6">
  Call to reserve your room and we'll handle the rest — food, drinks, and all.
</p>
```

---

### P2-09: /about page CTA "Ready to come in?" — weakest CTA on the site; no specificity, no urgency

**File:** `src/app/about/page.tsx` line 64

**Finding:** "Ready to come in?" is a question that allows the visitor to answer "not yet." Aspirational businesses need closing copy that extends the desire created above, not a tepid check-in.

**Specific fix:**
```tsx
<p className="font-clash font-semibold text-[24px] md:text-[32px] text-soft-white mb-6">
  Your room is waiting. Make it your night.
</p>
```

---

### P2-10: HappyHourCallout on homepage has no CTA — purely informational dead end

**File:** `src/components/home/HappyHourCallout.tsx`

**Finding:** The homepage ends (section 8) with happy hour + walk-in info, then hits the Footer. There's no CTA between the last content section and the footer. Visitors who scroll to the bottom without converting have no final prompt. The HappyHourCallout section reads like a footnote rather than a closing argument.

**Specific fix:**
Add a simple PhoneLink or CTAButton after the happy hour text:
```tsx
// Inside HappyHourCallout after the subtext <p>:
<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
  <CTAButton href="/reservations" variant="primary" size="lg">
    Reserve Your Room →
  </CTAButton>
  <PhoneLink
    source="homepage-bottom-cta"
    className="font-inter font-semibold text-base text-cool-mist hover:text-soft-white min-h-[44px] inline-flex items-center"
  />
</div>
```

---

### P2-11: Testimonials are all 5-star reviews with identical structure — none address the documented objections

**File:** `src/data/content.ts` lines 359–400+

**Finding:** All 6 featured reviews in `featuredReviews` are 5-star. Three of the most powerful review contexts from CLIENT_BRIEF.md are not addressed in any testimonial:
1. **Song selection anxiety** ("will there be songs I know?") — not addressed in current reviews
2. **Price uncertainty** ("how much will a night actually cost?") — no review mentions pricing favorably
3. **Parking/access concern for late-night NoVA visitors** — only partially addressed by Jenny Park's review ("well-lit and safe parking") but that review is not surfaced on /rooms or /reservations where the concern is most active

The Jenny Park review that mentions "well-lit and safe" parking belongs on /reservations and /rooms, not just homepage. Additionally, the Alyssa Kim review ("We booked the Party Suite for a birthday and it felt effortless from the first call") is the strongest conversion testimonial on the site — it directly addresses the friction objection of the phone-call reservation flow — but it lives only in the `home`/`groups` contexts. It should be featured on /reservations specifically.

**Specific fix in `content.ts`:**
```ts
// Alyssa Kim review — add 'reservations' to contexts:
contexts: ['home', 'groups', 'reservations'],

// Jenny Park review — add 'rooms' and 'reservations' to contexts:
contexts: ['home', 'groups', 'rooms', 'reservations'],
```

Then surface them in RoomMatchStrip and the reservations page if a TestimonialCarousel slot is added.

---

## P3 — Nice to Fix (5 issues)

### P3-01: DJNightsTeaser event dates are hardcoded — will be stale

**File:** `src/components/home/DJNightsTeaser.tsx` lines 14–17

**Finding:** April 18, April 25, May 2 are hardcoded. When those dates pass, the section shows past events. This is a trust and credibility issue that compounds over time. Consider pulling dates from `content.ts` so they can be updated without touching the component, or add a comment flagging the update cadence for the client.

**Suggested fix:** Move dates array to `content.ts` under `events.upcomingDJNights` with a "last updated" comment, or add a `VIDEO_TODO`-style flag on the component itself.

---

### P3-02: Menu page H1 ("Glam Karaoke Menu.") is a label, not a value proposition

**File:** `src/data/content.ts` line 158 (`menuExperience.heroTitle`)

**Finding:** "Glam Karaoke Menu." fails the clarity/specificity test — it describes what the page is, not what the visitor gets. For a page designed to make food and drinks a desire object (and indirectly drive room reservation intent), the H1 should create appetite.

**Suggested rewrite:**
```ts
heroTitle: 'Korean-American Kitchen. Full Bar. Your Table.'
```
Or: `'Real Food. 16 Soju Flavors. Order from the Room.'`

---

### P3-03: About page H1 "Glam Karaoke" is a brand name, not a value proposition

**File:** `src/components/about/FoundingHero.tsx` line 37

**Finding:** On the /about page, the H1 is "Glam Karaoke" — the business name. The eyebrow ("Est. March 18, 2022") provides context but the H1 itself is just the brand name, not a value prop or founding story hook. The subhead carries the actual story.

**Suggested rewrite:**
```tsx
<h1 className="menu-heading mb-4 text-[52px] md:text-[76px]">
  NoVA's Night Out,<br />Since 2022.
</h1>
```

---

### P3-04: Private events hero H1 "Your Group. Your Soundtrack. Your Night." mirrors homepage H1 structure

**File:** `src/components/private-events/PrivateEventsHero.tsx` line 34

**Finding:** The homepage H1 is "Your Night. Your Songs. Your Room." and the private events H1 is "Your Group. Your Soundtrack. Your Night." — same tricolon possessive structure. On a 7-page site with two pages using the same rhetorical device, the pattern reads as a template rather than page-specific positioning. The private events page should feel bigger and more exclusive.

**Suggested rewrite:**
```tsx
<h1 className="menu-heading mb-4 text-[48px] md:text-[68px]">
  Rent the Whole Stage.<br />Run the Night Your Way.
</h1>
```

---

### P3-05: CallConciergePanel's "Best Time To Call" box says "During open hours" — no urgency signal for prime time

**File:** `src/components/reservations/CallConciergePanel.tsx` lines 45–51

**Finding:** The concierge timing info reads "During open hours" and "Weekend prime-time slots move fastest, so calling earlier in the day helps." The scarcity message is present but passive. "Move fastest" understates the actual conversion opportunity here — this is the most direct objection-handler for the "what if I can't get a room" concern.

**Suggested rewrite:**
```tsx
<p className="mt-2 font-clash text-[28px] font-bold tracking-[-0.04em] text-soft-white">
  Before the weekend rush
</p>
<p className="mt-2 font-inter text-sm leading-relaxed text-cool-mist">
  Friday and Saturday rooms are the first to go. Calling before noon on the day you want in is the fastest path to your slot.
</p>
```

---

## Mobile Conversion Audit — 375px Focus

### What passes

- **MobileStickyBar:** Full-width, 56px height, neon teal background with phone icon + number — correct and prominent. Satisfies persistent mobile CTA requirement. `src/components/layout/MobileStickyBar.tsx`
- **PhoneLink component:** All phone numbers site-wide go through `<PhoneLink>` which wraps `tel:+17039425526` — no bare phone numbers detected. GC-3 compliant.
- **CTAButton minimum heights:** `sm: min-h-[44px]`, `md: min-h-[44px]`, `lg: min-h-[48px]` — all tap targets meet 44px minimum.
- **InquiryForm input types:** `type="tel"` on phone, `type="email"` on email, `type="date"` on date picker — correct keyboard triggering on mobile.
- **Form input heights:** Inputs use `py-3` + `text-base` (16px) — effectively 44–48px tall, sufficient for mobile tapping.
- **Mobile menu:** Full-screen overlay with 30px nav links (min-h-[56px] flex items-center) and a full-width "Book a Room" button. Accessible.
- **No horizontal scroll:** All sections use responsive layouts with px-4 padding that prevent overflow at 375px.
- **InquiryForm success state:** Personalized — "We'll reach out to [name] within 2 hours to confirm your night." Passes confirmation quality test.
- **RoomMatchStrip PhoneLinks:** min-h-[48px], full-width, pill style — ideal thumb target on mobile.

### Mobile issues (8 flagged — P1 and P2)

| # | Issue | Severity | File | Mobile-Specific |
|---|-------|----------|------|-----------------|
| M1 | Phone link in hero has no visual button treatment — reads as body text on mobile | P1 | VideoLoopHero.tsx:111–115 | Yes |
| M2 | No phone/call shortcut in mobile header — hamburger only | P1 | Header.tsx:111–119 | Yes |
| M3 | HappyHourCallout at homepage bottom has no CTA — dead end after final scroll | P2 | HappyHourCallout.tsx | Worse on mobile (no hover intent) |
| M4 | DJNightsTeaser PhoneLinks ("RSVP: Call Us →") have no phone icon and rely on text label only — small visual target in a horizontal scroll context | P2 | DJNightsTeaser.tsx:86–91 | Yes |
| M5 | InquiryForm phone/email inputs side-by-side (`sm:grid-cols-2`) — on mobile they stack, but at 375px each input is full width which is correct. However, Date input (`type="date"`) renders a native picker with no min/max constraints — can select past dates | P2 | InquiryForm.tsx:125–134 | Yes |
| M6 | Menu page tab interface (Food / Drinks / Happy Hour) renders tab labels at `min-h-[44px]` — correct. But on 375px viewport with 3 tabs plus padding, tab text is truncated if viewport is narrow | P3 | TypographicHero.tsx:98 | Yes |
| M7 | RoomsPreviewGrid bento grid collapses to single column on mobile (correct) but "Book This Room →" routes to /rooms not /reservations — extra tap to convert | P2 | RoomsPreviewGrid.tsx:135 | Amplified on mobile |
| M8 | Footer phone link rendered with `min-h-[44px] flex items-center w-fit` — the `w-fit` constrains tap width to text width only; on mobile this makes the tap target very narrow | P2 | Footer.tsx:64 | Yes |

**M8 footer fix:**
```tsx
// Footer.tsx line 64 — remove w-fit or replace with inline-flex:
className="text-neon-teal text-sm font-inter font-semibold block mb-2 hover:text-neon-teal-hover min-h-[44px] flex items-center"
// w-fit removed — PhoneLink renders full available width on mobile
```

**M4 DJ teaser PhoneLink fix:**
```tsx
// DJNightsTeaser.tsx line 86–91 — add phone icon:
<PhoneLink
  source={`dj-teaser-${event.id}`}
  className="inline-flex items-center gap-2 font-inter font-semibold text-[15px] uppercase tracking-[0.12em] min-h-[44px]"
>
  <PhoneCall className="h-4 w-4" aria-hidden="true" />
  RSVP: Call Us →
</PhoneLink>
```

**M5 date input fix — add min date:**
```tsx
// InquiryForm.tsx line 130 — add min attribute:
<input
  ...
  type="date"
  min={new Date().toISOString().split('T')[0]}
  ...
/>
```

---

## Page-by-Page Summary

```
| Page             | CTA Present | Phone Visible          | Trust Signals | Tone Match  | Copy Quality | Mobile OK | Status     |
|------------------|-------------|------------------------|---------------|-------------|--------------|-----------|------------|
| /                | ✓           | Hero (weak) + Sticky   | 4.2★ + count  | ✓           | Strong       | Partial   | P1+P2      |
| /rooms           | ✓           | BookingInfoBand + cards | Price + FAQ  | ✓           | Strong       | ✓         | P2 (CTAs)  |
| /menu            | ✓           | Bottom CTA             | Happy Hour    | ✓           | Good         | ✓         | P2 (copy)  |
| /events          | ✓           | DJ RSVP cards          | DJ dates      | ✓           | Good         | Partial   | P2+P3      |
| /private-events  | ✓           | Final CTA section      | Form + stats  | ✓           | Strong       | ✓         | P2 (form)  |
| /about           | ✓           | About CTA              | Press + stars | ✓           | Weak bottom  | ✓         | P2+P3      |
| /reservations    | ✓ ✓ ✓      | 3 PhoneLink sections   | 4/5 signals  | ✓           | Strong       | ✓         | P2 (micro) |
```

---

## Objection Map (CLIENT_BRIEF.md cross-check)

The three primary conversion objections for Glam based on CLIENT_BRIEF.md analysis:

**1. "Will the song selection cover what I want?"**
- Address: FAQAccordion on /rooms covers this thoroughly ("dual system — YouTube + traditional Korean"). Customer language used ("both karaoke system and iPad provided").
- Status: Addressed. No flag.

**2. "Is the pricing predictable / worth it?"**
- Address: Pricing is transparent ($40/$50/$70/hr) on /rooms and RoomMatchStrip. Happy hour is surfaced. No surprise fee language.
- Status: Addressed. No flag.

**3. "Is it easy to get in / will I be turned away without a reservation?"**
- Address: FAQ says "walk-ins are always welcome" with caveat for weekends. BookingInfoBand ("Rooms fill fast on weekends") creates correct scarcity signal. However, the CallConciergePanel's "Best Time To Call" box is too passive (P3-05 above).
- Status: Partially addressed — P3 flag above.

---

## Specific Rewrites Summary

| Location | Current | Suggested Rewrite |
|----------|---------|-------------------|
| RoomsPreviewGrid CTAs | "Book This Room →" → /rooms | "Reserve This Room →" → /reservations |
| RoomTierComparison PhoneLink | "Check Availability" | "Call to Reserve [Room Name]" |
| PrivateEventsCTABand | "Request a Private Event" | "Plan Your Private Event →" |
| Menu page bottom CTA heading | "Hungry? Thirsty? You know what to do." | "Order from the room. Skip the wait." |
| Menu page H1 (heroTitle) | "Glam Karaoke Menu." | "Korean-American Kitchen. Full Bar. Your Table." |
| /about H1 | "Glam Karaoke" | "NoVA's Night Out, Since 2022." |
| /about bottom CTA | "Ready to come in?" | "Your room is waiting. Make it your night." |
| /events final CTA H2 | "Want the whole stage for your group? →" | "Your group. Your whole stage. One night." |
| /private-events H1 | "Your Group. Your Soundtrack. Your Night." | "Rent the Whole Stage. Run the Night Your Way." |
| CallConciergePanel timing | "During open hours" | "Before the weekend rush" |
| RoomMatchStrip PhoneLink labels | "Call for Duo Room" / "Call for Group Room" | "Call to Claim Your Duo Room" / "Call to Lock Your Group Room" / "Call and Claim the Suite" |
