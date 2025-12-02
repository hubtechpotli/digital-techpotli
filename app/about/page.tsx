"use client";

import "@/lib/GSAPAnimations";
import { SectionHeading } from "@/components/custom/SectionHeading";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { Building2, ShoppingCart, Code, Megaphone, Users, MapPin, Phone, Globe, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const heroContentRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animate hero content
    if (heroContentRef.current) {
      gsap.effects.fadeUpOnScroll(heroContentRef.current, {
        duration: 0.8,
        yOffset: 30,
        start: "top 85%",
      });
    }

    // Animate services section
    if (servicesRef.current) {
      gsap.effects.fadeUpOnScroll(servicesRef.current, {
        duration: 0.8,
        yOffset: 30,
        start: "top 85%",
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
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
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

  const services = [
    {
      icon: ShoppingCart,
      title: "E-Commerce Platform",
      description: "Comprehensive e-commerce website providing all types of products and items. We offer a complete online shopping experience with secure payment gateways, user-friendly interface, and seamless order management.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Code,
      title: "IT Services",
      description: "Full stack website development, custom software solutions, CRM development, and complete IT services. Our experienced developers team transforms your ideas into production-ready code.",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing Services",
      description: "Complete digital marketing solutions including SEO, social media marketing, Google & Meta ads management, branding, and lead generation. We help businesses grow their online presence and reach their target audience.",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const values = [
    "Customer-Centric Approach",
    "Innovation & Excellence",
    "Transparent Communication",
    "Quality Delivery",
    "24/7 Support",
    "Scalable Solutions",
  ];

  return (
    <main id="main-content" role="main" className="min-h-screen bg-gradient-to-br from-gray-50 via-teal-50/20 to-cyan-50/20">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-16 sm:py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-300/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div ref={heroContentRef}>
            <SectionHeading
              badge="About Techpotli"
              heading="Your Complete Digital Solutions Partner"
              description="Techpotli is a digital solutions company in New Delhi, India. We build websites, create e-commerce stores, handle SEO, manage social media, run ads, develop custom software, and provide IT services. We help businesses get online and grow."
              size="lg"
              align="center"
              as="h1"
              badgeClassName="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 !text-white border-0 shadow-lg"
              showDescriptionToScreenReaders={true}
            />
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                <strong>Techpotli</strong> is based in New Delhi, India. We do three main things: 
                build <strong>e-commerce websites</strong>, provide <strong>IT services and custom software</strong>, 
                and handle <strong>digital marketing</strong> (SEO, social media, ads).
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We've built our own e-commerce platform where businesses can sell products online. It's secure, 
                easy to use, and handles everything from product listings to payments and order management. 
                We also use this platform for our clients who need online stores.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team includes developers who write code and digital marketing experts who know SEO, social media, 
                and ads. We work with businesses in New Delhi and across India to help them get online, 
                get found, and get customers.
              </p>
            </div>
            <div className="relative">
              <div
                className="rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  backgroundImage: "url(https://res.cloudinary.com/dieth2xb3/image/upload/v1755799085/ssimage_bxr8i6.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "400px",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600/80 via-cyan-600/80 to-blue-600/80 backdrop-blur-sm" />
                <div className="relative p-8 text-white h-full flex flex-col justify-center">
                  <Building2 className="h-16 w-16 mb-4 text-teal-200" />
                  <h3 className="text-2xl font-bold mb-4">Techpotli</h3>
                  <p className="text-lg text-teal-50">
                    Transforming businesses through innovative digital solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section ref={servicesRef} className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions to help your business thrive online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl bg-gradient-to-br from-gray-50 to-white p-8 border-2 border-gray-200 hover:border-teal-300 transition-all duration-300 hover:shadow-xl"
                >
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team & Expertise Section */}
      <section ref={teamRef} className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Skilled professionals delivering excellence in every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <Users className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Experienced Developers Team</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our team of skilled developers has extensive experience in full stack development, 
                custom software solutions, CRM development, and IT services. We transform your ideas 
                into production-ready code with attention to detail and best practices.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0" />
                  <span>Full Stack Website Development</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0" />
                  <span>Custom Software Solutions</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0" />
                  <span>CRM Development & Integration</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0" />
                  <span>IT Services & Technical Support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <Megaphone className="h-12 w-12 text-cyan-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Marketing Experts</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our digital marketing team specializes in SEO, social media marketing, paid advertising, 
                and brand development. We help businesses establish a strong online presence and reach 
                their target audience effectively.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                  <span>SEO & Search Engine Optimization</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                  <span>Social Media Marketing</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                  <span>Google & Meta Ads Management</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                  <span>Branding & Creative Design</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CheckCircle2 className="h-8 w-8 text-teal-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-900">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 sm:py-20 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="stat-item">
              <p className="text-4xl sm:text-5xl font-bold text-white mb-2">1000+</p>
              <p className="text-teal-100">Projects Completed</p>
            </div>
            <div className="stat-item">
              <p className="text-4xl sm:text-5xl font-bold text-white mb-2">10+</p>
              <p className="text-teal-100">Years Experience</p>
            </div>
            <div className="stat-item">
              <p className="text-4xl sm:text-5xl font-bold text-white mb-2">24/7</p>
              <p className="text-teal-100">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit us or reach out to discuss how we can help your business grow
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 rounded-2xl p-8 sm:p-12 shadow-xl border-2 border-teal-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg">
                      <Building2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Techpotli</p>
                      <p className="text-gray-700">C52A, LGF, Kalka Ji</p>
                      <p className="text-gray-700">New Delhi 110019</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Phone Numbers</p>
                      <p className="text-gray-700">011-47200987</p>
                      <p className="text-gray-700">9911475599</p>
                      <p className="text-gray-700">9211405666</p>
                      <p className="text-gray-700">9211404666</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg">
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Website</p>
                      <a
                        href="https://www.techpotlidigital.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:text-teal-700 underline font-medium"
                      >
                        www.techpotlidigital.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Us</h3>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start gap-4 mb-4">
                    <MapPin className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Our Location</p>
                      <p className="text-gray-700 leading-relaxed">
                        C52A, Lower Ground Floor,<br />
                        Kalka Ji,<br />
                        New Delhi - 110019<br />
                        India
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button
                      onClick={() => {
                        const message = encodeURIComponent(
                          "Hello! I've read about Techpotli and I'd like to get in touch. Could you please provide more information about your services?"
                        );
                        window.open(`https://wa.me/919810659666?text=${message}`, "_blank");
                      }}
                      className="w-full bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 hover:from-teal-600 hover:via-cyan-600 hover:to-blue-600 text-white font-semibold"
                    >
                      Contact Us Now
                    </Button>
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
