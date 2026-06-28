import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { pricingTiers, pricingFaqs } from "@/lib/content/pricing";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for website build and AI customer service packages.",
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        label="Pricing"
        title="Simple, transparent pricing"
        description="One-time build fee plus monthly for hosting, AI usage, and support. No surprises."
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <ScrollReveal key={tier.id} delay={i * 0.08}>
              <div
                className={cn(
                  "flex h-full flex-col border bg-surface p-6",
                  tier.highlighted ? "border-brand" : "border-border"
                )}
              >
                {tier.highlighted && (
                  <span className="mb-3 font-mono text-[10px] uppercase tracking-wider text-brand">
                    Most Popular
                  </span>
                )}
                <h2 className="text-xl font-bold">{tier.name}</h2>
                <p className="mt-2">
                  <span className="text-3xl font-bold tracking-tight">
                    {tier.price}
                  </span>
                </p>
                <p className="text-xs text-muted-foreground">{tier.period}</p>
                <p className="mt-4 text-sm text-muted-foreground">
                  {tier.description}
                </p>
                <ul className="mt-6 flex-1 space-y-2 text-sm text-muted-foreground">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-brand">—</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({
                      variant: tier.highlighted ? "default" : "outline",
                    }),
                    "mt-8 w-full",
                    tier.highlighted && "bg-brand text-background hover:bg-brand-dim"
                  )}
                >
                  {tier.cta}
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-20">
            <h2 className="text-xl font-bold tracking-tight">
              Frequently asked questions
            </h2>
            <dl className="mt-8 space-y-6">
              {pricingFaqs.map((faq) => (
                <div key={faq.question} className="border-b border-border pb-6">
                  <dt className="font-medium">{faq.question}</dt>
                  <dd className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </ScrollReveal>
      </div>
    </>
  );
}
