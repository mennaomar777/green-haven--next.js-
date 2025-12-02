"use client";
export default function Error({ error, reset }) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center gap-6">
      <h1 className="text-3xl sm:text-4xl font-semibold text-green-600">
        Something went wrong!
      </h1>
      <p className="text-gray-700 dark:text-gray-300 text-lg">
        {error.message}
      </p>

      <button
        onClick={reset}
        className="px-6 py-3 border-2 border-green-600 text-green-600 rounded-xl hover:bg-green-600/20 hover:text-white transition font-medium"
      >
        Try again
      </button>
    </main>
  );
}
