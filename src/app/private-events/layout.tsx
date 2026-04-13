// GC-2: Private Events layout — server component handles metadata + schema
// page.tsx uses 'use client' for the form state

import type { Metadata } from 'next'
import Script from 'next/script'
import { siteUrl } from '@/data/content'
import { buildEventSchema } from '@/lib/seo/schemas'

export const metadata: Metadata = {
  title: 'Private Events & Party Bookings — Glam Karaoke',
  description: 'Book Glam Karaoke\'s Party Suite for birthdays, bachelorettes, and corporate events. Up to 20 guests, from $70/hr, full bar access.',
  alternates: {
    canonical: `${siteUrl}/private-events`,
  },
}

export default function PrivateEventsLayout({ children }: { children: React.ReactNode }) {
  const eventSchema = buildEventSchema()

  return (
    <>
      <Script
        id="schema-private-events"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      {children}
    </>
  )
}
