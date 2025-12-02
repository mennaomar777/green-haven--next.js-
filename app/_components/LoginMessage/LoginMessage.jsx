import Link from "next/link";

function LoginMessage() {
  return (
    <div className="flex justify-center items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
      <p className="text-center text-lg text-gray-800 dark:text-gray-200">
        Please{" "}
        <Link
          href="/login"
          className="underline text-green-600 dark:text-green-400"
        >
          login
        </Link>{" "}
        to reserve this cabin.
      </p>
    </div>
  );
}

export default LoginMessage;
