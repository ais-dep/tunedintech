export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  body: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-malaysian-smes-need-ai-customer-service",
    title: "Why Malaysian SMEs Need AI Customer Service (Not Another Chatbot)",
    excerpt:
      "Most 'chatbots' are just FAQ pages with a text box. Here's what actually works for local businesses.",
    date: "2026-03-15",
    author: "TunedInTech Team",
    readTime: "5 min read",
    body: `If you run a small business in Malaysia, you already know the problem. Customers message on WhatsApp at 10pm. Someone asks about pricing on Instagram while you're serving a walk-in. Your website has a contact form that nobody uses because they want answers now, not tomorrow.

The typical response? Hire someone to monitor messages. Or just... don't reply until morning and hope they haven't already gone to your competitor.

That's where AI customer service is different from the chatbots you've probably seen before.

**What makes it actually useful**

A properly trained AI assistant knows your menu, your pricing, your service areas, and your booking process. It doesn't just match keywords — it understands context. When someone asks "boleh delivery ke Cyberjaya?", it checks your delivery zones and responds accurately.

**The channels that matter here**

Malaysian customers don't stick to one platform. They'll DM you on Instagram, message on WhatsApp, and maybe fill a form on your website — all about the same order. A good setup connects these channels so the AI gives consistent answers everywhere.

**What we see with real clients**

Businesses that implement this typically capture 2-3x more inquiries because nothing falls through the cracks. The owner still handles complex cases — but the repetitive stuff is handled automatically.

If your business gets more than 20 customer messages a week, it's worth looking at. Not because AI is trendy — because you're probably losing money every time you don't reply fast enough.`,
  },
  {
    slug: "website-vs-whatsapp-which-first",
    title: "Website vs WhatsApp: Which Should Your Business Build First?",
    excerpt:
      "Spoiler: you probably need both. But the order matters depending on how your customers find you.",
    date: "2026-02-28",
    author: "TunedInTech Team",
    readTime: "4 min read",
    body: `We get this question a lot from Malaysian business owners: "Do I really need a website if all my customers are on WhatsApp anyway?"

Fair question. WhatsApp is king here. But here's the thing — a website and WhatsApp serve different jobs.

**WhatsApp is for conversations.** It's where existing customers reorder, ask quick questions, and send payment screenshots. It's reactive — someone has to message you first.

**A website is for discovery.** When someone Googles "plumber Shah Alam" or "kek hantaran Penang", they land on websites — not WhatsApp numbers. Your site is your storefront on the internet.

**The smart setup**

Build the website first if you rely on Google search or social media ads to find new customers. Connect WhatsApp (with AI) as the conversation layer on top.

Start with WhatsApp AI if you already have steady traffic from referrals and social media, but you're drowning in messages you can't respond to fast enough.

Either way, the goal is the same: make sure every inquiry gets a fast, accurate response — whether it's 3pm or 3am.`,
  },
  {
    slug: "how-we-train-ai-for-local-businesses",
    title: "How We Train AI Assistants for Local Businesses",
    excerpt:
      "A peek behind the scenes at how we make AI sound like your business — not a generic robot.",
    date: "2026-02-10",
    author: "TunedInTech Team",
    readTime: "6 min read",
    body: `"Will it sound like a robot?" — that's the first thing every client asks.

Short answer: only if we do a bad job. Here's how we actually train assistants for Malaysian businesses.

**Step 1: We learn your business**

Before writing a single line of bot code, we sit down (virtually or in person) and document everything: your services, pricing, service areas, operating hours, common questions, and how you actually talk to customers.

**Step 2: We write the knowledge base**

This isn't a PDF dump. We structure information so the AI can pull the right answer for the right question. "Berapa harga?" needs different responses depending on whether they're asking about a cake or a car wash.

**Step 3: We test with real scenarios**

We run through 50+ conversation scenarios before going live. Wrong answers get fixed. Ambiguous questions get clearer fallback responses.

**Step 4: We refine from real conversations**

After launch, we review conversation logs weekly for the first month. Customers will always ask something you didn't anticipate — we update the knowledge base based on what actually happens.

The result? An assistant that sounds like someone who works at your business, because it's trained on how your business actually operates.`,
  },
  {
    slug: "cost-of-missing-customer-messages",
    title: "The Real Cost of Missing Customer Messages",
    excerpt:
      "We did the maths on what unanswered WhatsApp messages actually cost a small business.",
    date: "2026-01-22",
    author: "TunedInTech Team",
    readTime: "3 min read",
    body: `Let's do some rough maths.

Say you get 30 customer inquiries a week across WhatsApp and Instagram. You reply to about 20 of them within a few hours. The other 10? They message a competitor, or they forget about it.

If your average job is worth RM 150, and you convert 1 in 3 inquiries — that's roughly RM 500/week in lost revenue. Over a month, that's RM 2,000. Over a year, RM 24,000.

And that's a conservative estimate. For businesses with higher ticket services — catering, renovation, events — the number is much bigger.

**Why messages get missed**

It's not laziness. Small business owners are busy doing the actual work. You're cooking, fixing pipes, cutting hair, printing banners. You can't stop mid-job to reply to every DM.

**What changes with AI**

An AI assistant doesn't replace you — it catches the inquiries you'd otherwise miss. It answers the easy questions instantly and collects details for the ones that need your personal attention.

The cost of setting this up is a fraction of what one month of missed messages costs you.`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
