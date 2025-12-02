import Link from "next/link";

function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center gap-6">
      <h1 className="text-3xl sm:text-4xl font-semibold text-green-600">
        This cabin could not be found :(
      </h1>

      <Link
        href="/cabins"
        className="px-6 py-3 border-2 border-green-600 text-green-600 rounded-xl hover:bg-green-600/20 hover:text-white transition font-medium"
      >
        Back to all cabins
      </Link>
    </main>
  );
}

export default NotFound;
