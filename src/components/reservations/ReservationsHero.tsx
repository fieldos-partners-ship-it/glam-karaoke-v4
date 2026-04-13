// ReservationsHero — Typography-only hero (no photo)
// Intentionally stripped of atmosphere to focus conversion
// Server component

export default function ReservationsHero() {
  return (
    <section className="bg-stage-noir flex items-center justify-center" style={{ minHeight: '50vh' }} aria-label="Book a private karaoke room">
      <div className="text-center px-4 max-w-2xl mx-auto py-20">
        {/* Eyebrow */}
        <p className="text-neon-teal font-inter font-semibold text-[11px] tracking-[0.12em] uppercase mb-4">
          RESERVATIONS
        </p>

        {/* H1 — typography is the design */}
        <h1 className="font-clash font-bold text-[44px] md:text-[64px] text-soft-white leading-[1.05] tracking-[-0.02em] mb-4">
          Reserve Your Room.
        </h1>

        <p className="font-inter text-cool-mist text-base md:text-lg leading-relaxed">
          Weekends book fast — call us or fill out the form below.
          We confirm within 2 hours during business hours.
        </p>
      </div>
    </section>
  )
}
