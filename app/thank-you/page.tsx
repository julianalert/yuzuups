export const metadata = {
  title: "Thank You - Yuzuu",
  description: "Thank you for signing up! Your leads are on the way.",
};

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="pb-8 pt-12 md:pb-16 md:pt-20">
            {/* Thank you header */}
            <div className="mx-auto max-w-3xl pb-8 text-center">
              <div className="mb-6">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <svg
                    className="h-8 w-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <h1 className="mb-4 text-2xl font-bold md:text-3xl">
                Thank you for joining Yuzuu! 🎉
              </h1>
              <p className="mb-6 text-lg text-gray-700">
                Your request has been successfully submitted. Our sourcing agents are already getting to work, and you'll receive your first batch of high-quality leads within 24 hours.
              </p>
              <div className="rounded-lg bg-blue-50 p-4">
                <p className="text-sm text-blue-800">
                  <strong>What's next?</strong> Keep an eye on your inbox tomorrow morning for your first 50 leads. Each lead will include verified contact information and behavioral insights to help you close more deals.
                </p>
              </div>
            </div>

            {/* Video section */}
            <div className="mx-auto max-w-2xl">
              <div className="rounded-2xl bg-white/70 p-6 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] relative">
                <div className="text-center">
                  <h2 className="mb-4 text-xl font-semibold">
                    Meanwhile, here's a video to master pizza at home 🍕
                  </h2>
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/sv3TXMSv6Lw"
                      title="How to Make Perfect Pizza at Home"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="rounded-lg"
                    ></iframe>
                  </div>
                  <p className="mt-4 text-sm text-gray-600">
                    Because great leads deserve great pizza! 🍕
                  </p>
                </div>
              </div>
            </div>

            {/* Additional info */}
            <div className="mx-auto max-w-2xl pt-8 text-center">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg bg-gray-100 p-4">
                  <div className="mb-2 text-xl">📧</div>
                  <h3 className="mb-2 font-semibold">Daily Delivery</h3>
                  <p className="text-sm text-gray-600">
                    Fresh leads delivered to your inbox every morning at 9 AM
                  </p>
                </div>
                <div className="rounded-lg bg-gray-100 p-4">
                  <div className="mb-2 text-xl">💬</div>
                  <h3 className="mb-2 font-semibold">Need Help?</h3>
                  <p className="text-sm text-gray-600">
                    Questions? Reply to any of our emails or reach out anytime
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
