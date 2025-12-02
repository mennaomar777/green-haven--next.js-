"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  }
  return (
    <div className="flex border border-gray-300 dark:border-gray-700 overflow-hidden rounded-md">
      <button
        className={`px-4 sm:px-5 py-2 sm:py-3 transition-colors duration-200 font-medium ${
          activeFilter === "all"
            ? "bg-green-600 text-white dark:bg-green-500 dark:text-gray-900"
            : "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-green-100 dark:hover:bg-green-900"
        }`}
        onClick={() => handleFilter("all")}
      >
        All cabins
      </button>
      <button
        className={`px-5 py-2 hover:bg-primary-700 ${
          activeFilter === "small"
            ? "bg-green-600 text-white dark:bg-green-500 dark:text-gray-900"
            : "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-green-100 dark:hover:bg-green-900"
        }`}
        onClick={() => handleFilter("small")}
      >
        2&mdash;3 guests
      </button>
      <button
        className={`px-5 py-2 hover:bg-primary-700 ${
          activeFilter === "medium"
            ? "bg-green-600 text-white dark:bg-green-500 dark:text-gray-900"
            : "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-green-100 dark:hover:bg-green-900"
        }`}
        onClick={() => handleFilter("medium")}
      >
        4&mdash;7 guests
      </button>
      <button
        className={`px-5 py-2 hover:bg-primary-700 ${
          activeFilter === "large"
            ? "bg-green-600 text-white dark:bg-green-500 dark:text-gray-900"
            : "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-green-100 dark:hover:bg-green-900"
        }`}
        onClick={() => handleFilter("large")}
      >
        8&mdash;12 guests
      </button>
    </div>
  );
}
