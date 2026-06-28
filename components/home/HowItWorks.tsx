import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionDivider } from "@/components/layout/SectionDivider";

const steps = [
  {
    number: "01",
    title: "Tell us about your business",
    description:
      "We learn your services, pricing, FAQs, and how you talk to customers. No lengthy forms — just a focused conversation.",
  },
  {
    number: "02",
    title: "We build and train",
    description:
      "Your website goes live. We train the AI on your business knowledge and connect it to your channels — web, WhatsApp, social.",
  },
  {
    number: "03",
    title: "AI handles customers, you handle growth",
    description:
      "Inquiries get answered instantly. You review conversations, refine responses, and focus on delivering great work.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-b border-border py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <SectionDivider number="03" label="Process" className="mb-4" />
          <h2 className="mt-8 text-2xl font-bold tracking-tight sm:text-3xl">
            How it works
          </h2>
        </ScrollReveal>

        <div className="mt-12 space-y-0">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.1}>
              <div className="grid gap-4 border-t border-border py-10 sm:grid-cols-[80px_1fr] sm:gap-8">
                <span className="font-mono text-4xl font-bold tracking-tighter text-brand/30 sm:text-5xl">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-lg font-bold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
