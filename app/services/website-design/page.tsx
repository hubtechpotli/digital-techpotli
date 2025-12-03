"use client";

import { SectionHeading } from "@/components/custom/SectionHeading";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { Code, Smartphone, Megaphone, ShoppingCart, Palette, Building2, TrendingUp, CheckCircle2, ArrowRight, Globe, Zap, Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import GetConsultationButton from "@/components/custom/GetConsultationButton";

gsap.registerPlugin(ScrollTrigger);

export default function WebsiteDesignPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);
  const technologiesRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (heroRef.current) {
      gsap.effects.fadeUpOnScroll(heroRef.current, {
        duration: 0.8,
        yOffset: 30,
        start: "top 85%",
      });
    }

    if (servicesRef.current) {
      const cards = servicesRef.current.querySelectorAll(".service-feature-card");
      cards.forEach((card, index) => {
        gsap.effects.fadeUpOnScroll(card as Element, {
          duration: 0.6,
          yOffset: 40,
          start: "top 85%",
          delay: index * 0.1,
        });
      });
    }

    if (industriesRef.current) {
      const items = industriesRef.current.querySelectorAll(".industry-item");
      items.forEach((item, index) => {
        gsap.effects.fadeUpOnScroll(item as Element, {
          duration: 0.5,
          yOffset: 30,
          start: "top 85%",
          delay: index * 0.05,
        });
      });
    }

    if (technologiesRef.current) {
      const techs = technologiesRef.current.querySelectorAll(".tech-item");
      techs.forEach((tech, index) => {
        gsap.effects.fadeUpOnScroll(tech as Element, {
          duration: 0.4,
          yOffset: 20,
          start: "top 85%",
          delay: index * 0.03,
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleServiceClick = (serviceTitle: string, description: string) => {
    const message = encodeURIComponent(
      `Hello Techpotli Team! 👋\n\nI'm interested in your *${serviceTitle}* services.\n\n${description}\n\nCould you please provide more information and help me get started? Thank you!`
    );
    window.open(`https://wa.me/919810659666?text=${message}`, "_blank");
  };

  const websiteServices = [
    {
      title: "Website Development",
      description: "Custom websites built exactly how you want them - responsive, fast, and designed to convert visitors into customers.",
    },
    {
      title: "Web Application Development",
      description: "Powerful web applications that handle complex business logic and provide smooth user experiences.",
    },
    {
      title: "WordPress Development",
      description: "WordPress sites that are easy to manage, SEO-friendly, and perfectly customized to your brand.",
    },
    {
      title: "React JS Development",
      description: "Modern, interactive websites built with React for lightning-fast performance and excellent user experience.",
    },
    {
      title: "NextJS Development",
      description: "Next.js websites that load instantly, rank better on Google, and provide exceptional user experiences.",
    },
    {
      title: "PHP Development",
      description: "Robust PHP applications and websites with secure backends and reliable functionality.",
    },
  ];

  const mobileServices = [
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps that work seamlessly on Android and iOS devices.",
    },
    {
      title: "Android App Development",
      description: "Custom Android apps designed specifically for your business needs and target audience.",
    },
    {
      title: "iOS App Development",
      description: "Premium iOS applications that meet Apple's high standards and deliver exceptional performance.",
    },
    {
      title: "React Native Development",
      description: "Cross-platform mobile apps that work on both Android and iOS - faster to build, easier to maintain.",
    },
  ];

  const digitalMarketingServices = [
    {
      title: "Social Media Marketing",
      description: "Strategic social media campaigns that engage your audience and build your brand presence across platforms.",
    },
    {
      title: "SEO Services",
      description: "Comprehensive SEO strategies that help your website rank higher on Google and bring in organic traffic.",
    },
    {
      title: "PPC Management",
      description: "Expert management of Google Ads and Facebook Ads that maximize your ROI and generate quality leads.",
    },
  ];

  const ecommerceServices = [
    {
      title: "eCommerce Website",
      description: "Complete online stores with secure payments, inventory management, and everything you need to sell online.",
    },
    {
      title: "eCommerce App",
      description: "Mobile shopping apps that make it easy for customers to browse, purchase, and track orders on their phones.",
    },
    {
      title: "Shopify Development",
      description: "Custom Shopify stores with unique designs and features tailored to your brand and products.",
    },
    {
      title: "WordPress eCommerce",
      description: "WooCommerce-powered online stores with full customization and seamless WordPress integration.",
    },
  ];

  const designServices = [
    {
      title: "Logo Design",
      description: "Professional logos that represent your brand identity and make a memorable first impression.",
    },
    {
      title: "Brochure Design",
      description: "Eye-catching brochures and marketing materials that effectively communicate your message.",
    },
    {
      title: "Explainer Video",
      description: "Engaging video content that explains your products, services, or business in a compelling way.",
    },
    {
      title: "Content Writing",
      description: "High-quality, SEO-optimized content that engages readers and helps your website rank better.",
    },
  ];

  const industries = [
    { name: "Ecommerce", icon: ShoppingCart },
    { name: "Travel & Hospitality", icon: Globe },
    { name: "Healthcare", icon: Shield },
    { name: "Real Estate & Construction", icon: Building2 },
    { name: "Education", icon: TrendingUp },
    { name: "Transportation & Logistics", icon: Zap },
    { name: "Utilities & On Demand", icon: Code },
    { name: "Finance & Insurance", icon: Shield },
    { name: "Media & Entertainment", icon: Megaphone },
    { name: "Manufacturing", icon: Building2 },
  ];

  const technologies = [
    "ReactJS", "NextJS", "GitHub", "MySQL", "AWS", "WordPress", "Shopify", "WooCommerce",
    "PHP", "Vercel", "NodeJS", "HTML", "CSS", "Android", "iOS", "Photoshop",
    "Canva", "Illustrator", "Google Cloud", "Java", "Python", "Kotlin",
    "MongoDB", "MariaDB", "PostgreSQL", "ExpressJS", "Git", "Bitbucket"
  ];

  return (
    <main id="main-content" role="main" className="min-h-screen bg-gradient-to-br from-gray-50 via-teal-50/20 to-cyan-50/20">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-20 sm:py-24 md:py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-300/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div ref={heroRef}>
            <SectionHeading
              badge="Website Design & Services"
              heading="Impeccable Web Results Come to Life Through Our Cross-Functional Teams"
              description="Our complete teams are skilled at designing, developing, and promoting your digital presence. From concept to launch, we handle everything to make your business thrive online."
              size="lg"
              align="center"
              as="h1"
              badgeClassName="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 !text-white border-0 shadow-lg font-semibold"
              headingClassName="bg-gradient-to-r from-gray-900 via-teal-700 to-gray-900 bg-clip-text text-transparent font-extrabold text-shadow-lg"
              descriptionClassName="text-gray-600 font-medium max-w-3xl mx-auto"
              showDescriptionToScreenReaders={true}
            />
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <GetConsultationButton className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 hover:from-teal-600 hover:via-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" />
              <Button asChild variant="outline" size="lg" className="px-8 py-4 text-base font-medium border-2 hover:bg-gray-50 transition-all duration-300">
                <Link href="#services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Website Design & Development Section */}
      <section id="services" className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-16">
            <SectionHeading
              badge="Website Development"
              heading="Premier Website Development Company in India"
              description="We don't believe in one-size-fits-all solutions. Instead, we create personalized website development services tailored to your unique business needs. From simple website design to complex web applications, we bring your vision to life using the latest technologies and best practices."
              size="lg"
              align="center"
              as="h2"
              badgeClassName="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 !text-white border-0 shadow-lg font-semibold"
              headingClassName="bg-gradient-to-r from-gray-900 via-blue-700 to-gray-900 bg-clip-text text-transparent font-extrabold text-shadow-lg"
              descriptionClassName="text-gray-600 font-medium max-w-3xl mx-auto"
            />
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mt-6 leading-relaxed">
              As a leading e-commerce website development company in Delhi, we specialize in creating responsive, user-friendly platforms that make your business thrive online. We use cutting-edge technologies and modern design principles to ensure your website not only looks great but also performs exceptionally well.
            </p>
          </div>

          <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {websiteServices.map((service, index) => (
              <div
                key={index}
                onClick={() => handleServiceClick(service.title, service.description)}
                className="service-feature-card group relative bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border-2 border-gray-200 hover:border-teal-300 transition-all duration-300 hover:shadow-xl cursor-pointer hover:scale-105"
              >
                <div className="inline-flex p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-teal-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button
              onClick={() => handleServiceClick("Website Development", "I'm interested in your website development services. Could you provide more details?")}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 hover:from-blue-600 hover:via-cyan-600 hover:to-teal-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get More Details
            </Button>
          </div>
        </div>
      </section>

      {/* Mobile App Development Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-teal-50/30 to-cyan-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Mobile App Development"
            heading="Comprehensive Mobile App Development Company in India"
            description="We offer complete mobile app development services, specializing in creating secure, feature-rich applications for Android and iOS platforms. As a leading mobile app development agency, our application development services in Delhi are tailored to meet your business goals with a focus on user experience, performance, and scalability."
            size="lg"
            align="center"
            as="h2"
            badgeClassName="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 !text-white border-0 shadow-lg font-semibold"
            headingClassName="bg-gradient-to-r from-gray-900 via-purple-700 to-gray-900 bg-clip-text text-transparent font-extrabold text-shadow-lg"
            descriptionClassName="text-gray-600 font-medium max-w-3xl mx-auto"
            className="mb-12 md:mb-16"
          />
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-10 leading-relaxed">
            Whether you need native apps or cross-platform solutions through React Native development, we deliver apps that are fast, reliable, and built to last. Our team ensures your mobile app is robust, secure, and ready for future growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mobileServices.map((service, index) => (
              <div
                key={index}
                onClick={() => handleServiceClick(service.title, service.description)}
                className="service-feature-card group relative bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl cursor-pointer hover:scale-105"
              >
                <div className="inline-flex p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button
              onClick={() => handleServiceClick("Mobile App Development", "I'm interested in your mobile app development services. Could you provide more details?")}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get More Details
            </Button>
          </div>
        </div>
      </section>

      {/* Digital Marketing Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Digital Marketing"
            heading="Results-Focused Digital Marketing Services"
            description="We provide results-driven digital marketing services for both B2B and B2C businesses, specializing in SEO, PPC, and social media marketing. As a trusted digital marketing company, our strategies are designed to boost your online presence and drive real growth."
            size="lg"
            align="center"
            as="h2"
            badgeClassName="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 !text-white border-0 shadow-lg font-semibold"
            headingClassName="bg-gradient-to-r from-gray-900 via-green-700 to-gray-900 bg-clip-text text-transparent font-extrabold text-shadow-lg"
            descriptionClassName="text-gray-600 font-medium max-w-3xl mx-auto"
            className="mb-12 md:mb-16"
          />
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-10 leading-relaxed">
            Our comprehensive SEO services in Nehru Place, Delhi help improve search rankings, making us a leading SEO company in India. Additionally, we offer expert content writing services to enhance your brand messaging, and as a social media marketing agency, we create engaging campaigns to grow your audience across platforms.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {digitalMarketingServices.map((service, index) => (
              <div
                key={index}
                onClick={() => handleServiceClick(service.title, service.description)}
                className="service-feature-card group relative bg-gradient-to-br from-white to-green-50/30 rounded-xl p-6 border-2 border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-xl cursor-pointer hover:scale-105"
              >
                <div className="inline-flex p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Megaphone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button
              onClick={() => handleServiceClick("Digital Marketing", "I'm interested in your digital marketing services. Could you provide more details?")}
              className="px-8 py-4 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get More Details
            </Button>
          </div>
        </div>
      </section>

      {/* E-Commerce Development Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-orange-50/30 to-red-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="E-Commerce Development"
            heading="Secure, User-Friendly E-Commerce Solutions"
            description="We create secure, user-friendly e-commerce solutions, from single-seller storefronts to multi-vendor marketplaces. As a top application development company, we offer tailored solutions using the latest technology."
            size="lg"
            align="center"
            as="h2"
            badgeClassName="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 !text-white border-0 shadow-lg font-semibold"
            headingClassName="bg-gradient-to-r from-gray-900 via-orange-700 to-gray-900 bg-clip-text text-transparent font-extrabold text-shadow-lg"
            descriptionClassName="text-gray-600 font-medium max-w-3xl mx-auto"
            className="mb-12 md:mb-16"
          />
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-10 leading-relaxed">
            Whether you need to hire a Laravel developer, Shopify developer, or WordPress developer, our expert team is ready to create a flawless shopping experience for your customers. We build e-commerce platforms that convert visitors into buyers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecommerceServices.map((service, index) => (
              <div
                key={index}
                onClick={() => handleServiceClick(service.title, service.description)}
                className="service-feature-card group relative bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-orange-300 transition-all duration-300 hover:shadow-xl cursor-pointer hover:scale-105"
              >
                <div className="inline-flex p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <ShoppingCart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button
              onClick={() => handleServiceClick("E-Commerce Development", "I'm interested in your e-commerce development services. Could you provide more details?")}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get More Details
            </Button>
          </div>
        </div>
      </section>

      {/* Design & Branding Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Design & Branding"
            heading="Stunning Logos, Brand Identities, and Marketing Materials"
            description="We craft stunning logos, captivating brand identities, and eye-catching brochures that help your brand stand out. Our design and branding services ensure your business leaves a lasting impression with visually striking and memorable materials."
            size="lg"
            align="center"
            as="h2"
            badgeClassName="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 !text-white border-0 shadow-lg font-semibold"
            headingClassName="bg-gradient-to-r from-gray-900 via-indigo-700 to-gray-900 bg-clip-text text-transparent font-extrabold text-shadow-lg"
            descriptionClassName="text-gray-600 font-medium max-w-3xl mx-auto"
            className="mb-12 md:mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designServices.map((service, index) => (
              <div
                key={index}
                onClick={() => handleServiceClick(service.title, service.description)}
                className="service-feature-card group relative bg-gradient-to-br from-white to-indigo-50/30 rounded-xl p-6 border-2 border-gray-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-xl cursor-pointer hover:scale-105"
              >
                <div className="inline-flex p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Palette className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section ref={industriesRef} className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-teal-50/30 to-cyan-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Industries We Serve"
            heading="Customized Digital Solutions For Every Industry"
            description="We believe every industry is unique and needs customized solutions to thrive. Our web design and development services in India are for every industry, where we help our clients overcome challenges and achieve their goals."
            size="lg"
            align="center"
            as="h2"
            badgeClassName="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 !text-white border-0 shadow-lg font-semibold"
            headingClassName="bg-gradient-to-r from-gray-900 via-teal-700 to-gray-900 bg-clip-text text-transparent font-extrabold text-shadow-lg"
            descriptionClassName="text-gray-600 font-medium max-w-3xl mx-auto"
            className="mb-12 md:mb-16"
          />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={index}
                  className="industry-item group relative bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-teal-300 transition-all duration-300 hover:shadow-lg cursor-pointer hover:scale-105 text-center"
                  onClick={() => handleServiceClick(`${industry.name} Solutions`, `I'm in the ${industry.name} industry and need digital solutions. Can you help?`)}
                >
                  <div className="inline-flex p-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="font-semibold text-gray-900 text-sm">{industry.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section ref={technologiesRef} className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Technologies We Use"
            heading="Digitize Your Business with Our Expert Web Technologies"
            description="From dynamic websites to feature-rich applications, we harness the power of top-tier technologies to make your digital presence more functional and user-friendly. We're a pioneering web design company in India offering end-to-end development solutions prioritizing quality, performance, and customer satisfaction."
            size="lg"
            align="center"
            as="h2"
            badgeClassName="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 !text-white border-0 shadow-lg font-semibold"
            headingClassName="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent font-extrabold text-shadow-lg"
            descriptionClassName="text-gray-600 font-medium max-w-3xl mx-auto"
            className="mb-12 md:mb-16"
          />

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="tech-item group relative bg-gradient-to-br from-gray-50 to-white rounded-lg p-4 border-2 border-gray-200 hover:border-teal-300 transition-all duration-300 hover:shadow-md cursor-pointer hover:scale-105 text-center"
              >
                <p className="font-medium text-gray-700 text-xs sm:text-sm group-hover:text-teal-600 transition-colors">
                  {tech}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-lg text-teal-50 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can help your business grow online. Get in touch with us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GetConsultationButton className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-600 hover:bg-gray-100 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" />
            <Button asChild variant="outline" size="lg" className="px-8 py-4 text-base font-medium border-2 border-white text-white hover:bg-white/10 transition-all duration-300">
              <Link href="/packages">View Our Packages</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

