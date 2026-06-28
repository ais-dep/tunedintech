import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionDivider } from "@/components/layout/SectionDivider";
import { services } from "@/lib/content/services";

export function ServicesOverview() {
  return (
    <section className="border-b border-border py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <SectionDivider number="02" label="Services" className="mb-4" />
          <h2 className="mt-8 text-2xl font-bold tracking-tight sm:text-3xl">
            What we build
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Three core offerings. Everything designed to work together.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 0.08}>
              <Link
                href="/services"
                className="group block h-full border border-border bg-surface p-6 transition-colors hover:border-brand/40"
              >
                <span className="font-mono text-xs text-muted-foreground">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-lg font-bold tracking-tight group-hover:text-brand transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {service.summary}
                </p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
