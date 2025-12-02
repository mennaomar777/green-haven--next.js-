import Link from "next/link";

function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center space-y-6">
      <h1 className="text-3xl sm:text-4xl font-semibold text-green-600">
        This page could not be found :(
      </h1>
      <p className="text-gray-700 dark:text-gray-300">
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 border-2 border-green-600 text-green-600 rounded-xl hover:bg-green-600/20 hover:text-white transition font-medium"
      >
        Go back home
      </Link>
    </main>
  );
}

export default NotFound;
