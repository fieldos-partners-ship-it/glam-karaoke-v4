// /rooms page — Private Karaoke Rooms & Pricing
// Server component (FAQAccordion is 'use client' internally)
// AP-014: canonical via alternates

import type { Metadata } from 'next'
import { siteUrl } from '@/data/content'
import PageHero from '@/components/rooms/PageHero'
import RoomTierComparison from '@/components/rooms/RoomTierComparison'
import RoomFeatureMatrix from '@/components/rooms/RoomFeatureMatrix'
import BookingInfoBand from '@/components/rooms/BookingInfoBand'
import FAQAccordion from '@/components/rooms/FAQAccordion'
import HappyHourContent from '@/components/shared/HappyHourContent'

export const metadata: Metadata = {
  title: 'Private Karaoke Rooms — Glam Karaoke Annandale VA',
  description: 'Small, Medium, and Large private karaoke rooms from $40/hr. Professional sound, iPad song control, full bar. Walk-ins welcome.',
  alternates: {
    canonical: `${siteUrl}/rooms`,
  },
  openGraph: {
    title: 'Private Karaoke Rooms — Glam Karaoke Annandale VA',
    description: 'Small from $40/hr, Medium from $50/hr, Large from $70/hr. Professional sound, iPad control, club lighting.',
    url: `${siteUrl}/rooms`,
    images: [{ url: '/images/photo-10.jpg', width: 1200, height: 630, alt: 'Private karaoke room at Glam Karaoke Annandale VA' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private Karaoke Rooms — Glam Karaoke Annandale VA',
    description: 'Small from $40/hr, Medium from $50/hr, Large from $70/hr. Professional sound, iPad control, club lighting.',
    images: ['/images/photo-10.jpg'],
  },
}

export default function RoomsPage() {
  return (
    <>
      <PageHero
        eyebrow="PRIVATE KARAOKE ROOMS"
        title="Find Your Room. Bring Your People."
        backgroundImage="/images/photo-10.jpg"
        backgroundAlt="A private karaoke room at Glam Karaoke with lounge seating, table space, and club lighting"
        height="h-[55vh]"
      />
      <RoomTierComparison />
      <RoomFeatureMatrix />
      <BookingInfoBand />
      <section className="bg-stage-noir py-20" aria-label="Happy hour">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HappyHourContent />
        </div>
      </section>
      <FAQAccordion />
    </>
  )
}
