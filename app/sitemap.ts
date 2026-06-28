import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/content/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tunedintech.com";

  const staticRoutes = [
    "",
    "/services",
    "/pricing",
    "/portfolio",
    "/about",
    "/contact",
    "/blog",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
