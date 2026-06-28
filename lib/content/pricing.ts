export type PricingTier = {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
};

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    price: "RM 2,499",
    period: "one-time + RM 199/mo",
    description: "For businesses getting their first proper website with basic AI chat.",
    features: [
      "5-page responsive website",
      "Web chat AI assistant",
      "Up to 500 AI conversations/mo",
      "WhatsApp link integration",
      "30-day support",
    ],
    cta: "Get Started",
  },
  {
    id: "growth",
    name: "Growth",
    price: "RM 4,999",
    period: "one-time + RM 399/mo",
    description: "Full digital presence with multi-channel AI and social integration.",
    features: [
      "10-page website with CMS",
      "Web + WhatsApp AI assistant",
      "Instagram DM integration",
      "Up to 2,000 AI conversations/mo",
      "Monthly performance report",
      "Priority support",
    ],
    highlighted: true,
    cta: "Most Popular",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "tailored plan",
    description: "For businesses with multiple locations, high volume, or custom workflows.",
    features: [
      "Unlimited pages and custom features",
      "All channels (web, WA, IG, FB)",
      "Custom AI training and workflows",
      "Dedicated account manager",
      "SLA-backed uptime guarantee",
      "API access and integrations",
    ],
    cta: "Contact Us",
  },
];

export const pricingFaqs = [
  {
    question: "Is there a setup fee?",
    answer:
      "The one-time price covers design, development, and AI setup. Monthly fee covers hosting, AI usage, and ongoing support.",
  },
  {
    question: "Can I upgrade later?",
    answer:
      "Yes. Most clients start on Starter and move to Growth once they see the AI handling real customer inquiries.",
  },
  {
    question: "What if the AI gets something wrong?",
    answer:
      "We train the assistant on your approved content and set escalation rules. You review conversations weekly and we refine responses based on real data.",
  },
];
