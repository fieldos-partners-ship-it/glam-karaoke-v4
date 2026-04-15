// ReservationsHero — Typography-only hero (no photo)
// Intentionally stripped of atmosphere to focus conversion
// Server component

export default function ReservationsHero() {
  return (
    <section className="bg-stage-noir flex items-center justify-center" style={{ minHeight: '50vh' }} aria-label="Book a private karaoke room">
      <div className="text-center px-4 max-w-2xl mx-auto py-20">
        {/* Eyebrow */}
        <p className="menu-kicker mb-4">
          RESERVATIONS
        </p>

        {/* H1 — typography is the design */}
        <h1 className="menu-heading mb-4 text-[48px] md:text-[72px]">
          Reserve Your Room.
        </h1>

        <p className="menu-subtext text-[19px] md:text-[21px]">
          Weekends book fast — call us or fill out the form below.
          We confirm within 2 hours during business hours.
        </p>
      </div>
    </section>
  )
}
