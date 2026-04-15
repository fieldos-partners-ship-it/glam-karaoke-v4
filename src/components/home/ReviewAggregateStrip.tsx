'use client'

// ReviewAggregateStrip — Named review carousel with full attribution
// AP-006: All reviews use FULL first + last name attribution — no anonymous attribution

import { featuredReviews, reviewData } from '@/data/content'
import TestimonialCarousel from '@/components/ui/TestimonialCarousel'

export default function ReviewAggregateStrip() {
  return (
    <section className="bg-stage-noir py-20" aria-label="Customer reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-12">
          <p className="menu-kicker mb-4">
            WHAT PEOPLE ARE SAYING
          </p>
          <h2 className="menu-heading text-[36px] md:text-[52px]">
            The Whole DMV Is Talking
          </h2>
          {reviewData.ratingValue && reviewData.reviewCount && (
            <p className="menu-subtext mt-4 text-[18px]">
              {reviewData.ratingValue}★ average across {reviewData.reviewCount} Google Reviews
            </p>
          )}
        </div>

        <TestimonialCarousel reviews={featuredReviews} />
      </div>
    </section>
  )
}
