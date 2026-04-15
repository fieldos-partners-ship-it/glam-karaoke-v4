import ReservationsHero from '@/components/reservations/ReservationsHero'
import RoomMatchStrip from '@/components/reservations/RoomMatchStrip'
import CallConciergePanel from '@/components/reservations/CallConciergePanel'
import HoursLocationCard from '@/components/reservations/HoursLocationCard'

export default function ReservationsPage() {
  return (
    <>
      <ReservationsHero />
      <RoomMatchStrip />
      <CallConciergePanel />
      <HoursLocationCard />
    </>
  )
}
