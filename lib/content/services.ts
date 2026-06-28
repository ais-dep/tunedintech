export type Service = {
  id: string;
  title: string;
  summary: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    id: "website-build",
    title: "Website Build",
    summary: "Fast, mobile-ready sites built for conversion — not just looks.",
    description:
      "We design and build websites that actually convert visitors into customers. Mobile-first, fast loading, and structured so your AI assistant knows exactly what to say when someone asks about your business.",
    features: [
      "Custom design aligned to your brand",
      "Mobile-responsive, Core Web Vitals optimised",
      "Contact forms and WhatsApp integration",
      "SEO-ready structure from day one",
    ],
  },
  {
    id: "ai-customer-service",
    title: "AI Customer Service",
    summary: "An assistant that answers questions, takes bookings, and follows up — 24/7.",
    description:
      "Your website gets a brain. Our AI agents handle FAQs, product inquiries, appointment booking, and lead capture around the clock. No more missed messages at midnight.",
    features: [
      "Trained on your business info and FAQs",
      "Handles web chat and WhatsApp",
      "Lead capture and handoff to human when needed",
      "Conversation logs and analytics dashboard",
    ],
  },
  {
    id: "social-media-ai",
    title: "Social Media AI Integration",
    summary: "Instagram DMs, Facebook messages — all handled by the same smart assistant.",
    description:
      "Customers message you on Instagram at 11pm. Instead of leaving them on read, your AI responds instantly with accurate info about your products, pricing, and availability.",
    features: [
      "Instagram and Facebook DM automation",
      "Consistent answers across all channels",
      "Escalation rules for complex requests",
      "Unified inbox view for your team",
    ],
  },
];
