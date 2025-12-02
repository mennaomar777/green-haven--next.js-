// import { unstable_noStore as noStore } from "next/cache";
import React from "react";
import CabinCard from "../CabinCard/CabinCard";
import { getCabins } from "../../_lib/data-service";

export default async function CabinList({ filter }) {
  // noStore();

  const cabins = await getCabins();
  if (!cabins.length) return null;

  // Filter

  let filteredCabins;
  if (filter === "all") filteredCabins = cabins;
  if (filter === "small")
    filteredCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  if (filter === "medium")
    filteredCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
    );
  if (filter === "large")
    filteredCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 xl:gap-10">
      {filteredCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
