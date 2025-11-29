export interface ServiceType {
  title: string;
  tagline: string;
  description: string;
  bg_image: string;
  slug: string;
  fullDescription: string;
  serviceImage?: string;
  deliverables: {
    item: string;
  }[];
}

export const services: ServiceType[] = [
  {
    title: "Website Design & Development",
    tagline: "Building Your Digital Presence",
    description:
      "Modern, responsive websites built to convert visitors into customers. We create fast, secure, and user-friendly websites that help your business stand out online.",
    bg_image: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755799085/ssimage_bxr8i6.png",
    slug: "website-design-development",
    fullDescription:
      "Our team combines cutting-edge design principles with robust development practices to deliver websites that not only look stunning but also perform exceptionally. From custom WordPress sites to fully custom web applications, we build scalable solutions that grow with your business. Every website we create is optimized for speed, mobile responsiveness, and search engine visibility, ensuring your online presence drives real business results. We work closely with you to understand your brand, target audience, and business goals, then craft a digital experience that converts visitors into loyal customers.",
    deliverables: [
      { item: "Custom responsive website design" },
      { item: "Fast loading performance optimization" },
      { item: "Mobile-first responsive development" },
      { item: "User experience (UX) optimization" },
      { item: "Content management system setup" },
      { item: "E-commerce integration & functionality" },
      { item: "Contact forms & lead capture systems" },
      { item: "Website security & backup solutions" },
    ],
  },
  {
    title: "SEO (On-Page, Off-Page & Technical)",
    tagline: "Ranking Higher on Google",
    description:
      "Rank higher on Google with proven SEO strategies that improve visibility. We optimize your website for search engines to drive organic traffic and increase conversions.",
    bg_image: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755804235/aaaimage_zbypst.png",
    slug: "seo-services",
    fullDescription:
      "Our comprehensive SEO approach covers every aspect of search engine optimization, from technical website audits to content strategy and link building. We conduct thorough keyword research, optimize your site's structure and content, build quality backlinks, and continuously monitor performance to ensure your business appears at the top of search results for relevant queries. Our data-driven approach helps you attract qualified leads and grow your organic traffic month over month. We stay updated with the latest search engine algorithms and best practices to keep your website competitive in the ever-evolving digital landscape.",
    deliverables: [
      { item: "Complete SEO audit & analysis" },
      { item: "On-page optimization (meta tags, headings)" },
      { item: "Technical SEO (site speed, mobile-friendliness)" },
      { item: "Keyword research & strategy" },
      { item: "Content optimization & creation" },
      { item: "Off-page SEO & link building" },
      { item: "Local SEO optimization" },
      { item: "Monthly performance reports & analytics" },
    ],
  },
  {
    title: "Social Media Marketing",
    tagline: "Growing Your Brand Online",
    description:
      "Grow your brand across Facebook and Instagram with content & creatives. We create engaging social media campaigns that connect with your audience and drive results.",
    bg_image: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755804376/fasimage_skodum.png",
    slug: "social-media-marketing",
    fullDescription:
      "Our social media experts develop comprehensive strategies tailored to your brand, creating compelling content that resonates with your target audience. From daily posts and stories to reels and video content, we maintain a consistent brand voice while keeping your audience engaged. We manage your social media presence, respond to comments and messages, run targeted ad campaigns, and provide detailed analytics to track growth and engagement. Our goal is to build a loyal community around your brand and turn followers into customers. We understand the unique dynamics of each platform and craft content that performs best on each one.",
    deliverables: [
      { item: "Social media strategy & planning" },
      { item: "Daily content creation & posting" },
      { item: "Graphic design & video production" },
      { item: "Community management & engagement" },
      { item: "Hashtag research & optimization" },
      { item: "Social media advertising campaigns" },
      { item: "Influencer partnerships & collaborations" },
      { item: "Performance analytics & monthly reports" },
    ],
  },
  {
    title: "Google & Meta Ads Management",
    tagline: "Driving Quality Leads",
    description:
      "ROI-focused ad campaigns designed to bring high-quality business leads. We manage your Google and Meta ads to maximize conversions and minimize costs.",
    bg_image: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755804235/aaaimage_zbypst.png",
    slug: "google-meta-ads",
    fullDescription:
      "Our paid advertising experts create, optimize, and manage campaigns across Google Search, Google Display, Facebook, and Instagram to reach your ideal customers at the right moment. We conduct thorough audience research, create compelling ad copy and visuals, set up conversion tracking, and continuously test and optimize campaigns for better performance. With advanced targeting options, A/B testing, and detailed analytics, we ensure every advertising dollar is spent efficiently to generate maximum return on investment. Our transparent reporting keeps you informed about campaign performance and lead quality, helping you make data-driven decisions for your business growth.",
    deliverables: [
      { item: "Campaign strategy & setup" },
      { item: "Ad copywriting & creative design" },
      { item: "Audience targeting & segmentation" },
      { item: "Conversion tracking & optimization" },
      { item: "A/B testing & performance analysis" },
      { item: "Budget management & bid optimization" },
      { item: "Landing page optimization" },
      { item: "Monthly performance reports & insights" },
    ],
  },
  {
    title: "Branding, Logos & Creative Design",
    tagline: "Standing Out in the Market",
    description:
      "Logos, banners, videos, and brand identity that help your business stand out. We create memorable visual identities that resonate with your target audience.",
    bg_image: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755799085/ssimage_bxr8i6.png",
    slug: "branding-creative-design",
    fullDescription:
      "Our creative team works closely with you to understand your brand values, target market, and competitive landscape, then develops a comprehensive brand identity that sets you apart. From logo design and color palettes to typography and brand guidelines, we create a cohesive visual language that communicates your brand story effectively. We also produce marketing materials including business cards, brochures, social media graphics, video content, and digital banners that maintain brand consistency across all touchpoints. Our designs are not just visually appealing—they're strategically crafted to connect with your audience and drive brand recognition. Every element is designed to reinforce your brand message and create lasting impressions.",
    deliverables: [
      { item: "Logo design & brand identity" },
      { item: "Brand guidelines & style guide" },
      { item: "Color palette & typography selection" },
      { item: "Business cards & stationery design" },
      { item: "Social media graphics & templates" },
      { item: "Video content & animations" },
      { item: "Marketing banners & promotional materials" },
      { item: "Packaging design & product branding" },
    ],
  },
  {
    title: "Domain, Hosting & SSL + Support",
    tagline: "Keeping Your Site Secure",
    description:
      "Secure hosting, SSL setup, site maintenance, and 24/7 technical support. We ensure your website is always running smoothly and securely.",
    bg_image: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755804376/fasimage_skodum.png",
    slug: "domain-hosting-support",
    fullDescription:
      "Our comprehensive hosting and support services take the technical burden off your shoulders, allowing you to focus on growing your business. We handle domain registration and management, set up reliable hosting with fast servers, install SSL certificates for secure connections, and perform regular backups to protect your data. Our 24/7 monitoring ensures your website stays online, and our technical support team is always available to help with updates, security patches, performance optimization, and any technical issues that arise. We also provide ongoing maintenance including software updates, security scans, and performance monitoring to keep your website running at peak performance. Your peace of mind is our priority.",
    deliverables: [
      { item: "Domain registration & DNS management" },
      { item: "Premium hosting with fast servers" },
      { item: "SSL certificate installation & renewal" },
      { item: "Regular automated backups" },
      { item: "24/7 website monitoring & uptime" },
      { item: "Security updates & patches" },
      { item: "Performance optimization & speed tuning" },
      { item: "Technical support & troubleshooting" },
    ],
  },
  {
    title: "Full Stack Website Development",
    tagline: "Complete Web Solutions",
    description:
      "End-to-end full stack development services. From frontend to backend, database to deployment, we build complete web applications that scale with your business.",
    bg_image: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755804235/aaaimage_zbypst.png",
    slug: "full-stack-development",
    fullDescription:
      "Our experienced full stack developers build complete web applications from scratch. We handle everything from user interface design to server-side logic, database architecture, API development, and cloud deployment. Whether you need a custom web application, SaaS platform, or enterprise solution, our team delivers scalable, secure, and high-performance applications. We use modern technologies like React, Next.js, Node.js, Python, and more to turn your ideas into fully functional code. Our full stack solutions are optimized for performance, security, and scalability.",
    deliverables: [
      { item: "Frontend development (React, Next.js, Vue)" },
      { item: "Backend development (Node.js, Python, PHP)" },
      { item: "Database design & optimization" },
      { item: "RESTful & GraphQL API development" },
      { item: "Cloud deployment & DevOps" },
      { item: "Authentication & authorization systems" },
      { item: "Third-party integrations" },
      { item: "Performance optimization & scaling" },
    ],
  },
  {
    title: "Custom Software Development",
    tagline: "Turning Ideas Into Code",
    description:
      "Custom software solutions tailored to your business needs. Our skilled developers transform your ideas into powerful, scalable software applications.",
    bg_image: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755799085/ssimage_bxr8i6.png",
    slug: "custom-software-development",
    fullDescription:
      "Our experienced development team specializes in building custom software solutions that solve your unique business challenges. From desktop applications to web platforms, mobile apps to enterprise systems, we deliver high-quality code that meets your exact requirements. We follow industry best practices, use modern development frameworks, and ensure your software is maintainable, scalable, and secure. Our developers work closely with you to understand your vision and deliver solutions that exceed expectations. We turn your ideas into production-ready code.",
    deliverables: [
      { item: "Custom web applications" },
      { item: "Desktop software development" },
      { item: "Mobile app development" },
      { item: "Enterprise software solutions" },
      { item: "API development & integration" },
      { item: "Database design & management" },
      { item: "Software architecture & planning" },
      { item: "Quality assurance & testing" },
    ],
  },
  {
    title: "CRM Development & Integration",
    tagline: "Streamline Your Business Operations",
    description:
      "Custom CRM solutions and integrations to manage your customer relationships effectively. Built by experienced developers to streamline your sales and support processes.",
    bg_image: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755804376/fasimage_skodum.png",
    slug: "crm-development",
    fullDescription:
      "Our skilled developers create custom CRM systems tailored to your business workflow. We build comprehensive customer relationship management solutions that help you track leads, manage contacts, automate sales processes, and improve customer service. Whether you need a custom CRM from scratch or integration with existing systems like Salesforce, HubSpot, or Zoho, our experienced team delivers solutions that enhance your business operations. We ensure seamless data flow, automated workflows, and powerful analytics to help you make data-driven decisions.",
    deliverables: [
      { item: "Custom CRM development" },
      { item: "CRM integration & migration" },
      { item: "Lead management systems" },
      { item: "Sales pipeline automation" },
      { item: "Customer data management" },
      { item: "Reporting & analytics dashboards" },
      { item: "Email & communication integration" },
      { item: "Mobile CRM access" },
    ],
  },
  {
    title: "IT Services & Technical Solutions",
    tagline: "Complete IT Support",
    description:
      "Comprehensive IT services including system administration, cloud solutions, network management, and technical support. Our experienced team handles all your IT needs.",
    bg_image: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755804235/aaaimage_zbypst.png",
    slug: "it-services",
    fullDescription:
      "Our skilled IT professionals provide comprehensive technical services to keep your business running smoothly. From cloud infrastructure setup to network management, system administration to cybersecurity, we offer end-to-end IT solutions. Our experienced team ensures your systems are secure, optimized, and always available. We handle server management, backup solutions, security audits, and provide 24/7 technical support. Whether you need infrastructure setup, migration services, or ongoing IT management, our team delivers reliable solutions.",
    deliverables: [
      { item: "Cloud infrastructure setup & management" },
      { item: "Network setup & administration" },
      { item: "Server management & maintenance" },
      { item: "Cybersecurity & data protection" },
      { item: "System migration & upgrades" },
      { item: "Backup & disaster recovery" },
      { item: "IT consulting & strategy" },
      { item: "24/7 technical support & monitoring" },
    ],
  },
];

export function getService(slug: string): ServiceType | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServices(): ServiceType[] {
  return services;
}

