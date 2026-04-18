'use client'

import type { FocusEvent } from 'react'
import { useEffect, useId, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

type Review = {
  name: string
  rating: number
  text: string
  source: string
  contexts?: string[]
}

function GoogleIcon() {
  return (
    <svg className="h-5 w-5 text-cool-mist/60" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  )
}

function ReviewStars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: rating }).map((_, index) => (
        <svg key={index} className="h-4 w-4 text-neon-teal" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialCarousel({
  reviews,
}: {
  reviews: Review[]
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isPaused, setIsPaused] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const carouselId = useId()

  useEffect(() => {
    if (reviews.length < 2 || isPaused || prefersReducedMotion) {
      return
    }

    const intervalId = window.setInterval(() => {
      setDirection(1)
      setActiveIndex((current) => (current + 1) % reviews.length)
    }, 6500)

    return () => window.clearInterval(intervalId)
  }, [isPaused, prefersReducedMotion, reviews.length])

  if (reviews.length === 0) {
    return null
  }

  const activeReview = reviews[activeIndex]

  const slideVariants = prefersReducedMotion
    ? {
        enter: { opacity: 0 },
        center: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        enter: (currentDirection: number) => ({
          opacity: 0,
          x: currentDirection > 0 ? 28 : -28,
        }),
        center: {
          opacity: 1,
          x: 0,
        },
        exit: (currentDirection: number) => ({
          opacity: 0,
          x: currentDirection > 0 ? -28 : 28,
        }),
      }

  const handleSelect = (index: number) => {
    if (index === activeIndex) {
      return
    }

    setDirection(index > activeIndex ? 1 : -1)
    setActiveIndex(index)
  }

  const handlePrevious = () => {
    setDirection(-1)
    setActiveIndex((current) => (current - 1 + reviews.length) % reviews.length)
  }

  const handleNext = () => {
    setDirection(1)
    setActiveIndex((current) => (current + 1) % reviews.length)
  }

  const handleBlurCapture = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsPaused(false)
    }
  }

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="carousel"
      aria-label="Customer testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={handleBlurCapture}
    >
      <div className="overflow-hidden rounded-[28px] border border-white/[0.06] bg-glass-surface shadow-[0_24px_60px_rgba(0,0,0,0.34)]">
        <div className="grid md:grid-cols-[minmax(0,1fr)_240px]">
          <div className="relative min-h-[310px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.figure
                key={activeReview.name}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                className="flex h-full flex-col justify-between gap-8 px-6 py-7 md:px-10 md:py-9"
                aria-live="polite"
                aria-atomic="true"
                id={carouselId}
              >
                <div>
                  <ReviewStars rating={activeReview.rating} />
                  <blockquote className="mt-5 font-inter text-[22px] leading-[1.45] tracking-[0.018em] text-soft-white/92 md:text-[28px] md:leading-[1.38]">
                    &ldquo;{activeReview.text}&rdquo;
                  </blockquote>
                </div>

                <figcaption className="flex items-center justify-between gap-4 border-t border-white/[0.06] pt-5">
                  <div>
                    <p className="font-clash text-[18px] font-bold uppercase tracking-[0.02em] text-soft-white">
                      {activeReview.name}
                    </p>
                    <p className="mt-1 text-[11px] font-inter uppercase tracking-[0.18em] text-cool-mist">
                      {activeReview.source} Review
                    </p>
                  </div>
                  <GoogleIcon />
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="flex flex-col justify-between gap-6 border-t border-white/[0.06] bg-logo-noir/35 px-6 py-6 md:border-l md:border-t-0">
            <div>
              <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.18em] text-neon-teal">
                Testimonial {String(activeIndex + 1).padStart(2, '0')}
              </p>
              <p className="mt-3 max-w-[16rem] font-inter text-[15px] leading-relaxed tracking-[0.03em] text-cool-mist">
                Real guest feedback from nights at Glam Karaoke.
              </p>
            </div>

            {reviews.length > 1 && (
              <>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-soft-white transition-colors duration-150 hover:border-neon-teal/50 hover:text-neon-teal"
                    aria-controls={carouselId}
                    aria-label="Show previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-soft-white transition-colors duration-150 hover:border-neon-teal/50 hover:text-neon-teal"
                    aria-controls={carouselId}
                    aria-label="Show next testimonial"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {reviews.map((review, index) => (
                    <button
                      key={review.name}
                      type="button"
                      onClick={() => handleSelect(index)}
                      className={`inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border px-3 text-xs font-inter font-semibold uppercase tracking-[0.12em] transition-colors duration-150 ${
                        index === activeIndex
                          ? 'border-neon-teal bg-neon-teal text-logo-noir'
                          : 'border-white/[0.08] bg-white/[0.03] text-cool-mist hover:text-soft-white'
                      }`}
                      aria-controls={carouselId}
                      aria-label={`Show testimonial from ${review.name}`}
                      aria-pressed={index === activeIndex}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
