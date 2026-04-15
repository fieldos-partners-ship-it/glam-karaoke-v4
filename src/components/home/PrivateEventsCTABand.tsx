// PrivateEventsCTABand — Electric Violet CTA band for private events
// Server component — no interactivity

import CTAButton from '@/components/ui/CTAButton'

export default function PrivateEventsCTABand() {
  return (
    <section className="bg-electric-violet py-20" aria-label="Book a private event at Glam Karaoke">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <p className="font-inter text-[12px] font-semibold uppercase tracking-[0.2em] text-soft-white/72 mb-4">
          PRIVATE EVENTS
        </p>

        <h2 className="menu-heading mb-4 text-[38px] md:text-[58px]">
          Book the Party Suite
        </h2>

        <p className="menu-subtext-bright mx-auto mb-8 max-w-xl text-[19px] md:text-[22px]">
          Up to 20 guests. Starting from $70/hr. DJ-ready. Full bar access.
          Perfect for birthdays, bachelorettes, and corporate outings.
        </p>

        <CTAButton href="/private-events" variant="secondary" size="lg">
          Request a Private Event
        </CTAButton>
      </div>
    </section>
  )
}
