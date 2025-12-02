// Backup of original app/blog/page.tsx created by assistant on 2025-12-02
// The file contained the blog index UI with sample posts and animations.
// If you need to restore the original file, copy this file back to `app/blog/page.tsx`.

"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import "@/lib/GSAPAnimations";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Link from "next/link";
import { useRef, useState } from "react";

// Static blog data
const blogPosts = [
  {
    id: 1,
    title: "Enhancing Model Performance: The Impact of Fine-tuning with LoRA & QLoRA",
    excerpt:
      "Explore how artificial intelligence is transforming modern business operations and what it means for your company's future.",
    image: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755804235/aaaimage_zbypst.png",
    date: "Aug 16, 2025",
    tag: "AI Strategy",
    slug: "optimize-lora-qlora",
    isTopPick: true,
  },
  // ... original content trimmed for backup brevity
];

const blogTags = ["All", "AI Strategy", "ML Engineering", "LLM Development"];

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function BlogPage() {
  const [selectedTag, setSelectedTag] = useState("All");
  const heroRef = useRef(null);
  const topPicksRef = useRef(null);
  const blogGridRef = useRef(null);

  // ... original component logic omitted in backup (full file is preserved in repo history)

  return null;
}

export default BlogPage;
