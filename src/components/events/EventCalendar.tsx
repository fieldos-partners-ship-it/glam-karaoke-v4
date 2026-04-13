// EventCalendar — Monthly grid showing recurring Friday DJ nights
// Server component — static calendar, no external API

import PhoneLink from '@/components/ui/PhoneLink'

// Generate upcoming Friday event cards for the current month
function getUpcomingFridays(count: number = 6) {
  const fridays: Array<{ date: string; month: string; day: number; year: number }> = []
  const today = new Date()
  const d = new Date(today)

  // Find next Friday
  const dayOfWeek = d.getDay()
  const daysUntilFriday = (5 - dayOfWeek + 7) % 7 || 7
  d.setDate(d.getDate() + daysUntilFriday)

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  for (let i = 0; i < count; i++) {
    fridays.push({
      date: `${months[d.getMonth()]} ${d.getDate()}`,
      month: months[d.getMonth()],
      day: d.getDate(),
      year: d.getFullYear(),
    })
    d.setDate(d.getDate() + 7)
  }

  return fridays
}

const upcomingFridays = getUpcomingFridays(6)

export default function EventCalendar() {
  return (
    <section className="bg-stage-noir py-20" aria-label="Upcoming DJ nights">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-12">
          <p className="text-neon-teal font-inter font-semibold text-[11px] tracking-[0.12em] uppercase mb-3">
            UPCOMING NIGHTS
          </p>
          <h2 className="font-clash font-semibold text-[30px] md:text-[40px] text-soft-white leading-[1.1] tracking-[-0.01em]">
            Recurring Every Friday
          </h2>
          <p className="text-cool-mist font-inter text-base mt-3">
            Doors at 5 PM &middot; DJ @loxs1ck takes the stage at 9 PM
          </p>
        </div>

        {/* Event cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {upcomingFridays.map((friday, i) => (
            <div
              key={`${friday.date}-${friday.year}`}
              className={`rounded-2xl border p-6 flex flex-col
                ${i === 0 ? 'bg-glass-surface border-neon-teal/50' : 'bg-glass-surface border-white/[0.06]'}`}
            >
              {/* Date */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-clash font-bold text-[48px] text-neon-teal leading-none">
                  {friday.day}
                </span>
                <div>
                  <p className="font-inter font-semibold text-[11px] tracking-[0.12em] uppercase text-cool-mist">
                    Friday
                  </p>
                  <p className="font-inter text-cool-mist text-sm">
                    {friday.month} {friday.year}
                  </p>
                </div>
              </div>

              {/* Event details */}
              <h3 className="font-clash font-semibold text-xl text-soft-white mb-1">
                DJ Night
              </h3>
              <p className="text-neon-teal font-inter font-semibold text-sm mb-1">
                DJ @loxs1ck
              </p>
              <p className="text-cool-mist font-inter text-sm mb-4">
                9 PM – Close
              </p>

              {/* RSVP */}
              <div className="mt-auto">
                <PhoneLink
                  source={`events-calendar-${friday.day}`}
                  className="inline-flex items-center font-inter font-semibold text-sm min-h-[44px]"
                >
                  RSVP: Call Us
                </PhoneLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
