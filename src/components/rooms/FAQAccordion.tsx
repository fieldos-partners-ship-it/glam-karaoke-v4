'use client'

// FAQAccordion — Client-side expand/collapse FAQ
// 'use client' required: useState for open/close tracking
// GC-14: accessible pattern — aria-expanded, aria-controls

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    id: 'walk-ins',
    question: 'Do you accept walk-ins?',
    answer: 'Yes — walk-ins are always welcome. However, rooms fill fast on Fridays and Saturdays, so we strongly suggest calling ahead to reserve your room, especially for groups of 5 or more.',
  },
  {
    id: 'byob',
    question: 'Is Glam Karaoke BYOB?',
    answer: 'No. Glam Karaoke has a full bar with craft cocktails, 16 soju flavors, draft beer, and wine. Outside alcohol is not permitted. Happy hour runs 5–8 PM Sunday through Thursday.',
  },
  {
    id: 'song-selection',
    question: 'How does song selection work?',
    answer: 'Every room has a dual karaoke system — YouTube for the latest songs and a traditional Korean karaoke system for a massive library of classics. An iPad is provided for easy browsing and song queuing. Staff will walk you through it when you arrive.',
  },
  {
    id: 'food-ordering',
    question: 'Can we order food in the room?',
    answer: 'Yes. Our Korean-American kitchen is available throughout your session. Order through your room\'s service — no need to leave. Bulgogi nachos and kimchi fried rice are crowd favorites.',
  },
  {
    id: 'minimum',
    question: 'Is there a minimum group size or time?',
    answer: 'There\'s no strict minimum group size. The Duo Room comfortably fits 2–4 guests, the Group Room fits 5–10, and the Party Suite fits up to 20. Room rental is by the hour. Call us for current minimums on weekend nights.',
  },
]

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section className="bg-stage-noir py-20" aria-label="Frequently asked questions">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-12">
          <p className="text-neon-teal font-inter font-semibold text-[11px] tracking-[0.12em] uppercase mb-3">
            FAQ
          </p>
          <h2 className="font-clash font-semibold text-[30px] md:text-[40px] text-soft-white leading-[1.1] tracking-[-0.01em]">
            Common Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3" role="list">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id
            return (
              <div
                key={faq.id}
                className="bg-glass-surface rounded-2xl border border-white/[0.06] overflow-hidden"
                role="listitem"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full text-left flex items-center justify-between px-6 py-5 hover:bg-white/[0.03] transition-colors duration-150 group"
                >
                  <span className="font-inter font-semibold text-soft-white text-base pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-neon-teal flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="px-6 pb-6"
                  >
                    <p className="font-inter text-cool-mist text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
