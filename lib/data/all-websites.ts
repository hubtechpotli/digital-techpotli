// Category-specific images mapping
const categoryImages: Record<string, string> = {
  "Travel & Tourism": "https://www.maharanacab.com/wp-content/uploads/2018/09/india-tour-package.jpg",
  "Travel & Car Rental Services": "https://www.maharanacab.com/wp-content/uploads/2018/09/india-tour-package.jpg",
  "Transportation & Bus Rental Services": "https://www.maharanacab.com/wp-content/uploads/2018/09/india-tour-package.jpg",
  "Healthcare & Hospital": "https://tse3.mm.bing.net/th/id/OIP.K-3ae7_d6jeS7IQjh_MW_QHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
  "Healthcare & Medical Services": "https://tse3.mm.bing.net/th/id/OIP.K-3ae7_d6jeS7IQjh_MW_QHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
  "Internet & Broadband Services": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop",
  "Internet Service Provider": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop",
  "Telecommunications & Internet Services": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop",
  "Telecom Infrastructure & Business Services": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop",
  "Cable TV & Internet Services": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop",
  "Business & IT Services": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
  "Business Services": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
  "Technology Services": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop",
  "Service Industry": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
  "Finance & Loans": "https://png.pngtree.com/background/20231031/original/pngtree-a-3d-mobile-phone-coins-money-and-growth-graph-depict-financial-picture-image_5814477.jpg",
  "Furniture & Interior": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=600&fit=crop",
  "Education": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=600&fit=crop",
  "Food & Catering": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=600&fit=crop",
  "Food & Beverage": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=600&fit=crop",
  "Home Services": "https://www.peerbits.com/static/3905412186deff06a07271c47b3c60df/e73c7/on-demand-home-services-main.jpg",
  "Real Estate": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop",
  "Security Services": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=600&fit=crop",
  "Electronics": "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200&h=600&fit=crop",
  "Jewelry": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&h=600&fit=crop",
  "Astrology & Spiritual": "https://tse1.mm.bing.net/th/id/OIP.WYPdm2mNOO9Z2h9NeEVzigHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
  "Immigration": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop",
  "NGO & Foundation": "https://fundsforngosmedia.s3.amazonaws.com/wp-content/uploads/2016/07/28052033/ngo.png",
  "Nonprofit & Social Impact": "https://fundsforngosmedia.s3.amazonaws.com/wp-content/uploads/2016/07/28052033/ngo.png",
  "Printing & Signage": "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1200&h=600&fit=crop",
  "Printing & Signage Services": "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1200&h=600&fit=crop",
  "Entertainment Services": "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&h=600&fit=crop",
  "Clean Energy Solutions": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=600&fit=crop",
  "Neural Internet Solutions": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop",
  "Accounting & Tax Services": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop",
  "Other Services": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
}

// Helper function to get category-specific image
export function getCategoryImage(category: string): string {
  return categoryImages[category] || "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop"
}

// Helper function to create portfolio project from URL
export function createProjectFromUrl(
  id: string,
  title: string,
  url: string,
  category: string,
  description?: string
) {
  // Format URL properly
  let formattedUrl = url.trim()
  if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
    formattedUrl = `https://${formattedUrl}`
  }
  // Remove trailing slash
  formattedUrl = formattedUrl.replace(/\/$/, '')

  return {
    id,
    title: title || id.split('-').map((word: string) => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' '),
    description: description || `Professional ${category.toLowerCase()} website showcasing services and solutions.`,
    category,
    image: getCategoryImage(category), // Use category-specific image
    liveUrl: formattedUrl,
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    features: [
      "Responsive design",
      "Modern UI/UX",
      "Fast loading",
      "SEO optimized",
      "Mobile friendly"
    ],
    client: title || id,
    duration: "2 weeks",
    results: [
      {
        metric: "Performance",
        value: "High",
        description: "Optimized for speed and performance"
      },
      {
        metric: "User Experience",
        value: "Excellent",
        description: "Modern and intuitive interface"
      }
    ]
  }
}

// All websites organized by category
export const allWebsitesByCategory = {
  "Internet & Broadband Services": [
    { id: "spacenet-solution", title: "SpaceNet Solution", url: "https://www.spacenetsolution.in/" },
    { id: "bharti-cable-tv", title: "Bharti Cable TV", url: "https://www.bharticabletv.live/" },
    { id: "royal-internet-service", title: "Royal Internet Service", url: "https://www.royalinternetservice.online/" },
    { id: "genx-broadband", title: "GenX Broadband", url: "genxbroadband.com" },
    { id: "gautam-broadband", title: "Gautam Broadband", url: "www.gautambroadband.live" },
    { id: "trycon-fiber", title: "Trycon Fiber", url: "https://www.tryconfiber.shop/" },
    { id: "summanet-communication", title: "Summanet Communication", url: "https://www.sumannetcommunication.online/" },
    { id: "unique-internet", title: "Unique Internet", url: "https://www.uniqueinternet.online/" },
    { id: "cpnet-broadband", title: "CPNet Broadband", url: "https://cpnetbroadband.online/" },
    { id: "live-fiber-internet", title: "Live Fiber Internet", url: "https://www.livefiberinternet.online/" },
    { id: "nilanga-cable-network", title: "Nilanga Cable Network", url: "https://www.nilangacablenetwork.online/" },
    { id: "iccnet", title: "ICCNet", url: "https://iccnet.vercel.app/" },
  ],
  "Healthcare & Hospital": [
    { id: "govind-netralaya", title: "Govind Netralaya & Fertility Centre", url: "https://govindnetralayafertilitycentre.online/" },
    { id: "health-care-nursing", title: "Health Care Nursing Service", url: "https://health-care-nursing-service.vercel.app/" },
    { id: "shah-optic-laser", title: "Shah Optic & Laser Technology", url: "https://shah-optic-laser-technology.vercel.app/" },
    { id: "dr-nietuja", title: "Dr. Nietuja", url: "https://www.drnietujaatt.live/" },
    { id: "ayurherbs-chiropractic", title: "Ayurherbs Chiropractic", url: "https://www.ayurherbschiropractic.shop/" },
    { id: "rnp-healthcare", title: "RNP Healthcare", url: "https://www.rnphealthcare.online/" },
    { id: "wellcore-lab", title: "Wellcore Lab", url: "https://wellcorelab.online/" },
    { id: "rogveda-ayurvedic", title: "Rogveda Ayurvedic", url: "https://rogveda-ayurvedic.vercel.app/" },
    { id: "ayushman-medscan", title: "Ayushman Medscan", url: "https://www.ayushmanmedscan.online/" },
    { id: "bs-numerology-healing", title: "BS Numerology Healing Centre", url: "https://bsnumerologyhealingcentre.online/" },
  ],
  "Travel & Tourism": [
    { id: "atharva-tours-travels", title: "Atharva Tours & Travels", url: "https://www.atharvtourandtravel.shop/" },
    { id: "harshu-tours-travels", title: "Harshu Tours & Travels", url: "https://www.harshutourandtravels.com/" },
    { id: "gupta-taxi", title: "Gupta Taxi", url: "https://www.guptataxi.online/" },
    { id: "nashik-kitaxi", title: "Nashik Kitaxi", url: "https://nashikkitaxi.online/" },
    { id: "mahal-cabs-travel", title: "Mahal Cabs Travel", url: "https://mahalcabstravel.online/" },
    { id: "bharti-travels", title: "Bharti Travels", url: "https://www.bhartitravels.online" },
    { id: "sriniwas-travel", title: "Sriniwas Travel", url: "https://sriniwas-travel.vercel.app/" },
    { id: "shubham-tours-travels", title: "Shubham Tours & Travels", url: "https://shubham-tours-travels-ten.vercel.app/" },
    { id: "tanmantras", title: "Tanmantras", url: "http://tanmantras.in/" },
    { id: "ady-wild-trails", title: "Ady Wild Trails", url: "https://ady-wild-trails.vercel.app/" },
  ],
  "Business & IT Services": [
    { id: "all-solution", title: "All Solution", url: "https://all-solution.vercel.app/" },
    { id: "susangi-business-services", title: "Susangi Business Services", url: "https://www.susangibusinessservice.co.in/" },
    { id: "srit-solution", title: "SRIT Solution", url: "https://www.sritsolution.in/" },
    { id: "ak-enterprises", title: "AK Enterprises", url: "https://www.akenterpprises.shop/" },
    { id: "ryax-technology", title: "Ryax Technology", url: "https://www.ryaxtechnology.com/" },
    { id: "akram-asaad-corporation", title: "Akram Asaad Corporation", url: "https://www.akramasaadcorporation.online/" },
    { id: "dream-digital-solution", title: "The Dream Digital Solution", url: "https://www.thedreamdigitalsolution.online/" },
    { id: "jagdhari-traders", title: "Jagdhari Traders Pvt Ltd", url: "https://jagdhari-traders-pvt-ltd.vercel.app/" },
    { id: "vedanshi-ltd", title: "Vedanshi Ltd", url: "https://vedanshiltd.online/" },
    { id: "matosia-infotech", title: "Matosia Infotech", url: "https://matosia-infotech.vercel.app/" },
    { id: "nitya-techcare", title: "Nitya Techcare IT Solutions", url: "https://nitya-techcare-it-solutions.vercel.app/" },
    { id: "divine-tech-x", title: "Divine Tech X", url: "https://divine-tech-x.vercel.app/" },
    { id: "rvee-solutions", title: "RVEE Solutions", url: "https://rvee-solutions.vercel.app/" },
    { id: "nano-tech-bice", title: "Nano Tech BICE", url: "https://nano-tech-bice.vercel.app/" },
    { id: "marathe-credcare", title: "Marathe Credcare", url: "https://marathe-credcare-zasl.vercel.app/" },
    { id: "kiox-kappa", title: "Kiox Kappa", url: "https://kiox-kappa.vercel.app/" },
    { id: "ritesh-international", title: "Ritesh International Environment Act", url: "https://ritesh-international-envoriment-act.vercel.app/" },
    { id: "flourisha", title: "Flourisha", url: "https://flourisha.online/" },
    { id: "shree-balaji-psi", title: "Shree Balaji PSI", url: "https://shree-balaji-psi.vercel.app/" },
    { id: "protesty", title: "Protesty", url: "https://www.protesty.in/" },
    { id: "bhatnagar-services", title: "Bhatnagar Services", url: "https://www.bhatnagarservices.in/" },
    { id: "zipione", title: "Zipione", url: "https://www.zipione.in/" },
    { id: "romopedia", title: "Romopedia", url: "https://romopedia.com/" },
    { id: "yuvanajan-vitran-pranali", title: "Yuvanajan Vitran Pranali", url: "https://www.yuvanajanvitranpranali.online/" },
    { id: "mahakal-surya-energy", title: "Mahakal Surya Energy", url: "https://mahakal-surya-energy.vercel.app/" },
  ],
  "Furniture & Interior": [
    { id: "hom-furniture", title: "Hom Furniture", url: "https://homfurniture.store/" },
    { id: "prajapati-furniture", title: "Prajapati Furniture", url: "https://www.prajapatifurniture.shop/" },
    { id: "hn-interior", title: "HN Interior", url: "https://www.hninterior.shop/" },
    { id: "homeline-interior", title: "Homeline Interior", url: "https://www.homelineinterior.online/" },
    { id: "jk-aluminium-glass", title: "JK Aluminium Glass House", url: "https://jk-aluminium-glass-house.vercel.app/" },
  ],
  "Education": [
    { id: "shikhasetu-education", title: "Shikhasetu Education", url: "https://www.shikhasetueducation.online/" },
    { id: "indore-business-classes", title: "Indore Business Classes", url: "https://indore-bussiness-classes.vercel.app/" },
  ],
  "Finance & Loans": [
    { id: "ramsha-finance", title: "Ramsha Finance", url: "https://ramshafinance.online/" },
    { id: "shivalix-forex", title: "Shivalix Forex", url: "https://shivalix-forex.vercel.app/" },
    { id: "paras-loans", title: "Paras Loans & Financial Services", url: "https://paras-loans-and-financial-servies.vercel.app/" },
    { id: "britto-associates", title: "Britto Associates", url: "https://www.brittoassociates.online/" },
  ],
  "Food & Catering": [
    { id: "al-kohinoor-caterers", title: "Al Kohinoor Caterers", url: "https://www.alkohinoorcaterers.shop/" },
    { id: "sri-mokshit-caterers", title: "Sri Mokshit Caterers", url: "https://sri-mokshit-caterers-events-managem.vercel.app/" },
    { id: "cake-factory", title: "The Cake Factory", url: "https://the-cake-faactory.vercel.app/" },
  ],
  "Home Services": [
    { id: "royal-dry-cleaners", title: "Royal Dry Cleaners", url: "https://www.royaldrycleaner.shop/" },
    { id: "local-maid-service", title: "Local Maid Service", url: "https://www.localmaidservice.help/" },
    { id: "sai-homecare-service", title: "Sai Homecare Service", url: "https://www.saihomecareservice.help/" },
    { id: "star-housekeeping", title: "Star Housekeeping Services", url: "starhousekeepingservices.online" },
    { id: "hometech-repair", title: "Hometech Repair", url: "https://www.hometechrepair.online/" },
    { id: "kajal-sofa-repair", title: "Kajal Sofa Repair Center", url: "https://www.kajalsofarepaircenter.shop/" },
  ],
  "Security Services": [
    { id: "sjs-security-solution", title: "SJS Security Solution", url: "https://www.sjssecuritysolution.live/" },
  ],
  "Real Estate": [
    { id: "chandan-real-estate", title: "Chandan Real Estate", url: "https://chandanrealestate.online/" },
    { id: "kripa-estate", title: "Kripa Estate", url: "https://www.kripaestate.online/" },
  ],
  "Jewelry": [
    { id: "priyoshi-gold", title: "Priyoshi Gold", url: "thepriyoshigold.com" },
  ],
  "Electronics": [
    { id: "reword-electronics", title: "Reword Electronics", url: "https://rewordelectronics.store/" },
    { id: "bynelectronics", title: "Bynelectronics", url: "https://bynelectronics.online/" },
    { id: "msstar-accessories", title: "MS Star Accessories", url: "https://msstar-accessories.vercel.app/" },
  ],
  "Astrology & Spiritual": [
    { id: "astro-abhishek", title: "Astro Abhishek", url: "https://www.astroabhishek.online/" },
    { id: "attriarom-haridwar", title: "Attriarom Haridwar", url: "https://www.attriaromaharidwar.store/" },
    { id: "swastik-bliss", title: "Swastik Bliss", url: "https://www.swastikbliss.online/" },
    { id: "occult-star-neah", title: "Occult Star Neah", url: "https://occult-star-neah.vercel.app/" },
    { id: "psychic-astrology", title: "Psychic & Astrology", url: "https://psychic-and-astrology.vercel.app/" },
  ],
  "Immigration": [
    { id: "raj-global-immigration", title: "Raj Global Immigration", url: "https://www.rajglobalimmigration.online/" },
  ],
  "NGO & Foundation": [
    { id: "reliefio-care-welfare", title: "Reliefio Care Welfare Foundation", url: "https://reliefiocarewelfarefoundation.online/" },
    { id: "parashar-association", title: "Parashar Association", url: "https://parashar-association.vercel.app/" },
  ],
  "Other Services": [
    { id: "bhoomi-herbs-life-care", title: "Bhoomi Herbs Life Care", url: "https://www.bhoomiherbslifecare.store/" },
    { id: "windwave", title: "Windwave", url: "https://www.windwave.co.in/" },
    { id: "natraj-pencil-packing", title: "Natraj Pencil Packing", url: "https://v0-natraj-pencil-packing-website.vercel.app/" },
    { id: "shiv-balloon-decoration", title: "Shiv Balloon Decoration", url: "https://shivballoondecoration.online/" },
    { id: "anytime-moving-solutions", title: "Anytime Moving Solutions", url: "https://anytime-moving-solutions.vercel.app/" },
    { id: "mr-thind-store", title: "Mr Thind Store", url: "https://mr-thind-store.vercel.app/" },
    { id: "sasta-dava", title: "Sasta Dava", url: "https://sasta-dava.vercel.app/" },
    { id: "rangoli-gamma", title: "Rangoli Gamma", url: "https://rangoli-gamma.vercel.app/" },
  ],
  "Printing & Signage": [
    { id: "aarna-signages", title: "Aarna Signages", url: "https://aarna-signages.vercel.app/" },
  ],
}

