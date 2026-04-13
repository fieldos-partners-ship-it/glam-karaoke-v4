// BookingInfoBand — Scarcity signal + phone CTA
// Server component

import PhoneLink from '@/components/ui/PhoneLink'

export default function BookingInfoBand() {
  return (
    <section className="bg-stage-noir py-16 border-y border-white/[0.06]" aria-label="Booking information">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-clash font-semibold text-[24px] md:text-[32px] text-soft-white mb-3">
          Rooms fill fast on weekends.
        </p>
        <p className="font-inter text-cool-mist text-base mb-6">
          Reservations suggested — especially Friday and Saturday nights.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <span className="font-inter text-soft-white/70 text-base">
            Call to reserve:
          </span>
          <PhoneLink
            source="rooms-booking-band"
            className="font-inter font-semibold text-xl min-h-[44px] flex items-center"
          />
        </div>
      </div>
    </section>
  )
}
