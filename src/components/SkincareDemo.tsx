"use client";

import { useRef, useState, type FormEvent } from "react";

interface ChatMessage {
  id: string;
  sender: "customer" | "assistant" | "system";
  text: string;
  tag?: string;
}

const QUICK_PROMPTS = [
  "Is this good for oily skin?",
  "How much is it?",
  "Is it original?",
  "How do I use it?",
  "Do you deliver?",
  "I want to order.",
];

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: "init-1",
    sender: "assistant",
    tag: "Instant Reply (< 3s)",
    text: "Hi! Welcome to Aurora Botanicals Skincare. Tell me your skin goal or tap a quick question below—I'll help you pick the right routine and sort out delivery.",
  },
];

function getScriptedReply(input: string, nextId: () => string): ChatMessage[] {
  const q = input.toLowerCase();

  if (q.includes("oily") || q.includes("acne") || q.includes("skin")) {
    return [
      {
        id: nextId(),
        sender: "assistant",
        tag: "Qualification + Routine",
        text: "Great question! Our Replenish Serum (Hyaluronic + Vitamin C) is lightweight and oil-free—safe for oily or acne-prone skin without clogging pores. Quick check so I recommend the safest routine: are you currently using any strong exfoliating acids (AHA/BHA) or retinol?",
      },
    ];
  }

  if (q.includes("much") || q.includes("price") || q.includes("cost")) {
    return [
      {
        id: nextId(),
        sender: "assistant",
        tag: "Pricing + Bundle",
        text: "Here are our current prices:\n• Replenish Serum (30ml): ₦18,500\n• Luminous Moisture Cream (50ml): ₦22,000\n• Glow Duo Bundle (Both): ₦37,500 (save ₦3,000).\nWould you like me to check which option fits your skin type best?",
      },
    ];
  }

  if (q.includes("original") || q.includes("authentic") || q.includes("fake")) {
    return [
      {
        id: nextId(),
        sender: "assistant",
        tag: "Trust & Authenticity",
        text: "100% original and NAFDAC-compliant. Every bottle ships sealed directly from our Lagos studio with a batch code you can verify on delivery. Would you like to see a routine recommendation or place an order?",
      },
    ];
  }

  if (q.includes("use") || q.includes("routine") || q.includes("apply")) {
    return [
      {
        id: nextId(),
        sender: "assistant",
        tag: "Usage + Safety Note",
        text: "AM & PM Routine:\n1. Cleanse face and leave skin slightly damp.\n2. Apply 2–3 drops of Replenish Serum.\n3. Seal with Luminous Moisture Cream.\n4. Finish with SPF 50 every morning.\n(Tip: Avoid layering Vitamin C at the exact same time as high-strength AHA/BHA to prevent irritation.)",
      },
    ];
  }

  if (q.includes("deliver") || q.includes("lagos") || q.includes("abuja") || q.includes("port harcourt")) {
    return [
      {
        id: nextId(),
        sender: "assistant",
        tag: "Delivery Calculation",
        text: "Yes, we deliver nationwide:\n• Lagos: ₦2,500 (Same-day / Next-day)\n• Abuja & Port Harcourt: ₦4,000 (1–2 working days)\n• Other states: ₦4,500 (2–3 working days).\nWhich city are you ordering from?",
      },
    ];
  }

  if (q.includes("order") || q.includes("buy") || q.includes("pay")) {
    return [
      {
        id: nextId(),
        sender: "assistant",
        tag: "Order Capture",
        text: "Awesome! I've reserved your Glow Duo Bundle (₦37,500) + Lagos Delivery (₦2,500) = ₦40,000 total. Please reply with your full name and delivery address to confirm.",
      },
      {
        id: nextId(),
        sender: "system",
        text: "Human Handoff Triggered: High-intent buyer ready to pay (₦40,000). Vendor notified on WhatsApp with order summary & customer details.",
      },
    ];
  }

  return [
    {
      id: nextId(),
      sender: "assistant",
      tag: "Qualification",
      text: "Thanks for reaching out! To recommend the best skincare routine for you, is your skin mostly oily, dry, combination, or sensitive? You can also ask about prices, originality, or delivery.",
    },
  ];
}

export default function SkincareDemo() {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const idCounter = useRef(0);

  function nextId() {
    idCounter.current += 1;
    return `msg-${idCounter.current}`;
  }

  function sendPrompt(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    const customerMsg: ChatMessage = {
      id: nextId(),
      sender: "customer",
      text: trimmed,
    };

    const replies = getScriptedReply(trimmed, nextId);
    setMessages((prev) => [...prev, customerMsg, ...replies]);
    setInput("");
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    sendPrompt(input);
  }

  return (
    <div className="flex flex-col overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-xl shadow-stone-900/5">
      {/* Chat Header */}
      <div className="flex items-center justify-between bg-emerald-900 px-5 py-4 text-white">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-700 text-sm font-bold">
            AB
          </div>
          <div>
            <p className="text-sm font-bold">Aurora Botanicals • AI Sales Demo</p>
            <p className="text-xs text-emerald-200">
              Simulated Beauty DM Assistant • Online 24/7
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setMessages(INITIAL_MESSAGES)}
          className="rounded-full border border-emerald-700 bg-emerald-800/80 px-3 py-1 text-xs font-medium text-emerald-100 transition hover:bg-emerald-700"
        >
          Reset
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex max-h-[380px] min-h-[300px] flex-col gap-3 overflow-y-auto bg-[#F4F1EA] p-4 sm:p-5">
        {messages.map((msg) => {
          if (msg.sender === "system") {
            return (
              <div
                key={msg.id}
                className="mx-auto my-1 max-w-md rounded-xl border border-amber-300 bg-amber-50 px-3.5 py-2.5 text-center text-xs font-medium text-amber-900"
              >
                {msg.text}
              </div>
            );
          }

          const isCustomer = msg.sender === "customer";
          return (
            <div
              key={msg.id}
              className={`flex flex-col ${isCustomer ? "items-end" : "items-start"}`}
            >
              {msg.tag && (
                <span className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-800">
                  {msg.tag}
                </span>
              )}
              <div
                className={`max-w-[85%] whitespace-pre-line rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                  isCustomer
                    ? "rounded-br-sm bg-emerald-700 text-white"
                    : "rounded-bl-sm border border-stone-200 bg-white text-stone-800"
                }`}
              >
                {msg.text}
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Prompts */}
      <div className="border-t border-stone-200 bg-stone-50 px-4 py-3">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-stone-500">
          Tap a customer question to test:
        </p>
        <div className="flex flex-wrap gap-2">
          {QUICK_PROMPTS.map((prompt) => (
            <button
              key={prompt}
              type="button"
              onClick={() => sendPrompt(prompt)}
              className="rounded-full border border-stone-300 bg-white px-3 py-1.5 text-xs font-medium text-stone-700 transition hover:border-emerald-600 hover:bg-emerald-50 hover:text-emerald-900"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* Input Bar */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 border-t border-stone-200 bg-white p-3 sm:px-4"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Or type your own skincare question..."
          className="flex-1 rounded-full border border-stone-300 bg-stone-50 px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:border-emerald-600 focus:bg-white focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-800"
        >
          Send
        </button>
      </form>
    </div>
  );
}
