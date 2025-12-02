"use client";

import { differenceInDays } from "date-fns";
import { useReservation } from "@/app/_context/ReservationContext";
import { createBooking } from "@/app/_lib/actions";
import SubmitButton from "../SubmitButton/SubmitButton";

function ReservationForm({ cabin, user }) {
  const { range, resetRange } = useReservation();
  const { maxCapacity, regularPrice, discount, id } = cabin;

  const startDate = range.from;
  const endDate = range.to;

  const numNights = differenceInDays(endDate, startDate);
  const cabinPrice = numNights * (regularPrice - discount);

  const bookingData = {
    startDate,
    endDate,
    numNights,
    cabinPrice,
    cabinId: id,
  };

  const createBookingWithData = createBooking.bind(null, bookingData);

  return (
    <div className="bg-linear-to-br from-emerald-600 to-green-700 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 text-white transition-colors">
      <div className="flex flex-col sm:flex-row items-center gap-6 mb-8 sm:mb-10 pb-6 sm:pb-8 border-b border-white/30">
        <div className="relative">
          <img
            src={user.image}
            alt={user.name}
            className="w-16 h-16 rounded-full ring-4 ring-white/40 object-cover"
          />
        </div>
        <div className="text-center sm:text-left">
          <p className="text-sm opacity-90 dark:text-gray-300">Logged in as</p>
          <p className="text-2xl font-bold">{user.name}</p>
        </div>
      </div>

      <form
        action={async (formData) => {
          await createBookingWithData(formData);
          resetRange();
        }}
        className="space-y-6 sm:space-y-8"
      >
        <div className="space-y-2">
          <label
            htmlFor="numGuests"
            className="block text-lg font-medium mb-2 sm:mb-3 dark:text-gray-200"
          >
            How many guests?
          </label>
          <select
            name="numGuests"
            id="numGuests"
            className="px-5 py-4 sm:px-6 sm:py-5 bg-primary-200 dark:bg-primary-700 text-primary-800 dark:text-primary-200 w-full shadow-sm text-md rounded-2xl border border-white/30 placeholder-white/70 focus:outline-none focus:ring-4 focus:ring-white/40 transition-colors duration-200"
            required
          >
            <option value="">Select number of guests...</option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="observations"
            className="block text-lg font-medium mb-2 sm:mb-3 dark:text-gray-200"
          >
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="px-5 py-4 sm:px-6 sm:py-5 bg-primary-200 dark:bg-primary-700 text-primary-800 dark:text-primary-200 w-full shadow-sm text-md rounded-2xl border border-white/30 focus:outline-none focus:ring-4 focus:ring-white/40 transition-colors duration-200"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>

        <div className="flex justify-end items-center gap-4 sm:gap-6">
          {!(startDate && endDate) ? (
            <p className="text-primary-300 dark:text-primary-200 text-base">
              Start by selecting dates
            </p>
          ) : (
            <SubmitButton pendingLabel="Reserving...">Reserve now</SubmitButton>
          )}
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
