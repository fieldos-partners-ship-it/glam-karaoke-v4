'use client'

// VideoLoopHero — Video loop hero with image fallback
// VIDEO_TODO: Replace bg-image with <video> element when client provides footage
// GC-10: gradient-protected hero — linear-gradient overlay as specified in UI_DIRECTION.md
// AP-005: First CTA is ghost-light "See Our Rooms" — NOT "Book Now"

import Image from 'next/image'
import { PhoneCall } from 'lucide-react'
import PhoneLink from '@/components/ui/PhoneLink'
import CTAButton from '@/components/ui/CTAButton'
import { businessInfo, reviewData } from '@/data/content'

export default function VideoLoopHero() {
  const { videoSrc } = businessInfo

  return (
    // Hero height: h-[85vh] mobile, h-screen desktop
    <section
      className="relative h-[85vh] md:h-screen flex items-end justify-center overflow-hidden bg-[#111111]"
      aria-label="Glam Karaoke — Private Karaoke Rooms in Annandale, VA"
    >
      {/* Background — video or fallback image */}
      {videoSrc ? (
        // When client provides video footage, this renders
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/ambiance-3.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <>
          {/* Storefront exterior — same image across breakpoints */}
          <div className="absolute inset-0">
            <Image
              src="/images/storefront-1.webp"
              alt="Glam Karaoke storefront sign against blue sky in Annandale, VA"
              fill
              className="object-cover object-center"
              priority
              quality={100}
              sizes="100vw"
            />
          </div>
        </>
      )}

      {/* Gradient overlay — darkens toward bottom for tagline legibility over storefront photo */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.75) 100%)',
        }}
        aria-hidden="true"
      />

{/* Eyebrow — hidden on mobile, shown on desktop in the open sky area */}
      <div className="hidden md:block absolute inset-x-0 top-28 z-10 px-4 text-center md:top-36 lg:top-40">
        <p className="font-inter text-[14px] font-bold uppercase tracking-[0.24em] text-white [text-shadow:0_3px_18px_rgba(0,0,0,0.45)] md:text-[16px]">
          Annandale, VA · 12 Private Rooms
        </p>
      </div>

      {/* Hero content — anchored LOWER-CENTER */}
      <div className="relative z-10 w-full max-w-[820px] mx-auto px-4 pb-16 md:pb-28 text-center">
        {/* H1 — Clash Display 700 */}
        {/* GC-M: 42px on mobile to prevent overflow at 375px; scales up at sm: and md: */}
        <h1
          className="menu-heading mb-5 text-[42px] sm:text-[64px] md:text-[88px]"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 0 4px rgba(0,0,0,0.6)' }}
        >
          Your Night. Your Songs. Your Room.
        </h1>

        {/* Subhead — white with matching shadow for readability over storefront image */}
        <p
          className="font-inter mx-auto mb-6 max-w-[44rem] text-[21px] leading-[1.6] tracking-[0.02em] text-white md:text-[26px]"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 0 4px rgba(0,0,0,0.6)' }}
        >
          12 private rooms. Live main stage. Korean-American kitchen. Annandale, VA.
        </p>

        {/* Trust signal — AP-009 null-safe */}
        {reviewData.ratingValue && reviewData.reviewCount && (
          <div className="flex items-center justify-center gap-1.5 mb-6">
            <div className="flex" aria-hidden="true">
              {[1, 2, 3, 4].map((i) => (
                <svg key={i} className="w-4 h-4 text-neon-teal" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              {/* Partial star for 4.2 */}
              <svg className="w-4 h-4 text-neon-teal/40" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span className="font-inter text-[15px] tracking-[0.04em] text-soft-white/84 md:text-base">
              {reviewData.ratingValue}★ across {reviewData.reviewCount} Google Reviews
            </span>
          </div>
        )}

        {/* CTAs — stacked on mobile, row on desktop */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* AP-005: ghost-light soft CTA — NOT "Book Now" */}
          <CTAButton href="/rooms" variant="ghost-light" size="lg">
            See Our Rooms →
          </CTAButton>
          {/* GC-3: PhoneLink — separate sources for desktop/mobile tracking */}
          <PhoneLink
            source="hero-desktop"
            className="hidden sm:flex items-center min-h-[48px] font-inter font-semibold text-[17px] tracking-[0.05em] text-cool-mist hover:text-soft-white"
          />
          {/* P1-01: Mobile phone CTA with pill treatment — visual prominence for primary revenue action */}
          <PhoneLink
            source="hero-mobile"
            className="flex sm:hidden items-center justify-center gap-2 min-h-[48px] px-6 rounded-full border border-white/40 bg-white/10 font-inter font-semibold text-[15px] tracking-[0.05em] text-soft-white hover:bg-white/20"
          >
            <PhoneCall className="h-4 w-4" aria-hidden="true" />
            {businessInfo.phone} — Reserve Now
          </PhoneLink>
        </div>
      </div>
    </section>
  )
}
