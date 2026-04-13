# GC/AP Compliance Map — Glam Karaoke v4
Generated: 2026-04-13-0737

## Global Conventions
GC-1 (content.ts single source of truth): APPLIES — Task 1; all business data in src/data/content.ts, never hardcoded in components
GC-2 (layout.tsx wrapper for interactive pages): APPLIES — /private-events + /reservations each have layout.tsx (server metadata/schema) + page.tsx ('use client' form state)
GC-3 (PhoneLink component): APPLIES — all pages; PhoneLink component wraps all tel: links with tracking and aria-label
GC-4 (ga4IsConfigured gate): APPLIES — Task 1; layout.tsx renders GA4 Script only when ga4IsConfigured === true
GC-5 (scroll-aware navbar): APPLIES — Task 1 Header.tsx; isTransparent = !scrolled && isHomePage; scroll listener with { passive: true }
GC-6 (schema builders in schemas.ts): APPLIES — Task 10; all schema functions in src/lib/seo/schemas.ts, import from content.ts
GC-7 (MobileStickyBar): APPLIES — Task 1; server component, fixed bottom, 56px height, md:hidden
GC-8 (CTAButton variant system): APPLIES — Task 1; primary/secondary/ghost/ghost-light variants, no style prop
GC-9 (PostCSS v3 config): APPLIES — Task 1; postcss.config.mjs with tailwindcss: {} and autoprefixer: {}
GC-10 (gradient-protected hero): APPLIES — homepage VideoLoopHero; linear-gradient overlay with specified stops
GC-14 (accessible form pattern): APPLIES — /private-events InquiryForm + /reservations ReservationForm; aria-describedby, aria-invalid, role="alert"

## Anti-Patterns
AP-001 (nav text unreadable): MUST CHECK — all pages; transparent state uses #F2F0F8 with 12.3:1 contrast on dark video overlay
AP-004 (Aspirational generic design): MUST CHECK — homepage; video loop hero + bento grid + horizontal scroll differentiates from v1
AP-005 (hard CTA before desire): MUST CHECK — homepage hero CTA is ghost-light "See Our Rooms" NOT "Book Now"; private-events submit is "Request Availability"
AP-006 (anonymous testimonials): MUST CHECK — all review sections; full name + Google attribution required; no "– A satisfied guest"
AP-007 (no persistent mobile CTA): APPLIES — MobileStickyBar covers this permanently
AP-008 (accent color overuse): MUST CHECK — Neon Teal ONLY on CTAs, badges, star ratings, eyebrow text; not on dividers, decorative icons, section borders
AP-009 (bracket token placeholder text): MUST CHECK — all content strings; use null-safe conditionals; generic fallback over [brackets]
AP-010 (health inspection format): NOT APPLICABLE — karaoke venue, not a restaurant-category page; no health inspection trust signal
AP-011 (placeholder phone/address): MUST CHECK — content.ts uses real verified phone (703) 942-5526 and real address 4369 John Marr Dr
AP-013 (schema telephone E.164): MUST CHECK — schemas.ts uses businessInfo.phoneTel (+17039425526) exclusively; never businessInfo.phone
AP-014 (missing canonical): MUST CHECK — all pages have alternates.canonical in metadata
AP-015 (build fails): MUST CHECK — npm run build after each task; zero TypeScript errors
AP-018 (/privacy + footer link): MUST CHECK — /privacy route exists; Footer.tsx links to /privacy
AP-021 (OG image): MUST CHECK — root layout.tsx metadata.openGraph.images configured
AP-022 (title/description length): MUST CHECK — all page titles ≤60 chars, all meta descriptions ≤155 chars
AP-024 (autoprefixer): MUST CHECK — postcss.config.mjs includes autoprefixer: {}
AP-039 (scroll reveal animations): MUST CHECK — all animated elements use Framer Motion whileInView with once:true OR have verified IntersectionObserver ref via hooks; no CSS anim-fade-* class without observer
