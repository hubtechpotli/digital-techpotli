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
];

export const blogTags = [
  "All",
  "Digital Marketing",
];
