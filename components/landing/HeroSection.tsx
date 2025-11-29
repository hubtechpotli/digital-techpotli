"use client";

import { SectionHeading } from "@/components/custom/SectionHeading";
import { Marquee } from "@/components/magicui/marquee";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [gsapLoaded, setGsapLoaded] = useState(false);

  useEffect(() => {
    // Lazy load GSAP only when component mounts
    Promise.all([
      import("@gsap/react"),
      import("gsap/all"),
      import("@/lib/GSAPAnimations"),
    ]).then(([gsapReact, gsapAll, _]) => {
      const { useGSAP } = gsapReact;
      const gsap = gsapAll.gsap;
      const { ScrollTrigger, SplitText } = gsapAll;
      
      gsap.registerPlugin(ScrollTrigger);

      const headingElement = heroRef?.current?.querySelector("h1");
      if (headingElement) {
        SplitText.create(headingElement, {
          type: "lines, words",
          mask: "lines",
          autoSplit: true,
          onSplit(self) {
            return gsap.from(self.words, {
              duration: 0.6,
              y: 10,
              opacity: 0.5,
              filter: "blur(6px)",
              autoAlpha: 0,
              stagger: 0.06,
            });
          },
        });
      }

      setGsapLoaded(true);

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    });
  }, []);

  return (
    <div className="item-center flex flex-col flex-nowrap">
      <div
        ref={heroRef}
        className="relative h-fit w-full rounded-lg bg-cover p-4 sm:p-6 md:p-8 lg:p-10"
        style={{ 
          backgroundImage: `url(https://res.cloudinary.com/dieth2xb3/image/upload/v1755799085/ssimage_bxr8i6.png)`,
          marginTop: '25px',
          marginLeft: 'calc(50% - 50vw)',
          marginRight: 'calc(50% - 50vw)',
          width: '100vw',
          maxWidth: '100vw'
        }}
      >
        <div className="hero space-y-4 pt-[48px] pb-[48px] md:pt-[64px] md:pb-[128px] md:text-center lg:pt-[80px] lg:pb-[96px]">
          <SectionHeading
            badge="Digital Strategy & Growth Solutions"
            heading="Your Online Transformation Partner for Business Growth"
            description={
              <div className="max-w-4xl mx-auto">
                <div className="inline-block rounded-lg bg-white/30 backdrop-blur-md px-6 py-4 sm:px-8 sm:py-5">
                  <span className="!text-black text-lg sm:text-xl md:text-2xl font-medium drop-shadow-sm block">
                    We design, build, and scale complete digital systems — from{" "}
                    <span className="text-blue-600 font-semibold">modern websites</span>,{" "}
                    <span className="text-purple-600 font-semibold">SEO</span>,{" "}
                    <span className="text-teal-600 font-semibold">social media marketing</span>,{" "}
                    <span className="text-indigo-600 font-semibold">ads</span>,{" "}
                    <span className="text-cyan-600 font-semibold">branding</span>, and{" "}
                    <span className="text-pink-600 font-semibold">lead generation</span>. 
                    Techpotli helps businesses go online, get visible, and grow their customer base with proven digital strategies.
                  </span>
                </div>
              </div>
            }
            icon={Sparkles}
            size="lg"
            align="center"
            as="h1"
            className="heading max-w-4/5 mx-auto"
            headingClassName="md:mx-auto md:w-2/3 leading-tight text-white drop-shadow-lg"
            badgeClassName="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 !text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:from-teal-600 hover:via-cyan-600 hover:to-blue-600"
            descriptionClassName=""
            showDescriptionToScreenReaders={true}
          />

          <div
            aria-label="Call to action buttons"
            className="mt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-center md:flex-wrap"
          >
            <Button
              aria-label="Get a free consultation"
              type="button"
              className="cursor-pointer"
            >
              Get a Free Consultation
            </Button>
            <Button
              aria-label="Explore our packages"
              type="button"
              className="cursor-pointer"
              variant={"outline"}
            >
              Explore Our Packages
            </Button>
            <Button
              aria-label="View client work"
              type="button"
              className="cursor-pointer"
              variant={"outline"}
            >
              View Client Work
            </Button>
            <Button
              aria-label="Talk to an expert"
              type="button"
              className="cursor-pointer"
              variant={"outline"}
            >
              Talk to an Expert
            </Button>
          </div>
        </div>
      </div>

      {/* Our Partners Section */}
      <div className="relative mt-6" role="region" aria-label="Our Partners">
        <h2 className="!sr-only">Our Partners</h2>
        <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-12 bg-gradient-to-r from-gray-50 via-gray-50/90 to-transparent md:w-48"></div>
        <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-12 bg-gradient-to-l from-gray-50 via-gray-50/90 to-transparent md:w-48"></div>

        <Marquee pauseOnHover className="mt-6">
          {[
            "WhatsApp Image 2025-11-14 at 18.35.46_6f511d5c.jpg",
            "WhatsApp Image 2025-11-15 at 11.29.50_92f70a53.jpg",
            "WhatsApp Image 2025-11-15 at 15.22.12_306a0923.jpg",
            "WhatsApp Image 2025-11-18 at 11.21.54_a0404c01.jpg",
            "WhatsApp Image 2025-11-18 at 15.42.47_edcfeabb.jpg",
            "WhatsApp Image 2025-11-18 at 17.16.15_7e6f8f84.jpg",
            "WhatsApp Image 2025-11-21 at 16.52.57_f4597c64.jpg",
            "WhatsApp Image 2025-11-24 at 20.32.45_2d54970a copy.jpg",
            "WhatsApp Image 2025-11-24 at 20.32.45_2d54970a.jpg",
            "WhatsApp Image 2025-11-26 at 12.40.49_26ad037e.jpg",
            "WhatsApp Image 2025-11-26 at 16.20.19_61f2fec7.jpg",
            "WhatsApp Image 2025-11-26 at 18.20.52_82dff410.jpg",
            "WhatsApp Image 2025-11-27 at 10.54.22_5fea2f9b.jpg",
            "WhatsApp Image 2025-11-27 at 13.07.19_084df293.jpg",
            "WhatsApp Image 2025-11-27 at 16.23.15_d415921f.jpg",
            "WhatsApp Image 2025-11-28 at 11.57.31_005bda02.jpg",
            "WhatsApp Image 2025-11-28 at 12.02.57_4faf0b77.jpg",
          ].map((imageName, index) => {
            const imagePath = `/Our parterns/${imageName}`;
            return (
              <div
                key={`partner-${index}`}
                className="group mx-1 flex-shrink-0 cursor-pointer md:mx-4"
              >
                <div className="relative flex h-32 items-center justify-center p-4 transition-all duration-300 ease-in-out md:h-36 lg:h-40">
                  <Image
                    src={imagePath}
                    alt={`Partner ${index + 1}`}
                    width={160}
                    height={160}
                    className="max-h-full max-w-full object-contain opacity-100 transition-all duration-300 ease-in-out hover:brightness-110 hover:scale-105"
                    loading="lazy"
                    quality={85}
                    unoptimized={false}
                  />
                </div>
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
}

export default HomePage;
