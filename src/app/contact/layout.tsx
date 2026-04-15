// GC-2: Contact layout — injects LocalBusiness schema + BreadcrumbList
// P1-01 SEO: contact page schema for NAP verification by Google local algorithm

import Script from 'next/script'
import { siteUrl } from '@/data/content'
import { buildContactSchema, buildBreadcrumbSchema } from '@/lib/seo/schemas'

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  const contactSchema = buildContactSchema()
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: siteUrl },
    { name: 'Contact', url: `${siteUrl}/contact` },
  ])

  return (
    <>
      <Script
        id="schema-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <Script
        id="schema-contact-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  )
}
