// HoursLocationCard — Hours grid + address + map link
// Server component

import { businessInfo } from '@/data/content'
import { MapPin, Clock } from 'lucide-react'

export default function HoursLocationCard() {
  const hours = businessInfo.hoursDisplay

  return (
    <section className="bg-stage-noir pb-20" aria-label="Hours and location">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="bg-glass-surface rounded-2xl border border-white/[0.06] p-8">
          {/* Hours */}
          <div className="flex items-center gap-2 mb-5">
            <Clock className="w-5 h-5 text-neon-teal" aria-hidden="true" />
            <h3 className="font-clash font-semibold text-xl text-soft-white">Hours</h3>
          </div>

          <dl className="space-y-2 mb-8">
            {Object.entries(hours).map(([day, time]) => (
              <div key={day} className="flex justify-between items-center py-2 border-b border-white/[0.04] last:border-0">
                <dt className="font-inter text-cool-mist text-sm">{day}</dt>
                <dd className="font-inter font-medium text-soft-white text-sm">{time}</dd>
              </div>
            ))}
          </dl>

          {/* Happy hour note */}
          <div className="bg-neon-teal/10 border border-neon-teal/20 rounded-xl px-4 py-3 mb-8">
            <p className="font-inter text-neon-teal text-sm">
              <span className="font-semibold">Happy Hour:</span> {businessInfo.happyHour} — half-off select drinks
            </p>
          </div>

          {/* Address */}
          <div className="flex items-start gap-2">
            <MapPin className="w-5 h-5 text-neon-teal mt-0.5 flex-shrink-0" aria-hidden="true" />
            <div>
              <h3 className="font-clash font-semibold text-xl text-soft-white mb-2">Location</h3>
              <address className="not-italic font-inter text-cool-mist text-sm leading-relaxed mb-3">
                {businessInfo.addressStreet}<br />
                {businessInfo.addressCity}, {businessInfo.addressState} {businessInfo.addressZip}
              </address>
              <a
                href={`https://www.google.com/maps/place/?q=place_id:${businessInfo.googlePlaceId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter font-semibold text-neon-teal text-sm hover:text-neon-teal-hover transition-colors"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
