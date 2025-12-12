"use client";

import { SectionHeading } from "@/components/custom/SectionHeading";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { Code, Database, Shield, Zap, Smartphone, Globe, Settings, Users, Lock, BarChart3, CreditCard, Search, CheckCircle2, ArrowRight, Server, Layout, ShoppingCart, Mail, Phone, Building2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import GetConsultationButton from "@/components/custom/GetConsultationButton";
import WhatsAppContactButton from "@/components/custom/WhatsAppContactButton";

gsap.registerPlugin(ScrollTrigger);

export default function FullStackPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const frontendRef = useRef<HTMLDivElement>(null);
  const backendRef = useRef<HTMLDivElement>(null);
  const adminRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (heroRef.current) {
      gsap.effects.fadeUpOnScroll(heroRef.current, {
        duration: 0.8,
        yOffset: 30,
        start: "top 85%",
      });
    }

    if (featuresRef.current) {
      const cards = featuresRef.current.querySelectorAll(".feature-card");
      cards.forEach((card, index) => {
        gsap.effects.fadeUpOnScroll(card as Element, {
          duration: 0.6,
          yOffset: 40,
          start: "top 85%",
          delay: index * 0.1,
        });
      });
    }

    if (frontendRef.current) {
      gsap.effects.fadeUpOnScroll(frontendRef.current, {
        duration: 0.8,
        yOffset: 30,
        start: "top 85%",
      });
    }

    if (backendRef.current) {
      gsap.effects.fadeUpOnScroll(backendRef.current, {
        duration: 0.8,
        yOffset: 30,
        start: "top 85%",
      });
    }

    if (adminRef.current) {
      gsap.effects.fadeUpOnScroll(adminRef.current, {
        duration: 0.8,
        yOffset: 30,
        start: "top 85%",
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello Techpotli Team! 👋\n\nI'm interested in learning more about your Full Stack Website Development services. Could you please provide more information about the features and pricing? Thank you!"
    );
    window.open(`https://wa.me/919911475599?text=${message}`, "_blank");
  };

  const mainFeatures = [
    {
      icon: Layout,
      title: "Complete Frontend Development",
      description: "We build the part of your website that users actually see and interact with. Modern, responsive designs that work perfectly on phones, tablets, and computers. Clean interfaces that make sense and are easy to use.",
    },
    {
      icon: Server,
      title: "Robust Backend Development",
      description: "We create the server-side logic that powers everything behind the scenes. APIs that handle data, process requests, and make everything work smoothly. Fast, reliable, and built to scale.",
    },
    {
      icon: Database,
      title: "Database Design & Management",
      description: "We set up databases that store all your information securely and efficiently. Whether it's customer data, product information, or transaction records - we organize it so everything loads fast and stays safe.",
    },
    {
      icon: Settings,
      title: "Admin Panel & Dashboard",
      description: "You get a complete admin panel where you can manage everything - add products, view orders, check analytics, update content, and control all aspects of your website without needing technical knowledge.",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Functionality",
      description: "Full online store capabilities - product catalogs, shopping carts, secure checkout, payment processing, order management, inventory tracking, and everything else you need to sell online.",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Your website is built with SEO in mind from day one. Clean code, fast loading speeds, mobile-friendly design, and proper structure so Google can find you and rank you higher in search results.",
    },
    {
      icon: Shield,
      title: "Security Features",
      description: "We implement security measures to protect your website and customer data. SSL certificates, secure authentication, encrypted data storage, and protection against common web threats.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Your website loads fast, responds quickly, and provides a smooth user experience. We optimize images, minimize code, use caching, and ensure everything runs efficiently.",
    },
  ];

  const frontendFeatures = [
    {
      title: "Responsive Design",
      description: "Your website looks great and works perfectly on every device - from small mobile phones to large desktop screens. Everything adjusts automatically to fit any screen size.",
    },
    {
      title: "Modern User Interface",
      description: "Clean, professional designs that make a great first impression. Easy navigation, clear calls-to-action, and intuitive layouts that help visitors find what they're looking for.",
    },
    {
      title: "Fast Loading Times",
      description: "We optimize everything so your pages load quickly. No waiting, no frustration - just instant access to your content and products.",
    },
    {
      title: "Interactive Elements",
      description: "Engaging animations, smooth transitions, dynamic content updates, and interactive features that keep visitors interested and encourage them to take action.",
    },
    {
      title: "Mobile-First Approach",
      description: "We design for mobile devices first, then enhance for larger screens. Since most people browse on phones, we make sure your mobile experience is perfect.",
    },
    {
      title: "Browser Compatibility",
      description: "Your website works consistently across all major browsers - Chrome, Firefox, Safari, Edge, and others. No matter how someone visits, it looks and works the same.",
    },
  ];

  const backendFeatures = [
    {
      title: "RESTful API Development",
      description: "We build APIs that allow different parts of your website to communicate with each other and with external services. Well-structured, documented, and easy to integrate.",
    },
    {
      title: "User Authentication & Authorization",
      description: "Secure login systems, password protection, role-based access control, and session management. Only authorized users can access the right parts of your website.",
    },
    {
      title: "Payment Gateway Integration",
      description: "We integrate secure payment systems so you can accept online payments. Support for multiple payment methods including credit cards, UPI, wallets, and bank transfers.",
    },
    {
      title: "Email & Notification System",
      description: "Automated emails for order confirmations, password resets, notifications, and marketing campaigns. Keep your customers informed and engaged.",
    },
    {
      title: "Third-Party Integrations",
      description: "Connect your website with other services you use - Google Analytics, social media platforms, CRM systems, accounting software, and more. Everything works together seamlessly.",
    },
    {
      title: "Data Processing & Business Logic",
      description: "All the complex calculations, validations, and automated processes that happen behind the scenes. Inventory management, price calculations, order processing - we handle it all.",
    },
  ];

  const databaseFeatures = [
    {
      title: "Database Design",
      description: "We design your database structure to store information efficiently. Proper organization, relationships between data, and optimization for fast queries and retrievals.",
    },
    {
      title: "Data Security",
      description: "All your data is stored securely with encryption and backup systems. Regular backups ensure you never lose important information, even if something goes wrong.",
    },
    {
      title: "Data Management",
      description: "Easy ways to add, update, delete, and retrieve data. Through the admin panel or automated processes, managing your information is simple and straightforward.",
    },
    {
      title: "Performance Optimization",
      description: "Database queries are optimized for speed. Even with thousands of records, searches and data retrievals happen instantly. No waiting, no delays.",
    },
    {
      title: "Scalability",
      description: "Your database can grow with your business. Whether you have 100 products or 100,000, the system handles it smoothly without slowing down.",
    },
    {
      title: "Data Backup & Recovery",
      description: "Automatic backups ensure your data is always safe. If anything goes wrong, we can restore everything quickly and get you back up and running.",
    },
  ];

  const adminPanelFeatures = [
    {
      title: "Content Management",
      description: "Update your website content anytime, anywhere. Add new pages, edit text, upload images, and make changes without needing to contact a developer.",
    },
    {
      title: "Product Management",
      description: "For e-commerce sites, manage your entire product catalog. Add new products, update prices, manage inventory, organize categories, and handle everything related to your products.",
    },
    {
      title: "Order Management",
      description: "View all orders, track their status, update shipping information, process refunds, and manage everything related to customer purchases from one central dashboard.",
    },
    {
      title: "User Management",
      description: "Manage customer accounts, view user activity, handle permissions, and control access levels. Keep track of who's using your website and what they're doing.",
    },
    {
      title: "Analytics & Reports",
      description: "See detailed statistics about your website - visitor counts, popular pages, sales data, customer behavior, and performance metrics. Make informed decisions based on real data.",
    },
    {
      title: "Settings & Configuration",
      description: "Control all website settings from one place - payment options, shipping rules, email templates, SEO settings, and more. Customize everything to match your business needs.",
    },
  ];

  const additionalFeatures = [
    {
      title: "Domain & Hosting Setup",
      description: "We help you choose and register the perfect domain name, set up reliable hosting, configure everything properly, and get your website live on the internet.",
    },
    {
      title: "SSL Certificate",
      description: "Secure your website with an SSL certificate. This encrypts data between visitors and your site, protects sensitive information, and gives you that secure padlock icon browsers show.",
    },
    {
      title: "Google Business Profile",
      description: "We set up and optimize your Google Business Profile so customers can easily find you when searching on Google Maps or Google Search. More visibility, more customers.",
    },
    {
      title: "Social Media Integration",
      description: "Connect your website with your social media accounts. Share products automatically, display social feeds, enable social login, and make it easy for customers to engage with you.",
    },
    {
      title: "Lead Generation Forms",
      description: "Contact forms, quote request forms, newsletter signups, and other forms that capture visitor information. We set them up, connect them to your email, and help you collect leads.",
    },
    {
      title: "24/7 Technical Support",
      description: "If something breaks or you need help, we're here for you. Round-the-clock support means your website stays running, and your business keeps working.",
    },
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
              badge="Full Stack Website Development"
              heading="Everything You Need in One Complete Website Solution"
              description="When we say full stack, we mean everything. We build the frontend your customers see, the backend that powers it, the database that stores everything, and the admin panel you use to manage it all. No gaps, no missing pieces - just a complete, working website."
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
              <Button onClick={handleWhatsAppClick} variant="outline" size="lg" className="px-8 py-4 text-base font-medium border-2 hover:bg-gray-50 transition-all duration-300">
                Contact on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Full Stack Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                badge="What We Deliver"
                heading="Complete Full Stack Website Development"
                description=""
                size="md"
                align="left"
                as="h2"
                badgeClassName="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 !text-white border-0 shadow-md font-semibold"
                headingClassName="bg-gradient-to-r from-gray-900 via-blue-700 to-gray-900 bg-clip-text text-transparent font-extrabold text-shadow-lg"
              />
              <div className="mt-6 space-y-5 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  A full stack website means we handle every part of your online presence. Think of it like building a house - we don't just paint the walls or install the plumbing. We do everything from the foundation to the roof.
                </p>
                <p className="text-lg">
                  The <strong>frontend</strong> is what your customers see and interact with. Beautiful designs, smooth navigation, mobile-friendly layouts - everything that creates a great first impression and keeps visitors engaged.
                </p>
                <p className="text-lg">
                  The <strong>backend</strong> is the engine that powers everything. APIs that handle requests, business logic that processes orders, integrations with payment gateways and other services - all the invisible work that makes things happen.
                </p>
                <p className="text-lg">
                  The <strong>database</strong> stores all your information safely and efficiently. Product details, customer data, order history, content - everything organized and accessible when you need it.
                </p>
                <p className="text-lg">
                  The <strong>admin panel</strong> puts you in control. Update content, manage products, view analytics, handle orders - everything you need to run your website without technical knowledge.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl p-6 text-white text-center shadow-lg">
                  <Layout className="h-12 w-12 mx-auto mb-3" />
                  <h3 className="font-bold text-lg mb-2">Frontend</h3>
                  <p className="text-sm text-teal-50">User Interface</p>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl p-6 text-white text-center shadow-lg">
                  <Server className="h-12 w-12 mx-auto mb-3" />
                  <h3 className="font-bold text-lg mb-2">Backend</h3>
                  <p className="text-sm text-blue-50">Server Logic</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-6 text-white text-center shadow-lg">
                  <Database className="h-12 w-12 mx-auto mb-3" />
                  <h3 className="font-bold text-lg mb-2">Database</h3>
                  <p className="text-sm text-purple-50">Data Storage</p>
                </div>
                <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-6 text-white text-center shadow-lg">
                  <Settings className="h-12 w-12 mx-auto mb-3" />
                  <h3 className="font-bold text-lg mb-2">Admin Panel</h3>
                  <p className="text-sm text-orange-50">Management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section ref={featuresRef} className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-teal-50/30 to-cyan-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Core Features"
            heading="Everything Included in Your Full Stack Website"
            description="We don't just build a website - we create a complete digital solution that includes everything your business needs to succeed online."
            size="lg"
            align="center"
            as="h2"
            badgeClassName="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 !text-white border-0 shadow-lg font-semibold"
            headingClassName="bg-gradient-to-r from-gray-900 via-teal-700 to-gray-900 bg-clip-text text-transparent font-extrabold text-shadow-lg"
            descriptionClassName="text-gray-600 font-medium max-w-3xl mx-auto"
            className="mb-12 md:mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="feature-card group relative bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-teal-300 transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  <div className="inline-flex p-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Frontend Features Section */}
      <section ref={frontendRef} className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Frontend Development"
            heading="The Part Your Customers See and Experience"
            description="We create beautiful, responsive interfaces that make a great impression and provide an excellent user experience across all devices."
            size="lg"
            align="center"
            as="h2"
            badgeClassName="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 !text-white border-0 shadow-lg font-semibold"
            headingClassName="bg-gradient-to-r from-gray-900 via-blue-700 to-gray-900 bg-clip-text text-transparent font-extrabold text-shadow-lg"
            descriptionClassName="text-gray-600 font-medium max-w-3xl mx-auto"
            className="mb-12 md:mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frontendFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-blue-50/30 rounded-xl p-6 border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm ml-9">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Backend Features Section */}
      <section ref={backendRef} className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Backend Development"
            heading="The Engine That Powers Everything"
            description="We build robust server-side systems that handle all the complex logic, integrations, and processes that make your website function smoothly."
            size="lg"
            align="center"
            as="h2"
            badgeClassName="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 !text-white border-0 shadow-lg font-semibold"
            headingClassName="bg-gradient-to-r from-gray-900 via-indigo-700 to-gray-900 bg-clip-text text-transparent font-extrabold text-shadow-lg"
            descriptionClassName="text-gray-600 font-medium max-w-3xl mx-auto"
            className="mb-12 md:mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {backendFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm ml-9">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Database Features Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Database & Data Management"
            heading="Secure, Organized, and Fast Data Storage"
            description="We design and implement database systems that store your information efficiently, keep it secure, and allow for fast retrieval when you need it."
            size="lg"
            align="center"
            as="h2"
            badgeClassName="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 !text-white border-0 shadow-lg font-semibold"
            headingClassName="bg-gradient-to-r from-gray-900 via-purple-700 to-gray-900 bg-clip-text text-transparent font-extrabold text-shadow-lg"
            descriptionClassName="text-gray-600 font-medium max-w-3xl mx-auto"
            className="mb-12 md:mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {databaseFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-purple-50/30 rounded-xl p-6 border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5" />
                  <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm ml-9">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admin Panel Features Section */}
      <section ref={adminRef} className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-orange-50/30 to-red-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Admin Panel & Dashboard"
            heading="Complete Control Over Your Website"
            description="Manage every aspect of your website from an easy-to-use admin panel. No technical knowledge required - just login and take control."
            size="lg"
            align="center"
            as="h2"
            badgeClassName="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 !text-white border-0 shadow-lg font-semibold"
            headingClassName="bg-gradient-to-r from-gray-900 via-orange-700 to-gray-900 bg-clip-text text-transparent font-extrabold text-shadow-lg"
            descriptionClassName="text-gray-600 font-medium max-w-3xl mx-auto"
            className="mb-12 md:mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adminPanelFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-orange-300 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="h-6 w-6 text-orange-600 flex-shrink-0 mt-0.5" />
                  <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm ml-9">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Additional Services"
            heading="Everything Else You Need to Go Live"
            description="Beyond the core development, we handle all the additional services that get your website online and keep it running smoothly."
            size="lg"
            align="center"
            as="h2"
            badgeClassName="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 !text-white border-0 shadow-lg font-semibold"
            headingClassName="bg-gradient-to-r from-gray-900 via-green-700 to-gray-900 bg-clip-text text-transparent font-extrabold text-shadow-lg"
            descriptionClassName="text-gray-600 font-medium max-w-3xl mx-auto"
            className="mb-12 md:mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-green-50/30 rounded-xl p-6 border-2 border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm ml-9">
                  {feature.description}
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
            Ready to Build Your Complete Full Stack Website?
          </h2>
          <p className="text-lg text-teal-50 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your project and create a website that includes everything your business needs. Get in touch with us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GetConsultationButton className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-600 hover:bg-gray-100 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" />
            <Button onClick={handleWhatsAppClick} variant="outline" size="lg" className="px-8 py-4 text-base font-medium border-2 border-white text-white hover:bg-white/10 transition-all duration-300">
              Contact on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-teal-50 via-cyan-50 to-blue-50 rounded-xl border-2 border-teal-200 p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Contact Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-start gap-4">
                <Building2 className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Address</p>
                  <p className="text-gray-700 text-sm">C52A, Lower Ground Floor</p>
                  <p className="text-gray-700 text-sm">Kalka Ji, New Delhi 110019</p>
                  <p className="text-gray-700 text-sm">India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Phone</p>
                  <a href="tel:01147200987" className="block text-gray-700 text-sm hover:text-teal-600 transition-colors">011-47200987</a>
                  <a href="tel:9911475599" className="block text-gray-700 text-sm hover:text-teal-600 transition-colors">9911475599</a>
                  <a href="tel:9211405666" className="block text-gray-700 text-sm hover:text-teal-600 transition-colors">9211405666</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Globe className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Websites</p>
                  <a href="https://www.techpotlidigital.com" target="_blank" rel="noopener noreferrer" className="block text-teal-600 hover:text-teal-700 underline text-sm mb-1">
                    www.techpotlidigital.com
                  </a>
                  <a href="https://www.techpotli.com" target="_blank" rel="noopener noreferrer" className="block text-teal-600 hover:text-teal-700 underline text-sm">
                    www.techpotli.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Email</p>
                  <a href="mailto:info@techpotlidigital.com" className="block text-gray-700 text-sm hover:text-teal-600 transition-colors">info@techpotlidigital.com</a>
                </div>
              </div>
            </div>
            <div className="text-center">
              <WhatsAppContactButton className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 hover:from-teal-600 hover:via-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

