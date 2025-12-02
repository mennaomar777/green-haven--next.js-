"use client";
import Link from "next/link";
import {
  Bars3Icon,
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "../SignOutButton/SignOutButton";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/account", icon: <HomeIcon className="h-6 w-6" /> },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-6 w-6" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-6 w-6" />,
  },
];

export default function SideNavigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-24 mt-1 left-6 z-50 p-2 rounded-xl bg-green-600 text-white shadow-2xl hover:bg-green-700 transition-all sm:hidden"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav
        className={`fixed inset-y-0 left-0 z-40 w-72 backdrop-blur-xl border-r border-green-900/40 transform transition-transform duration-300 ease-in-out
                    ${
                      isOpen ? "translate-x-0" : "-translate-x-full"
                    } sm:translate-x-0 sm:static sm:w-64`}
      >
        <div className="flex items-center justify-end px-6 pt-6">
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg bg-green-900/50 text-green-300 hover:bg-green-800 hover:text-white transition sm:hidden"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <ul className="flex-1 px-4 pb-6 pt-2 space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-4 px-5 py-4 rounded-xl font-medium transition-all duration-200
                              ${
                                isActive
                                  ? "bg-gray-800 text-white shadow-sm shadow-gray-700/30"
                                  : " hover:bg-green-100  dark:hover:bg-gray-800"
                              }`}
                >
                  <span className="text-green-600">{link.icon}</span>
                  <span>{link.name}</span>
                  {isActive && (
                    <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse" />
                  )}
                </Link>
              </li>
            );
          })}
          <li className="mt-auto ">
            <SignOutButton />
          </li>
        </ul>
      </nav>
    </>
  );
}
