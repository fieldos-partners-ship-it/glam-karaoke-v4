'use client'

import CTAButton from '@/components/ui/CTAButton'
import { menuExperience } from '@/data/content'

interface HappyHourBandProps {
  onViewDrinks: () => void
}

export default function HappyHourBand({ onViewDrinks }: HappyHourBandProps) {
  return (
    <section
      id="menu-panel-happy-hour"
      role="tabpanel"
      aria-labelledby="menu-tab-happy-hour"
      className="bg-stage-noir pb-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[36px] border border-neon-teal/20 bg-[radial-gradient(circle_at_top_left,rgba(229,25,151,0.18),transparent_34%),linear-gradient(180deg,rgba(26,16,23,0.98)_0%,rgba(14,18,25,0.96)_100%)] p-7 md:p-10">
          <div className="max-w-3xl">
            <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.2em] text-neon-teal">
              {menuExperience.happyHour.eyebrow}
            </p>
            <h2 className="mt-3 font-clash text-[34px] font-bold leading-[0.95] tracking-[-0.04em] text-soft-white md:text-[54px]">
              {menuExperience.happyHour.headline}
            </h2>
            <p className="mt-4 font-inter text-base leading-relaxed text-cool-mist md:text-lg">
              {menuExperience.happyHour.description}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-[1.1fr_1fr]">
            <div className="rounded-[28px] border border-white/[0.08] bg-black/20 p-6">
              <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.16em] text-neon-teal">
                What&apos;s Confirmed
              </p>
              <ul className="mt-4 space-y-3">
                {menuExperience.happyHour.notes.map((note) => (
                  <li
                    key={note}
                    className="flex items-start gap-3 font-inter text-sm leading-relaxed text-soft-white/86 md:text-[15px]"
                  >
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-neon-teal" aria-hidden="true" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[28px] border border-white/[0.08] bg-white/[0.03] p-6">
              <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.16em] text-neon-teal">
                Best Move
              </p>
              <p className="mt-4 font-clash text-[28px] font-bold leading-[0.98] tracking-[-0.03em] text-soft-white">
                Arrive early, ask what&apos;s included, then flip over to the full drink board.
              </p>
              <p className="mt-4 font-inter text-sm leading-relaxed text-cool-mist md:text-[15px]">
                This tab stays honest about the offer. The Drinks tab shows the actual lineup, while the bar team can tell you exactly what is discounted that night.
              </p>
              <div className="mt-6">
                <CTAButton variant="secondary" size="md" onClick={onViewDrinks}>
                  See Drinks
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
