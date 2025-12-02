import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="flex flex-col md:flex-row border rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 transition-transform hover:scale-105">
      <div className="relative w-full md:w-1/3 h-60 md:h-auto shrink-0">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          className="object-cover rounded-l-lg shadow-md"
        />
      </div>

      <div className="flex flex-col justify-center flex-1 p-5 md:p-6">
        <h3 className="text-green-600 dark:text-green-400 font-semibold text-xl sm:text-2xl mb-2">
          Cabin {name}
        </h3>

        <div className="flex items-center gap-2 mb-3 text-gray-700 dark:text-gray-300">
          <UsersIcon className="h-5 w-5" />
          <span>
            For up to <strong>{maxCapacity}</strong> guests
          </span>
        </div>

        <p className="flex gap-2 items-baseline text-gray-900 dark:text-gray-100 font-semibold mb-4">
          {discount > 0 ? (
            <>
              <span className="text-2xl">${regularPrice - discount}</span>
              <span className="line-through text-gray-500 dark:text-gray-400">
                ${regularPrice}
              </span>
            </>
          ) : (
            <span className="text-2xl">${regularPrice}</span>
          )}
          <span className="text-gray-700 dark:text-gray-300 text-sm">
            / night
          </span>
        </p>

        <Link
          href={`/cabins/${id}`}
          className="mt-auto inline-block text-green-600 dark:text-green-400 font-medium hover:underline"
        >
          Details & reservation &rarr;
        </Link>
      </div>
    </div>
  );
}

export default CabinCard;
