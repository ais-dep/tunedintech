import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionDivider } from "@/components/layout/SectionDivider";

export function ProblemSolution() {
  return (
    <section className="border-b border-border py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <SectionDivider number="01" label="The Problem" className="mb-12" />
        </ScrollReveal>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Most Malaysian businesses have a website.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Almost none have a website that works for them at 3am.
            </p>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Your customer messages on WhatsApp at midnight. They DM you on
              Instagram while you&apos;re with another client. They fill out a
              contact form and wait — while your competitor replies in 30
              seconds.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="border border-border bg-surface p-6 sm:p-8">
              <p className="font-mono text-xs tracking-wider text-brand">
                THE SOLUTION
              </p>
              <h3 className="mt-4 text-xl font-bold tracking-tight">
                A website with a brain.
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We build your digital storefront and embed an AI assistant that
                knows your business — answering questions, taking bookings, and
                capturing leads across web, WhatsApp, and social. No extra staff
                needed.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-brand">—</span>
                  Responds in seconds, not hours
                </li>
                <li className="flex gap-2">
                  <span className="text-brand">—</span>
                  Same accurate answers on every channel
                </li>
                <li className="flex gap-2">
                  <span className="text-brand">—</span>
                  You focus on the work. AI handles the inquiries.
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
