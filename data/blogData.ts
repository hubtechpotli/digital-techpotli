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
