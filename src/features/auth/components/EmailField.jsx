import { Mail } from "lucide-react";
import { useFormContext } from "react-hook-form";

export default function EmailField() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const hasError = Boolean(errors.email);

  return (
    <div>
      <label
        htmlFor="email"
        className="mb-2.5 block text-sm font-semibold text-slate-700 dark:text-slate-200"
      >
        Email address
      </label>

      <div className="relative">
        <Mail
          size={18}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          id="email"
          type="email"
          autoComplete="email"
          autoFocus
          placeholder="john@example.com"
          aria-invalid={hasError}
          aria-describedby={
            hasError
              ? "email-error"
              : undefined
          }
          {...register("email")}
          className={`
            h-14 w-full rounded-xl border
            bg-white/80 pl-11 pr-4
            text-sm text-slate-900
            outline-none transition
            placeholder:text-slate-400
            hover:border-slate-400
            focus:bg-white focus:ring-4
            disabled:cursor-not-allowed
            disabled:opacity-60
            dark:bg-slate-950/70
            dark:text-white

            ${
              hasError
                ? "border-red-400 focus:border-red-500 focus:ring-red-500/10"
                : "border-slate-300 focus:border-blue-500 focus:ring-blue-500/10 dark:border-slate-700"
            }
          `}
        />
      </div>

      {errors.email && (
        <p
          id="email-error"
          className="mt-2 text-sm text-red-600 dark:text-red-400"
        >
          {errors.email.message}
        </p>
      )}
    </div>
  );
}