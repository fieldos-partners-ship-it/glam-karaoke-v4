// HappyHourCallout — Centered dark section with happy hour info
// Server component — no interactivity

export default function HappyHourCallout() {
  return (
    <section className="bg-stage-noir py-16 border-t border-white/[0.06]" aria-label="Happy hour and walk-in information">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-inter text-soft-white/90 text-lg md:text-xl leading-relaxed">
          {/* Neon Teal on the happy hour time */}
          Happy Hour:{' '}
          <span className="text-neon-teal font-semibold">5–8 PM Sunday–Thursday</span>
        </p>
        <p className="font-inter text-cool-mist text-base mt-2">
          Walk-ins always welcome. Reservations suggested on weekends.
        </p>
      </div>
    </section>
  )
}
