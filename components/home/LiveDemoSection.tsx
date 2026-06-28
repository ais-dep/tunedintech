import { ChatDemoWidget } from "@/components/ChatDemoWidget";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionDivider } from "@/components/layout/SectionDivider";

export function LiveDemoSection() {
  return (
    <section id="live-demo" className="border-b border-border py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <SectionDivider number="04" label="Live Demo" className="mb-4" />
          <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Try it yourself
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                This is the same AI assistant we embed on client websites. Ask
                about pricing, services, or how we can help your business. It
                responds like a real support agent — because that&apos;s exactly
                what it is.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Try: &quot;Berapa harga website?&quot; or &quot;Boleh integrate
                WhatsApp?&quot;
              </p>
            </div>
            <ChatDemoWidget variant="full" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
