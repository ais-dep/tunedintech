export type Testimonial = {
  id: string;
  name: string;
  business: string;
  quote: string;
  size: "sm" | "md" | "lg";
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Hafiz",
    business: "Auto detailing, Johor Bahru",
    quote:
      "Website lama saya macam brosur je. Yang ni customer boleh tanya harga terus, AI jawab. Saya dapat 12 booking bulan pertama.",
    size: "lg",
  },
  {
    id: "2",
    name: "Mei Ling",
    business: "Bakery, Ipoh",
    quote: "WhatsApp bot handle order kek custom. I just bake.",
    size: "sm",
  },
  {
    id: "3",
    name: "Raj",
    business: "Electrical contractor, PJ",
    quote:
      "Clients message at midnight asking for quotes. Before TunedInTech, those leads were gone by morning. Now the AI collects everything and I call back with full details.",
    size: "md",
  },
  {
    id: "4",
    name: "Nurul",
    business: "Beauty salon, Melaka",
    quote: "Instagram DM auto-reply changed everything for appointment booking.",
    size: "sm",
  },
  {
    id: "5",
    name: "David Tan",
    business: "Printing shop, KL",
    quote:
      "Honest review — I was sceptical about AI. But after seeing it handle 'berapa harga print 1000 flyer' for the 50th time without me, I'm converted.",
    size: "md",
  },
];
