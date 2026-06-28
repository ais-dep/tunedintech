import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionDivider } from "@/components/layout/SectionDivider";
import { caseStudies } from "@/lib/content/case-studies";
import { cn } from "@/lib/utils";

export function CaseStudiesPreview() {
  const featured = caseStudies.slice(0, 3);

  return (
    <section className="border-b border-border py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <SectionDivider number="05" label="Case Studies" className="mb-4" />
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Real businesses. Real results.
              </h2>
              <p className="mt-3 text-muted-foreground">
                Sample client stories — replace with your actual case studies.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="text-sm text-brand hover:underline"
            >
              View all case studies →
            </Link>
          </div>
        </ScrollReveal>

        <div className="mt-12 space-y-6">
          {featured.map((study, i) => (
            <ScrollReveal key={study.id} delay={i * 0.08}>
              <article
                className={cn(
                  "border border-border bg-surface transition-colors hover:border-brand/30",
                  i === 0 ? "p-8 sm:p-10" : "p-6 sm:p-8",
                  i === 1 && "sm:ml-8",
                  i === 2 && "sm:mr-8"
                )}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs text-brand">
                      {study.industry} · {study.location}
                    </p>
                    <h3 className="mt-2 text-xl font-bold tracking-tight">
                      {study.client}
                    </h3>
                  </div>
                  {study.metric && (
                    <span className="border border-brand/30 bg-brand/5 px-3 py-1 font-mono text-xs text-brand">
                      {study.metric}
                    </span>
                  )}
                </div>

                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {study.challenge}
                </p>

                {study.quote && (
                  <blockquote className="mt-6 border-l-2 border-brand/40 pl-4 text-sm italic text-muted-foreground">
                    &ldquo;{study.quote}&rdquo;
                    {study.quoteAuthor && (
                      <footer className="mt-2 not-italic text-xs">
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
    </section>
  );
}
