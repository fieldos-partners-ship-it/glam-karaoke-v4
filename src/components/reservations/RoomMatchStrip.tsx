import PhoneLink from '@/components/ui/PhoneLink'
import { rooms } from '@/data/content'
import { Sparkles, Users, Volume2 } from 'lucide-react'

const roomMoments: Record<string, string> = {
  small: 'Best for date nights, warm-up rounds, and tight little crews up to 3.',
  medium: 'Best for birthdays, post-dinner chaos, and friend-group belting (8–10).',
  large: 'Best for big celebrations, team nights, and all-out sing-offs (15–20).',
}

export default function RoomMatchStrip() {
  return (
    <section className="bg-stage-noir px-4 py-20 sm:px-6 lg:px-8" aria-label="Choose your room">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="menu-kicker mb-4">ROOM MATCH</p>
          <h2 className="menu-heading mb-4 text-[40px] md:text-[56px]">Pick the vibe. Then call and claim it.</h2>
          <p className="menu-subtext-bright text-[18px] md:text-[20px]">
            Every room is private, fully lit for a night out, and built for your crew size. Call us with your headcount and we&apos;ll steer you to the right one fast.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {rooms.map((room, index) => (
            <article
              key={room.id}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(24,18,24,0.9))] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.34)] transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(229,25,151,0.18),transparent_36%)] opacity-80" />
              <div className="relative">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-inter text-xs uppercase tracking-[0.32em] text-soft-white/45">
                      0{index + 1}
                    </p>
                    <h3 className="mt-3 font-clash text-[30px] font-bold tracking-[-0.04em] text-soft-white">
                      {room.name}
                    </h3>
                  </div>
                  {room.mostPopular && (
                    <span className="rounded-full border border-neon-teal/40 bg-neon-teal/15 px-3 py-1 font-inter text-[11px] font-semibold uppercase tracking-[0.18em] text-neon-teal">
                      Crowd Favorite
                    </span>
                  )}
                </div>

                <div className="mb-5 flex flex-wrap gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <div className="mb-1 flex items-center gap-2 text-soft-white">
                      <Users className="h-4 w-4 text-neon-teal" aria-hidden="true" />
                      <span className="font-inter text-xs uppercase tracking-[0.18em] text-soft-white/55">Capacity</span>
                    </div>
                    <p className="font-inter text-base font-semibold text-soft-white">{room.capacity}</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <div className="mb-1 flex items-center gap-2 text-soft-white">
                      <Sparkles className="h-4 w-4 text-neon-teal" aria-hidden="true" />
                      <span className="font-inter text-xs uppercase tracking-[0.18em] text-soft-white/55">Starting At</span>
                    </div>
                    <p className="font-inter text-base font-semibold text-soft-white">{room.priceDisplay}</p>
                  </div>
                </div>

                <p className="mb-5 font-inter text-[17px] leading-relaxed text-soft-white/82">
                  {roomMoments[room.id]}
                </p>

                <div className="mb-6 flex items-center gap-2 font-inter text-sm text-cool-mist">
                  <Volume2 className="h-4 w-4 text-neon-teal" aria-hidden="true" />
                  <span>Private room, pro sound, club lighting, and tambourines ready to go.</span>
                </div>

                {/* P2-03: room-specific CTAs that carry urgency/commitment over generic "Call for X" */}
                <PhoneLink
                  source={`reservations-room-${room.id}`}
                  className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-neon-teal bg-neon-teal px-6 py-3 font-clash text-[14px] font-bold uppercase tracking-[0.08em] !text-logo-noir shadow-[0_0_24px_rgba(229,25,151,0.28)] hover:border-neon-teal-hover hover:bg-neon-teal-hover hover:!text-logo-noir"
                >
                  {room.id === 'small'
                    ? 'Call to Claim the Small Room'
                    : room.id === 'medium'
                    ? 'Call to Lock the Medium Room'
                    : 'Call and Claim the Large Room'}
                </PhoneLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
