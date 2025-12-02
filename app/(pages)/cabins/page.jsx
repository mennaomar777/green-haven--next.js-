import { Suspense } from "react";
import CabinList from "@/app/_components/CabinList.jsx/CabinList";
import Spinner from "@/app/_components/Spinner/Spinner";
import Filter from "@/app/_components/Filter/Filter";
import ReservationReminder from "@/app/_components/ReservationReminder/ReservationReminder";

export const revalidate = 3600;
export const metadata = {
  title: "Cabins",
};

export default function Page({ searchParams = {} }) {
  const filter = searchParams?.capacity ?? "all";

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-green-600 dark:text-green-400 mb-4">
        Our Luxury Cabins
      </h1>
      <p className="text-gray-700 dark:text-gray-300 text-lg mb-8">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>
      <div className="flex justify-end mb-8">
        <Filter />
      </div>
      <Suspense fallback={<Spinner />}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
