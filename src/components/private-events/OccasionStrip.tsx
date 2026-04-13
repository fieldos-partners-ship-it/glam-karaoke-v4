// OccasionStrip — Icon + label badges for occasion types
// Server component

import { Cake, Heart, Briefcase, Star, Music } from 'lucide-react'

const occasions = [
  { icon: Cake, label: 'Birthday Parties' },
  { icon: Heart, label: 'Bachelorettes' },
  { icon: Briefcase, label: 'Corporate Outings' },
  { icon: Star, label: 'Anniversaries' },
  { icon: Music, label: 'Any Night You Want to Own' },
]

export default function OccasionStrip() {
  return (
    <section className="bg-stage-noir py-16 border-y border-white/[0.06]" aria-label="Perfect for any occasion">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-cool-mist font-inter font-semibold text-[11px] tracking-[0.12em] uppercase mb-8">
          PERFECT FOR
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {occasions.map((occasion) => {
            const Icon = occasion.icon
            return (
              <div
                key={occasion.label}
                className="inline-flex items-center gap-2 bg-glass-surface border border-white/[0.08] rounded-full px-5 py-3"
              >
                <Icon className="w-4 h-4 text-neon-teal" aria-hidden="true" />
                <span className="font-inter font-medium text-soft-white text-sm">
                  {occasion.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
