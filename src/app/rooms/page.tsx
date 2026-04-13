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

export const metadata: Metadata = {
  title: 'Private Karaoke Rooms — Glam Karaoke Annandale VA',
  description: 'Choose from Duo, Group, or Party Suite private karaoke rooms. From $40/hr. Professional sound, iPad song control, full bar. Walk-ins welcome.',
  alternates: {
    canonical: `${siteUrl}/rooms`,
  },
}

export default function RoomsPage() {
  return (
    <>
      <PageHero
        eyebrow="PRIVATE KARAOKE ROOMS"
        title="Find Your Room. Bring Your People."
        backgroundImage="/images/interior-2.jpg"
        backgroundAlt="Inside Glam Karaoke — private karaoke rooms with professional lighting and sound"
        height="h-[55vh]"
      />
      <RoomTierComparison />
      <RoomFeatureMatrix />
      <BookingInfoBand />
      <FAQAccordion />
    </>
  )
}
