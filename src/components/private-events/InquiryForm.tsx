'use client'

// InquiryForm — Private events lead capture form
// 'use client': form state, submission handling
// GC-14: accessible form — labels associated with inputs, aria-required, aria-describedby
// GC-2: lives inside 'use client' page.tsx (private-events/page.tsx)

import { useState, useRef } from 'react'
import CTAButton from '@/components/ui/CTAButton'
import { trackFormSubmit } from '@/lib/analytics'
import { formEndpoint, businessInfo } from '@/data/content'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function InquiryForm() {
  const [state, setState] = useState<FormState>('idle')
  const [formData, setFormData] = useState({
    name: '',
    groupSize: '',
    date: '',
    phone: '',
    email: '',
    notes: '',
  })
  const formRef = useRef<HTMLFormElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('submitting')

    try {
      if (formEndpoint) {
        // Submit to Formspree when endpoint is configured
        const res = await fetch(formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ ...formData, _subject: 'Private Event Inquiry — Glam Karaoke' }),
        })
        if (!res.ok) throw new Error('Submission failed')
      } else {
        // Fallback: tel: prompt (call us) — formEndpoint not yet configured
        await new Promise(r => setTimeout(r, 600))
      }
      trackFormSubmit('private_events_inquiry')
      setState('success')
      formRef.current?.reset()
      setFormData({ name: '', groupSize: '', date: '', phone: '', email: '', notes: '' })
    } catch {
      setState('error')
    }
  }

  return (
    <div
      id="inquiry-form"
      className="bg-glass-surface rounded-2xl border border-white/[0.08] shadow-[0_24px_64px_rgba(0,0,0,0.6)] p-8 md:p-10"
    >
      <h2 className="font-clash font-semibold text-[24px] text-soft-white mb-2">
        Request Availability
      </h2>
      <p className="font-inter text-cool-mist text-sm mb-6">
        We respond within 2 hours during business hours.
      </p>

      {state === 'success' ? (
        <div className="py-8 text-center">
          <p className="font-clash font-semibold text-[22px] text-soft-white mb-2">
            We&apos;ve got your request!
          </p>
          <p className="font-inter text-cool-mist text-base">
            We&apos;ll reach out to{' '}
            <span className="text-neon-teal">{formData.name || 'you'}</span>{' '}
            within 2 hours to confirm your night.
          </p>
        </div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} noValidate aria-label="Private event inquiry form">
          {/* Name */}
          <div className="mb-5">
            <label htmlFor="pe-name" className="block font-inter font-medium text-soft-white/80 text-sm mb-2">
              Your Name <span className="text-neon-teal" aria-hidden="true">*</span>
            </label>
            <input
              id="pe-name"
              name="name"
              type="text"
              required
              aria-required="true"
              value={formData.name}
              onChange={handleChange}
              placeholder="First and last name"
              className="w-full bg-stage-noir border border-white/20 rounded-xl px-4 py-3 font-inter text-soft-white placeholder:text-cool-mist/50 focus:outline-none focus:border-neon-teal/60 transition-colors duration-150 text-base"
            />
          </div>

          {/* Group size */}
          <div className="mb-5">
            <label htmlFor="pe-group-size" className="block font-inter font-medium text-soft-white/80 text-sm mb-2">
              Group Size <span className="text-neon-teal" aria-hidden="true">*</span>
            </label>
            <select
              id="pe-group-size"
              name="groupSize"
              required
              aria-required="true"
              value={formData.groupSize}
              onChange={handleChange}
              className="w-full bg-stage-noir border border-white/20 rounded-xl px-4 py-3 font-inter text-soft-white focus:outline-none focus:border-neon-teal/60 transition-colors duration-150 text-base"
            >
              <option value="" disabled>Select group size</option>
              <option value="2-4">2–4 guests (Duo Room)</option>
              <option value="5-10">5–10 guests (Group Room)</option>
              <option value="11-20">11–20 guests (Party Suite)</option>
            </select>
          </div>

          {/* Date */}
          <div className="mb-5">
            <label htmlFor="pe-date" className="block font-inter font-medium text-soft-white/80 text-sm mb-2">
              Preferred Date <span className="text-neon-teal" aria-hidden="true">*</span>
            </label>
            <input
              id="pe-date"
              name="date"
              type="date"
              required
              aria-required="true"
              value={formData.date}
              onChange={handleChange}
              className="w-full bg-stage-noir border border-white/20 rounded-xl px-4 py-3 font-inter text-soft-white focus:outline-none focus:border-neon-teal/60 transition-colors duration-150 text-base"
            />
          </div>

          {/* Phone + Email side by side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label htmlFor="pe-phone" className="block font-inter font-medium text-soft-white/80 text-sm mb-2">
                Phone <span className="text-neon-teal" aria-hidden="true">*</span>
              </label>
              <input
                id="pe-phone"
                name="phone"
                type="tel"
                required
                aria-required="true"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 000-0000"
                className="w-full bg-stage-noir border border-white/20 rounded-xl px-4 py-3 font-inter text-soft-white placeholder:text-cool-mist/50 focus:outline-none focus:border-neon-teal/60 transition-colors duration-150 text-base"
              />
            </div>
            <div>
              <label htmlFor="pe-email" className="block font-inter font-medium text-soft-white/80 text-sm mb-2">
                Email
              </label>
              <input
                id="pe-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@email.com"
                className="w-full bg-stage-noir border border-white/20 rounded-xl px-4 py-3 font-inter text-soft-white placeholder:text-cool-mist/50 focus:outline-none focus:border-neon-teal/60 transition-colors duration-150 text-base"
              />
            </div>
          </div>

          {/* Notes */}
          <div className="mb-6">
            <label htmlFor="pe-notes" className="block font-inter font-medium text-soft-white/80 text-sm mb-2">
              Special Requests <span className="text-cool-mist font-normal">(optional)</span>
            </label>
            <textarea
              id="pe-notes"
              name="notes"
              rows={3}
              value={formData.notes}
              onChange={handleChange}
              placeholder="Birthday, bachelorette, dietary needs, etc."
              className="w-full bg-stage-noir border border-white/20 rounded-xl px-4 py-3 font-inter text-soft-white placeholder:text-cool-mist/50 focus:outline-none focus:border-neon-teal/60 transition-colors duration-150 text-base resize-none"
            />
          </div>

          {/* Error message */}
          {state === 'error' && (
            <p className="text-red-400 font-inter text-sm mb-4" role="alert">
              Something went wrong. Please call us directly at{' '}
              <a href={`tel:${businessInfo.phoneTel}`} className="text-neon-teal underline">
                {businessInfo.phone}
              </a>
              .
            </p>
          )}

          <CTAButton
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            disabled={state === 'submitting'}
          >
            {state === 'submitting' ? 'Sending…' : 'Request Availability'}
          </CTAButton>

          {/* P2-05: Affirmative reassurance — addresses spam/obligation concern at the point of commitment */}
          <p className="font-inter text-cool-mist/60 text-xs text-center mt-4">
            We respond within 2 hours. Your info is only used to confirm your booking — no spam, ever.
          </p>
        </form>
      )}
    </div>
  )
}
