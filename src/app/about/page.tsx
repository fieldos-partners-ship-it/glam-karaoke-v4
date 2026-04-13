// /about page — About Glam Karaoke
// Server component (VerticalTimeline is 'use client' internally)
// AP-014: canonical via alternates

import type { Metadata } from 'next'
import { siteUrl, reviewData } from '@/data/content'
import FoundingHero from '@/components/about/FoundingHero'
import VerticalTimeline from '@/components/about/VerticalTimeline'
import WhatMakesGlam from '@/components/about/WhatMakesGlam'
import PressLogos from '@/components/about/PressLogos'
import PhoneLink from '@/components/ui/PhoneLink'
import CTAButton from '@/components/ui/CTAButton'

export const metadata: Metadata = {
  title: "About Glam Karaoke — Annandale's Nightlife Destination",
  description: 'Glam Karaoke opened in March 2022 with 12 private rooms, a live main stage, and Korean-American kitchen in Annandale, VA. 4.2★ across 250 reviews.',
  alternates: {
    canonical: `${siteUrl}/about`,
  },
}

export default function AboutPage() {
  return (
    <>
      <FoundingHero />
      <VerticalTimeline />
      <WhatMakesGlam />
      <PressLogos />

      {/* ReviewAggregateStat — large centered 4.2★ */}
      {reviewData.ratingValue && reviewData.reviewCount && (
        <section className="bg-glass-surface py-20" aria-label="Google reviews aggregate">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <a
              href={`https://www.google.com/maps/place/?q=place_id:ChIJT5fw6AWzt4kR_11B3_sLbXo`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-90 transition-opacity"
              aria-label={`Read Glam Karaoke reviews on Google — ${reviewData.ratingValue} stars, ${reviewData.reviewCount} reviews`}
            >
              <p className="font-clash font-bold text-[72px] md:text-[96px] text-neon-teal leading-none mb-2">
                {reviewData.ratingValue}★
              </p>
              <p className="font-inter text-cool-mist text-lg">
                across {reviewData.reviewCount} Google Reviews
              </p>
              <p className="font-inter text-neon-teal/60 text-sm mt-2 underline underline-offset-2">
                Read reviews on Google →
              </p>
            </a>
          </div>
        </section>
      )}

      {/* About CTA */}
      <section className="bg-stage-noir py-16" aria-label="Visit Glam Karaoke">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-clash font-semibold text-[24px] md:text-[32px] text-soft-white mb-6">
            Ready to come in?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <PhoneLink
              source="about-cta"
              className="font-inter font-semibold text-xl min-h-[48px] inline-flex items-center"
            />
            <CTAButton href="/rooms" variant="ghost" size="md">
              Book a Room →
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  )
}
