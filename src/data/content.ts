// GC-1: Single source of truth for all business data
// All components import from here — no business data hardcoded in components

export const businessInfo = {
  name: 'Glam Karaoke',
  tagline: 'Your Night. Your Songs. Your Room.',
  phone: '(703) 942-5526',
  phoneTel: '+17039425526',
  phoneAlt: '(571) 378-0910',
  phoneAltTel: '+15713780910',
  address: '4369 John Marr Dr, Annandale, VA 22003',
  addressStreet: '4369 John Marr Dr',
  addressCity: 'Annandale',
  addressState: 'VA',
  addressZip: '22003',
  googlePlaceId: 'ChIJT5fw6AWzt4kR_11B3_sLbXo',
  email: null as string | null,       // request from client
  hoursDisplay: {
    'Monday–Thursday': '5 PM – 2 AM',
    'Friday': '5 PM – 3 AM',
    'Saturday': '3 PM – 3 AM',
    'Sunday': '3 PM – 2 AM',
  },
  happyHour: '5–8 PM, Sunday–Thursday',
  established: 'March 18, 2022',
  // VIDEO_TODO: Replace null with client-provided video URL when footage is available
  videoSrc: null as string | null,
}

export const reviewData = {
  ratingValue: 4.2 as number | null,
  reviewCount: 250 as number | null,
  yelpRating: 4.0 as number | null,
  yelpCount: 40 as number | null,
}

export const social = {
  instagram: 'glamkaraoke',
  instagramUrl: 'https://www.instagram.com/glamkaraoke/',
  facebook: null as string | null,    // request from client
  facebookUrl: null as string | null,
  yelp: null as string | null,        // request client Yelp URL
  yelpUrl: null as string | null,
}

export const rooms = [
  {
    id: 'duo',
    name: 'Duo Room',
    capacity: 'Up to 4 guests',
    capacityMax: 4,
    capacityMin: 2,
    pricePerHour: 40,
    priceDisplay: 'From $40/hr',
    mostPopular: false,
    features: [
      'Private room',
      'Dual karaoke system (YouTube + traditional)',
      'iPad song control',
      'Professional sound system',
      'Club-style lighting',
      'Tambourines included',
    ],
    featureMatrix: {
      soundSystem: 'Professional grade',
      displayType: 'HD screen',
      songLibrary: 'YouTube + Traditional Korean',
      ipadControl: true,
      tambourines: true,
      minParty: 2,
      maxParty: 4,
      pricePerHour: 40,
    },
    image: '/images/interior-2.jpg',
  },
  {
    id: 'group',
    name: 'Group Room',
    capacity: 'Up to 10 guests',
    capacityMax: 10,
    capacityMin: 5,
    pricePerHour: 50,
    priceDisplay: 'From $50/hr',
    mostPopular: true,
    features: [
      'Private room',
      'Dual karaoke system (YouTube + traditional)',
      'iPad song control',
      'Professional sound system',
      'Club-style lighting',
      'Tambourines included',
      'Extended song queue',
    ],
    featureMatrix: {
      soundSystem: 'Professional grade',
      displayType: 'HD screen',
      songLibrary: 'YouTube + Traditional Korean',
      ipadControl: true,
      tambourines: true,
      minParty: 5,
      maxParty: 10,
      pricePerHour: 50,
    },
    image: '/images/ambiance-3.jpg',
  },
  {
    id: 'party-suite',
    name: 'Party Suite',
    capacity: 'Up to 20 guests',
    capacityMax: 20,
    capacityMin: 11,
    pricePerHour: 70,
    priceDisplay: 'From $70/hr',
    mostPopular: false,
    features: [
      'Largest private room',
      'Dual karaoke system (YouTube + traditional)',
      'iPad song control',
      'Professional sound system',
      'Club-style lighting',
      'Tambourines included',
      'Full bar access',
      'Perfect for events',
    ],
    featureMatrix: {
      soundSystem: 'Professional grade',
      displayType: 'HD screen',
      songLibrary: 'YouTube + Traditional Korean',
      ipadControl: true,
      tambourines: true,
      minParty: 11,
      maxParty: 20,
      pricePerHour: 70,
    },
    image: '/images/photo-9.jpg',
  },
]

export const menuCategories = [
  {
    id: 'shareables',
    name: 'Shareables',
    items: [
      { name: 'Bulgogi Nachos', price: 16, description: 'Korean-marinated beef over crispy chips with pickled jalapeños' },
      { name: 'Kimchi Fried Rice', price: 14, description: 'Classic fermented kimchi with egg, scallions, sesame oil' },
      { name: 'Crispy Chicken Wings', price: 15, description: 'Tossed in your choice of soy garlic, spicy, or sweet chili' },
      { name: 'Tteok-bokki', price: 13, description: 'Spicy rice cakes in gochujang sauce — a Glam house staple' },
    ],
    image: '/images/detail-5.jpg',
  },
  {
    id: 'mains',
    name: 'Mains',
    items: [
      { name: 'Bulgogi Bowl', price: 18, description: 'Marinated beef over steamed rice with pickled vegetables' },
      { name: 'Spicy Pork Bowl', price: 17, description: 'Gochujang-glazed pork over rice, topped with sesame and scallions' },
      { name: 'Chicken Karaage', price: 17, description: 'Japanese-style fried chicken with house mayo and lemon' },
    ],
    image: '/images/detail-6.jpg',
  },
  {
    id: 'drinks',
    name: 'Drinks',
    items: [
      { name: 'Soju Collection', price: null, description: '16 flavors — original, yogurt, citrus, peach, grapefruit, and more' },
      { name: 'Yogurt Soju Pitcher', price: 35, description: 'The crowd favorite — smooth, slightly sweet, endlessly drinkable' },
      { name: 'Craft Cocktails', price: 14, description: "Rotating seasonal menu — ask your server for tonight's specials" },
      { name: 'Draft Beer', price: 8, description: 'Korean and domestic selections on draft' },
      { name: 'Wine', price: 10, description: 'House red and white by the glass' },
    ],
    image: '/images/detail-7.jpg',
  },
]

export const featuredReviews = [
  {
    name: 'Sarah Johnson',
    rating: 5,
    text: 'Best karaoke bar in the whole DMV. The rooms are cozy and glamorous, the sound system was professional grade, and the staff is amazing. Will absolutely be back.',
    source: 'Google',
  },
  {
    name: 'Marcus Williams',
    rating: 5,
    text: 'Super welcoming and attentive. They showed us how to use the karaoke machine — both karaoke system and iPad provided. Club style lighting and tambourines made it feel like a real show.',
    source: 'Google',
  },
  {
    name: 'Jenny Park',
    rating: 5,
    text: "Couldn't get enough. The bulgogi nachos and kimchi fried rice are a must. Great for big groups and the parking is well-lit and safe. Like a night out without the crowd watching you.",
    source: 'Google',
  },
]

export const djEvents = [
  {
    id: 'fri-1',
    title: 'DJ Night',
    dj: '@loxs1ck',
    dayOfWeek: 5, // Friday (0=Sun, 5=Fri)
    time: '9 PM – Close',
    doorsOpen: '5 PM',
    recurring: true,
  },
]

export const pressFeatures = [
  { publication: 'Northern Virginia Magazine', date: 'February 2025', quote: 'Stands out with its 12 private rooms' },
  { publication: 'Arlington Magazine', date: 'April 2023', quote: 'A top karaoke destination in Northern Virginia' },
]

export const timeline = [
  { year: 'March 2022', event: 'Glam Karaoke opens in Annandale. 12 private rooms, one live main stage, a full Korean-American kitchen.' },
  { year: 'April 2023', event: 'Arlington Magazine names Glam a top karaoke destination in Northern Virginia.' },
  { year: '2023–2024', event: '250 Google reviews. 4.2 stars. Customers call it "the best karaoke bar in the whole DMV."' },
  { year: 'February 2025', event: 'Northern Virginia Magazine: "Stands out with its 12 private rooms."' },
  { year: '2026', event: 'Still here. Still the only Annandale venue with a live main stage and a full kitchen.' },
]

// GC-4: GA4 gate — set real ID before delivery
export const ga4MeasurementId = 'G-XXXXXXXXXX'
export const ga4IsConfigured = ga4MeasurementId !== 'G-XXXXXXXXXX'

// Formspree or equivalent — null until client provides
export const formEndpoint = null as string | null

// Site URL — update before delivery
export const siteUrl = 'https://glamkaraokeva.com'

// Dev assertions (GC-1 / AP-011)
if (process.env.NODE_ENV === 'development') {
  if (businessInfo.phone.includes('555')) console.warn('[content.ts] Placeholder phone number detected')
  if (businessInfo.address.includes('123 Main')) console.warn('[content.ts] Placeholder address detected')
}
