import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { caseStudies } from "@/lib/content/case-studies";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Case studies of Malaysian businesses we've helped go digital with AI-powered customer service.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        label="Portfolio"
        title="Client case studies"
        description="Real stories from businesses we've helped capture more customers with websites and AI."
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="space-y-12">
          {caseStudies.map((study, i) => (
            <ScrollReveal key={study.id} delay={i * 0.06}>
              <article className="border border-border bg-surface p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs text-brand">
                      {study.industry} · {study.location}
                    </p>
                    <h2 className="mt-2 text-2xl font-bold tracking-tight">
                      {study.client}
                    </h2>
                  </div>
                  {study.metric && (
                    <span className="border border-brand/30 bg-brand/5 px-3 py-1 font-mono text-xs text-brand">
                      {study.metric}
                    </span>
                  )}
                </div>

                <div className="mt-8 grid gap-8 md:grid-cols-3">
                  <div>
                    <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Challenge
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Solution
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Result
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {study.result}
                    </p>
                  </div>
                </div>

                {study.quote && (
                  <blockquote className="mt-8 border-l-2 border-brand/40 pl-4 italic text-muted-foreground">
                    &ldquo;{study.quote}&rdquo;
                    {study.quoteAuthor && (
                      <footer className="mt-2 not-italic text-sm">
                        — {study.quoteAuthor}
                      </footer>
                    )}
                  </blockquote>
                )}
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </>
  );
}
