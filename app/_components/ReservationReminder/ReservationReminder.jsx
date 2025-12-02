"use client";
import { useReservation } from "@/app/_context/ReservationContext";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { format } from "date-fns";

function ReservationReminder() {
  const { range, resetRange } = useReservation();
  if (!range.from || !range.to) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 py-4 px-6 sm:px-8 rounded-full bg-green-600 dark:bg-green-500 text-white dark:text-gray-900 font-semibold shadow-lg flex gap-4 items-center z-50">
      <p className="text-sm sm:text-base">
        👋 Don&apos;t forget to reserve your dates <br />
        from {format(new Date(range.from), "MMM dd yyyy")} to{" "}
        {format(new Date(range.to), "MMM dd yyyy")}
      </p>
      <button
        className="rounded-full p-1 hover:bg-green-700 dark:hover:bg-green-400 transition-colors"
        onClick={resetRange}
      >
        <XMarkIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

export default ReservationReminder;
