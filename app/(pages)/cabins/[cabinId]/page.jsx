import { Suspense } from "react";
import Reservation from "@/app/_components/Reservation/Reservation";
import Spinner from "@/app/_components/Spinner/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import Cabin from "@/app/_components/Cabin/Cabin";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { cabinId } = resolvedParams;

  const cabin = await getCabin(cabinId);

  return {
    title: `Cabin ${cabin.name}`,
  };
}
export async function generateStaticParams() {
  const cabins = await getCabins();
  const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
  return ids;
}
export default async function Page({ params }) {
  const { cabinId } = params;
  const cabin = await getCabin(cabinId);

  return (
    <div className="max-w-6xl mx-auto mt-8 px-4 sm:px-6 lg:px-8 space-y-12">
      <Cabin cabin={cabin} />
      <div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-10 text-green-600 dark:text-green-400">
          Reserve{" "}
          <span className="text-green-700 dark:text-green-300">
            {cabin.name}
          </span>{" "}
          today. Pay on arrival.
        </h2>
        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
