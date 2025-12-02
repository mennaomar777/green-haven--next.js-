import { auth } from "@/app/_lib/auth";
import Link from "next/link";
import {
  CubeIcon,
  InformationCircleIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

export default async function Navigation() {
  const session = await auth();

  return (
    <nav className="z-10 text-lg sm:text-xl">
      <ul className="flex flex-row gap-4 sm:gap-16 items-center justify-center">
        <li className="relative group">
          <Link
            href="/cabins"
            className="flex items-center justify-center sm:justify-start gap-1 sm:gap-2 text-gray-800 dark:text-gray-100 hover:text-green-600 dark:hover:text-green-400 transition-colors sm:p-2 rounded"
          >
            <span className="sm:hidden">
              <CubeIcon className="h-6 w-6" />
            </span>
            <span className="hidden sm:inline">Cabins</span>
          </Link>
          <span className="absolute left-1/2 -translate-x-1/2 -top-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap sm:hidden">
            Cabins
          </span>
        </li>

        <li className="relative group">
          <Link
            href="/about"
            className="flex items-center justify-center sm:justify-start gap-1 sm:gap-2 text-gray-800 dark:text-gray-100 hover:text-green-600 dark:hover:text-green-400 transition-colors sm:p-2 rounded"
          >
            <span className="sm:hidden">
              <InformationCircleIcon className="h-6 w-6" />
            </span>
            <span className="hidden sm:inline">About</span>
          </Link>
          <span className="absolute left-1/2 -translate-x-1/2 -top-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap sm:hidden">
            About
          </span>
        </li>

        <li className="relative group">
          <Link
            href="/account"
            className="flex items-center justify-center sm:justify-start gap-1 sm:gap-2 text-gray-800 dark:text-gray-100 hover:text-green-600 dark:hover:text-green-400 transition-colors sm:p-2 rounded"
          >
            <span className="sm:hidden">
              <UserIcon className="h-6 w-6" />
            </span>
            {session?.user?.image ? (
              <>
                <img
                  src={session.user.image}
                  alt={session.user.name}
                  className="hidden sm:inline h-8 w-8 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="hidden sm:inline">Guest area</span>
              </>
            ) : (
              <span className="hidden sm:inline">Guest area</span>
            )}
          </Link>
          <span className="absolute left-1/2 -translate-x-1/2 -top-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap sm:hidden">
            Guest area
          </span>
        </li>
      </ul>
    </nav>
  );
}
