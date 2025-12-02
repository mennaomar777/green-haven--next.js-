import { signOutAction } from "@/app/_lib/actions";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";

function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className="font-medium py-4 px-5 hover:bg-gray-800 rounded-xl transition-colors flex items-center gap-4 font-semibold text-primary-200 w-full">
        <ArrowRightOnRectangleIcon className="h-5 w-5 text-green-600" />
        <span>Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
