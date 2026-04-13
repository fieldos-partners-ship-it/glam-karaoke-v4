// BenefitCards — 3 benefit cards for private events
// Server component

import { Mic2, Tv2, UtensilsCrossed } from 'lucide-react'

const benefits = [
  {
    icon: Mic2,
    title: 'Dedicated Host',
    body: 'A Glam team member guides your group from arrival to close. Room setup, song system walkthrough, and food ordering — handled.',
  },
  {
    icon: Tv2,
    title: 'Full AV Setup',
    body: 'Professional-grade sound system, HD displays, club-style lighting, tambourines, and the dual YouTube + traditional karaoke library.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Custom Food + Drink',
    body: 'Build a food and drink package for your group. 16 soju flavors, craft cocktails, and the full Korean-American kitchen menu.',
  },
]

export default function BenefitCards() {
  return (
    <section className="bg-glass-surface py-20" aria-label="Private event benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-12">
          <p className="text-neon-teal font-inter font-semibold text-[11px] tracking-[0.12em] uppercase mb-3">
            WHY CHOOSE PRIVATE GLAM
          </p>
          <h2 className="font-clash font-semibold text-[30px] md:text-[40px] text-soft-white leading-[1.1] tracking-[-0.01em]">
            Everything Handled.
          </h2>
        </div>

        {/* 3-col cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <div
                key={benefit.title}
                className="bg-stage-noir rounded-2xl border border-white/[0.06] p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-neon-teal/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-neon-teal" aria-hidden="true" />
                </div>
                <h3 className="font-clash font-semibold text-xl text-soft-white mb-3">
                  {benefit.title}
                </h3>
                <p className="font-inter text-cool-mist text-base leading-relaxed">
                  {benefit.body}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
