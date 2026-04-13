'use client'

// ReviewAggregateStrip — Named review cards with full attribution
// 'use client' for Framer Motion StaggerReveal
// AP-006: All reviews use FULL first + last name attribution — no anonymous attribution
// AP-039: Framer Motion whileInView with stagger

import { motion } from 'framer-motion'
import { featuredReviews, reviewData } from '@/data/content'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
}

export default function ReviewAggregateStrip() {
  return (
    <section className="bg-stage-noir py-20" aria-label="Customer reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-12">
          <p className="text-neon-teal font-inter font-semibold text-[11px] tracking-[0.12em] uppercase mb-3">
            WHAT PEOPLE ARE SAYING
          </p>
          <h2 className="font-clash font-semibold text-[30px] md:text-[44px] text-soft-white leading-[1.1] tracking-[-0.01em]">
            The Whole DMV Is Talking
          </h2>
          {reviewData.ratingValue && reviewData.reviewCount && (
            <p className="text-cool-mist font-inter text-base mt-3">
              {reviewData.ratingValue}★ average across {reviewData.reviewCount} Google Reviews
            </p>
          )}
        </div>

        {/* Review cards — stagger in */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {featuredReviews.map((review) => (
            <motion.div
              key={review.name}
              variants={cardVariants}
              className="bg-glass-surface rounded-2xl p-6 border border-white/[0.06]"
            >
              {/* Star rating */}
              <div className="flex gap-0.5 mb-4" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: review.rating }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-neon-teal" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-soft-white/90 font-inter text-base leading-relaxed mb-5">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              {/* AP-006: Full name attribution required — no "Happy Customer" */}
              <footer className="flex items-center justify-between">
                <div>
                  <p className="text-soft-white font-inter font-semibold text-sm">
                    {review.name}
                  </p>
                  <p className="text-cool-mist font-inter text-xs mt-0.5">
                    {review.source} Review
                  </p>
                </div>
                {/* Google G icon */}
                <svg className="w-5 h-5 text-cool-mist/60" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </footer>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
