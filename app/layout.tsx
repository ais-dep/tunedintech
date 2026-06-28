import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tunedintech.com"),
  title: {
    default: "TunedInTech — AI-Powered Digital Solutions for Malaysian SMEs",
    template: "%s | TunedInTech",
  },
  description:
    "TunedInTech helps small Malaysian businesses go digital with smart AI assistants. Websites, customer service bots, and social media integration — 24/7.",
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: "https://tunedintech.com",
    siteName: "TunedInTech",
    title: "TunedInTech — AI-Powered Digital Solutions for Malaysian SMEs",
    description:
      "We build websites and embed AI customer service agents that handle inquiries across web, WhatsApp, Instagram, and more.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} min-h-screen font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
