'use client'

import CTAButton from '@/components/ui/CTAButton'
import PhoneLink from '@/components/ui/PhoneLink'
import HappyHourContent from '@/components/shared/HappyHourContent'

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
        <HappyHourContent />

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <CTAButton variant="secondary" size="md" onClick={onViewDrinks}>
            See Drinks
          </CTAButton>
          <PhoneLink
            source="happy-hour-band"
            className="inline-flex items-center gap-2 font-inter font-semibold text-sm text-neon-teal min-h-[44px]"
          >
            Call us to lock a room for happy hour →
          </PhoneLink>
        </div>
      </div>
    </section>
  )
}
