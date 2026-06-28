import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { blogPosts } from "@/lib/content/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on AI customer service, digital transformation, and growing your Malaysian SME.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        label="Blog"
        title="Insights for Malaysian business owners"
        description="Practical advice on websites, AI, and digital growth — no fluff."
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="space-y-6">
          {blogPosts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.05}>
              <article className="group border border-border bg-surface p-6 transition-colors hover:border-brand/30">
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-MY", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mt-3 text-xl font-bold tracking-tight group-hover:text-brand transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-block text-sm text-brand hover:underline"
                >
                  Read more →
                </Link>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </>
  );
}
