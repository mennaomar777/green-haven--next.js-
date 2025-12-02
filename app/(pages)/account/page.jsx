import { auth } from "@/app/_lib/auth";
import Link from "next/link";

export const metadata = {
  title: "Account",
};

export default async function Page() {
  const session = await auth();
  const firstName = session?.user?.name?.split(" ").at(0) ?? "Guest";

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6 md:p-12">
          <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-8">
            {/* Profile Image */}
            <div className="shrink-0">
              {session?.user?.image ? (
                <img
                  src={session.user.image}
                  alt={session.user.name || "User"}
                  className="w-28 h-28 md:w-32 md:h-32 rounded-full ring-4 ring-green-200 object-cover shadow-lg"
                />
              ) : (
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-linear-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-4xl md:text-5xl font-bold shadow-lg">
                  {firstName.charAt(0).toUpperCase()}
                </div>
              )}
            </div>

            {/* Welcome text */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-green-600 mb-1">
                Welcome, {firstName}!
              </h2>

              {session?.user?.email && (
                <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 mb-4">
                  {session.user.email}
                </p>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="mt-8 md:mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="max-w-3xl mx-auto text-center md:text-left space-y-3 md:space-y-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
                Manage your account, check your reservations, and explore new
                cabins.{" "}
                <span className="text-green-600 font-semibold">
                  Green Haven
                </span>{" "}
                is here to make your stay unforgettable. Enjoy your personalized
                dashboard!
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                Here you can update your profile, review your bookings, and
                discover special offers available exclusively for our valued
                members.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-5">
              <Link
                href="/account/profile"
                className="px-7 py-3 border-2 border-green-600 text-green-600 font-medium rounded-xl hover:bg-green-600/20 hover:text-white transition shadow-md text-center"
              >
                Edit Profile
              </Link>
              <Link
                href="/account/reservations"
                className="px-7 py-3 border-2 border-green-600 text-green-600 font-medium rounded-xl hover:bg-green-600/20 hover:text-white transition shadow-md text-center"
              >
                My Reservations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
