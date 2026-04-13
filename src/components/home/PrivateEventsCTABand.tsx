// PrivateEventsCTABand — Electric Violet CTA band for private events
// Server component — no interactivity

import CTAButton from '@/components/ui/CTAButton'

export default function PrivateEventsCTABand() {
  return (
    <section className="bg-electric-violet py-20" aria-label="Book a private event at Glam Karaoke">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <p className="text-soft-white/60 font-inter font-semibold text-[11px] tracking-[0.12em] uppercase mb-4">
          PRIVATE EVENTS
        </p>

        <h2 className="font-clash font-bold text-[30px] md:text-[48px] text-soft-white leading-[1.1] tracking-[-0.02em] mb-4">
          Book the Party Suite
        </h2>

        <p className="font-inter text-soft-white/80 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
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
