import { useFormContext } from "react-hook-form";

export default function LoginOptions() {
  const { register } = useFormContext();

  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <label className="flex cursor-pointer items-center gap-2.5 text-sm font-medium text-slate-600 dark:text-slate-300">
        <input
          type="checkbox"
          {...register("rememberEmail")}
          className="size-4 cursor-pointer rounded border-slate-300 accent-blue-600"
        />

        Remember email
      </label>

      <button
        type="button"
        className="!border-0 !bg-transparent !p-0 text-sm font-semibold text-blue-600 !shadow-none transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
      >
        Forgot password?
      </button>
    </div>
  );
}