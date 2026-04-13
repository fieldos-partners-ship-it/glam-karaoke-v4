// GC-2: Reservations layout — server component handles metadata + schema
// page.tsx uses 'use client' for form state

import type { Metadata } from 'next'
import Script from 'next/script'
import { siteUrl } from '@/data/content'
import { buildReservationSchema } from '@/lib/seo/schemas'

export const metadata: Metadata = {
  title: 'Book a Karaoke Room — Glam Karaoke Annandale VA',
  description: 'Reserve a private karaoke room at Glam Karaoke. Duo from $40/hr, Group from $50/hr, Party Suite from $70/hr. Call or submit online.',
  alternates: {
    canonical: `${siteUrl}/reservations`,
  },
}

export default function ReservationsLayout({ children }: { children: React.ReactNode }) {
  const reservationSchema = buildReservationSchema()

  return (
    <>
      <Script
        id="schema-reservations"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reservationSchema) }}
      />
      {children}
    </>
  )
}
