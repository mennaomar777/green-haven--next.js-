import SignInButton from "@/app/_components/SignInButton/SignInButton";

export const metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] gap-8 px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-gray-100">
        Sign in to access your guest area
      </h2>

      <p className="text-gray-600 dark:text-gray-400 max-w-md">
        Welcome back! Please sign in to view your reservations, update your
        profile, and enjoy all features of Green Haven.
      </p>

      <SignInButton className="mt-4" />
    </div>
  );
}
