"use client";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useTransition } from "react";
import SpinnerMini from "../SpinnerMini/SpinnerMini";

function DeleteReservation({ bookingId, onDelete }) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    startTransition(() => onDelete(bookingId));
  }

  return (
    <button
      onClick={handleDelete}
      className="group flex items-center gap-2 uppercase text-xs font-bold text-gray-700 dark:text-gray-300 grow px-3 py-2 transition-colors"
    >
      {!isPending ? (
        <>
          <TrashIcon className="h-5 w-5 text-gray-600 dark:text-gray-300 group-hover:text-red-600/80 transition-colors" />
          <span className="mt-1 group-hover:text-red-600/80 transition-colors">
            Delete
          </span>
        </>
      ) : (
        <span className="mx-auto">
          <SpinnerMini />
        </span>
      )}
    </button>
  );
}

export default DeleteReservation;
