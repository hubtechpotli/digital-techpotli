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
    tagline: "Your Vision, Our Expertise",
    description:
      "Transforming Ideas Into Stunning Web Realities. At Techpotli, we don't just design websites we produce digital experiences that connect with your audience and drive measurable growth.",
    bg_image: "https://wallpapercave.com/wp/wp5085063.jpg",
    serviceImage: "https://wallpapercave.com/wp/wp5085063.jpg",
    slug: "website-design-development",
    fullDescription:
      "Website Development - Your Vision, Our Expertise\n\nTransforming Ideas Into Stunning Web Realities\n\nAt Techpotli, we don't just design websites we produce digital experiences that connect with your audience and drive measurable growth.\n\nOur expert team combines creativity, strategy, and technology to deliver visually stunning, user-friendly, and high-performance websites tailored to your business goals.\n\nWhether you need a sleek corporate site, a dynamic e-commerce store, or a powerful web application, Techpotli is your trusted partner for end-to-end web design and development.\n\nWhy Choose Techpotli for Website Development?\n\n• Tailor-Made Solutions: Every project is built from scratch to match your unique brand identity.\n\n• Responsive Design: Your website will look perfect on every screen — desktop, tablet, and mobile.\n\n• SEO-Friendly Code: We build websites optimized for search engines from day one.\n\n• Lightning Speed Performance: Fast-loading pages that enhance user experience and improve ranking.\n\n• Secure & Scalable: Strong architecture that grows with your business.\n\n• Dedicated Support: Continuous updates, backups, and technical assistance whenever you need it.\n\nWEBSITE DEVELOPMENT SERVICES IN INDIA\n\nOur Custom Web Development Services\n\nBringing unique ideas to life can be challenging, especially when you aim to disrupt the industry with innovation. That's where we come in. Our smart and custom-made website development services in India, the USA, Australia, and globally are designed to turn your vision into a reality, whether you need a powerful business website or a scalable eCommerce store. We develop personalized websites that perfectly reflect your goals and reach your targeted audience across the world.\n\n• Web Application: We offer end-to-end web development solutions to turn your vision into a fully functional website that's attractive, responsive, and scalable.\n\n• E-commerce Website Development: We design fast, secure, and conversion-driven online stores that attract visitors and encourage convenient purchases.\n\n• Custom Website Development: We create tailored websites built from scratch, using in-depth research and the latest trends to ensure your brand stands out.\n\n• Multi-vendor Website Development: We help you launch your own marketplace where multiple vendors can register, manage products, and control everything from one dashboard.\n\n• CMS Development: We design flexible and responsive CMS platforms that let you manage your content – news, blogs, and media – with ease.\n\n• CRM Development: We build smart CRM systems to enhance customer experiences, streamline marketing, and improve business relationships.\n\n• WordPress Development: Our professional developers create custom WordPress websites with SEO-friendly designs, custom themes, and powerful plugins.\n\n• Website Maintenance: We provide ongoing maintenance to keep your website secure, updated, and optimized for performance — so you can focus on growth.\n\n• Customized Portal Solution: We develop dynamic portals for employees, vendors, or customers with secure access, efficient management, and top-tier performance.",
    deliverables: [
      { item: "Custom responsive website design" },
      { item: "Fast loading performance optimization" },
      { item: "Mobile-first responsive development" },
      { item: "SEO-friendly code from day one" },
      { item: "Secure & scalable architecture" },
      { item: "E-commerce integration & functionality" },
      { item: "Content management system setup" },
      { item: "Website maintenance & dedicated support" },
      { item: "Web application development" },
      { item: "Multi-vendor marketplace development" },
      { item: "CRM development" },
      { item: "WordPress development" },
      { item: "Customized portal solutions" },
    ],
  },
  {
    title: "SEO (On-Page, Off-Page & Technical)",
    tagline: "Ranking Higher on Google",
    description:
      "Get your business showing up when people search for what you offer. We handle all the technical stuff, optimize your content, and build the right connections so Google ranks you higher. More visibility means more customers finding you naturally.",
    bg_image: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755804235/aaaimage_zbypst.png",
    serviceImage: "https://wallpapercave.com/wp/wp5459907.jpg",
    slug: "seo-services",
    fullDescription:
      "Here's how we do SEO: First, we check what's working and what's not on your site. We look at speed, mobile-friendliness, and technical issues that might be holding you back.\n\nThen we figure out what words your customers actually use when they search. We optimize your pages, write better content, and fix technical problems. We also build quality links from other websites because Google trusts sites that others reference.\n\nWe track everything and send you monthly reports showing what's working. When Google updates their rules, we adjust. The goal is simple: get you ranking higher so more people find you when they're looking for what you sell.\n\nIt's not magic, it's consistent work. But done right, SEO brings customers who are already looking for what you offer.",
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
      "Build a real presence on Facebook and Instagram. We create posts, stories, and videos that your audience actually wants to see. Consistent posting, smart engagement, and content that gets people interested in your business.",
    bg_image: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755804376/fasimage_skodum.png",
    serviceImage: "https://wallpapers.com/images/hd/4k-social-media-3840-x-2160-wallpaper-7c5hgffr0u5d3l2y.jpg",
    slug: "social-media-marketing",
    fullDescription:
      "Social media isn't just posting random stuff. We figure out what your customers care about, then create content that speaks to them. Posts, stories, reels - whatever works for your audience.\n\nWe handle the daily posting, respond to comments and messages, and keep your brand voice consistent. When you need to run ads, we set those up too. Every month, you'll see reports showing what's working: which posts got attention, how many people engaged, and what's bringing in leads.\n\nThe real goal? Build a community that knows and trusts your brand. When people follow you, they should want to buy from you. We make that happen by being consistent, authentic, and strategic.\n\nDifferent platforms need different approaches. What works on Facebook might not work on Instagram. We know the difference and create content that fits each platform.",
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
      "Run ads that actually make money. We manage your Google and Facebook/Instagram ads, test what works, and keep optimizing so you get quality leads without wasting budget.",
    bg_image: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755804235/aaaimage_zbypst.png",
    serviceImage: "https://supcreative.com/wp-content/uploads/2025/02/Meta-Ads-vs-Google-Ads-1.webp",
    slug: "google-meta-ads",
    fullDescription:
      "Here's the truth about ads: most businesses waste money because they don't know what they're doing. We fix that.\n\nWe figure out who your ideal customers are, then create ads that speak directly to them. We test different messages, images, and targeting to find what works. Then we keep optimizing based on real results.\n\nEvery dollar you spend, we track. You'll see exactly what you're getting: how many clicks, how many leads, what it costs per lead, and whether those leads actually turn into customers. No guessing, just real numbers.\n\nWe run campaigns on Google Search (when people actively search for what you offer), Google Display (banner ads), Facebook, and Instagram. Each platform works differently, and we know how to make each one profitable.\n\nBottom line: we make your ad budget work harder. Better leads, lower costs, clear results.",
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
      "Give your business a look that people remember. We design logos, create your brand style, make banners and videos, and build a visual identity that makes you stand out from competitors.",
    bg_image: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755799085/ssimage_bxr8i6.png",
    serviceImage: "https://www.zephyrmedia.com.au/wp-content/uploads/2021/06/brand-elements.jpeg",
    slug: "branding-creative-design",
    fullDescription:
      "Your brand is how people see you. We help you figure out what that should look like.\n\nWe start by understanding your business: what you do, who you serve, what makes you different. Then we design a logo and brand style that actually represents you. Colors, fonts, the whole look.\n\nOnce we have your brand identity, we use it everywhere: business cards, social media graphics, videos, banners, brochures. Everything should look like it's from the same company - that's how people remember you.\n\nGood design isn't just pretty pictures. It's strategic. Every color, every font choice, every image should help people understand who you are and why they should choose you. We make sure your brand tells the right story.\n\nWhen people see your logo or your posts, they should immediately think of your business. That's the goal, and that's what we build.",
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
      "Keep your website running smoothly. We handle hosting, set up security, do regular backups, and fix problems when they come up. You focus on your business, we handle the technical stuff.",
    bg_image: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755804376/fasimage_skodum.png",
    serviceImage: "https://www.interactivewebstation.com/wp-content/uploads/2020/04/hosting_and_ssl.jpeg",
    slug: "domain-hosting-support",
    fullDescription:
      "Running a website means dealing with technical stuff: hosting, security, updates, backups. Most business owners don't have time for that, and honestly, you shouldn't have to.\n\nWe handle it all. We register your domain, set up reliable hosting, install SSL certificates (that little lock icon that makes your site secure), and do regular backups so you never lose your data.\n\nWe monitor your site 24/7. If something breaks, we fix it. When updates are needed, we do them. If there's a security issue, we handle it. We also keep an eye on performance - slow sites lose customers.\n\nYou get monthly reports showing everything's running smoothly. If you ever have questions or problems, we're here. The goal is simple: your website should just work, and you shouldn't have to think about it.\n\nFocus on your business. We'll keep your website fast, secure, and online.",
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
      "Need a complete web application? We build everything: the part users see, the server that powers it, the database that stores information, and we get it all running online. Full solutions from start to finish.",
    bg_image: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755804235/aaaimage_zbypst.png",
    serviceImage: "https://www.sitehatchery.com/wp-content/uploads/2023/02/MollyBrown82_web_development_company_real_photo_e8438c9f-af62-417d-b00b-1186fa7a6530.png",
    slug: "full-stack-development",
    fullDescription:
      "Full stack means we build everything: the frontend (what users see and interact with), the backend (the server and logic that makes it work), the database (where information is stored), and we deploy it all so it's live and working.\n\nOur developers know multiple technologies: React, Next.js, Node.js, Python, and others. We pick the right tools for your project. Need a custom web app? SaaS platform? Enterprise solution? We build it.\n\nEverything we build is designed to grow with you. Fast performance, secure code, scalable architecture. Your app should handle 10 users or 10,000 users without breaking.\n\nWe take your idea, turn it into working code, test it thoroughly, and get it online. Then we maintain it. Simple as that.",
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
      "Need software built specifically for your business? We create custom applications that solve your unique problems. Our developers write clean, maintainable code that does exactly what you need.",
    bg_image: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755799085/ssimage_bxr8i6.png",
    serviceImage: "https://bdtask.com/sp/custom-soft/img/custom-software-development-service-company.webp",
    slug: "custom-software-development",
    fullDescription:
      "Off-the-shelf software doesn't always fit. Sometimes you need something built just for your business.\n\nWe build custom software: web applications, desktop programs, mobile apps, enterprise systems. Whatever you need, we can create it.\n\nHere's how it works: we talk to you about what you actually need. What problems are you trying to solve? What would make your work easier? Then we build it using modern, reliable technologies.\n\nThe code we write is clean, well-documented, and maintainable. Future you (or your team) will thank us. We also make sure it's secure and can grow with your business.\n\nWe don't just code - we solve problems. Your ideas become working software that makes your business run better.",
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
      "Keep track of your customers, leads, and sales in one place. We build custom CRM systems or connect you with existing ones. Manage contacts, track deals, and never lose a lead again.",
    bg_image: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755804376/fasimage_skodum.png",
    serviceImage: "https://static.vecteezy.com/system/resources/previews/028/705/267/large_2x/crm-isometric-flowchart-vector.jpg",
    slug: "crm-development",
    fullDescription:
      "A good CRM keeps you organized. You know who your customers are, where your leads came from, what deals are in progress, and who needs follow-up.\n\nWe can build you a custom CRM that fits exactly how you work. Or we can integrate you with existing systems like Salesforce, HubSpot, or Zoho if that makes more sense.\n\nEither way, you get: lead tracking, contact management, sales pipeline visibility, automated workflows (so you don't forget to follow up), and reports that show you what's working.\n\nWhen everything's in one place and automated, you close more deals and provide better customer service. That's the point, and that's what we build.",
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
      "All your IT needs covered. We handle servers, cloud setup, network management, security, backups, and technical support. Keep your systems running so you can focus on your business.",
    bg_image: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755804235/aaaimage_zbypst.png",
    serviceImage: "https://www.accuit.ca/wp-content/uploads/2022/09/accuit-blog-new.png",
    slug: "it-services",
    fullDescription:
      "IT problems can shut down your business. We prevent that.\n\nWe handle everything technical: setting up cloud infrastructure, managing servers, maintaining networks, keeping things secure, doing backups, and providing support when things break.\n\nWhen you work with us, your systems stay online, secure, and optimized. We monitor everything, apply security updates, and fix problems before they become disasters.\n\nNeed to migrate to the cloud? Set up new infrastructure? Get ongoing IT management? We do it all. The goal is simple: your technology should help your business, not hold it back.\n\nYou shouldn't have to worry about servers crashing or security breaches. We handle that. You run your business.",
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

