// HappyHourCallout — Centered dark section with happy hour info
// Server component — no interactivity

export default function HappyHourCallout() {
  return (
    <section className="bg-stage-noir py-16 border-t border-white/[0.06]" aria-label="Happy hour and walk-in information">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-inter text-soft-white/92 text-[22px] md:text-[28px] leading-[1.3] tracking-[0.03em]">
          {/* Neon Teal on the happy hour time */}
          Happy Hour:{' '}
          <span className="text-neon-teal font-semibold">5–8 PM Sunday–Thursday</span>
        </p>
        <p className="menu-subtext mt-3 text-[18px]">
          Walk-ins always welcome. Reservations suggested on weekends.
        </p>
      </div>
    </section>
  )
}
