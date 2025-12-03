"use client";

import { SectionHeading } from "@/components/custom/SectionHeading";
import "@/lib/GSAPAnimations";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface processType {
  title: string;
  tagline: string;
  description: string;
  bg_image: string;
  deliverables: {
    item: string;
  }[];
}

const ProcessCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const process: processType[] = [
    {
      title: "We Talk and Understand What You Need",
      tagline: "Starting with a Conversation",
      description:
        "We start by talking to you. We listen to what you need - whether it's a website, SEO help, or social media management. Then we create a plan that fits your budget and timeline.",
      deliverables: [
        { item: "Business goals discussion" },
        { item: "Competitor research" },
        { item: "Custom plan creation" },
        { item: "Budget and timeline agreement" },
      ],
      bg_image: "https://myautisticself.nl/assets/img/understandingeachother.jpg",
    },
    {
      title: "We Build What You Need",
      tagline: "Creating Your Website and Content",
      description:
        "We design and build everything you need. Websites, social media content, SEO optimization - we handle it all and keep you updated along the way.",
      deliverables: [
        { item: "Website design & development" },
        { item: "SEO-optimized content" },
        { item: "Social media graphics & posts" },
        { item: "Mobile-responsive design" },
      ],
      bg_image: "https://www.weswhite.net/wp-content/uploads/2017/08/whatyouneed.jpg",
    },
    {
      title: "We Launch Everything and Start Running It",
      tagline: "Going Live and Making It Work",
      description:
        "We launch everything and keep it running. Your website goes live, social media posts start, and we monitor everything to make continuous improvements.",
      deliverables: [
        { item: "Secure website launch" },
        { item: "Google ranking monitoring" },
        { item: "Daily social media management" },
        { item: "Monthly performance reports" },
      ],
      bg_image: "https://static.startuptalky.com/2021/09/startup-launch-tips-wallets.jpg",
    },
    {
      title: "We Keep Helping You Grow",
      tagline: "Staying with You for the Long Run",
      description:
        "We stay with you long-term. We update your website, create fresh content, fix issues quickly, and constantly optimize to help you get more customers.",
      deliverables: [
        { item: "24/7 support available" },
        { item: "Monthly growth reports" },
        { item: "Continuous optimization" },
        { item: "Scalable solutions" },
      ],
      bg_image: "https://static.vecteezy.com/system/resources/previews/002/616/985/large_2x/tree-growing-on-silver-coin-and-square-wooden-block-labeled-grow-money-growth-idea-free-photo.jpg",
    },
  ];

  useGSAP(() => {
    if (headingRef.current) {
      gsap.effects.fadeUpOnScroll(headingRef.current, {
        start: "top 80%",
        duration: 0.8,
        markers: false,
      });
    }

    if (containerRef.current) {
      gsap.effects.fadeUpOnScroll(containerRef.current, {
        start: "top 85%",
        duration: 0.8,
        delay: 0.2,
        markers: false,
      });
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative space-y-4 px-4 sm:px-6 lg:px-8">
      <SectionHeading
        ref={headingRef}
        badge="Our Process"
        heading="How We Deliver Your Digital Solutions"
        description="Four simple steps: We understand your needs, build your solution, launch it, and help you grow. That's it."
        size="lg"
        align="center"
        as="h2"
        id="process-heading"
        className="mb-6 md:mb-14"
        badgeClassName="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 !text-white border-0 shadow-lg font-semibold"
        headingClassName="bg-gradient-to-r from-gray-900 via-purple-700 to-gray-900 bg-clip-text text-transparent font-extrabold text-shadow-lg"
        descriptionClassName="text-gray-600 font-medium max-w-3xl mx-auto"
      />

      <div ref={containerRef} className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {process.map((item, index) => (
            <div
              key={`process-${index}`}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.bg_image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading={index < 2 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs font-semibold text-white/90 mb-2">
                    <span>💡</span> {item.tagline}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 bg-white space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                <ul className="flex flex-wrap gap-2">
                  {item.deliverables.map((dl, ix) => (
                    <li
                      key={`deliverable-${dl.item}-${ix}`}
                      className="bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-700 rounded-full px-3 py-1 text-xs font-medium border border-teal-200"
                    >
                      {dl.item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessCards;
