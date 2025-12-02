import { signInAction } from "@/app/_lib/actions";

function SignInButton() {
  return (
    <form action={signInAction}>
      <button
        type="submit"
        className="flex items-center justify-center gap-4 sm:gap-6 text-lg border border-green-600 text-green-600 px-8 sm:px-10 py-3 sm:py-4 font-medium rounded-xl hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors shadow-sm"
      >
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          className="h-6 w-6 sm:h-6 sm:w-6"
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
