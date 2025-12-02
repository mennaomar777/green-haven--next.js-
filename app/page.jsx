"use client";
import Link from "next/link";
import Image from "next/image";
import bg from "@/public/bg.png";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={80}
        className="object-cover object-top"
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center">
        <motion.h1
          className="text-6xl sm:text-7xl md:text-8xl font-josefin font-semibold text-gray-100 dark:text-gray-200 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Welcome to paradise.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <Link
            href="/cabins"
            className="inline-block px-6 py-3 sm:px-8 sm:py-4 text-lg sm:text-xl font-semibold bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Explore luxury cabins
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
