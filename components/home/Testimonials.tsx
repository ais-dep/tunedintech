import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionDivider } from "@/components/layout/SectionDivider";
import { testimonials } from "@/lib/content/testimonials";
import { cn } from "@/lib/utils";

const sizeStyles = {
  sm: "p-4 text-sm",
  md: "p-5 text-sm",
  lg: "p-6 text-base sm:col-span-2",
};

const rotations = ["-rotate-1", "rotate-1", "-rotate-[0.5deg]", "rotate-[0.5deg]", "rotate-0"];

export function Testimonials() {
  return (
    <section className="border-b border-border py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <SectionDivider number="07" label="Testimonials" className="mb-4" />
          <h2 className="mt-8 text-2xl font-bold tracking-tight sm:text-3xl">
            What clients say
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 0.06}>
              <figure
                className={cn(
                  "border border-border bg-surface transition-transform hover:border-brand/30",
                  sizeStyles[t.size],
                  rotations[i % rotations.length]
                )}
              >
                <blockquote className="leading-relaxed text-muted-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 border-t border-border pt-3">
                  <p className="font-medium text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.business}</p>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
