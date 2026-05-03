// Root layout — fonts, GA4 gate, globals.css, Header, Footer, MobileStickyBar, schemas
// GC-4: GA4 gate — Script injected only when ga4IsConfigured === true
// AP-021: OG image configured in metadata
// AP-043: globals.css imported here

import type { Metadata, Viewport } from 'next'
import { Big_Shoulders_Text, League_Spartan } from 'next/font/google'
import localFont from 'next/font/local'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileStickyBar from '@/components/layout/MobileStickyBar'
import AgeGate from '@/components/ui/AgeGate'
import { ga4IsConfigured, ga4MeasurementId, siteUrl } from '@/data/content'
import { buildBarOrClubSchema, buildWebSiteSchema } from '@/lib/seo/schemas'

// League Spartan — blocky geometric display for hero headlines and menu-board punches
const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-clash',
  display: 'swap',
})

// Big Shoulders Text — signage-inspired supporting face for nav, subheads, buttons, and copy
const bigShouldersText = Big_Shoulders_Text({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

// Satoshi — FieldOS brand font (used only on the "Designed by FieldOS" credit)
const satoshi = localFont({
  src: '../../public/fonts/Satoshi-Variable.woff2',
  variable: '--font-fieldos',
  display: 'swap',
})

// MOBILE-07: Explicit viewport export required for Next.js 14 App Router to inject
// <meta name="viewport"> — without this, site renders as desktop-width on mobile
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5, // allow user zoom for accessibility
}

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
    <html lang="en" className={`${leagueSpartan.variable} ${bigShouldersText.variable} ${satoshi.variable}`}>
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
        <AgeGate />
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
