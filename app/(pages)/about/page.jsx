import Image from "next/image";
import image1 from "../../../public/about-1.jpg";
import image2 from "../../../public/about-2.jpg";
import { getCabins } from "@/app/_lib/data-service";

export const revalidate = 86400;
export const metadata = {
  title: "About",
};

export default async function Page() {
  const cabins = await getCabins();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-24 items-center">
      {/* Left text section */}
      <div className="lg:col-span-3 space-y-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-green-600 dark:text-green-400">
          Welcome to Green Haven
        </h1>

        <div className="space-y-8">
          <p className="text-gray-800 dark:text-gray-300">
            Where nature&apos;s beauty and comfortable living blend seamlessly.
            Hidden away in the heart of the Italian Dolomites, this is your
            paradise away from home. But it&apos;s not just about the luxury
            cabins. It&apos;s about the experience of reconnecting with nature
            and enjoying simple pleasures with family.
          </p>
          <p className="text-gray-800 dark:text-gray-300">
            Our {cabins.length} luxury cabins provide a cozy base, but the real
            freedom and peace you&apos;ll find in the surrounding mountains.
            Wander through lush forests, breathe in the fresh air, and watch the
            stars twinkle above from the warmth of a campfire or your hot tub.
          </p>
          <p className="text-gray-800 dark:text-gray-300">
            This is where memorable moments are made, surrounded by
            nature&apos;s splendor. It&apos;s a place to slow down, relax, and
            feel the joy of being together in a beautiful setting.
          </p>
        </div>
      </div>

      {/* Images section */}
      <div className="lg:col-span-2 flex flex-col gap-4">
        <Image
          src={image1}
          alt="Family sitting around a fire pit in front of cabin"
          placeholder="blur"
          quality={80}
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="relative aspect-square lg:col-span-2 w-full rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/about-2.jpg"
          fill
          className="object-cover"
          alt="Family that manages Green Haven"
        />
      </div>

      {/* Right text section */}
      <div className="lg:col-span-3 space-y-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-green-600 dark:text-green-400">
          Managed by our family since 1962
        </h1>

        <div className="space-y-8">
          <p className="text-gray-800 dark:text-gray-300">
            Since 1962, Green Haven has been a cherished family-run retreat.
            Started by our grandparents, this haven has been nurtured with love
            and care, passing down through our family as a testament to our
            dedication to creating a warm, welcoming environment.
          </p>
          <p className="text-gray-800 dark:text-gray-300">
            Over the years, we&apos;ve maintained the essence of Green Haven,
            blending the timeless beauty of the mountains with the personal
            touch only a family business can offer. Here, you&apos;re not just a
            guest; you&apos;re part of our extended family. So join us at The
            Wild Oasis soon, where tradition meets tranquility, and every visit
            is like coming home.
          </p>

          {/* Button */}
          <div>
            <a
              href="/cabins"
              className="inline-block px-6 py-2 sm:px-8 sm:py-4 text-lg font-semibold
                 bg-green-600 text-white rounded-lg shadow-lg
                 hover:bg-green-700 transition-colors duration-300
                 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
                 dark:bg-transparent dark:text-green-400 dark:border dark:border-green-400 dark:hover:bg-green-500/20"
            >
              Explore our luxury cabins
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
