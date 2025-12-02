import React from "react";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import TextExpander from "@/app/_components/TextExpander/TextExpander";

export default function Cabin({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 border border-gray-300 dark:border-gray-700 p-6 rounded-lg shadow-lg mb-16 bg-white dark:bg-gray-900">
      <div className="relative w-full h-80 lg:h-[500px] rounded-lg overflow-hidden shadow-md">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col justify-start pt-5">
        <h3 className="text-4xl lg:text-5xl font-bold text-green-600 dark:text-green-400 mb-8">
          Cabin{" "}
          <span className="text-green-700 dark:text-green-300">{name}</span>
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="flex flex-col gap-4">
          <li className="flex gap-4 items-center">
            <div className="p-3 bg-green-100 dark:bg-green-900/40 rounded-full">
              <UsersIcon className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            <span className="text-lg text-gray-800 dark:text-gray-200">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex gap-4 items-center">
            <div className="p-3 bg-green-100 dark:bg-green-900/40 rounded-full">
              <MapPinIcon className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            <span className="text-lg text-gray-800 dark:text-gray-200">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex gap-4 items-center">
            <div className="p-3 bg-green-100 dark:bg-green-900/40 rounded-full">
              <EyeSlashIcon className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            <span className="text-lg text-gray-800 dark:text-gray-200">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
