// GC-2: Private Events layout — server component handles metadata + schema
// page.tsx uses 'use client' for the form state

import type { Metadata } from 'next'
import Script from 'next/script'
import { siteUrl } from '@/data/content'
import { buildEventSchema, buildBreadcrumbSchema } from '@/lib/seo/schemas'

export const metadata: Metadata = {
  title: 'Private Events & Party Bookings — Glam Karaoke',
  description: 'Book Glam Karaoke\'s Party Suite for birthdays, bachelorettes, and corporate events. Up to 20 guests, from $70/hr, full bar access.',
  alternates: {
    canonical: `${siteUrl}/private-events`,
  },
  // P2-01: Per-page OG override
  openGraph: {
    title: 'Private Events & Party Bookings — Glam Karaoke Annandale',
    description: 'Party Suite for up to 20 guests. Birthdays, bachelorettes, corporate events. From $70/hr, full bar, DJ-ready. Annandale, VA.',
    url: `${siteUrl}/private-events`,
    images: [{ url: '/images/interior-2.jpg', width: 1200, height: 630, alt: 'Glam Karaoke private event Party Suite Annandale VA' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private Events & Party Bookings — Glam Karaoke Annandale',
    description: 'Party Suite for up to 20 guests. Birthdays, bachelorettes, corporate events. From $70/hr, full bar, DJ-ready. Annandale, VA.',
    images: ['/images/interior-2.jpg'],
  },
}

export default function PrivateEventsLayout({ children }: { children: React.ReactNode }) {
  const eventSchema = buildEventSchema()
  // P2-02: BreadcrumbList schema deployment
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: siteUrl },
    { name: 'Private Events', url: `${siteUrl}/private-events` },
  ])

  return (
    <>
      <Script
        id="schema-private-events"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <Script
        id="schema-private-events-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  )
}
