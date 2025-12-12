"use client";

import "@/lib/GSAPAnimations";
import { SectionHeading } from "@/components/custom/SectionHeading";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { Building2, ShoppingCart, Code, Megaphone, Users, MapPin, Phone, Globe, CheckCircle2, Sparkles, Zap, Target, Heart, Shield, TrendingUp, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import GetConsultationButton from "@/components/custom/GetConsultationButton";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const heroContentRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animate hero content
    if (heroContentRef.current) {
      gsap.effects.fadeUpOnScroll(heroContentRef.current, {
        duration: 0.8,
        yOffset: 30,
        start: "top 85%",
      });
    }

    // Animate story section
    if (storyRef.current) {
      gsap.effects.fadeUpOnScroll(storyRef.current, {
        duration: 0.8,
        yOffset: 30,
        start: "top 85%",
      });
    }

    // Animate services section
    if (servicesRef.current) {
      const cards = servicesRef.current.querySelectorAll(".service-card");
      cards.forEach((card, index) => {
        gsap.effects.fadeUpOnScroll(card as Element, {
          duration: 0.6,
          yOffset: 40,
          start: "top 85%",
          delay: index * 0.1,
        });
      });
    }

    // Animate team section
    if (teamRef.current) {
      gsap.effects.fadeUpOnScroll(teamRef.current, {
        duration: 0.8,
        yOffset: 30,
        start: "top 85%",
      });
    }

    // Animate values section
    if (valuesRef.current) {
      const valueCards = valuesRef.current.querySelectorAll(".value-card");
      valueCards.forEach((card, index) => {
        gsap.effects.fadeUpOnScroll(card as Element, {
          duration: 0.5,
          yOffset: 30,
          start: "top 85%",
          delay: index * 0.05,
        });
      });
    }

    // Animate contact section
    if (contactRef.current) {
      gsap.effects.fadeUpOnScroll(contactRef.current, {
        duration: 0.8,
        yOffset: 30,
        start: "top 85%",
      });
    }

    // Animate stats with stagger
    if (statsRef.current) {
      const stats = statsRef.current.querySelectorAll(".stat-item");
      gsap.fromTo(
        stats,
        { opacity: 0, y: 30, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleServiceClick = (serviceTitle: string, serviceDescription: string) => {
    const message = encodeURIComponent(
      `Hello Techpotli Team! 👋\n\nI'm interested in learning more about your *${serviceTitle}* services.\n\n${serviceDescription}\n\nCould you please provide more information and help me get started? Thank you!`
    );
    window.open(`https://wa.me/919911475599?text=${message}`, "_blank");
  };

  const services = [
    {
      icon: ShoppingCart,
      title: "E-Commerce Platform",
      description: "We built our own online shopping platform from scratch. Businesses use it to sell products online - everything from groceries to electronics. Customers can browse, add to cart, pay securely, and track orders. We also use this same platform for our clients who want their own online store.",
      color: "from-blue-500 to-cyan-500",
      whatsappMessage: "I'm interested in your e-commerce platform services. I'd like to know how I can start selling products online."
    },
    {
      icon: Code,
      title: "IT Services & Development",
      description: "Our developers write real code that actually works. We build websites, create custom software, develop CRM systems, and handle all your IT needs. We use modern technologies like React, Next.js, Node.js, and Python. When we build something, it works - simple as that.",
      color: "from-teal-500 to-cyan-500",
      whatsappMessage: "I need help with website development or custom software. Can you tell me more about your IT services?"
    },
    {
      icon: Megaphone,
      title: "Digital Marketing Services",
      description: "We handle everything online - SEO to get you found on Google, social media management for Facebook and Instagram, running ads on Google and Facebook, and creating content. We help businesses in Delhi and across India get noticed online and bring in customers.",
      color: "from-purple-500 to-pink-500",
      whatsappMessage: "I want to grow my business online. Can you help me with SEO, social media, or digital marketing?"
    },
  ];

  const values = [
    { 
      icon: Heart, 
      text: "We actually care about your business - not just getting paid. We want to see you succeed.",
      title: "Customer-First Always"
    },
    { 
      icon: Zap, 
      text: "We stay updated with the latest tech and marketing trends so your business stays ahead.",
      title: "Innovation Driven"
    },
    { 
      icon: MessageCircle, 
      text: "No hidden surprises. We tell you exactly what we're doing, how much it costs, and when it'll be done.",
      title: "Transparent Communication"
    },
    { 
      icon: Shield, 
      text: "We don't cut corners. Everything we build is tested, secure, and works the way it should.",
      title: "Quality Guaranteed"
    },
    { 
      icon: Phone, 
      text: "Got a problem at midnight? We'll help. Need an update on the weekend? We'll respond.",
      title: "Always Available"
    },
    { 
      icon: TrendingUp, 
      text: "We build things that can grow with you - whether you have 10 customers or 10,000.",
      title: "Built to Scale"
    },
  ];

  return (
    <main id="main-content" role="main" className="min-h-screen bg-gradient-to-br from-gray-50 via-teal-50/20 to-cyan-50/20">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-20 sm:py-24 md:py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-300/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-300/10 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div ref={heroContentRef}>
            <SectionHeading
              badge="About Techpotli"
              heading="We're a Digital Solutions Company Based in New Delhi"
              description="We build websites, create online stores, handle SEO and social media, develop custom software, and provide IT services. Everything you need to get your business online and growing - all from one team."
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
                <Link href="#our-story">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section id="our-story" ref={storyRef} className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                badge="Our Story"
                heading="Who We Are and What We Do"
                description=""
                size="md"
                align="left"
                as="h2"
                badgeClassName="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 !text-white border-0 shadow-md font-semibold"
                headingClassName="bg-gradient-to-r from-gray-900 via-teal-700 to-gray-900 bg-clip-text text-transparent font-extrabold text-shadow-lg"
              />
              <div className="mt-6 space-y-5 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  We started Techpotli in New Delhi because we saw a problem - businesses were struggling to get online. Either they didn't know where to start, or they'd tried working with other companies and got frustrated. So we decided to change that.
                </p>
                <p className="text-lg">
                  We're not a big corporate agency with fancy offices. We're a team of developers, designers, and marketers who actually know what we're doing. We've built our own e-commerce platform that we use every day, so when we build one for you, we know exactly what works and what doesn't.
                </p>
                <p className="text-lg">
                  Here's what makes us different: we actually listen. When you tell us what you need, we don't just nod and do our own thing. We ask questions, we understand your business, and then we build something that actually solves your problem. No fancy jargon, no overpromising - just real solutions that work.
                </p>
                <p className="text-lg">
                  We work with all kinds of businesses - small shops in Delhi, growing companies across India, and even international clients. Whether you need a simple website, a full online store, help ranking on Google, or custom software - we've got you covered.
                </p>
              </div>
            </div>
            <div className="relative group">
              <div
                className="rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: "url(https://res.cloudinary.com/dieth2xb3/image/upload/v1755799085/ssimage_bxr8i6.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "500px",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600/85 via-cyan-600/85 to-blue-600/85 backdrop-blur-sm" />
                <div className="relative p-8 sm:p-12 text-white h-full flex flex-col justify-center">
                  <div className="inline-flex p-4 bg-white/20 backdrop-blur-md rounded-xl w-fit mb-6">
                    <Building2 className="h-12 w-12 text-teal-200" />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold mb-4 drop-shadow-lg">Techpotli</h3>
                  <p className="text-lg sm:text-xl text-teal-50 leading-relaxed drop-shadow-md max-w-md">
                    Real people. Real solutions. Real results for businesses in Delhi and across India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section ref={servicesRef} className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-teal-50/30 to-cyan-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="What We Do"
            heading="Three Main Services That Help Your Business Grow"
            description="We focus on three core areas - e-commerce platforms, IT services, and digital marketing. Each one is built to help your business succeed online."
            size="lg"
            align="center"
            as="h2"
            badgeClassName="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 !text-white border-0 shadow-lg font-semibold"
            headingClassName="bg-gradient-to-r from-gray-900 via-teal-700 to-gray-900 bg-clip-text text-transparent font-extrabold text-shadow-lg"
            descriptionClassName="text-gray-600 font-medium max-w-3xl mx-auto"
            className="mb-12 md:mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  onClick={() => handleServiceClick(service.title, service.description)}
                  className="service-card group relative rounded-2xl bg-white p-8 border-2 border-gray-200 hover:border-teal-300 transition-all duration-300 hover:shadow-2xl cursor-pointer hover:scale-105"
                >
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-teal-600 font-semibold group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-teal-500/5 group-hover:via-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-300 pointer-events-none" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team & Expertise Section */}
      <section ref={teamRef} className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Team"
            heading="Experienced Developers and Digital Marketing Experts"
            description="We have developers who write clean, working code and marketers who know how to get your business found online. Together, we make sure your digital presence actually works."
            size="lg"
            align="center"
            as="h2"
            badgeClassName="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 !text-white border-0 shadow-lg font-semibold"
            headingClassName="bg-gradient-to-r from-gray-900 via-purple-700 to-gray-900 bg-clip-text text-transparent font-extrabold text-shadow-lg"
            descriptionClassName="text-gray-600 font-medium max-w-3xl mx-auto"
            className="mb-12 md:mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-gradient-to-br from-white to-teal-50/30 rounded-2xl p-8 shadow-xl border-2 border-gray-200 hover:border-teal-300 transition-all duration-300 hover:shadow-2xl">
              <div className="inline-flex p-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Development Team</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our developers actually know what they're doing. They use React, Next.js, Node.js, Python, and other modern tools to build websites and software that work. We test everything, write clean code, and make sure it's fast and secure. When you need something built, we build it right.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="h-6 w-6 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Full stack website development - frontend and backend</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="h-6 w-6 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Custom software built for your specific needs</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="h-6 w-6 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>CRM systems that help you manage customers better</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="h-6 w-6 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>IT support and maintenance - we fix things when they break</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-white to-cyan-50/30 rounded-2xl p-8 shadow-xl border-2 border-gray-200 hover:border-cyan-300 transition-all duration-300 hover:shadow-2xl">
              <div className="inline-flex p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Megaphone className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Marketing Team</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our marketing team gets how the internet works. They know SEO, understand social media, and can run ads that actually bring in customers. They don't just post random content - they create strategies that get results. If you want more people to find your business online, they know how to make it happen.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>SEO that helps you show up when people search on Google</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Social media management that engages real customers</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Google and Facebook ads that bring in quality leads</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Branding and design that makes you stand out</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-teal-50/30 to-cyan-50/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Values"
            heading="What Matters to Us"
            description="These aren't just words on a wall - these are the things we actually do every day when working with clients."
            size="lg"
            align="center"
            as="h2"
            badgeClassName="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 !text-white border-0 shadow-lg font-semibold"
            headingClassName="bg-gradient-to-r from-gray-900 via-green-700 to-gray-900 bg-clip-text text-transparent font-extrabold text-shadow-lg"
            descriptionClassName="text-gray-600 font-medium max-w-3xl mx-auto"
            className="mb-12 md:mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="value-card group bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-teal-300 transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  <div className="inline-flex p-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {value.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 sm:py-20 md:py-24 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="stat-item">
              <div className="inline-flex p-4 bg-white/20 backdrop-blur-md rounded-xl mb-4">
                <Target className="h-10 w-10 text-white" />
              </div>
              <p className="text-5xl sm:text-6xl font-extrabold text-white mb-3">1000+</p>
              <p className="text-teal-100 text-lg font-medium">Projects Delivered</p>
            </div>
            <div className="stat-item">
              <div className="inline-flex p-4 bg-white/20 backdrop-blur-md rounded-xl mb-4">
                <Sparkles className="h-10 w-10 text-white" />
              </div>
              <p className="text-5xl sm:text-6xl font-extrabold text-white mb-3">10+</p>
              <p className="text-teal-100 text-lg font-medium">Years in Business</p>
            </div>
            <div className="stat-item">
              <div className="inline-flex p-4 bg-white/20 backdrop-blur-md rounded-xl mb-4">
                <MessageCircle className="h-10 w-10 text-white" />
              </div>
              <p className="text-5xl sm:text-6xl font-extrabold text-white mb-3">24/7</p>
              <p className="text-teal-100 text-lg font-medium">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Get in Touch"
            heading="Visit Us or Reach Out Anytime"
            description="We're based in New Delhi, but we work with clients all over. Come visit our office or just give us a call - we're here to help."
            size="lg"
            align="center"
            as="h2"
            badgeClassName="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 !text-white border-0 shadow-lg font-semibold"
            headingClassName="bg-gradient-to-r from-gray-900 via-cyan-700 to-gray-900 bg-clip-text text-transparent font-extrabold text-shadow-lg"
            descriptionClassName="text-gray-600 font-medium max-w-3xl mx-auto"
            className="mb-12 md:mb-16"
          />

          <div className="bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 rounded-2xl p-8 sm:p-12 shadow-2xl border-2 border-teal-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Building2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">Techpotli</p>
                      <p className="text-gray-700">C52A, Lower Ground Floor</p>
                      <p className="text-gray-700">Kalka Ji, New Delhi 110019</p>
                      <p className="text-gray-700">India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-2">Phone Numbers</p>
                      <a href="tel:01147200987" className="block text-gray-700 hover:text-teal-600 transition-colors">011-47200987</a>
                      <a href="tel:9911475599" className="block text-gray-700 hover:text-teal-600 transition-colors">9911475599</a>
                      <a href="tel:9211405666" className="block text-gray-700 hover:text-teal-600 transition-colors">9211405666</a>
                      <a href="tel:9211404666" className="block text-gray-700 hover:text-teal-600 transition-colors">9211404666</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-2">Websites</p>
                      <a
                        href="https://www.techpotlidigital.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-teal-600 hover:text-teal-700 underline font-medium mb-2"
                      >
                        www.techpotlidigital.com
                      </a>
                      <a
                        href="https://www.techpotli.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-teal-600 hover:text-teal-700 underline font-medium"
                      >
                        www.techpotli.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Office</h3>
                <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-lg">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-3">Our Location</p>
                      <p className="text-gray-700 leading-relaxed">
                        C52A, Lower Ground Floor<br />
                        Kalka Ji<br />
                        New Delhi - 110019<br />
                        India
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Button
                      onClick={() => {
                        const message = encodeURIComponent(
                          "Hello! I've read about Techpotli and I'd like to get in touch. Could you please provide more information about your services?"
                        );
                        window.open(`https://wa.me/919911475599?text=${message}`, "_blank");
                      }}
                      className="w-full bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 hover:from-teal-600 hover:via-cyan-600 hover:to-blue-600 text-white font-semibold py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Contact on WhatsApp
                    </Button>
                    <GetConsultationButton className="w-full border-2 border-teal-500 text-teal-600 hover:bg-teal-50 font-semibold py-6 text-base transition-all duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
