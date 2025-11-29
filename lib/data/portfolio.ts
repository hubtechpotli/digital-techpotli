// Import helper function and all websites
import { createProjectFromUrl, allWebsitesByCategory, getCategoryImage } from './all-websites'

export interface PortfolioProject {
  id: string
  title: string
  description: string
  category: string
  image: string
  liveUrl: string
  technologies: string[]
  features: string[]
  client: string
  duration: string
  results: {
    metric: string
    value: string
    description: string
  }[]
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "ashish-dj",
    title: "Ashish DJ",
    description: "Aa vibrant and dynamic website for a professional DJ service showcasing music events, party planning, and entertainment services with modern design and interactive elements.",
    category: "Entertainment Services",
    image: "/Screenshot 2025-09-06 205139.png",
    liveUrl: "https://dj-ashish.vercel.app/",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    features: [
      "Professional DJ service showcase",
      "Music events and party planning",
      "Entertainment services portfolio",
      "Modern design and interactive elements",
      "Dynamic and vibrant user interface"
    ],
    client: "Ashish DJ Services",
    duration: "1 week",
    results: [
      {
        metric: "Development Time",
        value: "1 Week",
        description: "Fast delivery with modern design"
      },
      {
        metric: "Technology Stack",
        value: "Next.js + React",
        description: "Modern web technologies"
      },
      {
        metric: "Design Approach",
        value: "Dynamic & Vibrant",
        description: "Interactive elements and modern UI"
      }
    ]
  },
  {
    id: "all-solution",
    title: "All Solution",
    description: "A comprehensive platform showcasing professional accounting and tax services including GST registration, tax return filing, UDYAM registration, and comprehensive bookkeeping services for businesses.",
    category: "Business Services",
    image: "/Screenshot 2025-09-06 204258.png",
    liveUrl: "https://www.allsolution.me/",
    technologies: ["Next.js", "React", "Node.js", "Tailwind CSS"],
    features: [
      "Comprehensive service portfolio with 6 main service categories",
      "Special launch offer promotion with up to 50% OFF",
      "WhatsApp integration for instant consultation booking",
      "Professional service categorization and detailed descriptions",
      "Responsive design optimized for all devices"
    ],
    client: "All Solution Accounting Services",
    duration: "2 weeks",
    results: [
      {
        metric: "Services Showcased",
        value: "6 Categories",
        description: "Complete accounting and tax services portfolio"
      },
      {
        metric: "Client Engagement",
        value: "WhatsApp Integration",
        description: "Direct consultation booking system"
      },
      {
        metric: "Special Offers",
        value: "50% OFF",
        description: "Launch promotion to drive conversions"
      }
    ]
  },
  {
    id: "line-logic-pune",
    title: "Line Logic Pune",
    description: "A comprehensive website showcasing professional fiber optic installation and networking services. Built to highlight their expertise in optical fiber solutions, installation services, and maintenance.",
    category: "Technology Services",
    image: "/image.png",
    liveUrl: "https://www.linelogicpune.info/",
    technologies: ["Next.js", "React", "Node.js", "Tailwind CSS"],
    features: [
      "Service portfolio with 10 comprehensive offerings",
      "Special launch offer promotion with 50% discount",
      "WhatsApp integration for instant contact",
      "Professional service categorization and descriptions",
      "Responsive design for all devices"
    ],
    client: "Line Logic Pune",
    duration: "2 weeks",
    results: [
      {
        metric: "Services Showcased",
        value: "10 Services",
        description: "Complete fiber optic solutions portfolio"
      },
      {
        metric: "Lead Generation",
        value: "WhatsApp Integration",
        description: "Direct contact and inquiry system"
      },
      {
        metric: "Special Offers",
        value: "50% OFF",
        description: "Launch promotion for new clients"
      }
    ]
  },
  
  {
    id: "al-kohinoor-caterers",
    title: "Al Kohinoor Caterers",
    description: "Premium catering excellence specializing in Biryani, Noodles & Sweets. A feast for every occasion with 15+ years of experience serving 500+ happy celebrations and 10K+ dishes.",
    category: "Food & Beverage",
    image: "/Screenshot 2025-09-30 001818.png",
    liveUrl: "https://www.alkohinoorcaterers.shop/",
    technologies: ["Next.js", "React", "Tailwind CSS", "FSSAI Integration"],
    features: [
      "Premium catering services for weddings, parties & festivals",
      "Signature Hyderabadi Biryani and Indo-Chinese Noodles",
      "Traditional Indian Sweets and authentic regional thalis",
      "15+ years of catering excellence",
      "FSSAI approved and food safety certified",
      "Home delivery and event management services"
    ],
    client: "Al Kohinoor Caterers",
    duration: "3 weeks",
    results: [
      {
        metric: "Years of Excellence",
        value: "15+",
        description: "Decades of catering experience"
      },
      {
        metric: "Happy Celebrations",
        value: "500+",
        description: "Successful events catered"
      },
      {
        metric: "Dishes Served",
        value: "10K+",
        description: "Cumulative dishes delivered"
      },
      {
        metric: "Customer Rating",
        value: "4.9/5",
        description: "Excellent customer satisfaction"
      }
    ]
  },
  {
    id: "royal-dry-cleaners",
    title: "Royal Dry Cleaners",
    description: "Premium dry cleaning and laundry services website with convenient pickup and delivery. Features professional garment care, eco-friendly solutions, and royal treatment for customers across Delhi and surrounding areas.",
    category: "Service Industry",
    image: "/Screenshot 2025-10-01 105432.png",
    liveUrl: "https://www.royaldrycleaner.shop/",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    features: [
      "Premium dry cleaning and laundry services",
      "Free pickup and delivery service",
      "24-48 hour turnaround time",
      "Expert stain removal and garment care",
      "Eco-friendly cleaning solutions",
      "Multiple service plans (Basic, Premium, Luxury)",
      "35+ years of experience showcase",
      "Contactless service options"
    ],
    client: "Royal Dry Cleaners",
    duration: "3 weeks",
    results: [
      {
        metric: "Years of Experience",
        value: "35+",
        description: "Decades of trusted service in Delhi"
      },
      {
        metric: "Happy Customers",
        value: "10K+",
        description: "Satisfied customers across multiple cities"
      },
      {
        metric: "Cities Covered",
        value: "4+",
        description: "Delhi, Gurugram, Faridabad & Noida"
      },
      {
        metric: "Service Plans",
        value: "3 Tiers",
        description: "Basic, Premium, and Luxury service options"
      }
    ]
  },
  {
    id: "shree-balaji-wifi",
    title: "Shree Balaji Wifi Pvt Ltd",
    description: "A comprehensive internet service provider website showcasing fiber-optic internet plans, services, and customer solutions. Features premium plans with speeds up to 1 Gbps, OTT bundles, gaming optimization, and enterprise-grade security for businesses and homes.",
    category: "Telecommunications & Internet Services",
    image: "/Screenshot 2025-10-03 111053.png",
    liveUrl: "https://shree-balaji-wifi-pvt-ltd.vercel.app/",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    features: [
      "Premium internet plans (100 Mbps to 1 Gbps)",
      "Fiber-optic technology showcase",
      "OTT bundle integration (Netflix, Prime Video, Disney+)",
      "Gaming optimization with low latency",
      "Enterprise-grade security features",
      "24/7 customer support portal",
      "Smart home integration capabilities",
      "Business solutions for offices",
      "Real-time network status monitoring",
      "Customer testimonials and ratings"
    ],
    client: "Shree Balaji Wifi Pvt Ltd",
    duration: "2 weeks",
    results: [
      {
        metric: "Network Uptime",
        value: "99.9%",
        description: "Guaranteed network reliability and stability"
      },
      {
        metric: "Customer Support",
        value: "24/7",
        description: "Round-the-clock expert technical support"
      },
      {
        metric: "Happy Customers",
        value: "50K+",
        description: "Growing customer base with high satisfaction rates"
      },
      {
        metric: "Cities Covered",
        value: "100+",
        description: "Expanding network coverage across multiple cities"
      },
      {
        metric: "Max Speed",
        value: "1 Gbps",
        description: "Symmetrical speeds with fiber-optic technology"
      },
      {
        metric: "Customer Rating",
        value: "4.9/5",
        description: "Excellent customer satisfaction scores"
      }
    ]
  },
  {
    id: "jai-sadguru-enterprises",
    title: "Jai Sadguru Enterprises",
    description: "A comprehensive accounting and tax services website offering GST registration, tax filing, UDYAM registration, and business compliance solutions. Features professional service offerings, client consultations, and special promotional campaigns for new businesses seeking professional accounting support.",
    category: "Accounting & Tax Services",
    image: "/Screenshot 2025-10-03 111654.png",
    liveUrl: "https://jai-sadguruenterprises.vercel.app/",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    features: [
      "GST registration and compliance services",
      "Income tax return filing (ITR-1 to ITR-7)",
      "TDS return filing and refund processing",
      "UDYOM registration for MSME benefits",
      "Business registration and setup guidance",
      "Digital signature certificate services",
      "Tax planning and optimization consultation",
      "24/7 professional support",
      "Special offer campaigns for new clients",
      "Comprehensive compliance documentation"
    ],
    client: "Jai Sadguru Enterprises",
    duration: "2 weeks",
    results: [
      {
        metric: "Service Coverage",
        value: "100%",
        description: "Complete GST and tax compliance services"
      },
      {
        metric: "Client Support",
        value: "24/7",
        description: "Round-the-clock professional assistance"
      },
      {
        metric: "Registration Services",
        value: "6 Types",
        description: "GST, Income Tax, TDS, UDYOM and business registrations"
      },
      {
        metric: "Quality Guarantee",
        value: "100%",
        description: "Professional service quality assurance"
      },
      {
        metric: "New Client Offer",
        value: "30% OFF",
        description: "Limited-time discount for new clients"
      },
      {
        metric: "Compliance Focus",
        value: "100%",
        description: "Ensuring complete regulatory compliance"
      }
    ]
  },
  {
    id: "shre-laxhmi-services",
    title: "Shre Laxhmi Services Pvt. Ltd.",
    description: "A comprehensive internet service provider website offering high-speed broadband solutions for homes and businesses. Features fiber-optic internet plans with speeds up to 1 Gbps, OTT bundles, gaming optimization, and enterprise-grade connectivity solutions across multiple cities in India.",
    category: "Internet Service Provider",
    image: "/Screenshot 2025-10-03 112210.png",
    liveUrl: "https://shre-laxhmi.vercel.app/",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    features: [
      "High-speed broadband plans (100 Mbps to 1 Gbps)",
      "Fiber-optic internet technology",
      "Premium OTT bundles (Netflix, Prime Video, Disney+, Hotstar)",
      "Gaming optimization with ultra-low latency",
      "Free WiFi 6E routers with mesh support",
      "Same-day installation service",
      "24/7 expert technical support",
      "Enterprise-grade security features",
      "Smart home integration capabilities",
      "Multi-city coverage across India"
    ],
    client: "Shre Laxhmi Services Pvt. Ltd.",
    duration: "2 weeks",
    results: [
      {
        metric: "Years Serving India",
        value: "10+",
        description: "Over a decade of trusted internet services"
      },
      {
        metric: "Cities Connected",
        value: "25+",
        description: "Growing network coverage across multiple cities"
      },
      {
        metric: "Active Users",
        value: "50K+",
        description: "Large and growing customer base"
      },
      {
        metric: "Network Uptime",
        value: "99.9%",
        description: "Reliable network performance and stability"
      },
      {
        metric: "Customer Support",
        value: "24/7",
        description: "Round-the-clock expert technical assistance"
      },
      {
        metric: "Customer Rating",
        value: "4.9/5",
        description: "Excellent customer satisfaction scores"
      }
    ]
  },
  {
    id: "lalbabu-cable",
    title: "Lalbabu Cable",
    description: "A comprehensive cable TV and internet service provider website offering blazing-fast fiber-optic internet, cable TV services, and premium OTT bundles. Features ultra-fast speeds up to 1 Gbps, WiFi 6 routers, enterprise security, and gaming optimization for homes and businesses across 50+ cities.",
    category: "Cable TV & Internet Services",
    image: "/Screenshot 2025-10-03 112403.png",
    liveUrl: "https://lalbabu-cable.vercel.app/",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    features: [
      "Blazing-fast fiber-optic internet up to 1 Gbps",
      "Cable TV services integration",
      "Premium OTT bundles (Netflix, Prime Video, Disney+, Hotstar)",
      "Free WiFi 6 routers with lifetime warranty",
      "Enterprise-grade security and encryption",
      "Ultra-low latency gaming optimization",
      "Custom plan recommendations",
      "24/7 expert technical support",
      "Nationwide coverage across 50+ cities",
      "Same-day installation and setup"
    ],
    client: "Lalbabu Cable TV ISP",
    duration: "2 weeks",
    results: [
      {
        metric: "Internet Speeds",
        value: "1 Gbps",
        description: "Ultra-fast fiber-optic broadband"
      },
      {
        metric: "Network Latency",
        value: "< 5ms",
        description: "Ultra-low latency for professional gaming"
      },
      {
        metric: "Support Response",
        value: "< 2 min",
        description: "Premium 24/7 expert support"
      },
      {
        metric: "Coverage Area",
        value: "50+ Cities",
        description: "Nationwide expansion across India"
      },
      {
        metric: "Customer Rating",
        value: "4.8/5",
        description: "Excellent customer satisfaction"
      },
      {
        metric: "Happy Customers",
        value: "100+",
        description: "Growing community of satisfied users"
      }
    ]
  },
  {
    id: "mk-enterprise",
    title: "MK Enterprise Services Pvt. Ltd.",
    description: "A comprehensive internet service provider website for modern India offering ultra-fast, reliable, and secure broadband solutions. Features instant activation, pan-India coverage, no data caps, 24/7 support, blazing-fast speeds up to 1 Gbps, and premium OTT bundles for homes and businesses.",
    category: "Internet Service Provider",
    image: "/Screenshot 2025-10-03 112808.png",
    liveUrl: "https://mk-enterprise.vercel.app/",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    features: [
      "Ultra-fast broadband up to 1 Gbps speeds",
      "Instant activation with no delays",
      "Pan-India coverage and expansion",
      "No data caps with unlimited usage",
      "Premium OTT bundles (Netflix, Prime Video, Disney+, Hotstar)",
      "Free WiFi 6E routers with mesh support",
      "Same-day professional installation",
      "24/7 expert technical support",
      "Advanced security and parental controls",
      "Gaming optimization with ultra-low latency"
    ],
    client: "MK Enterprise Services Pvt. Ltd.",
    duration: "2 weeks",
    results: [
      {
        metric: "Network Uptime",
        value: "99.99%",
        description: "Exceptional reliability and performance"
      },
      {
        metric: "Top Speed",
        value: "1 Gbps",
        description: "Ultra-fast fiber-optic broadband"
      },
      {
        metric: "Active Users",
        value: "10K+",
        description: "Growing community of satisfied customers"
      },
      {
        metric: "Customer Support",
        value: "24/7",
        description: "Round-the-clock expert assistance"
      },
      {
        metric: "Happy Customers",
        value: "1M+",
        description: "Large successful user base"
      },
      {
        metric: "Customer Rating",
        value: "4.9/5",
        description: "Excellent customer satisfaction scores"
      }
    ]
  },
  {
    id: "cng-international",
    title: "CNG International",
    description: "A comprehensive clean energy solutions website focused on CNG technology for sustainable power. Features innovative CNG solutions, zero emissions technology, sustainable infrastructure, vehicle sales/rental, fuel delivery services, and building sustainable communities through clean energy innovation.",
    category: "Clean Energy Solutions",
    image: "/Screenshot 2025-10-03 113000.png",
    liveUrl: "https://cng-international.vercel.app/",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    features: [
      "Clean energy solutions with CNG technology",
      "Zero emissions technology showcase",
      "Sustainable infrastructure development",
      "Premium CNG vehicles and equipment sales",
      "Flexible CNG vehicle rental solutions",
      "Reliable CNG fuel delivery services",
      "Nationwide coverage and tracking",
      "Comprehensive warranty and after-sales support",
      "Motor care services integration",
      "CNG kit fitment services"
    ],
    client: "CNG International",
    duration: "2 weeks",
    results: [
      {
        metric: "Efficiency Rate",
        value: "98%",
        description: "High-efficiency CNG energy solutions"
      },
      {
        metric: "Emissions",
        value: "0%",
        description: "Zero emissions technology"
      },
      {
        metric: "Projects Completed",
        value: "500+",
        description: "Successful clean energy implementations"
      },
      {
        metric: "Customer Support",
        value: "24/7",
        description: "Round-the-clock technical assistance"
      },
      {
        metric: "Emission Reduction",
        value: "100%",
        description: "Complete elimination of harmful emissions"
      },
      {
        metric: "Cost Savings",
        value: "55%",
        description: "Significant operational cost reductions"
      }
    ]
  },
  {
    id: "travel-management-virid",
    title: "TourTravel & Tours",
    description: "A comprehensive travel management platform offering personalized adventures, luxury retreats, and cultural journeys worldwide. Features custom itinerary planning, adventure escapes, photography tours, nature immersion experiences, and 24/7 travel support. From adrenaline-pumping adventures to peaceful cultural immersions, crafting personalized travel experiences that create lasting memories.",
    category: "Travel & Tourism",
    image: "/Screenshot 2025-10-03 113339.png",
    liveUrl: "https://travel-management-virid.vercel.app/",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    features: [
      "Personalized travel itinerary planning",
      "Adventure escapes and mountain expeditions",
      "Luxury retreats and premium experiences",
      "Cultural journeys and historic site visits",
      "Nature immersion and eco-friendly adventures",
      "Photography tours with guided expeditions",
      "Custom adventure tailoring",
      "24/7 travel support and assistance",
      "Real-time adventure tracking",
      "Multi-destination package options"
    ],
    client: "TourTravel & Tours",
    duration: "2 weeks",
    results: [
      {
        metric: "Adventures Completed",
        value: "15K+",
        description: "Successful adventure experiences delivered"
      },
      {
        metric: "Destinations Covered",
        value: "85+",
        description: "Global destination network"
      },
      {
        metric: "Customer Satisfaction",
        value: "98%",
        description: "Excellent traveler satisfaction rates"
      },
      {
        metric: "Travel Support",
        value: "24/7",
        description: "Round-the-clock assistance"
      },
      {
        metric: "Adventure Intensity",
        value: "5.0/5",
        description: "Premium adventure experiences"
      },
      {
        metric: "Custom Planning",
        value: "100%",
        description: "Personalized journey creation"
      }
    ]
  },
  {
    id: "gaur-cable-excitel",
    title: "Gaur Cable Excitel Broadband Pvt Ltd",
    description: "A futuristic neural internet platform featuring quantum-grade connectivity solutions. Features neural bandwidth plans, quantum encryption fortresses, sub-millisecond latency, AI-powered support, and military-grade security. Revolutionary neural internet protocol with predictive analytics and holographic support capabilities.",
    category: "Neural Internet Solutions",
    image: "/Screenshot 2025-10-03 113519.png",
    liveUrl: "https://www.gaurcable.live/",
    technologies: ["Next.js", "React", "Tailwind CSS", "Quantumnet"],
    features: [
      "Neural internet protocol implementation",
      "Quantum-grade fiber infrastructure",
      "Sub-millisecond latency technology",
      "Military-grade quantum encryption",
      "AI-powered neural support system",
      "Predictive analytics and cloud integration",
      "Neural gaming protocol optimization",
      "Holographic support capabilities",
      "Instant neural link activation",
      "Quantum mesh router technology"
    ],
    client: "Gaur Cable Excitel Broadband Pvt Ltd",
    duration: "2 weeks",
    results: [
      {
        metric: "Quantum Uptime",
        value: "99.9%",
        description: "Guaranteed neural connectivity with quantum redundancy"
      },
      {
        metric: "Quantum Latency",
        value: "0.001ms",
        description: "Lightning-fast neural response times"
      },
      {
        metric: "Neural Connections",
        value: "100K+",
        description: "Active quantum neural links"
      },
      {
        metric: "Security Fortress",
        value: "99.99%",
        description: "Military-grade protection levels"
      },
      {
        metric: "Neural Support",
        value: "24/7",
        description: "AI-powered assistance available"
      },
      {
        metric: "Quantum Nodes",
        value: "100+",
        description: "Expanding neural network infrastructure"
      }
    ]
  },
  {
    id: "childwelfare-foundation",
    title: "ChildWelfare Foundation",
    description: "A comprehensive NGO website dedicated to child welfare, education, health, and protection. Features impact stories, program showcases, volunteer engagement, donation tracking, and community outreach initiatives. Focuses on creating safe spaces, opportunities, and hope for every child's journey ahead through education, nutrition, safety, and youth participation programs.",
    category: "Nonprofit & Social Impact",
    image: "/Screenshot 2025-10-03 113844.png",
    liveUrl: "https://ngo-website-cyan.vercel.app/",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    features: [
      "Child welfare program showcases",
      "Impact stories and success metrics",
      "Digital classroom implementations",
      "Volunteer engagement platform",
      "Donation tracking and campaign goals",
      "Health and nutrition program management",
      "Safety and protection initiatives",
      "Youth leadership development",
      "Community event management",
      "Education support systems"
    ],
    client: "ChildWelfare Foundation",
    duration: "2 weeks",
    results: [
      {
        metric: "Children in School",
        value: "1,200+",
        description: "Children accessing education programs"
      },
      {
        metric: "Meals Served",
        value: "15,000+",
        description: "Nutritious meals provided to children"
      },
      {
        metric: "Children Protected",
        value: "300+",
        description: "Children in safe shelters and protection"
      },
      {
        metric: "Youth Leaders",
        value: "50+",
        description: "Youth participating in leadership programs"
      },
      {
        metric: "Campaign Progress",
        value: "72%",
        description: "Current fundraising goal achievement"
      },
      {
        metric: "Community Engagement",
        value: "High",
        description: "Strong volunteer and donor participation"
      }
    ]
  },
  {
    id: "susangi-business-services",
    title: "Susangi Business Services Pvt. Ltd.",
    description: "A comprehensive telecom infrastructure and business services website covering multiple states across India. Features OFC laying, installation, maintenance, project management, security solutions, and network infrastructure services. Provides expert connectivity solutions with over 20 years of industry experience across Delhi NCR, Haryana, UP, Bihar, Odisha, and Rajasthan.",
    category: "Telecom Infrastructure & Business Services",
    image: "/Screenshot 2025-10-03 114031.png",
    liveUrl: "https://www.susangibusinessservice.co.in/",
    technologies: ["Next.js", "React", "Tailwind CSS", "Business Solutions"],
    features: [
      "OFC laying and installation services",
      "Telecom infrastructure maintenance",
      "Project management and support",
      "Security camera and surveillance solutions",
      "Complete network infrastructure setup",
      "Technology integration services",
      "24/7 technical support",
      "Multi-state coverage operations",
      "Professional engineering teams",
      "Quality assurance processes"
    ],
    client: "Susangi Business Services Pvt. Ltd.",
    duration: "2 weeks",
    results: [
      {
        metric: "Years Experience",
        value: "20+",
        description: "Decades of telecom infrastructure expertise"
      },
      {
        metric: "States Covered",
        value: "6+",
        description: "Multi-state operational presence"
      },
      {
        metric: "Projects Completed",
        value: "1000+",
        description: "Successful infrastructure deployments"
      },
      {
        metric: "Support Availability",
        value: "24/7",
        description: "Round-the-clock technical assistance"
      },
      {
        metric: "Partnerships",
        value: "3+",
        description: "Strategic business alliances"
      },
      {
        metric: "Client Rating",
        value: "4.9/5",
        description: "Excellent customer satisfaction"
      }
    ]
  },
  {
    id: "kamal-travels",
    title: "Kamal Travels",
    description: "A premium bus rental services platform offering luxury buses for corporate trips, school tours, weddings, and more. Features local city rentals, outstation trips, corporate events, wedding celebrations, school/college trips, and luxury travel options. Provides comfortable AC buses with experienced drivers, flexible timings, and 24/7 support across multiple cities.",
    category: "Transportation & Bus Rental Services",
    image: "/Screenshot 2025-10-03 114342.png",
    liveUrl: "https://www.kamaltravels.live/",
    technologies: ["Next.js", "React", "Tailwind CSS", "Transportation"],
    features: [
      "Local city rental services",
      "Outstation trip packages",
      "Corporate and event bus rentals",
      "Wedding and celebration services",
      "School and college trip packages",
      "Luxury and premium bus offerings",
      "GPS tracking and monitoring",
      "Onboard entertainment systems",
      "24/7 customer support",
      "Multiple pickup point options"
    ],
    client: "Kamal Travels",
    duration: "2 weeks",
    results: [
      {
        metric: "Trips Completed",
        value: "500+",
        description: "Successful travel bookings delivered"
      },
      {
        metric: "Cities Covered",
        value: "100+",
        description: "Service network across India"
      },
      {
        metric: "Happy Customers",
        value: "50K+",
        description: "Satisfied travelers and clients"
      },
      {
        metric: "Support Availability",
        value: "24/7",
        description: "Round-the-clock assistance"
      },
      {
        metric: "Client Satisfaction",
        value: "99.8%",
        description: "Excellent service ratings"
      },
      {
        metric: "Brands Served",
        value: "150+",
        description: "Corporate clients served"
      }
    ]
  },
  {
    id: "govind-netralaya",
    title: "Govind Netralaya & Fertility Centre",
    description: "A comprehensive multi-super speciality hospital website featuring 8 super specialities including ophthalmology, IVF & fertility, cardiology, gastroenterology, nephrology, neurology, pulmonology, and diagnostics. Features advanced medical services, expert doctors, modern technology, 24/7 emergency care, and affordable healthcare solutions across Sehore, Madhya Pradesh.",
    category: "Healthcare & Medical Services",
    image: "/Screenshot 2025-10-03 114517.png",
    liveUrl: "https://govind-eye-hostpital.vercel.app/",
    technologies: ["Next.js", "React", "Tailwind CSS", "Medical Services"],
    features: [
      "Multi-speciality healthcare services",
      "Advanced ophthalmology and eye surgery",
      "IVF and fertility treatment programs",
      "Cardiology and heart care services",
      "Gastroenterology and liver care",
      "Nephrology and dialysis services",
      "Neurology and brain care",
      "Pulmonology and respiratory care",
      "24/7 emergency care services",
      "Comprehensive diagnostic facilities"
    ],
    client: "Govind Netralaya & Fertility Centre",
    duration: "2 weeks",
    results: [
      {
        metric: "Years Experience",
        value: "10+",
        description: "Decades of trusted healthcare service"
      },
      {
        metric: "Super Specialities",
        value: "8",
        description: "Comprehensive medical specialties"
      },
      {
        metric: "Successful Surgeries",
        value: "10,000+",
        description: "Cataract operations completed"
      },
      {
        metric: "IVF Success Stories",
        value: "500+",
        description: "Fertility treatment successes"
      },
      {
        metric: "Patient Satisfaction",
        value: "98%",
        description: "Excellent healthcare ratings"
      },
      {
        metric: "Emergency Care",
        value: "24/7",
        description: "Round-the-clock medical assistance"
      }
    ]
  },
  {
    id: "atharva-tours-travels",
    title: "Atharva Tours & Travels",
    description: "A comprehensive car rental and travel services platform focused on Maharashtra region. Features reliable car services, fixed-price routes between Nashik-Mumbai-Pune, outstation tours, professional drivers, and transparent pricing. Provides premium travel services with unmatched comfort, 24/7 support, and well-maintained vehicles across Maharashtra and beyond.",
    category: "Travel & Car Rental Services",
    image: "/Screenshot 2025-10-03 115016.png",
    liveUrl: "https://atharva-tours-travels.vercel.app/",
    technologies: ["Next.js", "React", "Tailwind CSS", "Car Rental"],
    features: [
      "Fixed-price car rental services",
      "Popular routes (Nashik-Mumbai-Pune)",
      "Outstation tour packages",
      "Professional driver services",
      "24/7 customer support",
      "Transparent pricing structure",
      "GPS tracking and safety features",
      "AC and non-AC vehicle options",
      "Well-maintained car fleet",
      "Inter-state service coverage"
    ],
    client: "Atharva Tours & Travels",
    duration: "2 weeks",
    results: [
      {
        metric: "Happy Customers",
        value: "1000+",
        description: "Satisfied travelers across Maharashtra"
      },
      {
        metric: "Customer Support",
        value: "24/7",
        description: "Round-the-clock assistance"
      },
      {
        metric: "Safety Rating",
        value: "100%",
        description: "Safe and secure travel guarantee"
      },
      {
        metric: "Provider Rating",
        value: "4.9/5",
        description: "Excellent service ratings"
      },
      {
        metric: "Service Areas",
        value: "All Maharashtra",
        description: "Comprehensive regional coverage"
      },
      {
        metric: "Route Rating",
        value: "4.8/5",
        description: "Popular route satisfaction"
      }
    ]
  },
  {
    id: "aarna-signages",
    title: "Aarna Signages",
    description: "Complete printing, signage & branding solutions website showcasing professional services including LED signages, fabrication work, screen printing, offset printing, digital printing, and event & exhibition services. Serving Delhi NCR with high-quality signage solutions since 2001.",
    category: "Printing & Signage Services",
    image: "/Screenshot 2025-10-03 115016.png",
    liveUrl: "https://aarna-signages.vercel.app/",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    features: [
      "Complete printing and signage solutions",
      "LED signages and digital displays",
      "Fabrication services (Metal, Acrylic, SS, MS)",
      "Screen printing, offset printing, digital printing",
      "Eco solvent and solvent printing",
      "Laser cutting services",
      "Events & exhibition signage",
      "Government tender projects",
      "Ready-to-serve items (Roll-up stands, Canopy, etc.)",
      "24/7 customer support"
    ],
    client: "Aarna Signages",
    duration: "2 weeks",
    results: [
      {
        metric: "Years Serving",
        value: "24+",
        description: "Trusted signage solutions since 2001"
      },
      {
        metric: "Service Categories",
        value: "12+",
        description: "Comprehensive printing and signage services"
      },
      {
        metric: "Coverage Area",
        value: "Delhi NCR",
        description: "Active presence across Delhi NCR region"
      },
      {
        metric: "Government Projects",
        value: "Active",
        description: "Engaged in government tender projects"
      },
      {
        metric: "Client Satisfaction",
        value: "High",
        description: "Reliable and consistent service delivery"
      },
      {
        metric: "Service Quality",
        value: "Premium",
        description: "High-quality printing and fabrication work"
      }
    ]
  }
]

// Finance category images (alternating)
const financeImages = [
  "https://png.pngtree.com/background/20231031/original/pngtree-a-3d-mobile-phone-coins-money-and-growth-graph-depict-financial-picture-image_5814477.jpg",
  "https://images2.alphacoders.com/139/thumbbig-1393528.webp"
]

// Generate projects from all websites
const additionalProjects: PortfolioProject[] = []

// Add all websites from each category
Object.entries(allWebsitesByCategory).forEach(([category, websites]) => {
  websites.forEach((website, index) => {
    // Skip if already exists in portfolioProjects
    if (!portfolioProjects.find(p => p.id === website.id)) {
      const project = createProjectFromUrl(
        website.id,
        website.title,
        website.url,
        category
      )
      
      // Set finance images alternatively (override category image)
      if (category === "Finance & Loans") {
        project.image = financeImages[index % financeImages.length]
      }
      // Otherwise, the category image is already set by createProjectFromUrl
      
      additionalProjects.push(project as PortfolioProject)
    }
  })
})

// Combine existing and new projects
export const allPortfolioProjects: PortfolioProject[] = [
  ...portfolioProjects,
  ...additionalProjects
]

// Update ALL project images to use category-specific images
// This replaces ALL Screenshot images and default images with category-appropriate images
const financeProjectIds = ["ramsha-finance", "shivalix-forex", "paras-loans", "britto-associates"]
const natrajPencilImage = "https://img3.exportersindia.com/product_images/bc-full/2019/12/4636108/natraj-pencil-1577103230-5219224.jpeg"
const dryCleanerImage = "https://tse4.mm.bing.net/th/id/OIP.b6U4R-S_VQumVGXtBZxXNgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"

allPortfolioProjects.forEach((project, index) => {
  // Special handling for finance projects - use alternating finance images
  if (project.category === "Finance & Loans" && financeProjectIds.includes(project.id)) {
    const financeIndex = financeProjectIds.indexOf(project.id)
    project.image = financeImages[financeIndex % financeImages.length]
  }
  // Special handling for Natraj Pencil project - use specific image
  else if (project.id === "natraj-pencil-packing") {
    project.image = natrajPencilImage
  }
  // Special handling for Royal Dry Cleaners project - use specific image
  else if (project.id === "royal-dry-cleaners") {
    project.image = dryCleanerImage
  }
  // For ALL other projects, replace any image (including Screenshot images) with category-specific image
  else {
    // Get category-specific image - this will replace "/Screenshot 2025-10-03 115016.png" and all other Screenshot images
    project.image = getCategoryImage(project.category)
  }
})

// Verify all websites are included
const totalWebsites = Object.values(allWebsitesByCategory).reduce((sum, websites) => sum + websites.length, 0)
const existingProjectIds = new Set(portfolioProjects.map(p => p.id))
const newProjectIds = new Set(additionalProjects.map(p => p.id))
const allProjectIds = new Set([...existingProjectIds, ...newProjectIds])

// Debug: Log the count (only in development)
if (typeof window === 'undefined' && process.env.NODE_ENV === 'development') {
  console.log(`[Portfolio] Total websites in data: ${totalWebsites}`)
  console.log(`[Portfolio] Total projects: ${allPortfolioProjects.length}`)
  console.log(`[Portfolio] Original projects: ${portfolioProjects.length}`)
  console.log(`[Portfolio] Additional projects: ${additionalProjects.length}`)
  console.log(`[Portfolio] Unique project IDs: ${allProjectIds.size}`)
  console.log(`[Portfolio] Categories: ${Array.from(new Set(allPortfolioProjects.map(p => p.category))).join(', ')}`)
  
  // Check for missing websites
  const missingWebsites: string[] = []
  Object.entries(allWebsitesByCategory).forEach(([category, websites]) => {
    websites.forEach(website => {
      if (!allProjectIds.has(website.id)) {
        missingWebsites.push(`${website.id} (${category})`)
      }
    })
  })
  if (missingWebsites.length > 0) {
    console.warn(`[Portfolio] Missing websites (${missingWebsites.length}):`, missingWebsites.slice(0, 10))
  }
}

// Export categories for filtering
export const portfolioCategories = [
  "All",
  ...Array.from(new Set(allPortfolioProjects.map(p => p.category)))
].sort()
