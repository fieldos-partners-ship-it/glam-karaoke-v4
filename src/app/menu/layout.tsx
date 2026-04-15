// GC-2: Menu layout — injects BreadcrumbList schema
// P2-02: BreadcrumbList schema deployment for /menu

import Script from 'next/script'
import { siteUrl } from '@/data/content'
import { buildBreadcrumbSchema } from '@/lib/seo/schemas'

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: siteUrl },
    { name: 'Kitchen & Bar', url: `${siteUrl}/menu` },
  ])

  return (
    <>
      <Script
        id="schema-menu-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  )
}
