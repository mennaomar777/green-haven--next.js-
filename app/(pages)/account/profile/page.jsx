import SelectCountry from "@/app/_components/SelectCountry/SelectCountry";
import UpdateProfileForm from "@/app/_components/UpdateProfileForm/UpdateProfileForm";
import { getGuest } from "@/app/_lib/data-service";
import auth from "@/middleware";

export const metadata = {
  title: "Update profile",
};

export default async function Page() {
  const session = await auth();
  const guest = await getGuest(session.user.email);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-green-600 mb-4 mt-3">
        Update your guest profile
      </h2>

      <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <UpdateProfileForm guest={guest}>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="px-5 py-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 w-full shadow-sm rounded-sm"
          defaultCountry={guest.nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}
