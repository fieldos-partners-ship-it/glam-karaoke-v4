// GC-2: Rooms layout — injects FAQPage schema and BreadcrumbList schema
// P1-04: FAQPage schema enables FAQ rich results in Google Search (2-4x taller search footprint on mobile)
// P2-02: BreadcrumbList schema for /rooms

import Script from 'next/script'
import { siteUrl } from '@/data/content'
import { buildFAQSchema, buildBreadcrumbSchema } from '@/lib/seo/schemas'

export default function RoomsLayout({ children }: { children: React.ReactNode }) {
  const faqSchema = buildFAQSchema()
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: siteUrl },
    { name: 'Private Karaoke Rooms', url: `${siteUrl}/rooms` },
  ])

  return (
    <>
      <Script
        id="schema-rooms-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="schema-rooms-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  )
}
