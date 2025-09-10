"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Onboarding() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      website: formData.get('website'),
    };

    try {
      const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL || 'https://notanothermarketer.app.n8n.cloud/webhook/92fe68fe-f1ad-4457-9c6e-c6b6828d8478';
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Redirect to thank you page
      router.push('/thank-you');
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pb-8 pt-12 md:pb-16 md:pt-20">
            {/* Page header */}
            <div className="mx-auto max-w-3xl pb-8 text-center">
              <h1 className="mb-4 text-2xl font-bold md:text-3xl">
                Get your first 50 leads
              </h1>
              <p className="text-lg text-gray-700">
                Fill out the form below and we'll start sourcing qualified leads for your business within 24 hours.
              </p>
            </div>

            {/* Onboarding form */}
            <div className="mx-auto max-w-md">
              <div className="rounded-2xl bg-white/70 p-5 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] relative">
                <form className="space-y-3" onSubmit={handleSubmit}>
                  {/* First Name */}
                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-1.5 block text-sm font-medium text-gray-900"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      placeholder="Enter your first name"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label
                      htmlFor="lastName"
                      className="mb-1.5 block text-sm font-medium text-gray-900"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      placeholder="Enter your last name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-gray-900"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      placeholder="Enter your email address"
                    />
                  </div>

                  {/* Website URL */}
                  <div>
                    <label
                      htmlFor="website"
                      className="mb-1.5 block text-sm font-medium text-gray-900"
                    >
                      Website URL *
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      required
                      className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      placeholder="https://yourwebsite.com"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-lg bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] py-2 text-white font-medium shadow-sm hover:bg-[length:100%_150%] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Get My First 50 Leads'}
                    </button>
                  </div>

                  {/* Trust message */}
                  <div className="pt-2 text-center">
                    <p className="text-sm text-gray-600">
                      🔒 Your information is secure and will never be shared.
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Additional info */}
            <div className="mx-auto max-w-2xl pt-8 text-center">
              <div className="grid gap-8 md:grid-cols-3">
                <div>
                  <div className="mb-2 text-2xl">⚡</div>
                  <h3 className="mb-2 font-semibold">Fast Setup</h3>
                  <p className="text-sm text-gray-600">
                    We'll start sourcing leads within 24 hours
                  </p>
                </div>
                <div>
                  <div className="mb-2 text-2xl">🎯</div>
                  <h3 className="mb-2 font-semibold">High Quality</h3>
                  <p className="text-sm text-gray-600">
                    Only verified, high-intent prospects
                  </p>
                </div>
                <div>
                  <div className="mb-2 text-2xl">📧</div>
                  <h3 className="mb-2 font-semibold">Daily Delivery</h3>
                  <p className="text-sm text-gray-600">
                    Fresh leads delivered to your inbox every morning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
