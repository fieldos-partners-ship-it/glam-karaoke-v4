'use client'

// AgeGate — 21+ entrance overlay, shown once per browser session (sessionStorage-gated)
// Renders nothing on SSR; checks sessionStorage in useEffect

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const STORAGE_KEY = 'glam-age-verified'

export default function AgeGate() {
  const [visible, setVisible] = useState(false)
  const [declined, setDeclined] = useState(false)

  useEffect(() => {
    if (!sessionStorage.getItem(STORAGE_KEY)) {
      setVisible(true)
    }
  }, [])

  function handleAccept() {
    sessionStorage.setItem(STORAGE_KEY, '1')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-logo-noir/95 backdrop-blur-md px-4"
          aria-modal="true"
          role="dialog"
          aria-labelledby="age-gate-heading"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="bg-glass-surface border border-neon-teal/30 rounded-2xl px-8 py-10 max-w-sm w-full text-center shadow-[0_0_60px_rgba(0,230,210,0.08)]"
          >
            <div className="flex justify-center mb-6">
              <Image
                src="/brand/glam-karaoke-logo.png"
                alt="Glam Karaoke"
                width={802}
                height={554}
                className="h-16 w-auto"
                priority
              />
            </div>

            {!declined ? (
              <>
                <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.2em] text-neon-teal mb-3">
                  ALL AGES · 21+ AFTER 10PM
                </p>
                <h2
                  id="age-gate-heading"
                  className="font-clash font-bold text-[26px] text-soft-white leading-tight mb-3"
                >
                  Are you 21 or older?
                </h2>
                <p className="font-inter text-cool-mist text-sm mb-8 leading-relaxed">
                  All ages are welcome before 10pm. After 10pm, Glam Karaoke is 21+ only.
                </p>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={handleAccept}
                    className="w-full min-h-[48px] bg-neon-teal text-stage-noir font-inter font-bold text-[15px] rounded-full hover:bg-neon-teal-hover transition-colors duration-150"
                  >
                    Yes, I&apos;m 21+
                  </button>
                  <button
                    onClick={() => setDeclined(true)}
                    className="w-full min-h-[48px] border border-white/20 text-cool-mist font-inter text-[15px] rounded-full hover:border-white/40 hover:text-soft-white transition-colors duration-150"
                  >
                    No, I&apos;m under 21
                  </button>
                </div>
              </>
            ) : (
              <>
                <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400 mb-3">
                  HEADS UP
                </p>
                <h2
                  id="age-gate-heading"
                  className="font-clash font-bold text-[24px] text-soft-white leading-tight mb-3"
                >
                  You&apos;re welcome before 10pm.
                </h2>
                <p className="font-inter text-cool-mist text-sm leading-relaxed mb-6">
                  Glam Karaoke is open to all ages before 10pm. After 10pm, this becomes a 21+ venue and guests under 21 must exit. By entering, you acknowledge and agree to this policy.
                </p>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={handleAccept}
                    className="w-full min-h-[48px] bg-neon-teal text-stage-noir font-inter font-bold text-[15px] rounded-full hover:bg-neon-teal-hover transition-colors duration-150"
                  >
                    I understand — let me in
                  </button>
                  <button
                    onClick={() => setDeclined(false)}
                    className="w-full min-h-[48px] border border-white/20 text-cool-mist font-inter text-[15px] rounded-full hover:border-white/40 hover:text-soft-white transition-colors duration-150"
                  >
                    Go back
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
