import { LoaderCircle } from "lucide-react";

export default function LoginSubmitButton({
  isPending,
}) {
  return (
    <button
      type="submit"
      disabled={isPending}
      className="!flex h-14 w-full items-center justify-center gap-2 !rounded-xl !border-0 !bg-blue-600 !px-5 text-sm font-semibold !text-white shadow-lg shadow-blue-600/20 transition hover:!bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {isPending && (
        <LoaderCircle
          size={19}
          className="animate-spin"
        />
      )}

      <span>
        {isPending
          ? "Signing in..."
          : "Sign In"}
      </span>
    </button>
  );
}