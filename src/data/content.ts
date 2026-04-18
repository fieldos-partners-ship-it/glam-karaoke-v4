// GC-1: Single source of truth for all business data
// All components import from here — no business data hardcoded in components

export const businessInfo = {
  name: 'Glam Karaoke',
  tagline: 'Your Night. Your Songs. Your Room.',
  phone: '(571) 378-0910',
  phoneTel: '+15713780910',
  phoneAlt: '(703) 942-5526',
  phoneAltTel: '+17039425526',
  address: '4369 John Marr Dr, Annandale, VA 22003',
  addressStreet: '4369 John Marr Dr',
  addressCity: 'Annandale',
  addressState: 'VA',
  addressZip: '22003',
  googlePlaceId: 'ChIJT5fw6AWzt4kR_11B3_sLbXo',
  email: null as string | null,       // request from client
  hoursDisplay: {
    'Open Daily': '5 PM – 2 AM',
  },
  happyHour: '$10 off/hr · 5–8 PM · Sun–Thu',
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
      'Traditional karaoke system',
      'iPad song control',
      'Professional sound system',
      'Club-style lighting',
      'Tambourines included',
    ],
    featureMatrix: {
      soundSystem: 'Professional grade',
      displayType: 'HD screen',
      songLibrary: 'Traditional Korean library',
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
    capacity: 'Up to 8 guests',
    capacityMax: 8,
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
      maxParty: 8,
      pricePerHour: 50,
    },
    image: '/images/ambiance-3.jpg',
  },
  {
    id: 'party-suite',
    name: 'Party Suite',
    capacity: 'Up to 18 guests',
    capacityMax: 18,
    capacityMin: 12,
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
      minParty: 12,
      maxParty: 18,
      pricePerHour: 70,
    },
    image: '/images/photo-9.jpg',
  },
]

export type MenuItem = {
  name: string
  price: string | null
  description?: string
  secondaryPrice?: string
}

export type MenuSection = {
  id: string
  name: string
  description?: string
  priceNote?: string
  items: MenuItem[]
  display?: 'list' | 'chips'
  choicesTitle?: string
  choices?: string[]
}

export const menuExperience = {
  // P2-05 SEO / P3-02 conversion: location keyword + cuisine specificity added to H1
  heroTitle: 'Glam Karaoke Kitchen & Bar — Annandale, VA',
  heroSupport: 'Korean bar food · soju, beer, wine, and cocktail board specials · happy hour 5–8 PM',
  foodSections: [
    {
      id: 'starters',
      name: 'Starters',
      description: 'Fried snacks, shareable bites, and late-night comfort food.',
      items: [
        { name: 'Mozzarella Cheese Sticks', price: '$10', description: '6 pieces' },
        { name: 'Onion Rings', price: '$10' },
        { name: 'Pork Dumplings', price: '$12', description: '6 pieces' },
        { name: 'French Fries', price: '$10' },
        { name: 'Truffle Fries', price: '$13' },
        { name: 'Bacon Cheese Fries', price: '$15' },
        { name: 'Chili Cheese Fries', price: '$15' },
        { name: 'Tater Tots', price: '$10' },
        { name: 'Truffle Tots', price: '$13' },
        { name: 'Bulgogi Tots', price: '$15' },
        { name: 'Bacon Cheese Tots', price: '$15' },
        { name: 'Chili Cheese Tots', price: '$15' },
        { name: 'Fried Calamari', price: '$20' },
        { name: 'Bulgogi Quesadilla', price: '$16' },
      ],
    },
    {
      id: 'snacks',
      name: 'Snacks',
      description: 'Bar snacks built for another round.',
      items: [
        { name: 'Jwipo & Nuts', price: '$20' },
        { name: 'Dried Squid & Nuts', price: '$27' },
        { name: 'Bulgogi Nacho', price: '$23' },
      ],
    },
    {
      id: 'soups',
      name: 'Soups',
      description: 'Hot pots, tang, and quick noodle resets.',
      items: [
        { name: 'Budae Jjigae', price: '$20' },
        { name: 'Odeng Tang', price: '$20' },
        { name: 'Jjambbong Tang', price: '$20' },
        { name: 'Ramyun', price: '$10' },
        { name: 'Bulgogi Ramyun', price: '$12' },
      ],
    },
    {
      id: 'entrees',
      name: 'Entrees',
      description: 'The bigger plates for long sessions and hungry groups.',
      items: [
        { name: 'Bulgogi Taco', price: '$15' },
        { name: 'Bulgogi Sliders', price: '$15' },
        { name: 'Tteok Bokki', price: '$20' },
        { name: 'Cheese Tteok Bokki', price: '$23' },
        { name: 'Kimchi Fried Rice', price: '$15' },
        { name: 'Bulgogi Over Rice', price: '$15' },
        { name: 'Spicy Stir Fried Squid Over Rice', price: '$16' },
        { name: 'Tofu Kimchi W/ Pork', price: '$30' },
        { name: 'Ojinguh Somyun', price: '$35' },
        { name: 'Shrimp Alfredo Pasta', price: '$22' },
        { name: 'Seafood Pancake', price: '$20' },
        { name: 'Kimchi Pancake', price: '$18' },
      ],
    },
    {
      id: 'wings',
      name: 'Wings',
      description: 'One order comes with celery and carrots.',
      items: [
        { name: 'House Wings', price: '$20', description: 'Choose your flavor and run the next round.' },
      ],
      choicesTitle: 'Flavors',
      choices: ['Mild Buffalo', 'Spicy', 'Super Spicy', 'BBQ', 'Spicy BBQ', 'Honey BBQ'],
    },
  ] satisfies MenuSection[],
  drinkSections: [
    {
      id: 'soju',
      name: 'Soju',
      description: 'Bottle lineup from the menu board.',
      priceNote: '$20 each',
      display: 'chips',
      items: [
        { name: 'Jinro Is Back', price: null },
        { name: 'Jinro Sugar Free', price: null },
        { name: 'Chumchurum', price: null },
        { name: 'Saero Zero Sugar', price: null },
        { name: 'Green Grape', price: null },
        { name: 'Grapefruit', price: null },
        { name: 'Plum', price: null },
        { name: 'Strawberry', price: null },
        { name: 'Apple Mango', price: null },
        { name: 'Green Apple', price: null },
        { name: 'Yogurt', price: null },
        { name: 'Peach on the Beach', price: null },
        { name: 'Lemonster', price: null },
        { name: 'Honey Do', price: null },
        { name: 'Podo', price: null },
      ],
    },
    {
      id: 'draft-beers',
      name: 'Draft Beers',
      description: 'By the glass or by the pitcher.',
      items: [
        { name: 'Miller Lite', price: '$7', secondaryPrice: 'Pitcher $21' },
        { name: 'Sapporo', price: '$8', secondaryPrice: 'Pitcher $23' },
        { name: 'Allagash White', price: '$9', secondaryPrice: 'Pitcher $24' },
        { name: 'Lagunitas IPA', price: '$9', secondaryPrice: 'Pitcher $24' },
      ],
    },
    {
      id: 'wines',
      name: 'Wines',
      items: [
        { name: 'Cabernet', price: '$8' },
        { name: 'Chardonnay', price: '$8' },
        { name: 'Prosecco', price: '$10' },
      ],
    },
    {
      id: 'beers',
      name: 'Beers',
      items: [
        { name: 'Coors Light', price: '$7' },
        { name: 'Asahi', price: '$7' },
        { name: 'Heineken', price: '$7' },
        { name: 'Heineken 0.0%', price: '$7' },
        { name: 'Corona Extra', price: '$7' },
        { name: 'Modelo', price: '$8' },
        { name: 'Guinness', price: '$10' },
        { name: 'Terra 500ml', price: '$14' },
        { name: 'Sapporo 22oz', price: '$12' },
      ],
    },
    {
      id: 'seltzer-cider',
      name: 'Seltzer & Cider',
      items: [
        { name: 'Truly Wildberry', price: '$7' },
        { name: 'Angry Orchard', price: '$7' },
        { name: 'Surfside Strawberry Lemonade', price: '$8' },
        { name: 'Surfside Green Tea', price: '$8' },
        { name: 'Suncruiser Iced Tea', price: '$8' },
        { name: 'White Claw Lime', price: '$8' },
        { name: 'Long Drink', price: '$7' },
      ],
    },
    {
      id: 'yogurt-soju-pitcher',
      name: 'Yogurt Soju Pitcher',
      items: [
        { name: 'Yogurt Flavor', price: '$25' },
        { name: 'Strawberry Flavor', price: '$27' },
        { name: 'Mango Flavor', price: '$27' },
        { name: 'Peach Flavor', price: '$27' },
      ],
    },
  ] satisfies MenuSection[],
  cocktailSpecials: [
    {
      id: 'cocktail-specials',
      name: 'Cocktail Specials',
      description: 'Visible house specials from the current cocktail board.',
      items: [
        {
          name: 'Pinkberry Starburst Shooter',
          price: '$8',
          description: 'Bacardi Dragonberry, orange liqueur, cranberry juice, sweet & sour.',
        },
        {
          name: 'Glam Highball',
          price: '$12',
          description: 'Choose strawberry, lemon, peach, or grapefruit with vodka seltzer, Jim Beam, and soda water.',
        },
        {
          name: 'Why So Blue... Smash?',
          price: '$14',
          description: 'Deep Eddy lemon vodka, fresh blueberries, simple syrup, lemon juice, club soda, and a lemon twist.',
        },
        {
          name: 'Appletini',
          price: '$14',
          description: 'Vodka, sour apple pucker, lime juice, and simple syrup.',
        },
      ],
    },
  ] satisfies MenuSection[],
  happyHour: {
    eyebrow: 'HAPPY HOUR',
    headline: 'Early drinks before the chorus hits.',
    description: 'Happy hour runs Sunday through Thursday from 5 to 8 PM — $10 off per hour on room rental.',
    notes: [
      'Ask the team which drinks are included that night.',
      'Walk in early, claim a table, and turn the room reservation into a full night out.',
      'The full drink lineup stays available in the Drinks tab.',
    ],
  },
}

export const featuredReviews = [
  {
    name: 'Sarah Johnson',
    rating: 5,
    text: 'Best karaoke bar in the whole DMV. The rooms are cozy and glamorous, the sound system was professional grade, and the staff is amazing. Will absolutely be back.',
    source: 'Google',
    contexts: ['home'],
  },
  {
    name: 'Marcus Williams',
    rating: 5,
    text: 'Super welcoming and attentive. They showed us how to use the karaoke machine — both karaoke system and iPad provided. Club style lighting and tambourines made it feel like a real show.',
    source: 'Google',
    contexts: ['home', 'groups'],
  },
  {
    name: 'Jenny Park',
    rating: 5,
    text: "Couldn't get enough. The bulgogi nachos and kimchi fried rice are a must. Great for big groups and the parking is well-lit and safe. Like a night out without the crowd watching you.",
    source: 'Google',
    // P2-11: Parking trust signal — surface on /rooms and /reservations where access concern is most active
    contexts: ['home', 'groups', 'rooms', 'reservations'],
  },
  {
    name: 'Alyssa Kim',
    rating: 5,
    text: 'We booked the Party Suite for a birthday and it felt effortless from the first call. The room looked incredible, the staff stayed on top of food and drinks, and everyone kept asking when we can do it again.',
    source: 'Google',
    // P2-11: Best objection-handler for phone reservation flow — surface on /reservations
    contexts: ['home', 'groups', 'reservations'],
  },
  {
    name: 'Daniel Cho',
    rating: 5,
    text: 'Exactly the kind of Annandale night spot we wanted. Private room sound was crisp, the main floor had real energy, and the drinks menu gave our group plenty to work through.',
    source: 'Google',
    contexts: ['home'],
  },
  {
    name: 'Priya Patel',
    rating: 5,
    text: 'Hosted coworkers here after dinner and it was perfect. Easy parking, polished room setup, friendly staff, and enough space that it still felt comfortable once the whole group showed up.',
    source: 'Google',
    contexts: ['home', 'groups'],
  },
  {
    name: 'Kevin Nguyen',
    rating: 5,
    text: 'Friday nights here are a whole mood. We started with soju and snacks, ended up on the main stage later, and the place still felt organized even when it got busy.',
    source: 'Google',
    contexts: ['home'],
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
    recurring: false,
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

// GC-1: FAQ data exported here so both FAQAccordion component and FAQPage schema share source
// P1-04 SEO: adding parking + session-length FAQs for rich result coverage
export const faqItems = [
  {
    id: 'walk-ins',
    question: 'Do you accept walk-ins?',
    answer: 'Yes — walk-ins are always welcome. However, rooms fill fast on Fridays and Saturdays, so we strongly suggest calling ahead to reserve your room, especially for groups of 5 or more.',
  },
  {
    id: 'byob',
    question: 'Is Glam Karaoke BYOB?',
    answer: 'No. Glam Karaoke has a full bar with craft cocktails, 16 soju flavors, draft beer, and wine. Outside alcohol is not permitted. Happy hour runs 5–8 PM Sunday through Thursday.',
  },
  {
    id: 'song-selection',
    question: 'How does song selection work?',
    answer: 'Rooms include a traditional Korean karaoke system with an extensive song library. Group and Party Suite rooms also support YouTube for the latest songs. An iPad in every room handles browsing and queuing — staff will walk you through setup when you arrive.',
  },
  {
    id: 'food-ordering',
    question: 'Can we order food in the room?',
    answer: "Yes. Our Korean-American kitchen is available throughout your session. Order through your room's service — no need to leave. Bulgogi nachos and kimchi fried rice are crowd favorites.",
  },
  {
    id: 'minimum',
    question: 'Is there a minimum group size or time?',
    answer: "There's no strict minimum group size. The Duo Room comfortably fits 2–4 guests, the Group Room fits 5–8, and the Party Suite fits up to 18. Room rental is by the hour. Call us for current minimums on weekend nights.",
  },
  {
    id: 'parking',
    question: 'Is there parking at Glam Karaoke?',
    answer: 'Yes — Glam Karaoke has free, well-lit parking on-site. Multiple customers specifically mention the parking as a highlight, especially for late-night visits.',
  },
  {
    id: 'session-length',
    question: 'How long are room sessions?',
    answer: 'Room rental is by the hour with no set minimum. Most groups book 2–3 hours. Friday and Saturday nights are most in-demand — calling ahead is strongly recommended to secure your slot.',
  },
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
