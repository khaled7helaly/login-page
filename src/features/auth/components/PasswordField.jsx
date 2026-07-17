import { useState } from "react";
import { useFormContext } from "react-hook-form";
import {
  Eye,
  EyeOff,
  LockKeyhole,
} from "lucide-react";

export default function PasswordField() {
  const [showPassword, setShowPassword] =
    useState(false);

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const hasError = Boolean(
    errors.password
  );

  return (
    <div>
      <label
        htmlFor="password"
        className="mb-2.5 block text-sm font-semibold text-slate-700 dark:text-slate-200"
      >
        Password
      </label>

      <div className="relative">
        <LockKeyhole
          size={18}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          id="password"
          type={
            showPassword
              ? "text"
              : "password"
          }
          autoComplete="current-password"
          placeholder="Enter your password"
          aria-invalid={hasError}
          aria-describedby={
            hasError
              ? "password-error"
              : undefined
          }
          {...register("password")}
          className={`
            h-14 w-full rounded-xl border
            bg-white/80 pl-11 pr-14
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

        <button
          type="button"
          onClick={() =>
            setShowPassword(
              (current) => !current
            )
          }
          aria-label={
            showPassword
              ? "Hide password"
              : "Show password"
          }
          className="absolute right-3 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center !rounded-lg !border-0 !bg-transparent !p-0 text-slate-400 !shadow-none transition hover:!bg-slate-100 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:hover:!bg-slate-800 dark:hover:text-white"
        >
          {showPassword ? (
            <EyeOff size={19} />
          ) : (
            <Eye size={19} />
          )}
        </button>
      </div>

      {errors.password && (
        <p
          id="password-error"
          className="mt-2 text-sm text-red-600 dark:text-red-400"
        >
          {errors.password.message}
        </p>
      )}
    </div>
  );
}