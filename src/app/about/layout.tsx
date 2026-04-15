// GC-2: About layout — injects BreadcrumbList schema
// P2-02 / P3-03: BreadcrumbList schema deployment for /about

import Script from 'next/script'
import { siteUrl } from '@/data/content'
import { buildBreadcrumbSchema } from '@/lib/seo/schemas'

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: siteUrl },
    { name: 'About Glam Karaoke', url: `${siteUrl}/about` },
  ])

  return (
    <>
      <Script
        id="schema-about-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  )
}
