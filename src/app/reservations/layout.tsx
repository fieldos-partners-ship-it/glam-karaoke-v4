// GC-2: Reservations layout — server component handles metadata + schema

import type { Metadata } from 'next'
import Script from 'next/script'
import { siteUrl } from '@/data/content'
import { buildReservationSchema, buildBreadcrumbSchema } from '@/lib/seo/schemas'

export const metadata: Metadata = {
  title: 'Book a Karaoke Room — Glam Karaoke Annandale VA',
  description: 'Call Glam Karaoke to reserve a private karaoke room in Annandale, VA. Small from $40/hr, Medium from $50/hr, Large from $70/hr.',
  alternates: {
    canonical: `${siteUrl}/reservations`,
  },
}

export default function ReservationsLayout({ children }: { children: React.ReactNode }) {
  const reservationSchema = buildReservationSchema()
  // P2-02: BreadcrumbList schema deployment
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: siteUrl },
    { name: 'Book a Room', url: `${siteUrl}/reservations` },
  ])

  return (
    <>
      <Script
        id="schema-reservations"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reservationSchema) }}
      />
      <Script
        id="schema-reservations-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  )
}
