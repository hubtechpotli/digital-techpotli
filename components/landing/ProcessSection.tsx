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
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const headingRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const process: processType[] = [
    {
      title: "Step 1: We Talk and Understand What You Need",
      tagline: "Starting with a Conversation",
      description:
        "First thing we do? We call you or meet you in person in Delhi. We listen to what you want - maybe you need a website, or help with Google rankings, or someone to manage your social media. We ask questions about your business, your customers, and what you're trying to achieve. Then we figure out a plan that makes sense for you and fits your budget.",
      deliverables: [
        { item: "We discuss your business goals and what you want to achieve" },
        { item: "We look at your competitors and see what's working in your industry" },
        { item: "We create a simple plan showing what we'll do and when" },
        { item: "We agree on the budget and timeline that works for you" },
      ],
      bg_image: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755799085/ssimage_bxr8i6.png",
    },
    {
      title: "Step 2: We Build What You Need",
      tagline: "Creating Your Website and Content",
      description:
        "Once we know what you want, we get to work. If you need a website, we design it and build it. We make sure it looks good on phones and computers. If you need social media help, we create posts, photos, and videos. If you need SEO, we fix your website so Google can find you better. We do all of this while keeping you updated along the way.",
      deliverables: [
        { item: "We design and build your website so it looks professional" },
        { item: "We write content that helps Google find your website" },
        { item: "We create social media posts and graphics you can use" },
        { item: "We make sure everything works fast and looks good on mobile phones" },
      ],
      bg_image: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755804235/aaaimage_zbypst.png",
    },
    {
      title: "Step 3: We Launch Everything and Start Running It",
      tagline: "Going Live and Making It Work",
      description:
        "When everything's ready, we put it online. Your website goes live, your social media posts start going out, and your SEO work begins. But we don't just launch and leave - we keep an eye on things. We check if people are visiting your site, if your social media is getting engagement, and if your SEO is working. Then we tweak things to make them better.",
      deliverables: [
        { item: "We put your website online with proper hosting and security" },
        { item: "We keep checking your Google rankings and fix things if needed" },
        { item: "We post on your social media every day and respond to comments" },
        { item: "We send you monthly reports showing what's working and what's not" },
      ],
      bg_image: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755804376/fasimage_skodum.png",
    },
    {
      title: "Step 4: We Keep Helping You Grow",
      tagline: "Staying with You for the Long Run",
      description:
        "After launch, we stick around. Your website needs updates? We do that. Your social media needs fresh content? We handle it. Something breaks? We fix it. We watch your numbers - how many people visit your site, how many call you, how many buy from you. Then we suggest changes to help you get even more customers. You can call us anytime if something comes up.",
      deliverables: [
        { item: "We're available to help you anytime - day or night" },
        { item: "Every month we send you a report showing your progress" },
        { item: "We keep improving things based on what's working" },
        { item: "We help you grow step by step as your business gets bigger" },
      ],
      bg_image: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755804235/aaaimage_zbypst.png",
    },
  ];

  useGSAP(() => {
    const slides = slidesRef.current;
    if (!slides.length || !headingRef.current || !sectionRef.current) return;

    const headerPin = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 5%",
      endTrigger: slidesRef.current[slidesRef.current.length - 2],
      end: "center top",
      pin: headingRef.current,
      pinSpacing: false,
      anticipatePin: 1,
    });

    slides.slice(0, 3).forEach((slide) => {
      if (!slide) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: slide,
          start: "top 25%",
          end: "bottom top",
          scrub: 1,
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
        },
      });

      // Responsive animation values
      const getAnimationValues = () => {
        const isMobile = window.innerWidth < 768;
        const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

        if (isMobile) {
          return {
            scale: 0.8,
            z: -50,
            rotationX: 8,
            opacity: 0,
          };
        } else if (isTablet) {
          return {
            scale: 0.7,
            z: -75,
            rotationX: 12,
            opacity: 0,
          };
        } else {
          return {
            scale: 0.6,
            z: -100,
            rotationX: 15,
            opacity: 0,
          };
        }
      };

      tl.to(slide, {
        ...getAnimationValues(),
        duration: 0.7,
        ease: "power2.inOut",
      });
    });

    // Add responsive behavior
    const updatePinning = () => {
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

      if (isMobile) {
        // Disable header pinning on mobile for better UX
        headerPin.disable();
      } else if (isTablet) {
        // Reduce pinning intensity on tablet
        headerPin.enable();
      } else {
        // Full pinning on desktop
        headerPin.enable();
      }
    };

    if (headingRef.current) {
      gsap.effects.fadeUpOnScroll(headingRef.current, {
        start: "top 80%",
        duration: 0.8,
        markers: false,
      });
    }

    // Initial call
    updatePinning();

    // Update on window resize
    window.addEventListener("resize", updatePinning);

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("resize", updatePinning);
    };
  }, []);

  const addSlideRef = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      slidesRef.current[index] = el;
    }
  };

  return (
    <div ref={sectionRef} className="relative space-y-4 px-4 sm:px-6 lg:px-8">
      <SectionHeading
        ref={headingRef}
        badge="How We Work"
        heading="How We Deliver Your Digital Solutions"
        description="Here's exactly how we work with you from start to finish. We sit down, understand what you need, build it step by step, launch it, and then help you grow. Simple and straightforward."
        size="md"
        align="center"
        as="h2"
        id="process-heading"
        className="mb-6 md:mb-14"
      />

      <div ref={containerRef} className="relative">
        {process.map((slide, index) => (
          <div
            key={`slide-main-${index}`}
            ref={(el) => addSlideRef(el, index)}
            className="relative mb-6 flex h-fit w-full items-center justify-center sm:mb-8 md:mb-10"
          >
            <div
              className={`relative h-fit w-full rounded-lg bg-cover p-4 sm:p-6 md:p-8 lg:p-10`}
              style={{ backgroundImage: `url(${slide.bg_image})` }}
            >
              <div className="w-full space-y-3 rounded-md bg-white/20 p-4 backdrop-blur-lg sm:space-y-4 sm:p-6 md:max-w-7/12">
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="heading text-h4 text-heading font-semibold">{slide.title}</h3>
                  <p className="text-xs font-normal tracking-wide text-[#323c4d] sm:text-sm">
                    <span> 💡</span> {slide.tagline}
                  </p>
                </div>

                <p className="text-p text-sm leading-snug text-black/60 sm:text-base lg:max-w-4/5">
                  {slide.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2 sm:mt-6 sm:gap-3 md:mt-8">
                  {slide.deliverables.map((dl, ix) => (
                    <li
                      key={`deliverable-${dl.item}-${ix}`}
                      className="text-heading bg-tag-bg/20 rounded-4xl px-3 py-1 text-xs tracking-wide backdrop-blur-lg sm:px-4"
                    >
                      {dl.item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute right-4 bottom-4 sm:right-8 sm:bottom-6 md:right-12 md:bottom-8 lg:right-16 lg:bottom-10">
                <div className={`relative`}>
                  <span
                    className={`text-6xl font-extrabold text-transparent sm:text-7xl md:text-8xl lg:text-9xl`}
                    style={{
                      WebkitTextStroke: "2px rgb(225,225,225,0.9",
                      textShadow: "0 1px 2px rgba(225, 225, 225, 0.05)",
                      color: "rgb(0,0,0,0.09)",
                    }}
                  >
                    {index + 1}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessCards;
