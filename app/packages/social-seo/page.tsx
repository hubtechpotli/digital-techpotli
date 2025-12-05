import { SectionHeading } from "@/components/custom/SectionHeading";
import { PackageCard } from "@/components/landing/PackageCard";
import WhatsAppContactButton from "@/components/custom/WhatsAppContactButton";
import { socialSeoGmbPackages } from "@/lib/packages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMM, SEO & GMB Combo Package India | Complete Digital Marketing Solution",
  description:
    "Get a complete digital marketing combo package for India-based businesses—SEO, social media marketing, and GMB optimization to boost visibility and daily inquiries.",
  alternates: {
    canonical: "https://www.techpotlidigital.com/packages/social-seo",
  },
};

export default function SocialSeoGmbPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-teal-50/30 to-cyan-50/30">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Social SEO"
            heading="Boost Your Online Visibility with Smarter Social SEO Integration"
            description="Social SEO is a ultramodern digital marketing approach that blends the power of social media presence with traditional hunt-machine visibility. Rather than treating social media and search machine optimization (SEO) as separate tasks, Social SEO optimizes your social biographies, content, engagement, and participating strategy — so your brand becomes further discoverable both on social platforms and on hunt machines."
            size="lg"
            align="center"
            as="h1"
            badgeClassName="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 !text-white border-0 shadow-lg"
            showDescriptionToScreenReaders={true}
          />
        </div>
      </section>

      {/* What's Social SEO */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              What's Social SEO?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Proper SEO company in India ensures that when implicit guests search for your brand or related services, they find you fluently — whether via social media or search machines.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-teal-50/30 to-cyan-50/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              What We Offer — Core Services Under Social SEO
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Social Profile Optimization</h3>
              <p className="text-gray-700">We upgrade and optimize your social media biographies including memoir, descriptions, profile images, cover prints icing thickness, clarity, and search-friendly keywords.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Content Strategy & Creation for Social Platforms</h3>
              <p className="text-gray-700">We design content plans acclimatized for social media — posts, images, short-form content or updates — that engage your followership, encourage sharing, and align with SEO pretensions.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Social Content SEO Optimization</h3>
              <p className="text-gray-700">We optimize posts for searchability — using applicable keywords, hashtags, descriptions and metadata — so content remains discoverable in both social-platform quests and web hunt results.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Engagement & Community Building</h3>
              <p className="text-gray-700">We help make and maintain an active social presence — drives likes, shares, commentary and entourages to make brand mindfulness, credibility and followership trust.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Traffic & Referral Boost to Website</h3>
              <p className="text-gray-700">We strategically drive business from Local SEO Services in Delhi to your website or wharf runners helping convert social engagement into point visits, leads or deals.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Analytics & Performance Monitoring</h3>
              <p className="text-gray-700">We track how social sweats are performing — reach, engagement, referral business, conversion — to optimize strategy for better results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Social SEO With Us */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Social SEO With Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrated Approach</h3>
              <p className="text-gray-700">Social SEO Together Stand out both on social media and in hunt machines through a unified strategy.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Discoverability & Brand Visibility</h3>
              <p className="text-gray-700">A strong social presence plus optimized content helps people find your brand more fluently, whether they search on Google or social platforms.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">More Engagement & Audience Reach</h3>
              <p className="text-gray-700">Engaging content optimized biographies regular exertion leads to further followers, advanced trust, and bettered chances of conversion.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cost-Effective & Long-Term Growth</h3>
              <p className="text-gray-700">Unlike paid advertisements alone, SEO Company in Delhi builds sustainable organic visibility and fidelity over time.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible & Scalable for Any Business</h3>
              <p className="text-gray-700">Whether you're a small incipiency or an established company — our Social SEO services can gauge according to your requirements and pretensions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-teal-50/30 to-cyan-50/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Process — How We Work
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Consultation & Strategy Planning</h3>
              <p className="text-gray-700">We begin by understanding your brand, target followership, pretensions (mindfulness, leads, deals) and preferred social platforms.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Profile Treatment & Setup</h3>
              <p className="text-gray-700">Optimization of your social media biographies, imprinting means, memoirs, descriptions, and thickness across platforms.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Content timetable & Creation</h3>
              <p className="text-gray-700">Develop a acclimatized content timetable post ideas, images textbook/ vids, hashtags, captions all optimized for searchability and engagement.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Publishing & Engagement</h3>
              <p className="text-gray-700">Regular advertisement, followership commerce, community engagement — erecting brand presence and trust.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Website Referral & Integration</h3>
              <p className="text-gray-700">Whenever applicable, we drive social business to your website or wharf runners for leads deals conduct.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Analysis & Optimization</h3>
              <p className="text-gray-700">Examiner criteria (reach, engagement, business, transformations) and upgrade strategy for nonstop enhancement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Use Social SEO Services */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Who Should Use Social SEO Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <p className="text-gray-700">Brands or businesses aiming to make strong online presence through social media SEO.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <p className="text-gray-700">Companies looking to increase brand mindfulness, engagement, and follower base.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <p className="text-gray-700">Businesses wanting to drive social business to their website and convert them into leads guests.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <p className="text-gray-700">Startups and small businesses seeking affordable, long-term digital growth without heavy announcement spend.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200 md:col-span-2">
              <p className="text-gray-700">Anyone wanting a sustainable way to combine content marketing, social media reach, and SEO benefits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-teal-50/30 to-cyan-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              All-in-One Digital Marketing Package
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Social media marketing, SEO optimization, and Google My Business management combined
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {socialSeoGmbPackages.map((pkg, index) => (
              <PackageCard key={pkg.id} pkg={pkg} index={index + 8} />
            ))}
          </div>

          {/* Important Notes */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl border-2 border-teal-200 p-6 sm:p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Important Notes:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold mt-1">1.</span>
                  <span>Ads budget will be paid by the client.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold mt-1">2.</span>
                  <span>Domain for .com & .in charges will be extra applied.</span>
                </li>
                <li className="flex items-start gap-3 pt-2 border-t border-gray-200">
                  <span className="text-teal-600 font-bold mt-1">•</span>
                  <span>
                    For any individual service such as SEO, Social Media, or Google Business Profile, charges are{" "}
                    <span className="font-semibold text-teal-600">₹1499 + GST per month</span>.
                  </span>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="mt-8 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl border border-teal-200 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h3>
              <div className="space-y-2 text-gray-700 mb-6">
                <p className="font-semibold">Techpotli</p>
                <p>C52A, LGF, Kalka Ji, New Delhi 110019</p>
                <p className="pt-2">
                  <span className="font-semibold">Phone:</span> 011-47200987 / 9911475599 / 9211405666 / 9211404666
                </p>
                <p>
                  <span className="font-semibold">Website:</span>{" "}
                  <a href="https://www.techpotlidigital.com" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 underline">
                    www.techpotlidigital.com
                  </a>
                </p>
              </div>
              <WhatsAppContactButton className="w-full bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 hover:from-teal-600 hover:via-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

