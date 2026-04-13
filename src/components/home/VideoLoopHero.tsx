'use client'

// VideoLoopHero — Video loop hero with image fallback
// VIDEO_TODO: Replace bg-image with <video> element when client provides footage
// GC-10: gradient-protected hero — linear-gradient overlay as specified in UI_DIRECTION.md
// AP-005: First CTA is ghost-light "See Our Rooms" — NOT "Book Now"

import Image from 'next/image'
import PhoneLink from '@/components/ui/PhoneLink'
import CTAButton from '@/components/ui/CTAButton'
import { businessInfo, reviewData } from '@/data/content'

export default function VideoLoopHero() {
  const { videoSrc } = businessInfo

  return (
    // Hero height: h-[85vh] mobile, h-screen desktop
    <section
      className="relative h-[85vh] md:h-screen flex items-end justify-center overflow-hidden"
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
          poster="/images/interior-2.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        // Static fallback until video is provided
        <div className="absolute inset-0">
          <Image
            src="/images/interior-2.jpg"
            alt="Inside Glam Karaoke — private rooms with professional lighting and sound"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      )}

      {/* GC-10: Gradient overlay — text legible at bottom, atmosphere visible at top */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(14,17,23,0.92) 0%, rgba(14,17,23,0.5) 40%, rgba(14,17,23,0.15) 70%, rgba(14,17,23,0.0) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Hero content — anchored LOWER-CENTER */}
      <div className="relative z-10 w-full max-w-[700px] mx-auto px-4 pb-16 md:pb-24 text-center">
        {/* Eyebrow */}
        <p className="text-neon-teal font-inter font-semibold text-[11px] tracking-[0.12em] uppercase mb-4">
          Annandale, VA · 12 Private Rooms
        </p>

        {/* H1 — Clash Display 700 */}
        <h1 className="font-clash font-bold text-[40px] md:text-[64px] text-soft-white leading-[1.05] tracking-[-0.02em] mb-4">
          Your Night. Your Songs. Your Room.
        </h1>

        {/* Subhead */}
        <p className="font-inter font-normal text-base md:text-lg text-soft-white/80 mb-5 leading-relaxed">
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
            <span className="text-soft-white/80 text-sm font-inter">
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
            className="hidden sm:flex items-center min-h-[48px] font-inter font-semibold text-[15px] text-cool-mist hover:text-soft-white"
          />
          <PhoneLink
            source="hero-mobile"
            className="flex sm:hidden items-center min-h-[48px] font-inter font-semibold text-[15px] text-cool-mist hover:text-soft-white"
          />
        </div>
      </div>
    </section>
  )
}
