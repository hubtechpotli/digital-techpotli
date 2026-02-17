export interface BlogPost {
  id: string;
  title: string;
  date: string;
  tag: string;
  image: string;
  excerpt: string;
  slug: string;
  isTopPick?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "6",
    title: "How AI Search Changes Website Traffic and Lead Generation in 2026",
    date: "17 Feb 2026",
    tag: "Digital Marketing",
    image: "/Blog/Blog6.png",
    excerpt:
      "Artificial intelligence is reshaping the digital marketing geography in 2026. AI-powered hunt machines now deliver smarter, briskly, and more individualized results than ever ahead.",
    slug: "how-ai-search-changes-website-traffic-and-lead-generation-in-2026",
    isTopPick: true,
  },
  {
    id: "5",
    title: "Trending AI Online Digital Marketing Business Changing with Big Opportunities In India",
    date: "11 Feb 2026",
    tag: "Digital Marketing",
    image: "/Blog/Blog5.png",
    excerpt:
      "The online digital marketing business is evolving faster than ever ahead. With rapid-fire advancements in technology, artificial intelligence, and changing consumer geste digital marketing has come one of the most profitable industries.",
    slug: "trending-ai-online-digital-marketing-business-changing-with-big-opportunities-in-india",
    isTopPick: true,
  },
  {
    id: "1",
    title: "Why Digital Marketing Services are Essential for Online Businesses",
    date: "3 Dec 2025",
    tag: "Digital Marketing",
    image: "https://www.tenacioustechies.com/wp-content/uploads/2021/12/D.jpeg",
    excerpt:
      "Discover why digital marketing is crucial for online businesses. Learn about SEO, social media marketing, content marketing, and how to get started with digital marketing strategies that drive real results.",
    slug: "why-digital-marketing-services-essential-online-businesses",
    isTopPick: true,
  },
  {
    id: "2",
    title: "How to Use AI to Grow Your Small Business Online",
    date: "8 Dec 2025",
    tag: "Digital Marketing",
    image: "/Blog/Blog 2.png",
    excerpt:
      "Find the best low budget digital marketing tools for startups. Explore affordable online marketing tools and free beginner tools for small business growth.",
    slug: "how-to-use-ai-to-grow-your-small-business-online",
    isTopPick: true,
  },
  {
    id: "4",
    title: "Top AI Trends Transforming Digital Marketing and SEO in 2026",
    date: "29 Jan 2026",
    tag: "Digital Marketing",
    image: "/Blog/Blog4.png",
    excerpt:
      "Artificial Intelligence (AI) has become one of the biggest driving forces in digital marketing today. In 2026 and further, businesses are actively adopting AI-powered strategies to improve visibility, engagement, and return on investment.",
    slug: "top-ai-trends-transforming-digital-marketing-and-seo-in-2026",
    isTopPick: true,
  },
  {
    id: "3",
    title: "Best Low-Budget Tools for Startups to Start Online Marketing",
    date: "9 Dec 2025",
    tag: "Digital Marketing",
    image: "/Blog/Blog3.png",
    excerpt:
      "Discover the best low-budget digital marketing tools for startups. Explore affordable online marketing tools, free beginner tools, and solutions for small businesses.",
    slug: "best-low-budget-tools-for-startups-to-start-online-marketing",
    isTopPick: true,
  },
];

export const blogTags = [
  "All",
  "Digital Marketing",
];
