// /events page — DJ Nights & Events
// Server component
// AP-014: canonical via alternates

import type { Metadata } from 'next'
import { siteUrl } from '@/data/content'
import EventsSplitHero from '@/components/events/EventsSplitHero'
import EventCalendar from '@/components/events/EventCalendar'
import WhatToExpect from '@/components/events/WhatToExpect'
import InstagramGrid from '@/components/events/InstagramGrid'
import CTAButton from '@/components/ui/CTAButton'

export const metadata: Metadata = {
  title: 'DJ Nights & Events — Glam Karaoke Annandale VA',
  description: 'Every Friday night: DJ @loxs1ck. Private karaoke rooms, main stage events, themed nights. Happy hour until 8 PM Sun–Thu.',
  alternates: {
    canonical: `${siteUrl}/events`,
  },
  // P2-01: Per-page OG override
  openGraph: {
    title: 'DJ Nights at Glam Karaoke — Every Friday, Annandale VA',
    description: 'DJ @loxs1ck on the main stage every Friday. Doors open at 5 PM, DJ at 9 PM. Private karaoke rooms available all night.',
    url: `${siteUrl}/events`,
    images: [{ url: '/images/ambiance-4.jpg', width: 1200, height: 630, alt: 'DJ night at Glam Karaoke main stage Annandale VA' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DJ Nights at Glam Karaoke — Every Friday, Annandale VA',
    description: 'DJ @loxs1ck on the main stage every Friday. Doors open at 5 PM, DJ at 9 PM. Private karaoke rooms available all night.',
    images: ['/images/ambiance-4.jpg'],
  },
}

export default function EventsPage() {
  return (
    <>
      <EventsSplitHero />
      <EventCalendar />
      <WhatToExpect />
      <InstagramGrid />

      {/* Events CTA band */}
      <section className="bg-electric-violet py-16" aria-label="Book a private event">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-inter text-soft-white/60 font-semibold text-[11px] tracking-[0.12em] uppercase mb-4">
            PRIVATE EVENTS
          </p>
          {/* P2-07: Arrow removed from heading; copy carries emotion vs rhetorical question */}
          <h2 className="font-clash font-bold text-[30px] md:text-[44px] text-soft-white leading-[1.1] tracking-[-0.02em] mb-6">
            Your group. Your whole stage. One night.
          </h2>
          <CTAButton href="/private-events" variant="secondary" size="lg">
            Plan Your Private Event →
          </CTAButton>
        </div>
      </section>
    </>
  )
}
