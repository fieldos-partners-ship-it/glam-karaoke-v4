// GC-2: Reservations layout — server component handles metadata + schema

import type { Metadata } from 'next'
import Script from 'next/script'
import { siteUrl } from '@/data/content'
import { buildReservationSchema } from '@/lib/seo/schemas'

export const metadata: Metadata = {
  title: 'Book a Karaoke Room — Glam Karaoke Annandale VA',
  description: 'Call Glam Karaoke to reserve a private karaoke room in Annandale, VA. Duo from $40/hr, Group from $50/hr, Party Suite from $70/hr.',
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
