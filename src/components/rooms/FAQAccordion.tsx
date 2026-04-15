'use client'

// FAQAccordion — Client-side expand/collapse FAQ
// 'use client' required: useState for open/close tracking
// GC-14: accessible pattern — aria-expanded, aria-controls
// GC-1: FAQ data imported from content.ts — shared source with buildFAQSchema()

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqItems as faqs } from '@/data/content'

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
