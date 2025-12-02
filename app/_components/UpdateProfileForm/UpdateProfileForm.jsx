"use client";
import { updateProfile } from "@/app/_lib/actions";
import React from "react";
import SubmitButton from "../SubmitButton/SubmitButton";

export default function UpdateProfileForm({ children, guest }) {
  const { fullName, email, nationalId } = guest;

  return (
    <div className="bg-linear-to-br from-emerald-600 to-green-700 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 text-gray-900 dark:text-gray-100 transition-colors">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Update your guest profile
      </h2>
      <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <form action={updateProfile} className="space-y-6 sm:space-y-8">
        <div className="space-y-2">
          <label className="block text-md font-medium">Full name</label>
          <input
            disabled
            defaultValue={fullName}
            name="fullName"
            className="px-5 py-4 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 w-full shadow-sm rounded-2xl border border-gray-300 dark:border-gray-600 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-200 transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-md font-medium">Email address</label>
          <input
            disabled
            defaultValue={email}
            name="email"
            className="px-5 py-4 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 w-full shadow-sm rounded-2xl border border-gray-300 dark:border-gray-600 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-200 transition-colors"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="nationality" className="block text-md font-medium">
              Where are you from?
            </label>
            {guest.countryFlag && (
              <img
                src={guest.countryFlag}
                alt="Country flag"
                className="h-5 rounded-sm"
              />
            )}
          </div>
          {children}
        </div>

        <div className="space-y-2">
          <label htmlFor="nationalId" className="block text-md font-medium">
            National ID number
          </label>
          <input
            name="nationalId"
            defaultValue={nationalId}
            className="px-5 py-4 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 w-full shadow-sm rounded-2xl border border-gray-300 dark:border-gray-600 transition-colors"
          />
        </div>

        <div className="flex justify-end items-center gap-4 sm:gap-6">
          <SubmitButton pendingLabel="Updating...">Update profile</SubmitButton>
        </div>
      </form>
    </div>
  );
}
