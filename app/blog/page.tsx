"use client";

// Blog index - Coming soon placeholder (styled to match site theme)
export default function BlogPage() {
  return (
    <div className="min-h-screen w-full">
      <main className="mx-auto max-w-6xl px-5">
        <section
          className="hero space-y-4 text-center pt-[116px] pb-[48px] md:pt-[128px] md:pb-[64px] lg:pt-[140px] lg:pb-[80px]"
          role="banner"
          aria-label="Blog coming soon"
        >
          <div className="bg-tag-bg w-fit rounded-3xl px-6 py-1 mx-auto">
            <p className="text-tag align-middle text-sm ">
              <span className="mt-1.5 mr-2 inline-block self-center" aria-hidden="true">
                📝
              </span>
              Blog
            </p>
          </div>

          <h1 className="text-h1 text-text-heading !text-center font-semibold md:mx-auto md:w-2/3">
            Coming soon
          </h1>

          <p className="text-caption text-label md:mx-auto md:w-2/3">
            We're preparing research and articles to help you grow—check back soon for updates.
          </p>
        </section>
      </main>
    </div>
  );
}
