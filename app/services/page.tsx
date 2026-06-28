import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { services } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website build, AI customer service, and social media AI integration for Malaysian SMEs.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Services"
        title="What we build for your business"
        description="Three core services designed to work together — your website, your AI assistant, and your social channels."
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="space-y-16">
          {services.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 0.05}>
              <article
                id={service.id}
                className="grid gap-8 border-b border-border pb-16 last:border-0 lg:grid-cols-[1fr_2fr]"
              >
                <div>
                  <span className="font-mono text-xs text-brand">
                    0{i + 1}
                  </span>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-muted-foreground">{service.summary}</p>
                </div>
                <div>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-brand">—</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </>
  );
}
