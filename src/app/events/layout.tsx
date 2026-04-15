// GC-2: Events layout — injects BreadcrumbList schema
// P2-02: BreadcrumbList schema deployment for /events

import Script from 'next/script'
import { siteUrl } from '@/data/content'
import { buildBreadcrumbSchema } from '@/lib/seo/schemas'

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: siteUrl },
    { name: 'DJ Nights & Events', url: `${siteUrl}/events` },
  ])

  return (
    <>
      <Script
        id="schema-events-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  )
}
