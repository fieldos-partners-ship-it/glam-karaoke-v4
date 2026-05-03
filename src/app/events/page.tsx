// /events page — DJ Nights & Events
// Server component
// AP-014: canonical via alternates

import type { Metadata } from 'next'
import { siteUrl } from '@/data/content'
import EventsSplitHero from '@/components/events/EventsSplitHero'
import InstagramGrid from '@/components/events/InstagramGrid'

export const metadata: Metadata = {
  title: 'DJ Nights & Events — Glam Karaoke Annandale VA',
  description: 'DJ nights on the main stage at Glam Karaoke. Follow @glamkaraoke on Instagram for the latest event lineup.',
  alternates: {
    canonical: `${siteUrl}/events`,
  },
  openGraph: {
    title: 'DJ Nights at Glam Karaoke — Annandale VA',
    description: 'DJ nights on the main stage. Follow @glamkaraoke on Instagram for the latest event lineup.',
    url: `${siteUrl}/events`,
    images: [{ url: '/images/photo-10.jpg', width: 1200, height: 630, alt: 'DJ night at Glam Karaoke main stage Annandale VA' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DJ Nights at Glam Karaoke — Annandale VA',
    description: 'DJ nights on the main stage. Follow @glamkaraoke on Instagram for the latest event lineup.',
    images: ['/images/photo-10.jpg'],
  },
}

export default function EventsPage() {
  return (
    <>
      <EventsSplitHero />
      <InstagramGrid />
    </>
  )
}
