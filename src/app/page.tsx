// Homepage — server component (no 'use client')
// AP-014: canonical tag via alternates
// AP-022: title ≤60 chars, description ≤155 chars

import type { Metadata } from 'next'
import { siteUrl } from '@/data/content'
import VideoLoopHero from '@/components/home/VideoLoopHero'
import SocialProofBand from '@/components/home/SocialProofBand'
import RoomsPreviewGrid from '@/components/home/RoomsPreviewGrid'
import DJNightsTeaser from '@/components/home/DJNightsTeaser'
import MenuHighlights from '@/components/home/MenuHighlights'
import ReviewAggregateStrip from '@/components/home/ReviewAggregateStrip'
import PrivateEventsCTABand from '@/components/home/PrivateEventsCTABand'
import HappyHourCallout from '@/components/home/HappyHourCallout'

export const metadata: Metadata = {
  title: 'Glam Karaoke — Private Karaoke Rooms in Annandale, VA',
  description: '12 private karaoke rooms, live main stage, and Korean-American kitchen in Annandale, VA. Happy hour 5–8 PM. Walk-ins welcome.',
  alternates: {
    canonical: `${siteUrl}/`,
  },
}

export default function HomePage() {
  return (
    <>
      {/* 1 — Video loop hero, lower-center anchor, AP-005 compliant CTA */}
      <VideoLoopHero />
      {/* 2 — Electric Violet stat band, 4 count-up stats */}
      <SocialProofBand />
      {/* 3 — Bento room grid */}
      <RoomsPreviewGrid />
      {/* 4 — DJ Nights horizontal scroll */}
      <DJNightsTeaser />
      {/* 5 — Korean-American kitchen split */}
      <MenuHighlights />
      {/* 6 — Named review cards, AP-006 compliant */}
      <ReviewAggregateStrip />
      {/* 7 — Private events violet CTA band */}
      <PrivateEventsCTABand />
      {/* 8 — Happy hour callout */}
      <HappyHourCallout />
    </>
  )
}
