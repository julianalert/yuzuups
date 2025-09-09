export default function ApproachComparison() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      {/* Glow effects */}
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <div className="h-80 w-80 rounded-full bg-linear-to-tr from-blue-500 to-gray-900 opacity-40 blur-[160px] will-change-[filter]" />
      </div>
      <div
        className="absolute right-1/4 bottom-0 -z-10 translate-y-1/2"
        aria-hidden="true"
      >
        <div className="h-80 w-80 rounded-full bg-linear-to-tr from-blue-500 opacity-30 blur-[160px] will-change-[filter]" />
      </div>
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h2 
              className="mb-4 text-3xl font-bold text-gray-200 md:text-4xl"
              data-aos="zoom-y-out"
            >
              Your inbox feels like a graveyard, <br className="max-lg:hidden" />message after message with no replies.
            </h2>
            <p 
              className="text-lg text-gray-400"
              data-aos="zoom-y-out" 
              data-aos-delay={150}
            >
              You keep grinding on LinkedIn, Apollo, scraping tools, and spreadsheets…<br />
              But the harder you push, the colder your pipeline gets. ❄️<br />
              It’s frustrating, demoralizing, and slowly draining the energy you could be spending actually closing deals.
            </p>
          </div>

          {/* Comparison Grid */}
          <div className="space-y-8">
            {/* First Row */}
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              {/* First comparison - Left */}
              <div 
                className="relative rounded-2xl bg-gray-800/50 p-6 border border-gray-700/50 backdrop-blur-sm"
                data-aos="fade-right"
                data-aos-delay={300}
              >
                <div className="mb-4 flex items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/20 border border-red-500/30">
                    <svg className="h-4 w-4 text-red-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="ml-3 text-sm font-medium text-red-400 uppercase tracking-wide">
                  Gerneric list = noisy, outdated
                  </span>
                </div>
                <p className="text-gray-300">
                  Generic lists with stale data lead to poor response rates and wasted outreach efforts.
                </p>
                
                {/* Arrow pointing right */}
                <div className="absolute -right-4 top-1/2 hidden md:block transform -translate-y-1/2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-600 border border-gray-500">
                    <svg className="h-4 w-4 text-gray-200" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* First solution - Right */}
              <div 
                className="relative rounded-2xl bg-linear-to-br from-blue-900/30 to-indigo-900/30 p-6 border border-blue-500/30 backdrop-blur-sm"
                data-aos="fade-left"
                data-aos-delay={300}
              >
                <div className="mb-4 flex items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20 border border-green-500/30">
                    <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="ml-3 text-sm font-medium text-green-400 uppercase tracking-wide">
                    Real-time sourcing using AI agents & agentic browsing
                  </span>
                </div>
                <p className="text-gray-300">
                  Fresh, validated prospects identified through intelligent automation and multi-platform research (through LinkedIn, Crunchbase, X, Google Maps, etc...).
                </p>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              {/* Second comparison - Left */}
              <div 
                className="relative rounded-2xl bg-gray-800/50 p-6 border border-gray-700/50 backdrop-blur-sm"
                data-aos="fade-right"
                data-aos-delay={450}
              >
                <div className="mb-4 flex items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/20 border border-red-500/30">
                    <svg className="h-4 w-4 text-red-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="ml-3 text-sm font-medium text-red-400 uppercase tracking-wide">
                  Manual research drains hours
                  </span>
                </div>
                <p className="text-gray-300">
                Hours spent manually researching prospects before contacting them, with limited data sources and outdated information.
                </p>
                
                {/* Arrow pointing right */}
                <div className="absolute -right-4 top-1/2 hidden md:block transform -translate-y-1/2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-600 border border-gray-500">
                    <svg className="h-4 w-4 text-gray-200" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Second solution - Right */}
              <div 
                className="relative rounded-2xl bg-linear-to-br from-blue-900/30 to-indigo-900/30 p-6 border border-blue-500/30 backdrop-blur-sm"
                data-aos="fade-left"
                data-aos-delay={450}
              >
                <div className="mb-4 flex items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20 border border-green-500/30">
                    <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="ml-3 text-sm font-medium text-green-400 uppercase tracking-wide">
                    Automated enrichment with 20+ data points per prospect
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-100">
                  
                </h3>
                <p className="text-gray-300">
                Comprehensive prospect profiles built automatically with company data, score intent, contact info, and behavioral insights.
                </p>
              </div>
            </div>

            {/* Third Row */}
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              {/* Third comparison - Left */}
              <div 
                className="relative rounded-2xl bg-gray-800/50 p-6 border border-gray-700/50 backdrop-blur-sm"
                data-aos="fade-right"
                data-aos-delay={600}
              >
                <div className="mb-4 flex items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/20 border border-red-500/30">
                    <svg className="h-4 w-4 text-red-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="ml-3 text-sm font-medium text-red-400 uppercase tracking-wide">
                    Stagnant pipeline
                  </span>
                </div>
                <p className="text-gray-300">
                Every morning, your sales team open Hubspot, get lost, and don't know what to do because they lack leads to reach out to.
                </p>
                
                {/* Arrow pointing right */}
                <div className="absolute -right-4 top-1/2 hidden md:block transform -translate-y-1/2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-600 border border-gray-500">
                    <svg className="h-4 w-4 text-gray-200" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Third solution - Right */}
              <div 
                className="relative rounded-2xl bg-linear-to-br from-blue-900/30 to-indigo-900/30 p-6 border border-blue-500/30 backdrop-blur-sm"
                data-aos="fade-left"
                data-aos-delay={600}
              >
                <div className="mb-4 flex items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20 border border-green-500/30">
                    <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="ml-3 text-sm font-medium text-green-400 uppercase tracking-wide">
                  Continuous lead generation
                  </span>
                </div>
                <p className="text-gray-300">
                Highly relevant, timely outreach based on real business triggers and contextual insights.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section 
          <div className="mt-12 text-center" data-aos="zoom-y-out" data-aos-delay={600}>
            <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-600/.8),transparent)1]">
              <div className="relative mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <a
                  className="btn group mb-4 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-lg hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                  href="#0"
                >
                  <span className="relative inline-flex items-center">
                    See The Difference{" "}
                    <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>*/}
        </div>
      </div>
    </section>
  );
} 