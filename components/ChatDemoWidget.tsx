"use client";

import { useState, useRef, useEffect, FormEvent, KeyboardEvent } from "react";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  time: string;
};

type ChatDemoWidgetProps = {
  variant?: "compact" | "full";
  className?: string;
};

const INITIAL_MESSAGES: Message[] = [
  {
    id: "welcome",
    role: "assistant",
    content:
      "Hi! Saya assistant TunedInTech. Tanya apa saja tentang website, AI customer service, atau pricing kami.",
    time: formatTime(new Date()),
  },
];

function formatTime(date: Date) {
  return date.toLocaleTimeString("en-MY", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

// TODO: connect to real AI API
function getPlaceholderResponse(input: string): string {
  const lower = input.toLowerCase();

  if (lower.includes("harga") || lower.includes("price") || lower.includes("berapa")) {
    return "Pakej kami bermula dari RM 2,499 (website + AI chat). Pakej Growth RM 4,999 dengan WhatsApp & Instagram integration. Nak detail penuh? Saya boleh hantar brochure.";
  }
  if (lower.includes("website") || lower.includes("laman")) {
    return "Kami bina website mobile-ready dengan SEO asas, form contact, dan AI chat built-in. Biasanya siap dalam 2-3 minggu. Apa jenis business anda?";
  }
  if (lower.includes("whatsapp") || lower.includes("wa ")) {
    return "Ya, AI kami integrate dengan WhatsApp Business. Customer boleh tanya soalan, buat tempahan, dan dapat confirmation — semua automatik, 24/7.";
  }
  if (lower.includes("hello") || lower.includes("hi") || lower.includes("hai")) {
    return "Hello! Ada yang boleh saya bantu? Tanya tentang services, pricing, atau macam mana AI kami boleh bantu business anda.";
  }

  const fallbacks = [
    "Noted! Team kami boleh explain lebih detail. Nak saya schedule call, atau terus WhatsApp kami?",
    "Good question. Biasanya client tanya macam ni jugak — jawapan tepat bergantung pada jenis business. Cerita sikit tentang business anda?",
    "Saya boleh bantu dengan info tentang website build, AI customer service, atau social media integration. Which one interests you?",
  ];
  return fallbacks[Math.floor(Math.random() * fallbacks.length)];
}

export function ChatDemoWidget({
  variant = "compact",
  className,
}: ChatDemoWidgetProps) {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: text.trim(),
      time: formatTime(new Date()),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const reply: Message = {
        id: `bot-${Date.now()}`,
        role: "assistant",
        content: getPlaceholderResponse(text),
        time: formatTime(new Date()),
      };
      setMessages((prev) => [...prev, reply]);
      setTyping(false);
    }, 900 + Math.random() * 600);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const isFull = variant === "full";

  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden border border-border bg-surface",
        isFull ? "h-[480px] rounded-lg" : "h-[380px] rounded-md",
        className
      )}
    >
      {/* header */}
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-2.5">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-40" />
            <span className="relative inline-flex size-2 rounded-full bg-green-500" />
          </span>
          <div>
            <p className="text-sm font-medium">TunedInTech Support</p>
            <p className="text-xs text-muted-foreground">Online · replies instantly</p>
          </div>
        </div>
        <span className="font-mono text-[10px] text-muted-foreground">LIVE DEMO</span>
      </div>

      {/* messages */}
      <div
        ref={scrollRef}
        className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={cn(
              "flex flex-col gap-1",
              msg.role === "user" ? "items-end" : "items-start"
            )}
          >
            <div
              className={cn(
                "max-w-[85%] px-3 py-2 text-sm leading-relaxed",
                msg.role === "user"
                  ? "rounded-lg rounded-br-sm bg-brand/10 text-foreground border border-brand/20"
                  : "rounded-lg rounded-bl-sm bg-background text-foreground border border-border"
              )}
            >
              {msg.content}
            </div>
            <span className="font-mono text-[10px] text-muted-foreground">
              {msg.time}
            </span>
          </div>
        ))}

        {typing && (
          <div className="flex items-start gap-1 px-3 py-2">
            <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:0ms]" />
            <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:150ms]" />
            <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:300ms]" />
          </div>
        )}
      </div>

      {/* input */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 border-t border-border px-3 py-3"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          className="flex-1 bg-transparent px-2 py-1.5 text-sm outline-none placeholder:text-muted-foreground"
        />
        <button
          type="submit"
          disabled={!input.trim() || typing}
          className="flex size-8 shrink-0 items-center justify-center rounded-md bg-brand text-background transition-colors hover:bg-brand-dim disabled:opacity-40"
          aria-label="Send message"
        >
          <Send className="size-3.5" />
        </button>
      </form>
    </div>
  );
}
