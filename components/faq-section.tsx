import Accordion from "@/components/accordion";

export default function FaqSection() {
  const faqs = [
    {
      question: "How does AgentLeader identify high-intent leads?",
      answer: "We use AI agents to monitor multiple data sources including LinkedIn, Crunchbase, HiDubai, and more. Our system tracks job changes, funding events, tech stack shifts, and other buying signals to identify prospects who are actively looking for solutions like yours.",
      active: false,
    },
    {
      question: "What information do you provide for each lead?",
      answer: "Each lead comes with 50+ data points including verified business email addresses, company information, recent activity signals, tech stack details, funding status, and personalized outreach recommendations based on their current situation.",
      active: false,
    },
    {
      question: "How quickly will I receive my leads?",
      answer: "Fresh leads are delivered every Monday morning directly to your inbox. Our AI agents work 24/7 to continuously source and qualify prospects, ensuring you always have a pipeline of high-intent leads to work with.",
      active: false,
    },
    {
      question: "Can I integrate this with my existing CRM?",
      answer: "Absolutely! Our leads can be exported to any CRM system including Salesforce, HubSpot, Pipedrive, and more. We also provide personalized outreach templates for each lead to maximize your response rates.",
      active: false,
    },
    {
      question: "What makes this different from buying lead lists?",
      answer: "Traditional lead lists are static and quickly become outdated. Our AI agents provide real-time sourcing with fresh, validated prospects. Plus, each lead comes with contextual signals and personalized messaging recommendations, not just contact information.",
      active: false,
    },
    {
      question: "Do you offer a guarantee on lead quality?",
      answer: "Yes! We're so confident in our lead quality that we offer a satisfaction guarantee. If you're not seeing results within the first 30 days, we'll work with you to optimize your targeting or provide a full refund.",
      active: false,
    },
  ];

  return (
    <section className="relative">
      {/* Background decoration */}
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <div className="h-80 w-80 rounded-full bg-linear-to-tr from-blue-500/20 to-gray-900/20 opacity-40 blur-[160px] will-change-[filter]" />
      </div>
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div
              className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]"
              data-aos="zoom-y-out"
            >
              <div className="py-3">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-600">
                  <svg className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                  </svg>
                  Frequently Asked Questions
                </span>
              </div>
            </div>
            
            <h2 
              className="mb-6 text-3xl font-bold md:text-4xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Everything you need to know about AgentLeader
            </h2>
            <p 
              className="text-lg text-gray-700"
              data-aos="zoom-y-out" 
              data-aos-delay={300}
            >
              Get answers to the most common questions about our AI-powered lead generation service.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="mx-auto max-w-3xl" data-aos="fade-up" data-aos-delay={450}>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <Accordion
                  key={index}
                  title={faq.question}
                  id={`faq-${index}`}
                  active={faq.active}
                >
                  {faq.answer}
                </Accordion>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center" data-aos="zoom-y-out" data-aos-delay={600}>
            <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
              <div className="relative py-8">
                <p className="mb-6 text-gray-600">
                  Still have questions? We'd love to help you get started.
                </p>
                <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center sm:space-x-4">
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Get Your First 50 Leads{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:w-auto"
                    href="#0"
                  >
                    Schedule a Demo
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