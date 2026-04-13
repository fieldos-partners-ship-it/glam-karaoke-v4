// Root layout — fonts, GA4 gate, globals.css, Header, Footer, MobileStickyBar, schemas
// GC-4: GA4 gate — Script injected only when ga4IsConfigured === true
// AP-021: OG image configured in metadata
// AP-043: globals.css imported here

import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileStickyBar from '@/components/layout/MobileStickyBar'
import { ga4IsConfigured, ga4MeasurementId, siteUrl } from '@/data/content'
import { buildBarOrClubSchema, buildWebSiteSchema } from '@/lib/seo/schemas'

// Clash Display — loaded via next/font/local using downloaded .woff2 files
// Weights: 500 (Medium), 600 (Semibold), 700 (Bold)
const clashDisplay = localFont({
  src: [
    {
      path: '../../public/fonts/ClashDisplay-500.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ClashDisplay-600.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ClashDisplay-700.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-clash',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

// AP-021: OG image configured
// AP-022: Root title/description as fallback template
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Glam Karaoke — Private Karaoke Rooms in Annandale, VA',
    template: '%s | Glam Karaoke',
  },
  description: 'Private karaoke rooms, live main stage, and Korean-American kitchen in Annandale, VA. 12 rooms. Happy hour 5–8 PM. Reserve yours today.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Glam Karaoke',
    images: [
      {
        url: '/images/interior-2.jpg',
        width: 1200,
        height: 630,
        alt: 'Glam Karaoke — Private karaoke rooms in Annandale, VA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/interior-2.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const barOrClubSchema = buildBarOrClubSchema()
  const webSiteSchema = buildWebSiteSchema()

  return (
    <html lang="en" className={`${clashDisplay.variable} ${inter.variable}`}>
      <head>
        {/* GC-4: GA4 Script — only injected when ga4IsConfigured === true */}
        {ga4IsConfigured && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${ga4MeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${ga4MeasurementId}');
              `}
            </Script>
          </>
        )}
        {/* GC-6: BarOrClub schema injected in root layout for all pages */}
        <Script
          id="schema-bar-or-club"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(barOrClubSchema) }}
        />
        {/* GC-6: WebSite schema */}
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body className="bg-stage-noir text-soft-white font-inter antialiased">
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        {/* GC-7: MobileStickyBar — server component, md:hidden */}
        <MobileStickyBar />
      </body>
    </html>
  )
}
