"use client";

export default function PricingTablesHome() {

  return (
    <section className="relative" id="pricing">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center">
            <h2 className="mb-6 border-y border-slate-300 text-5xl font-bold md:text-5xl">
                The right leads, at the right stage of your growth
            </h2>
            <div className="mx-auto max-w-3xl">
              <p className="text-lg text-gray-700">
              Get a predictable stream of verified prospects delivered daily, with plans designed to fuel your next stage of growth.
              </p>
            </div>
          </div>

          {/* Pricing tables */}
          <div>
            <div className="mx-auto grid max-w-sm items-start gap-8 md:max-w-2xl md:grid-cols-2 xl:max-w-none xl:grid-cols-3 xl:gap-6">
              {/* Pricing table 1 */}
              <div className="relative flex h-full flex-col rounded-2xl bg-white/70 p-5 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                <div className="mb-4">
                  <div className="mb-1 font-medium underline decoration-gray-300 underline-offset-4">
                    Start
                  </div>
                  <div className="mb-4 flex items-baseline border-b border-dashed border-gray-200 pb-4">
                    <span className="text-2xl font-bold">$</span>
                    <span className="text-4xl font-bold tabular-nums">
                      247
                    </span>
                    <span className="pl-1 text-sm text-gray-500">/month</span>
                  </div>
                  <div className="grow text-sm text-gray-700">
                    For early stage startups, still looking for traction and product-market fit.
                  </div>
                </div>
                <ul className="grow space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>50 leads per week</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>1 sourcing agent deployed</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Sent every morning</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a
                    className="btn-sm w-full rounded-lg bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] py-1.5 text-white shadow-sm hover:bg-[length:100%_150%]"
                    href="/onboarding"
                  >
                    Start for free
                  </a>
                </div>
              </div>

              {/* Pricing table 3 */}
              <div className="relative flex h-full flex-col rounded-2xl bg-linear-to-tr from-gray-900 to-gray-700 p-5 shadow-lg shadow-black/[0.03] backdrop-blur-xs">
                <div className="mb-4">
                  <div className="mb-1 font-medium text-gray-200 underline decoration-gray-600 underline-offset-4">
                    Grow
                  </div>
                  <div className="mb-4 flex items-baseline border-b border-dashed border-gray-600 pb-4">
                    <span className="text-2xl font-bold text-gray-200">$</span>
                    <span className="text-4xl font-bold tabular-nums text-gray-200">
                      497
                    </span>
                    <span className="pl-1 text-sm text-gray-400">/month</span>
                  </div>
                  <div className="text-sm text-gray-300">
                    For seed & series A startups, looking for revenue growth.
                  </div>
                </div>
                <ul className="grow space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>25 leads per day</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>3-5 sourcing agents deployed</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Sent every morning</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a
                    className="btn-sm w-full rounded-lg bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] py-1.5 text-white shadow-sm hover:bg-[length:100%_150%]"
                    href="/onboarding"
                  >
                    Start for free
                  </a>
                </div>
              </div>

              {/* Pricing table 4 */}
              <div className="relative flex h-full flex-col rounded-2xl bg-white/70 p-5 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                <div className="mb-4">
                  <div className="mb-1 font-medium underline decoration-gray-300 underline-offset-4">
                    Scale
                  </div>
                  <div className="mb-4 flex items-baseline border-b border-dashed border-gray-200 pb-4">
                    <span className="text-2xl font-bold">$</span>
                    <span className="text-4xl font-bold tabular-nums">
                      997
                    </span>
                    <span className="pl-1 text-sm text-gray-500">/month</span>
                  </div>
                  <div className="grow text-sm text-gray-700">
                    For Series B startups & beyond, looking to scale through product-led growth.
                  </div>
                </div>
                <ul className="grow space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>100 leads per day</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>10+ sourcing agents deployed</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Sent every morning</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a
                    className="btn-sm w-full rounded-lg bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] py-1.5 text-white shadow-sm hover:bg-[length:100%_150%]"
                    href="/onboarding"
                  >
                    Start for free
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
