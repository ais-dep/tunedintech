import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionDivider } from "@/components/layout/SectionDivider";
import { pricingTiers } from "@/lib/content/pricing";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PricingPreview() {
  return (
    <section className="border-b border-border py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <SectionDivider number="06" label="Pricing" className="mb-4" />
          <h2 className="mt-8 text-2xl font-bold tracking-tight sm:text-3xl">
            Straightforward pricing
          </h2>
          <p className="mt-3 text-muted-foreground">
            No hidden fees. One-time build + monthly for hosting and AI.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <ScrollReveal key={tier.id} delay={i * 0.08}>
              <div
                className={cn(
                  "flex h-full flex-col border bg-surface p-6",
                  tier.highlighted
                    ? "border-brand"
                    : "border-border hover:border-brand/30"
                )}
              >
                {tier.highlighted && (
                  <span className="mb-3 self-start font-mono text-[10px] uppercase tracking-wider text-brand">
                    Recommended
                  </span>
                )}
                <h3 className="text-lg font-bold">{tier.name}</h3>
                <p className="mt-2">
                  <span className="text-2xl font-bold tracking-tight">
                    {tier.price}
                  </span>
                  <span className="ml-1 text-xs text-muted-foreground">
                    {tier.period}
                  </span>
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  {tier.description}
                </p>
                <ul className="mt-6 flex-1 space-y-2 text-sm text-muted-foreground">
                  {tier.features.slice(0, 4).map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-brand">—</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-8 text-center">
            <Link
              href="/pricing"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              See full pricing details
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
