// Homepage — server component (no 'use client')
// AP-014: canonical tag via alternates
// AP-022: title ≤60 chars, description ≤155 chars

import type { Metadata } from 'next'
import { siteUrl } from '@/data/content'
import VideoLoopHero from '@/components/home/VideoLoopHero'
import ReviewAggregateStrip from '@/components/home/ReviewAggregateStrip'

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
      <VideoLoopHero />
      <ReviewAggregateStrip />
    </>
  )
}
