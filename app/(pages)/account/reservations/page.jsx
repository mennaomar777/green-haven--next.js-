import ReservationList from "@/app/_components/ReservationList/ReservationList";
import { getBookings } from "@/app/_lib/data-service";
import auth from "@/middleware";

export const metadata = {
  title: "Reservations",
};

export default async function Page() {
  const session = await auth();
  const bookings = await getBookings(session.user.guestId);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-green-400 mb-7 mt-3">
        Your reservations
      </h2>

      {bookings.length === 0 ? (
        <p className="text-lg text-green-100">
          You have no reservations yet. Check out our{" "}
          <a
            className="underline text-green-400 hover:text-green-300 transition-colors"
            href="/cabins"
          >
            luxury cabins →
          </a>
        </p>
      ) : (
        <ReservationList bookings={bookings} />
      )}
    </div>
  );
}
