import {ShoppingBag,} from "lucide-react";

export default function AuthLayout({ children }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-slate-950 dark:bg-slate-950 dark:text-white">{/* Background */}
    <div className="pointer-events-none absolute inset-x-0 top-0 h-[65%] bg-gradient-to-r from-cyan-100 via-blue-50 to-indigo-300 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950" />

    {/* Fade to white */}
    <div className="pointer-events-none absolute inset-x-0 top-[38%] h-[350px] bg-gradient-to-b from-transparent via-white/90 to-white dark:via-slate-950/90 dark:to-slate-950" />
        <section className="relative z-10 mx-auto grid min-h-screen w-full max-w-[1380px] grid-cols-1 px-5 sm:px-8 lg:grid-cols-[1fr_560px] lg:gap-16 lg:px-14 xl:px-20">
        {/* Left side */}
        <div className="hidden min-h-screen flex-col py-12 lg:flex">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/25">
              <ShoppingBag size={23} />
            </div>

            <div>
              <p className="text-xl font-bold tracking-tight">
                Koda Store
              </p>

              <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                Shop smarter, live better
              </p>
            </div>
          </div>

          {/* Main content */}
            <div className="my-auto max-w-xl pb-10">
            <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-white/60 px-4 py-2 text-sm font-semibold text-blue-700 backdrop-blur-sm dark:border-blue-900/60 dark:bg-blue-950/30 dark:text-blue-300">
                Easy shopping starts here
            </div>

            <h1 className="max-w-xl text-5xl font-bold leading-[1.08] tracking-tight text-slate-950 dark:text-white xl:text-6xl">
                Shop Everything
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                You Need
                </span>
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-8 text-slate-600 dark:text-slate-300">
                Find your favorite products and enjoy an easy shopping
                experience with Koda Store.
            </p>
            </div>

          {/* Footer */}
         
        </div>

        {/* Right side */}
        <div className="flex min-h-screen items-center justify-center py-8 lg:py-12">
          <div className="w-full max-w-[540px] rounded-[32px] border border-white/80 bg-white/90 p-7 shadow-[0_32px_90px_rgba(66,76,120,0.18)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/95 dark:shadow-black/40 sm:p-10 lg:min-h-[650px] lg:p-12">
            {/* Mobile logo */}
            <div className="mb-10 flex items-center gap-3 lg:hidden">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                <ShoppingBag size={21} />
              </div>

              <div>
                <p className="text-lg font-bold">
                  Koda Store
                </p>

                <p className="text-xs text-slate-500 dark:text-slate-400">
                 Shop smarter, live better
                </p>
              </div>
            </div>

            {children}
          </div>
        </div>
      </section>
    </main>
  );
}