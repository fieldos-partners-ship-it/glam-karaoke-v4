// GC-6: All schema builder functions centralized here
// All import from content.ts — never hold their own business data
// AP-013: All telephone fields use businessInfo.phoneTel (E.164 format: +17039425526)

import { businessInfo, reviewData, siteUrl } from '@/data/content'

export function buildBarOrClubSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BarOrClub',
    name: businessInfo.name,
    description: '12 private karaoke rooms, live main stage, and Korean-American kitchen in Annandale, VA.',
    url: siteUrl,
    telephone: businessInfo.phoneTel, // AP-013: E.164 format
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessInfo.addressStreet,
      addressLocality: businessInfo.addressCity,
      addressRegion: businessInfo.addressState,
      postalCode: businessInfo.addressZip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 38.8304,
      longitude: -77.2055,
    },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '17:00', closes: '02:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '17:00', closes: '03:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '15:00', closes: '03:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '15:00', closes: '02:00' },
    ],
    ...(reviewData.ratingValue && reviewData.reviewCount ? {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: reviewData.ratingValue,
        reviewCount: reviewData.reviewCount,
        bestRating: 5,
        worstRating: 1,
      },
    } : {}),
    servesCuisine: 'Korean-American',
    priceRange: '$$',
    image: `${siteUrl}/images/interior-2.jpg`,
    hasMap: `https://www.google.com/maps/place/?q=place_id:${businessInfo.googlePlaceId}`,
  }
}

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: businessInfo.name,
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/?s={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}

export function buildBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function buildReservationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EntertainmentBusiness',
    name: businessInfo.name,
    telephone: businessInfo.phoneTel, // AP-013: E.164 format
    url: `${siteUrl}/reservations`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessInfo.addressStreet,
      addressLocality: businessInfo.addressCity,
      addressRegion: businessInfo.addressState,
      postalCode: businessInfo.addressZip,
      addressCountry: 'US',
    },
    description: 'Book a private karaoke room at Glam Karaoke. Duo from $40/hr, Group from $50/hr, Party Suite from $70/hr.',
    offers: [
      {
        '@type': 'Offer',
        name: 'Duo Room',
        price: '40',
        priceCurrency: 'USD',
        description: 'Private karaoke room for up to 4 guests. From $40/hr.',
      },
      {
        '@type': 'Offer',
        name: 'Group Room',
        price: '50',
        priceCurrency: 'USD',
        description: 'Private karaoke room for up to 10 guests. From $50/hr.',
      },
      {
        '@type': 'Offer',
        name: 'Party Suite',
        price: '70',
        priceCurrency: 'USD',
        description: 'Largest private karaoke room for up to 20 guests. From $70/hr.',
      },
    ],
  }
}

export function buildEventSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EventVenue',
    name: businessInfo.name,
    telephone: businessInfo.phoneTel, // AP-013: E.164 format
    url: `${siteUrl}/private-events`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessInfo.addressStreet,
      addressLocality: businessInfo.addressCity,
      addressRegion: businessInfo.addressState,
      postalCode: businessInfo.addressZip,
      addressCountry: 'US',
    },
    description: 'Private event bookings at Glam Karaoke. Party Suite holds up to 20 guests. Birthdays, bachelorettes, corporate events.',
  }
}
