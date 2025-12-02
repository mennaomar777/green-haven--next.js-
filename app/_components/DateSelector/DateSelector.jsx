"use client";

import { useReservation } from "@/app/_context/ReservationContext";
import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector({ settings, cabin, bookedDates }) {
  const { range, setRange, resetRange } = useReservation();

  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

  const { regularPrice, discount } = cabin;
  const numNights = differenceInDays(displayRange.to, displayRange.from);
  const cabinPrice = numNights * (regularPrice - discount);

  const { minBookingLength, maxBookingLength } = settings;

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        className="pt-12 place-self-center"
        mode="range"
        onSelect={setRange}
        selected={displayRange}
        min={minBookingLength + 1}
        max={maxBookingLength}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        numberOfMonths={2}
        disabled={(curDate) =>
          isPast(curDate) ||
          bookedDates.some((date) => isSameDay(date, curDate))
        }
        classNames={{
          day: "rounded-full text-white transition-colors",
          today: " text-green-200 font-bold",
          selected: "bg-green-500 text-white",
          range_start: "bg-green-100 text-white",
          range_end: "bg-green-100 text-white",
          range_middle: "bg-green-500/50 text-white",
          nav_button: "text-green-500 transition-colors",
          caption:
            "flex justify-between items-center text-green-400 font-semibold text-lg",
        }}
      />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 px-4 sm:px-6 py-4 border border-green-500 rounded-xl bg-transparent text-white dark:text-green-400 mt-7">
        <div className="flex flex-col sm:flex-row items-start sm:items-baseline gap-3 sm:gap-6 w-full sm:w-auto">
          <p className="flex flex-wrap gap-2 items-baseline text-base sm:text-lg">
            {discount > 0 ? (
              <>
                <span className="text-xl sm:text-2xl font-semibold">
                  ${regularPrice - discount}
                </span>
                <span className="line-through text-green-300 dark:text-green-600 text-sm sm:text-base">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-xl sm:text-2xl font-semibold">
                ${regularPrice}
              </span>
            )}
            <span className="text-xs sm:text-sm">/night</span>
          </p>

          {numNights ? (
            <>
              <p className="bg-green-700/30 dark:bg-green-500/30 px-3 py-1 rounded text-sm sm:text-lg flex items-center gap-1">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p className="text-base sm:text-lg font-bold flex flex-wrap gap-1">
                Total:{" "}
                <span className="text-xl sm:text-2xl font-semibold">
                  ${cabinPrice}
                </span>
              </p>
            </>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            onClick={resetRange}
            className="mt-3 sm:mt-0 px-4 py-2 w-full sm:w-auto text-sm sm:text-base border border-green-500 rounded-lg font-semibold text-white dark:text-green-400 hover:bg-green-500/20 dark:hover:bg-green-700/30 transition-colors"
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
