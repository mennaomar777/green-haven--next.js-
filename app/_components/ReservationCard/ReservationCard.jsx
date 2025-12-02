import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "../DeleteReservation/DeleteReservation";
import Image from "next/image";
import Link from "next/link";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ booking, onDelete }) {
  const {
    id,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    created_at,
    cabins: { name, image },
  } = booking;

  return (
    <div className="flex flex-col md:flex-row border border-gray-400/50 rounded-xl overflow-hidden backdrop-blur-sm shadow-md shadow-black/20 bg-gray-50 dark:bg-gray-800/20">
      {/* IMAGE */}
      <div className="relative w-full md:w-32 h-48 md:h-32">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          className="object-cover border-b md:border-b-0 md:border-r border-gray-400/50"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col grow px-4 py-3 md:px-6 md:py-3 text-gray-900 dark:text-gray-100">
        <div className="flex items-center justify-between flex-wrap">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            {numNights} nights in Cabin {name}
          </h3>

          {isPast(new Date(startDate)) ? (
            <span className="bg-yellow-500 text-yellow-100/90 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-md shadow-sm mt-2 md:mt-0">
              past
            </span>
          ) : (
            <span className="bg-green-700 text-white h-7 px-3 uppercase text-xs font-bold flex items-center rounded-md shadow-sm mt-2 md:mt-0">
              upcoming
            </span>
          )}
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-lg mt-1">
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>

        <div className="flex gap-5 mt-auto flex-wrap items-baseline">
          <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">
            ${totalPrice}
          </p>
          <p className="text-gray-400 dark:text-gray-500">&bull;</p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {numGuests} guest{numGuests > 1 && "s"}
          </p>

          <p className="ml-auto text-sm text-gray-500 dark:text-gray-400">
            Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
          </p>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="flex flex-row md:flex-col border-t md:border-t-0 md:border-l border-gray-400/50 w-full md:w-[100px] bg-gray-100 dark:bg-gray-700/10">
        {!isPast(startDate) && (
          <>
            <Link
              href={`/account/reservations/edit/${id}`}
              className="group flex items-center gap-2 uppercase text-xs font-bold text-gray-700 dark:text-gray-300 border-b md:border-b border-gray-400/50 grow px-3 py-2 transition-colors"
            >
              <PencilSquareIcon className="h-5 w-5 text-gray-500 dark:text-gray-300 group-hover:text-green-500/90 transition-colors" />
              <span className="mt-1 group-hover:text-green-500/90 transition-colors">
                Edit
              </span>
            </Link>

            <DeleteReservation bookingId={id} onDelete={onDelete} />
          </>
        )}
      </div>
    </div>
  );
}

export default ReservationCard;
