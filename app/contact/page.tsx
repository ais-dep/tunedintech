"use client";

import { FormEvent, useState } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire up form submission
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader
        label="Contact"
        title="Let's talk about your business"
        description="Free consultation, no obligation. Tell us what you're working on."
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <div>
              <h2 className="text-lg font-bold">Get in touch</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Prefer WhatsApp? Most of our clients do. Message us directly and
                we&apos;ll reply within a few hours during business days.
              </p>
              <a
                href="https://wa.me/60123456789?text=Hi%20TunedInTech%2C%20I%27d%20like%20to%20learn%20more."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex border border-brand/40 bg-brand/5 px-4 py-2.5 text-sm font-medium text-brand hover:bg-brand/10"
              >
                WhatsApp us →
              </a>

              <div className="mt-10 space-y-3 text-sm text-muted-foreground">
                <p>
                  <span className="text-foreground">Email:</span>{" "}
                  hello@tunedintech.com
                </p>
                <p>
                  <span className="text-foreground">Location:</span> Malaysia
                  (remote-first)
                </p>
                <p>
                  <span className="text-foreground">Hours:</span> Mon–Fri, 9am–6pm
                  MYT
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            {submitted ? (
              <div className="border border-border bg-surface p-8">
                <p className="font-medium">Message sent.</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  We&apos;ll get back to you within 1 business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="border border-border bg-surface p-8 space-y-4"
              >
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm">
                    Name
                  </label>
                  <Input id="name" name="name" required className="bg-background" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label htmlFor="business" className="mb-1.5 block text-sm">
                    Business name
                  </label>
                  <Input
                    id="business"
                    name="business"
                    className="bg-background"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
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
          </ScrollReveal>
        </div>
      </div>
    </>
  );
}
