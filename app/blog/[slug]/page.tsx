import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, blogPosts } from "@/lib/content/blog-posts";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post not found" };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

function renderBody(body: string) {
  return body.split("\n\n").map((block, i) => {
    if (block.startsWith("**") && block.endsWith("**")) {
      const text = block.slice(2, -2);
      return (
        <h2 key={i} className="mt-8 text-lg font-bold tracking-tight">
          {text}
        </h2>
      );
    }
    return (
      <p key={i} className="mt-4 text-muted-foreground leading-relaxed">
        {block}
      </p>
    );
  });
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article>
      <div className="border-b border-border bg-surface/50">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <Link
            href="/blog"
            className="text-sm text-brand hover:underline"
          >
            ← Back to blog
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-MY", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>·</span>
            <span>{post.readTime}</span>
            <span>·</span>
            <span>{post.author}</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {post.title}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div className="prose-invert">{renderBody(post.body)}</div>
      </div>
    </article>
  );
}
