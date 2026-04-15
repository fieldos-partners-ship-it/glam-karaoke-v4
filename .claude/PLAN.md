# Content Fixer Plan — Glam Karaoke v4
Date: 2026-04-15

## Fix Order (from priority list)

1. **layout.tsx** — Add `export const viewport` (CRITICAL — viewport meta missing)
2. **contact/page.tsx** — Build full contact page (P1-01 SEO)
3. **not-found.tsx** — Build branded 404 (P1-03 SEO)
4. **schemas.ts** — Add `buildFAQSchema()` function
5. **FAQAccordion.tsx** — Move FAQ data to content.ts, import back
6. **content.ts** — Export `faqItems` array; fix menuExperience.heroTitle; fix testimonial contexts
7. **rooms/layout.tsx** — Create with FAQPage schema injection
8. **VideoLoopHero.tsx** — Mobile phone CTA pill (P1-01 conversion)
9. **Header.tsx** — Add compact mobile phone pill (P1-02 conversion)
10. **RoomsPreviewGrid.tsx** — "Book This Room →" /rooms → "Reserve This Room →" /reservations
11. **OG tags** — /rooms, /menu, /events, /private-events, /about pages
12. **FoundingHero.tsx** — H1 "Glam Karaoke" → "Annandale's Karaoke Destination"
13. **EventsSplitHero.tsx** — H1 → "DJ Nights at Glam Karaoke — Every Friday"
14. **menu/page.tsx** — Title tag + H1 copy fixes
15. **BreadcrumbList** — layouts for /menu, /events, /private-events, /about, /reservations
16. **RoomTierComparison.tsx** — "Check Availability" → "Call to Reserve [room.name]"
17. **HappyHourCallout.tsx** — Add CTAButton + PhoneLink CTA
18. **InquiryForm.tsx** — Add spam reassurance near submit
19. **HappyHourBand.tsx** — Add PhoneLink conversion path
20. **RoomMatchStrip.tsx** — Better CTA labels per room
21. **PrivateEventsCTABand.tsx** — "Request" → "Plan Your Private Event →"
22. **events/page.tsx** — H2 copy fix + CTA label
23. **about/page.tsx** — Bottom CTA copy fix
24. **Footer.tsx** — Add /contact to navLinks
25. **Build verification** — npm run build, 0 TS errors

## Notes
- FAQAccordion data currently hardcoded — need to extract to content.ts and re-import
- PhoneLink in HappyHourBand needs 'use client' check (already is 'use client')
- HappyHourCallout is a server component — PhoneLink is client so wrap is fine (Next.js handles)
- BreadcrumbList layouts: create rooms/layout.tsx, menu/layout.tsx, events/layout.tsx, private-events/layout.tsx (check if exists), about/layout.tsx
