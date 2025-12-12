export interface PackageFeature {
  name: string;
  included: boolean;
}

export interface Package {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
  features: PackageFeature[];
  popular?: boolean;
  category: string;
  description?: string;
  image?: string;
}

export const websiteServicesPackages: Package[] = [
  {
    id: "website-basic",
    name: "Basic Website Package",
    price: "₹999",
    priceNote: "+GST/Month",
    popular: false,
    category: "Website Services",
    description: "Perfect for small businesses getting started online",
    features: [
      { name: "Domain + Hosting", included: true },
      { name: "Website Development", included: true },
      { name: "Basic SEO", included: true },
      { name: "Social Media Marketing (Facebook+Instagram)", included: true },
      { name: "5 Digital Banners/Month", included: true },
      { name: "Logo Design", included: true },
      { name: "Google Business Profile", included: true },
      { name: "SSL Certificate", included: true },
      { name: "24/7 Tech Support", included: true },
    ],
  },
  {
    id: "website-standard",
    name: "Standard Website Package",
    price: "₹1499",
    priceNote: "+GST/Month",
    popular: true,
    category: "Website Services",
    description: "Ideal for growing businesses with advanced needs",
    features: [
      { name: "Domain + Hosting", included: true },
      { name: "Website Development", included: true },
      { name: "Full SEO (On-Page, Off Page)", included: true },
      { name: "Backlinks-50/Month", included: true },
      { name: "Social Media Marketing (Facebook+Instagram)", included: true },
      { name: "10 Digital Banners/Month", included: true },
      { name: "Logo Design", included: true },
      { name: "Google Business Profile", included: true },
      { name: "Meta Ads Setup", included: true },
      { name: "SSL Certificate", included: true },
      { name: "24/7 Tech Support", included: true },
    ],
  },
  {
    id: "website-premium",
    name: "Premium Website Package",
    price: "₹2499",
    priceNote: "+GST/Month",
    popular: false,
    category: "Website Services",
    description: "Complete solution for established businesses",
    features: [
      { name: "Domain + Hosting", included: true },
      { name: "Website Development", included: true },
      { name: "Full SEO (On-Page, Off Page)", included: true },
      { name: "Backlinks-100/Month", included: true },
      { name: "Social Media Marketing (Facebook+Instagram)", included: true },
      { name: "15 Digital Banners/Month", included: true },
      { name: "Logo Design", included: true },
      { name: "Google Business Profile", included: true },
      { name: "Meta Ads Setup", included: true },
      { name: "SSL Certificate", included: true },
      { name: "24/7 Tech Support", included: true },
    ],
  },
];

export const websiteLeadsPackages: Package[] = [
  {
    id: "website-leads-basic",
    name: "Basic Website + Leads Package",
    price: "₹3499",
    priceNote: "+GST/Month",
    popular: false,
    category: "Website + Leads Guaranteed Services",
    description: "Perfect for businesses looking to generate quality leads",
    features: [
      { name: "Domain + Hosting", included: true },
      { name: "Website Development", included: true },
      { name: "Full SEO (On-Page, Off Page & Technical)", included: true },
      { name: "Backlinks-150/Month", included: true },
      { name: "Social Media Marketing (Facebook+Instagram)", included: true },
      { name: "15 Business Banners/Month", included: true },
      { name: "Logo Design", included: true },
      { name: "Ads Setup (Meta & Google)", included: true },
      { name: "Meta Ads Free (₹200)", included: true },
      { name: "Google My Business Profile", included: true },
      { name: "SSL Certificate", included: true },
      { name: "24*7 Tech Support", included: true },
    ],
  },
  {
    id: "website-leads-standard",
    name: "Standard Website + Leads Package",
    price: "₹4999",
    priceNote: "+GST/Month",
    popular: true,
    category: "Website + Leads Guaranteed Services",
    description: "Ideal for growing businesses with guaranteed lead generation",
    features: [
      { name: "Domain + Hosting", included: true },
      { name: "Website Development", included: true },
      { name: "Full SEO (On-Page, Off Page & Technical)", included: true },
      { name: "Backlinks-200/Month", included: true },
      { name: "Blog-1/Month", included: true },
      { name: "Social Media Marketing (Facebook+Instagram)", included: true },
      { name: "15 Business Banners/Month", included: true },
      { name: "Logo Design", included: true },
      { name: "Ads Setup (Meta & Google)", included: true },
      { name: "15 Business Leads", included: true },
      { name: "Google My Business Profile", included: true },
      { name: "SSL Certificate", included: true },
      { name: "24*7 Tech Support", included: true },
    ],
  },
  {
    id: "website-leads-premium",
    name: "Premium Website + Leads Package",
    price: "₹9999",
    priceNote: "+GST/Month",
    popular: false,
    category: "Website + Leads Guaranteed Services",
    description: "Complete solution with maximum lead generation potential",
    features: [
      { name: "Domain + Hosting", included: true },
      { name: "Website Development", included: true },
      { name: "Full SEO (On-Page, Off Page & Technical)", included: true },
      { name: "Backlinks-300/Month", included: true },
      { name: "Blog-2/Month", included: true },
      { name: "Social Media Marketing (Facebook+Instagram)", included: true },
      { name: "30 Business Banners/Month", included: true },
      { name: "2 Videos", included: true },
      { name: "Logo Design", included: true },
      { name: "Ads Setup (Meta & Google)", included: true },
      { name: "30 Business Leads", included: true },
      { name: "Google My Business Profile", included: true },
      { name: "SSL Certificate", included: true },
      { name: "24*7 Tech Support", included: true },
    ],
  },
];

export function getPackagesByCategory(category: string): Package[] {
  const allPackages = [...websiteServicesPackages, ...websiteLeadsPackages, ...ecommercePackages, ...socialSeoGmbPackages, ...oneTimeSetupPackages, ...fullStackWebsitePackages];
  return allPackages.filter((pkg) => pkg.category === category);
}

export function getPackageById(id: string): Package | undefined {
  const allPackages = [...websiteServicesPackages, ...websiteLeadsPackages, ...ecommercePackages, ...socialSeoGmbPackages, ...oneTimeSetupPackages, ...fullStackWebsitePackages];
  return allPackages.find((pkg) => pkg.id === id);
}

export const ecommercePackages: Package[] = [
  {
    id: "ecommerce-basic",
    name: "Basic E-Commerce Package",
    price: "₹1499",
    priceNote: "+GST/Month",
    popular: false,
    category: "E-Commerce Website Services With Admin Panel",
    description: "Perfect for small businesses starting their online store",
    features: [
      { name: "Domain + Hosting", included: true },
      { name: "Website Development + Admin Panel", included: true },
      { name: "Full SEO (On-Page, Off Page & Technical)", included: true },
      { name: "Backlinks-100/Month", included: true },
      { name: "Social Media Marketing (Facebook+Instagram)", included: true },
      { name: "10 Business Banners/Month", included: true },
      { name: "Logo Design", included: true },
      { name: "Ads Setup (Meta & Google)", included: true },
      { name: "Google My Business Profile", included: true },
      { name: "Payment Gateway Integration", included: true },
      { name: "SSL Certificate", included: true },
      { name: "24*7 Tech Support", included: true },
    ],
  },
  {
    id: "ecommerce-standard",
    name: "Standard E-Commerce Package",
    price: "₹2499",
    priceNote: "+GST/Month",
    popular: true,
    category: "E-Commerce Website Services With Admin Panel",
    description: "Ideal for growing e-commerce businesses with advanced features",
    features: [
      { name: "Domain + Hosting", included: true },
      { name: "Website Development + Admin Panel", included: true },
      { name: "Full SEO (On-Page, Off Page & Technical)", included: true },
      { name: "Backlinks-200/Month", included: true },
      { name: "Blog-1/Month (Content Blog)", included: true },
      { name: "Social Media Marketing (Facebook+Instagram)", included: true },
      { name: "15 Business Banners/Month", included: true },
      { name: "Logo Design", included: true },
      { name: "Ads Setup (Meta & Google)", included: true },
      { name: "Google My Business Profile", included: true },
      { name: "Payment Gateway Integration", included: true },
      { name: "SSL Certificate", included: true },
      { name: "24*7 Tech Support", included: true },
    ],
  },
];

export const socialSeoGmbPackages: Package[] = [
  {
    id: "social-seo-gmb-standard",
    name: "Social Media, SEO & GMB Package",
    price: "₹2499",
    priceNote: "+GST/Month",
    popular: true,
    category: "Social Media, SEO & GMB Services",
    description: "Complete digital marketing solution with social media, SEO, and Google My Business",
    features: [
      { name: "Social Media Marketing (Facebook+Instagram)", included: true },
      { name: "15 Business Banners/Month", included: true },
      { name: "Full SEO", included: true },
      { name: "On Page Optimization", included: true },
      { name: "Keyword Research", included: true },
      { name: "Off Page Optimization", included: true },
      { name: "Technical SEO", included: true },
      { name: "Google Search Console Setup", included: true },
      { name: "Google Analytics Setup", included: true },
      { name: "Backlinks-200", included: true },
      { name: "Blog-1(Content Blog)", included: true },
      { name: "Logo Design", included: true },
      { name: "Ads Setup (Meta & Google)", included: true },
      { name: "Google My Business Profile", included: true },
      { name: "24*7 Support", included: true },
    ],
  },
];

export const oneTimeSetupPackages: Package[] = [
  {
    id: "onetime-business-website",
    name: "Business Website",
    price: "₹6,999",
    priceNote: "+ GST (One-Time)",
    popular: false,
    category: "Website Development One Time Set-up Packages",
    description: "Professional business website with call & WhatsApp integration",
    features: [
      { name: "Business Website Development", included: true },
      { name: "Call Integration", included: true },
      { name: "WhatsApp Integration", included: true },
      { name: "Responsive Design", included: true },
      { name: "Basic SEO Setup", included: true },
      { name: "Contact Forms", included: true },
      { name: "SSL Certificate", included: true },
    ],
  },
  {
    id: "onetime-ecommerce-wordpress",
    name: "E-Commerce Website (WordPress)",
    price: "₹9,999",
    priceNote: "+ GST (One-Time)",
    popular: false,
    category: "Website Development One Time Set-up Packages",
    description: "Complete WordPress e-commerce website with WooCommerce",
    features: [
      { name: "WordPress E-Commerce Website", included: true },
      { name: "WooCommerce Integration", included: true },
      { name: "Product Management System", included: true },
      { name: "Payment Gateway Setup", included: true },
      { name: "Responsive Design", included: true },
      { name: "Basic SEO Setup", included: true },
      { name: "SSL Certificate", included: true },
    ],
  },
  {
    id: "onetime-custom-ecommerce-single",
    name: "Custom E-Commerce (Single Admin User)",
    price: "₹99,999",
    priceNote: "+ GST (One-Time)",
    popular: true,
    category: "Website Development One Time Set-up Packages",
    description: "Custom coded e-commerce website with single admin panel",
    features: [
      { name: "Custom Coded E-Commerce Website", included: true },
      { name: "Website + Admin Panel", included: true },
      { name: "Full Administration Access", included: true },
      { name: "Single Admin User", included: true },
      { name: "Custom Features & Functionality", included: true },
      { name: "Payment Gateway Integration", included: true },
      { name: "Advanced SEO Setup", included: true },
      { name: "SSL Certificate", included: true },
      { name: "Complete Customization", included: true },
    ],
  },
  {
    id: "onetime-custom-ecommerce-multi",
    name: "Custom E-Commerce (Multiple Admin User)",
    price: "₹2,99,999",
    priceNote: "+ GST (One-Time)",
    popular: false,
    category: "Website Development One Time Set-up Packages",
    description: "Enterprise-level custom e-commerce with multi-user admin panel",
    features: [
      { name: "Custom Coded E-Commerce Website", included: true },
      { name: "Multi-User Admin Panel", included: true },
      { name: "Multiple Admin Users Support", included: true },
      { name: "Role-Based Access Control", included: true },
      { name: "Advanced Custom Features", included: true },
      { name: "Payment Gateway Integration", included: true },
      { name: "Advanced Analytics & Reporting", included: true },
      { name: "Enterprise-Level Security", included: true },
      { name: "Complete Customization", included: true },
      { name: "Priority Support", included: true },
    ],
  },
];

export const fullStackWebsitePackages: Package[] = [
  {
    id: "fullstack-basic",
    name: "Basic Full Stack Website Package",
    price: "₹1999",
    priceNote: "+GST/Month",
    popular: false,
    category: "Full Stack Website Services",
    description: "Complete full stack website solution with e-commerce, social media marketing, and lead generation",
    features: [
      { name: "Domain + Hosting", included: true },
      { name: "Full Stack Website Development", included: true },
      { name: "E-Commerce Functionality", included: true },
      { name: "Admin Panel & Dashboard", included: true },
      { name: "Full SEO (On-Page, Off Page & Technical)", included: true },
      { name: "Backlinks-100/Month", included: true },
      { name: "Social Media Marketing (Facebook+Instagram)", included: true },
      { name: "10 Digital Banners/Month", included: true },
      { name: "Lead Generation Forms", included: true },
      { name: "Logo Design", included: true },
      { name: "Google Business Profile", included: true },
      { name: "Payment Gateway Integration", included: true },
      { name: "SSL Certificate", included: true },
      { name: "24/7 Tech Support", included: true },
    ],
  },
  {
    id: "fullstack-standard",
    name: "Standard Full Stack Website Package",
    price: "₹3499",
    priceNote: "+GST/Month",
    popular: true,
    category: "Full Stack Website Services",
    description: "Advanced full stack solution with enhanced e-commerce, social media, and lead generation features",
    features: [
      { name: "Domain + Hosting", included: true },
      { name: "Full Stack Website Development", included: true },
      { name: "Advanced E-Commerce Features", included: true },
      { name: "Multi-User Admin Panel", included: true },
      { name: "Full SEO (On-Page, Off Page & Technical)", included: true },
      { name: "Backlinks-200/Month", included: true },
      { name: "Blog-1/Month (Content Blog)", included: true },
      { name: "Social Media Marketing (Facebook+Instagram)", included: true },
      { name: "15 Digital Banners/Month", included: true },
      { name: "Advanced Lead Generation System", included: true },
      { name: "Logo Design", included: true },
      { name: "Ads Setup (Meta & Google)", included: true },
      { name: "Google Business Profile", included: true },
      { name: "Payment Gateway Integration", included: true },
      { name: "SSL Certificate", included: true },
      { name: "24/7 Tech Support", included: true },
    ],
  },
  {
    id: "fullstack-premium",
    name: "Premium Full Stack Website Package",
    price: "₹5999",
    priceNote: "+GST/Month",
    popular: false,
    category: "Full Stack Website Services",
    description: "Enterprise-level full stack solution with maximum features for e-commerce, marketing, and lead generation",
    features: [
      { name: "Domain + Hosting", included: true },
      { name: "Enterprise Full Stack Website Development", included: true },
      { name: "Complete E-Commerce Platform", included: true },
      { name: "Advanced Multi-User Admin Panel", included: true },
      { name: "Full SEO (On-Page, Off Page & Technical)", included: true },
      { name: "Backlinks-300/Month", included: true },
      { name: "Blog-2/Month (Content Blog)", included: true },
      { name: "Social Media Marketing (Facebook+Instagram)", included: true },
      { name: "30 Digital Banners/Month", included: true },
      { name: "2 Video Content/Month", included: true },
      { name: "Advanced Lead Generation & CRM Integration", included: true },
      { name: "Logo Design & Branding", included: true },
      { name: "Ads Setup (Meta & Google)", included: true },
      { name: "Google Business Profile Optimization", included: true },
      { name: "Multiple Payment Gateway Integration", included: true },
      { name: "SSL Certificate & Security", included: true },
      { name: "Priority 24/7 Tech Support", included: true },
    ],
  },
];

export const logoDesigningPackage: Package = {
  id: "logo-designing",
  name: "Logo Designing",
  price: "₹49",
  priceNote: "Only",
  category: "Design Services",
  description: "Professional logo design at an unbeatable price",
  image: "https://www.pepperanimation.com/wp-content/uploads/2019/04/redback-logo-design-1024x353.jpg",
  features: [
    { name: "Professional Logo Design", included: true },
    { name: "Multiple Design Concepts", included: true },
    { name: "High Resolution Files", included: true },
    { name: "Source Files Included", included: true },
    { name: "Quick Turnaround", included: true },
  ],
};

export const gmbPackage: Package = {
  id: "google-my-business",
  name: "Google My Business / GBP",
  price: "₹199",
  priceNote: "Only",
  category: "Digital Marketing Services",
  description: "Get your business listed and optimized on Google My Business",
  image: "https://www.intellectoutsource.com/blog/images/adding-products-in-google-business-profile.jpg",
  features: [
    { name: "Google Business Profile Setup", included: true },
    { name: "Business Information Optimization", included: true },
    { name: "Photos & Posts Management", included: true },
    { name: "Review Management", included: true },
    { name: "Local SEO Optimization", included: true },
  ],
};

export function getAllPackages(): Package[] {
  return [...websiteServicesPackages, ...websiteLeadsPackages, ...ecommercePackages, ...socialSeoGmbPackages, ...oneTimeSetupPackages, ...fullStackWebsitePackages];
}

