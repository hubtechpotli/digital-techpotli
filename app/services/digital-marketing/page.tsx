import { SectionHeading } from "@/components/custom/SectionHeading";
import ServiceContactButton from "@/components/custom/ServiceContactButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Target, TrendingUp, BarChart3, Search, Megaphone, MapPin, FileText, Video, Image as ImageIcon, Hash, Film, Layers, Palette } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import GetConsultationButton from "@/components/custom/GetConsultationButton";

export const metadata: Metadata = {
  title: "Affordable Digital Marketing Services India | Complete Growth Solutions",
  description:
    "Get affordable digital marketing services in India including SEO, SMM, PPC, content marketing, and website development tailored for startups and SMEs.",
  alternates: {
    canonical: "https://www.techpotlidigital.com/services/digital-marketing",
  },
};

export default function DigitalMarketingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-300/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="mb-8 inline-flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Services</span>
          </Link>

          <div className="max-w-4xl">
            <SectionHeading
              badge="Digital Marketing Services"
              heading="Elevate Your Business with Our Proven Digital Marketing Solutions!"
              description="Our expert team will craft tailored strategies, execute effective campaigns, and drive sustainable growth for your brand."
              size="lg"
              align="left"
              as="h1"
              badgeClassName="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 !text-white border-0 shadow-lg"
              showDescriptionToScreenReaders={true}
            />

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <GetConsultationButton className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 hover:from-teal-600 hover:via-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300" />
              <Button asChild variant="outline" size="lg">
                <Link href="#services">Watch Videos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-teal-600 mb-4">• Welcome to TechPotli Digital •</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Build Your Brand with a Trusted Digital Marketing Partner in Delhi NCR
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              At TechPotli, your success is what matters most to us. We're a digital marketing agency based in Delhi NCR, and we love helping businesses grow online. We create strategies that actually work, design content that people want to see, and use real data to make decisions. Everything we do is about getting you real results.
            </p>
            <p>
              We're known as one of the top digital marketing companies in Delhi because we actually deliver. Whether it's branding, getting you on Google, running social media, or running ads - we help businesses in all kinds of industries grow their online presence and get more customers.
            </p>
            <p>
              If you're looking for a digital marketing partner in Delhi who cares about real results, helps you grow organically, and builds your brand the right way - you've found the right place. Let's work together to turn your online presence into something that actually brings in customers and grows your business.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-teal-50/30 to-cyan-50/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-teal-600 mb-4">• How We Work to Deliver Results •</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              We start by understanding your business, then we plan, execute, and track results.
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Here's the thing - we don't just throw stuff at the wall and see what sticks. We actually research your market, figure out who your customers are, and then create a plan that makes sense. Then we do the work, track what's happening, and adjust based on real results. Simple as that.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Research</h3>
              <p className="text-gray-600 leading-relaxed">
                First, we look at your market. Who are your competitors? What are they doing? Who are your customers and where do they hang out online? We gather this information so we know what we're working with before we start anything.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Targeting</h3>
              <p className="text-gray-600 leading-relaxed">
                Next, we figure out exactly who should see your ads and content. We make sure we're reaching people who actually might become customers - not just random people. This way your marketing budget goes further and you get better results.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Results</h3>
              <p className="text-gray-600 leading-relaxed">
                Finally, we keep track of everything. Are people visiting your website? Are they calling you? Are they buying? We check the numbers regularly and tell you what's working. Then we adjust things to help you get even better results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What We Offer - Digital Marketing Services That Work
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer digital marketing services that are designed for your specific business needs. Whether you want more people to know about your brand, or you need more customers calling you, we have strategies that actually work. Here's what we do.
            </p>
          </div>
        </div>
      </section>

      {/* SEO Services Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-teal-50/30 to-cyan-50/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-teal-600 mb-4">• Best SEO Services in India •</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Get Your Website to Show Up on Google
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              When people search for what you do on Google, we make sure your website shows up. We fix technical issues, optimize your content, and build connections so Google finds you and ranks you higher. More visibility means more customers finding you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technical SEO</h3>
              <p className="text-gray-600">We fix things like site speed, mobile-friendliness, and how your site is structured so Google can easily find and read your website.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">On Page SEO</h3>
              <p className="text-gray-600">We write and organize your website content in a way that Google understands, using the right keywords and descriptions that help you rank better.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Off Page SEO</h3>
              <p className="text-gray-600">We get other websites to link to yours, which tells Google that your site is trustworthy and worth ranking higher in search results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Marketing Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-teal-600 mb-4">• SOCIAL MEDIA MARKETING SERVICES IN INDIA •</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Get Your Business Noticed on Social Media
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We create and post content on Facebook and Instagram that gets people interested in your business. We post regularly, engage with your audience, and run ads that bring in customers. Simple strategy that works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategy</h3>
              <p className="text-gray-600">We figure out what kind of posts your customers want to see and create a plan that works for your business.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Content Creation</h3>
              <p className="text-gray-600">We make posts, videos, and photos that people actually want to look at and share with others.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Advertising</h3>
              <p className="text-gray-600">We run Facebook and Instagram ads that reach the right people and bring you actual customers.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Analytics & Reporting</h3>
              <p className="text-gray-600">Every month we show you what's working - how many people saw your posts, who engaged, and what brought in customers.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Post & Reels Design</h3>
              <p className="text-gray-600">We create photos and videos that look professional and get people to stop scrolling and pay attention.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <Hash className="h-6 w-6 text-teal-600" />
                <h4 className="text-lg font-semibold text-gray-900">Hashtag Strategy</h4>
              </div>
              <p className="text-gray-600">We find the right hashtags that people actually search for, so more people discover your posts.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <FileText className="h-6 w-6 text-teal-600" />
                <h4 className="text-lg font-semibold text-gray-900">Captions & Copywriting</h4>
              </div>
              <p className="text-gray-600">We write captions that make people want to read, comment, and click - written specifically for each platform.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <Film className="h-6 w-6 text-teal-600" />
                <h4 className="text-lg font-semibold text-gray-900">Short Video Editing</h4>
              </div>
              <p className="text-gray-600">We edit videos and reels that grab attention and keep people watching until the end.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <Layers className="h-6 w-6 text-teal-600" />
                <h4 className="text-lg font-semibold text-gray-900">Carousel & Story Design</h4>
              </div>
              <p className="text-gray-600">We create carousel posts and stories for Instagram, Facebook, and LinkedIn that look professional and get engagement.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <Palette className="h-6 w-6 text-teal-600" />
                <h4 className="text-lg font-semibold text-gray-900">Brand Theme & Visuals</h4>
              </div>
              <p className="text-gray-600">We keep all your social media posts looking consistent - same colors, fonts, and style so people recognize your brand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Business Profile Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-teal-50/30 to-cyan-50/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-teal-600 mb-4">• Boost Local Success with GBP •</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Get Found by Local Customers When They Search "Near Me"
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              When people in your area search for what you do on Google, your Google Business Profile is what they see first. We set it up properly, fill in all the details, get you verified, and make sure it shows up when people search locally. We also help you get reviews, update your hours, and post regularly so Google keeps showing your business to local customers.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Google Business Profile Optimization Service Includes
            </h3>
            <p className="text-gray-600 mb-6">
              When people search for businesses "near me" on Google, the local map listings are the first thing they see. We make sure your Google Business Profile is complete, accurate, and optimized so it shows up in those results.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Create Google Business Profile Page",
                "Business Hours",
                "Business Name",
                "Image Optimization",
                "Verified Local Business",
                "Business Phone Number",
                "Review Funnel",
                "Local Keyword Research"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-600 mt-6">
              We make sure your Google Business Profile is fully optimized so it shows up when people search locally. We create your profile, verify your business, add all your details like hours and phone number, set up a system to get reviews from customers, and do local keyword research so people can find you easily. All of this helps more local customers find and contact your business.
            </p>
          </div>
        </div>
      </section>

      {/* Content Marketing Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-teal-600 mb-4">• CONTENT MARKETING SERVICES IN INDIA •</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Create Content That Actually Attracts Customers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Good content is what gets people interested in your business. We write blogs, create social media posts, make videos, and design graphics that your customers actually want to see. This helps people find you, trust you, and eventually buy from you. That's what content marketing is all about.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: "Content Strategy",
                description: "We look at what content you already have, check what your competitors are doing, find the right keywords people search for, and create a plan that helps you get more customers."
              },
              {
                title: "Content Analysis",
                description: "We figure out what kind of content your customers actually want to see. Once we know that, we create content that they'll actually read and find helpful."
              },
              {
                title: "Content Development",
                description: "We write blog posts, create social media content, design graphics, and make videos - all the content you need to attract customers and keep them interested in your business."
              },
              {
                title: "Content Optimization",
                description: "We write content that Google likes, using the right keywords naturally. This helps your content show up when people search, which brings more visitors to your website."
              },
              {
                title: "Content Promotion",
                description: "We publish your blog posts, share them on social media, create video content, and put your content out there where your customers will actually see it."
              },
              {
                title: "Content Reporting",
                description: "Every month we send you a report showing how your content is performing - how many people read it, shared it, and whether it's bringing you customers."
              }
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-teal-50/30 to-cyan-50/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Choose a Plan That Powers Your Digital Growth
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Flexible monthly and annual plans designed to boost your brand visibility, engagement, and ROI.
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            <Button variant="default" className="px-6">MONTHLY</Button>
            <Button variant="outline" className="px-6">ANNUAL</Button>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-8">
              Pricing plans will be displayed here. Please check our packages page for detailed pricing information.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 hover:from-teal-600 hover:via-cyan-600 hover:to-blue-600 text-white">
              <Link href="/packages">View Our Packages</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-teal-50 via-cyan-50 to-blue-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our digital marketing services can help grow your business and drive measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GetConsultationButton className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 hover:from-teal-600 hover:via-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" />
            <Button asChild variant="outline" size="lg">
              <Link href="/packages">View Our Packages</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

