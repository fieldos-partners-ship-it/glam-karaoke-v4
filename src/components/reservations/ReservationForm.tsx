'use client'

// ReservationForm — Primary conversion form for /reservations
// GC-14: Accessible form — labels associated with inputs, aria-required
// GC-2: Lives in 'use client' page.tsx

import { useState, useRef } from 'react'
import CTAButton from '@/components/ui/CTAButton'
import { trackFormSubmit } from '@/lib/analytics'
import { formEndpoint, businessInfo } from '@/data/content'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function ReservationForm() {
  const [state, setState] = useState<FormState>('idle')
  const [guestName, setGuestName] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setState('submitting')

    const fd = new FormData(e.currentTarget)
    const data = Object.fromEntries(fd.entries())
    setGuestName(data.name as string)

    try {
      if (formEndpoint) {
        const res = await fetch(formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ ...data, _subject: 'Room Reservation Request — Glam Karaoke' }),
        })
        if (!res.ok) throw new Error('Submission failed')
      } else {
        await new Promise(r => setTimeout(r, 600))
      }
      trackFormSubmit('reservation')
      setState('success')
      formRef.current?.reset()
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className="max-w-2xl mx-auto text-center py-12 px-4">
        <p className="font-clash font-semibold text-[28px] text-soft-white mb-3">
          You&apos;re on the list, {guestName}!
        </p>
        <p className="font-inter text-cool-mist text-base">
          We&apos;ll confirm your room within 2 hours during business hours. See you soon.
        </p>
      </div>
    )
  }

  return (
    <section className="bg-stage-noir py-16" aria-label="Room reservation form">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          noValidate
          aria-label="Reserve a private karaoke room"
          className="space-y-5"
        >
          {/* Name */}
          <div>
            <label htmlFor="res-name" className="block font-inter font-medium text-soft-white/80 text-sm mb-2">
              Your Name <span className="text-neon-teal" aria-hidden="true">*</span>
            </label>
            <input
              id="res-name"
              name="name"
              type="text"
              required
              aria-required="true"
              placeholder="First and last name"
              className="w-full bg-glass-surface border border-white/20 rounded-xl px-4 py-3 font-inter text-soft-white placeholder:text-cool-mist/50 focus:outline-none focus:border-neon-teal/60 transition-colors duration-150 text-base"
            />
          </div>

          {/* Guests + Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="res-guests" className="block font-inter font-medium text-soft-white/80 text-sm mb-2">
                Number of Guests <span className="text-neon-teal" aria-hidden="true">*</span>
              </label>
              <select
                id="res-guests"
                name="guests"
                required
                aria-required="true"
                className="w-full bg-glass-surface border border-white/20 rounded-xl px-4 py-3 font-inter text-soft-white focus:outline-none focus:border-neon-teal/60 transition-colors duration-150 text-base"
              >
                <option value="" disabled>Select group size</option>
                <option value="1-4">1–4 guests (Duo Room)</option>
                <option value="5-10">5–10 guests (Group Room)</option>
                <option value="11-20">11–20 guests (Party Suite)</option>
              </select>
            </div>

            <div>
              <label htmlFor="res-date" className="block font-inter font-medium text-soft-white/80 text-sm mb-2">
                Preferred Date <span className="text-neon-teal" aria-hidden="true">*</span>
              </label>
              <input
                id="res-date"
                name="date"
                type="date"
                required
                aria-required="true"
                className="w-full bg-glass-surface border border-white/20 rounded-xl px-4 py-3 font-inter text-soft-white focus:outline-none focus:border-neon-teal/60 transition-colors duration-150 text-base"
              />
            </div>
          </div>

          {/* Time preference */}
          <div>
            <label htmlFor="res-time" className="block font-inter font-medium text-soft-white/80 text-sm mb-2">
              Time Preference <span className="text-neon-teal" aria-hidden="true">*</span>
            </label>
            <select
              id="res-time"
              name="time"
              required
              aria-required="true"
              className="w-full bg-glass-surface border border-white/20 rounded-xl px-4 py-3 font-inter text-soft-white focus:outline-none focus:border-neon-teal/60 transition-colors duration-150 text-base"
            >
              <option value="" disabled>Select a time</option>
              <option value="daytime">Daytime (before 7 PM)</option>
              <option value="evening">Evening (7–10 PM)</option>
              <option value="late-night">Late Night (after 10 PM)</option>
            </select>
          </div>

          {/* Phone + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="res-phone" className="block font-inter font-medium text-soft-white/80 text-sm mb-2">
                Phone Number <span className="text-neon-teal" aria-hidden="true">*</span>
              </label>
              <input
                id="res-phone"
                name="phone"
                type="tel"
                required
                aria-required="true"
                placeholder="(555) 000-0000"
                className="w-full bg-glass-surface border border-white/20 rounded-xl px-4 py-3 font-inter text-soft-white placeholder:text-cool-mist/50 focus:outline-none focus:border-neon-teal/60 transition-colors duration-150 text-base"
              />
            </div>
            <div>
              <label htmlFor="res-email" className="block font-inter font-medium text-soft-white/80 text-sm mb-2">
                Email
              </label>
              <input
                id="res-email"
                name="email"
                type="email"
                placeholder="you@email.com"
                className="w-full bg-glass-surface border border-white/20 rounded-xl px-4 py-3 font-inter text-soft-white placeholder:text-cool-mist/50 focus:outline-none focus:border-neon-teal/60 transition-colors duration-150 text-base"
              />
            </div>
          </div>

          {/* Special requests */}
          <div>
            <label htmlFor="res-requests" className="block font-inter font-medium text-soft-white/80 text-sm mb-2">
              Special Requests <span className="text-cool-mist font-normal">(optional)</span>
            </label>
            <textarea
              id="res-requests"
              name="requests"
              rows={3}
              placeholder="Dietary needs, occasion, song requests, etc."
              className="w-full bg-glass-surface border border-white/20 rounded-xl px-4 py-3 font-inter text-soft-white placeholder:text-cool-mist/50 focus:outline-none focus:border-neon-teal/60 transition-colors duration-150 text-base resize-none"
            />
          </div>

          {/* Error */}
          {state === 'error' && (
            <p className="text-red-400 font-inter text-sm" role="alert">
              Something went wrong. Please call us at{' '}
              <a href={`tel:${businessInfo.phoneTel}`} className="text-neon-teal underline">
                {businessInfo.phone}
              </a>{' '}
              to reserve.
            </p>
          )}

          <CTAButton
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            disabled={state === 'submitting'}
          >
            {state === 'submitting' ? 'Sending…' : 'Request My Room'}
          </CTAButton>

          <p className="font-inter text-cool-mist/60 text-xs text-center">
            Not a booking confirmation. We&apos;ll confirm availability within 2 hours.
          </p>
        </form>
      </div>
    </section>
  )
}
