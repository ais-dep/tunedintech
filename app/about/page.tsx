import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "TunedInTech helps Malaysian small businesses go digital with websites and AI customer service.",
};

const values = [
  {
    title: "Built for local businesses",
    description:
      "We understand how Malaysian customers actually behave — WhatsApp-first, price-sensitive, and expecting fast replies.",
  },
  {
    title: "AI that sounds human",
    description:
      "No robotic scripts. Our assistants are trained on how you actually talk to customers.",
  },
  {
    title: "Honest pricing",
    description:
      "No hidden fees, no lock-in contracts. You know exactly what you're paying for.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About"
        title="We help Malaysian SMEs work smarter"
        description="TunedInTech was founded on a simple observation: small businesses lose customers every day because they can't reply fast enough."
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <ScrollReveal>
          <div className="max-w-3xl">
            <h2 className="text-xl font-bold tracking-tight">Our mission</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We believe every Malaysian business — from the warung owner to the
              plumbing contractor — deserves the same digital tools that big
              companies use. Not bloated enterprise software, but practical
              websites and AI assistants that actually solve real problems.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Based in Malaysia, we work with local businesses across F&B,
              services, retail, and professional trades. We speak your
              customers&apos; language — literally.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {values.map((value, i) => (
            <ScrollReveal key={value.title} delay={i * 0.08}>
              <div className="border border-border bg-surface p-6">
                <h3 className="font-bold tracking-tight">{value.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-16 border border-border bg-surface p-8">
            <h2 className="text-xl font-bold tracking-tight">The team</h2>
            <p className="mt-4 text-muted-foreground">
              {/* placeholder — swap with real team info */}
              A small team of developers, designers, and AI engineers based in
              Malaysia. We&apos;re hiring — reach out if you want to build
              something meaningful for local businesses.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </>
  );
}
