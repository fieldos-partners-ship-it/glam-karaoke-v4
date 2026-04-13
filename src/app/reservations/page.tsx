'use client'

// GC-2: Reservations page — 'use client' because ReservationForm uses useState
// Layout handles metadata + schema injection (server component)

import ReservationsHero from '@/components/reservations/ReservationsHero'
import ReservationForm from '@/components/reservations/ReservationForm'
import HoursLocationCard from '@/components/reservations/HoursLocationCard'
import PhoneLink from '@/components/ui/PhoneLink'
import { DoorOpen, DollarSign, Clock, Mic } from 'lucide-react'

const quickFacts = [
  { icon: DoorOpen, label: 'Walk-ins Welcome', sub: 'Always — no reservation required' },
  { icon: DollarSign, label: 'Rooms from $40/hr', sub: 'Duo · Group · Party Suite' },
  { icon: Clock, label: 'Happy Hour 5–8 PM', sub: 'Sunday through Thursday' },
  { icon: Mic, label: '12 Private Rooms', sub: 'Professional sound, club lighting' },
]

export default function ReservationsPage() {
  return (
    <>
      <ReservationsHero />
      <ReservationForm />

      {/* Or Split Line */}
      <div className="bg-stage-noir py-10" aria-label="Or call us directly">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-white/10" />
            <p className="font-inter text-cool-mist text-sm text-center whitespace-nowrap">— or call us directly —</p>
            <div className="flex-1 h-px bg-white/10" />
          </div>
          <div className="text-center">
            <PhoneLink
              source="reservations-or-split"
              className="font-clash font-semibold text-[28px] md:text-[36px] min-h-[56px] inline-flex items-center"
            />
          </div>
        </div>
      </div>

      {/* Quick Facts — 4-col icon strip */}
      <section className="bg-glass-surface py-16" aria-label="Quick facts">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickFacts.map((fact) => {
              const Icon = fact.icon
              return (
                <div key={fact.label} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-neon-teal/10 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-neon-teal" aria-hidden="true" />
                  </div>
                  <p className="font-inter font-semibold text-soft-white text-sm mb-1">{fact.label}</p>
                  <p className="font-inter text-cool-mist text-xs">{fact.sub}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <HoursLocationCard />
    </>
  )
}
