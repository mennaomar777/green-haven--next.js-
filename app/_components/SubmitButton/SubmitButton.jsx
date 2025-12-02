"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({
  children,
  pendingLabel,
  disabled: customDisabled,
}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending || customDisabled}
      className={`
        inline-block px-6 sm:px-8 py-3 sm:py-4
        font-semibold rounded-xl shadow-md
        bg-green-600 text-white
        hover:bg-green-700
        transition-colors duration-300
        disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-200
        dark:bg-transparent dark:text-green-400 dark:border dark:border-green-400
        dark:hover:bg-green-500/20 dark:hover:text-white
      `}
    >
      {pending ? pendingLabel : children}
    </button>
  );
}
