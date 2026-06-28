export type CaseStudy = {
  id: string;
  client: string;
  industry: string;
  location: string;
  challenge: string;
  solution: string;
  result: string;
  metric?: string;
  quote?: string;
  quoteAuthor?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "warung-sedap",
    client: "Warung Sedap Mak Cik",
    industry: "F&B / Catering",
    location: "Shah Alam, Selangor",
    challenge:
      "Mak Cik Fatimah ran a successful catering business but missed 60% of WhatsApp inquiries because she was busy in the kitchen. Orders came in at all hours — she couldn't keep up.",
    solution:
      "We built a simple ordering site and connected an AI assistant to her WhatsApp Business. The bot handles menu questions, takes orders, and sends her a summary every morning.",
    result:
      "Order inquiries answered within seconds, even at 2am. Mak Cik now starts each day with a clear list of confirmed orders instead of scrolling through 40 unread messages.",
    metric: "3x more orders captured",
    quote: "Sekarang customer boleh order waktu saya tengah masak. Bot tu jawab semua.",
    quoteAuthor: "Puan Fatimah, Owner",
  },
  {
    id: "fixit-plumbing",
    client: "FixIt Plumbing KL",
    industry: "Home Services",
    location: "Kuala Lumpur",
    challenge:
      "Ahmad's plumbing team was losing jobs to competitors who replied faster on Instagram DMs. He had a basic Facebook page but no way to respond when he was on-site.",
    solution:
      "New service website with instant quote form, plus AI on web chat and Instagram. The assistant collects job details, location, and urgency — then pings Ahmad via WhatsApp.",
    result:
      "Response time dropped from hours to under 30 seconds. Ahmad's team now books 40% more jobs from social media without hiring an admin.",
    metric: "40% more social bookings",
    quote: "Dulu saya reply DM malam-malam lepas kerja. Sekarang AI handle, saya fokus repair je.",
    quoteAuthor: "Ahmad Rizal, Founder",
  },
  {
    id: "bloom-florist",
    client: "Bloom & Co Florist",
    industry: "Retail / Gifts",
    location: "Penang",
    challenge:
      "Peak seasons (Valentine's, Mother's Day) overwhelmed their small team. Customers asked the same questions about delivery areas, flower availability, and pricing — over and over.",
    solution:
      "E-commerce style website with AI chat trained on their full catalogue. Integrated with WhatsApp for order confirmations and delivery updates.",
    result:
      "During Valentine's week, the AI handled 800+ conversations. The owner only stepped in for custom arrangement requests.",
    metric: "800+ chats handled in one week",
    quote: "Valentine's used to be chaos. This year was the calmest we've ever had.",
    quoteAuthor: "Sarah Lim, Co-owner",
  },
];
