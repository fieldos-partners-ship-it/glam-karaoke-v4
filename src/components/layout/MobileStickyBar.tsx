// GC-7: MobileStickyBar — server component, always visible on mobile, hidden at md:
// position: fixed; bottom: 0; height: 56px; md:hidden
// Full-surface PhoneLink tap target
// No scroll-based show/hide logic — always visible (GC-7 requirement)

import PhoneLink from '@/components/ui/PhoneLink'
import { businessInfo } from '@/data/content'

export default function MobileStickyBar() {
  return (
    // GC-7: md:hidden — hidden at 768px+; fixed bottom; 56px height
    <div
      className="fixed bottom-0 left-0 right-0 z-50 h-14 border-t border-white/10 bg-neon-teal md:hidden"
      role="complementary"
      aria-label="Call Glam Karaoke"
    >
      {/* GC-3: Full-surface phone link tap target */}
      <PhoneLink
        source="mobile-sticky-bar"
        className="flex h-full w-full items-center justify-center gap-2 font-inter text-sm font-semibold text-logo-noir hover:text-logo-noir"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.1 11a19.79 19.79 0 0 1-3-8.57A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
        </svg>
        Call {businessInfo.phone}
      </PhoneLink>
    </div>
  )
}
