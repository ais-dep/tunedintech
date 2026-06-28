import Link from "next/link";
import { ChatDemoWidget } from "@/components/ChatDemoWidget";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <p className="mb-4 font-mono text-xs tracking-wider text-brand">
            MALAYSIAN SME DIGITAL + AI
          </p>
          <h1 className="text-4xl font-bold tracking-tighter text-balance sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            Websites that work.
            <br />
            Even at 3am.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            TunedInTech builds digital storefronts and AI assistants for
            Malaysian SMEs — handling customers on web, WhatsApp, and social,
            24/7.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/portfolio"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-brand text-background hover:bg-brand-dim"
              )}
            >
              See Our Work
            </Link>
            <Link
              href="#live-demo"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Talk to Our AI
            </Link>
          </div>
        </div>

        <div className="lg:pl-4">
          <ChatDemoWidget variant="compact" />
        </div>
      </div>
    </section>
  );
}
