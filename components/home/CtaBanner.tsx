"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire up form submission (email service / API)
    setSubmitted(true);
  };

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="border border-border bg-surface p-8 sm:p-12">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Ready to let AI handle your customers?
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Book a free consultation or message us on WhatsApp. We&apos;ll
                  show you exactly how AI can work for your business — no hard
                  sell.
                </p>
                <a
                  href="https://wa.me/60123456789?text=Hi%20TunedInTech%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 border border-brand/40 bg-brand/5 px-4 py-2.5 text-sm font-medium text-brand transition-colors hover:bg-brand/10"
                >
                  Chat on WhatsApp →
                </a>
              </div>

              <div>
                {submitted ? (
                  <p className="text-muted-foreground">
                    Thanks — we&apos;ll get back to you within 1 business day.
                  </p>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="cta-name" className="sr-only">
                        Name
                      </label>
                      <Input
                        id="cta-name"
                        name="name"
                        placeholder="Your name"
                        required
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="cta-email" className="sr-only">
                        Email
                      </label>
                      <Input
                        id="cta-email"
                        name="email"
                        type="email"
                        placeholder="Email address"
                        required
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="cta-message" className="sr-only">
                        Message
                      </label>
                      <Textarea
                        id="cta-message"
                        name="message"
                        placeholder="Tell us about your business..."
                        rows={3}
                        required
                        className="bg-background resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-brand text-background hover:bg-brand-dim"
                    >
                      Send Message
                    </Button>
                  </form>
                )}
                <p className="mt-4 text-xs text-muted-foreground">
                  Or email us at{" "}
                  <Link
                    href="mailto:hello@tunedintech.com"
                    className="text-brand hover:underline"
                  >
                    hello@tunedintech.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
