"use client";

import { useState, type FormEvent } from "react";

interface AuditFormData {
  name: string;
  businessName: string;
  whatsapp: string;
  instagram: string;
  products: string;
  volume: string;
  bottleneck: string;
}

const INITIAL_FORM: AuditFormData = {
  name: "",
  businessName: "",
  whatsapp: "",
  instagram: "",
  products: "",
  volume: "20–50 DMs / day",
  bottleneck: "",
};

const VOLUME_OPTIONS = [
  "Under 20 DMs / day",
  "20–50 DMs / day",
  "50–150 DMs / day",
  "150+ DMs / day",
];

const BOTTLENECK_OPTIONS = [
  "Repetitive 'How much?' & 'Is it original?' questions",
  "Slow replies causing customers to buy elsewhere",
  "Ghosted DMs after sharing account details",
  "No follow-up / restock reminders for past buyers",
  "Overwhelmed handling orders across WhatsApp & IG",
];

export default function AuditForm() {
  const [form, setForm] = useState<AuditFormData>(INITIAL_FORM);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      // Graceful preview mode when Web3Forms key is not yet configured in .env.local
      setStatus("success");
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New IJOMS Free Audit Request — ${form.businessName}`,
          from_name: "IJOMS Audit Funnel",
          ...form,
        }),
      });

      const result = (await response.json()) as { success?: boolean; message?: string };
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to submit right now. Please try again.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50/70 p-8 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-stone-900">
          Audit Request Received!
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-stone-600">
          Thank you, <span className="font-semibold text-stone-900">{form.name}</span>.
          We&apos;ve logged the details for{" "}
          <span className="font-semibold text-stone-900">{form.businessName}</span> and
          will reach out on WhatsApp (<span className="font-mono">{form.whatsapp}</span>)
          within 24 hours with your custom DM automation plan.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(INITIAL_FORM);
            setStatus("idle");
          }}
          className="mt-6 inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-stone-700 transition hover:bg-stone-50"
        >
          Submit another business
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl border border-stone-200 bg-white p-6 shadow-xl shadow-stone-900/5 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-stone-800">
            Your Name <span className="text-rose-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="e.g. Amaka Okafor"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="mt-1.5 w-full rounded-xl border border-stone-300 bg-stone-50/50 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-emerald-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
          />
        </div>

        <div>
          <label htmlFor="businessName" className="block text-sm font-medium text-stone-800">
            Business / Brand Name <span className="text-rose-600">*</span>
          </label>
          <input
            id="businessName"
            name="businessName"
            type="text"
            required
            placeholder="e.g. GlowLab Skincare"
            value={form.businessName}
            onChange={(e) => setForm({ ...form, businessName: e.target.value })}
            className="mt-1.5 w-full rounded-xl border border-stone-300 bg-stone-50/50 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-emerald-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="whatsapp" className="block text-sm font-medium text-stone-800">
            WhatsApp Number <span className="text-rose-600">*</span>
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            required
            placeholder="e.g. 0803 123 4567"
            value={form.whatsapp}
            onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
            className="mt-1.5 w-full rounded-xl border border-stone-300 bg-stone-50/50 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-emerald-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
          />
        </div>

        <div>
          <label htmlFor="instagram" className="block text-sm font-medium text-stone-800">
            Instagram Page Link or Handle <span className="text-rose-600">*</span>
          </label>
          <input
            id="instagram"
            name="instagram"
            type="text"
            required
            placeholder="e.g. @glowlab.ng or instagram.com/..."
            value={form.instagram}
            onChange={(e) => setForm({ ...form, instagram: e.target.value })}
            className="mt-1.5 w-full rounded-xl border border-stone-300 bg-stone-50/50 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-emerald-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="products" className="block text-sm font-medium text-stone-800">
            What Do You Sell? <span className="text-rose-600">*</span>
          </label>
          <input
            id="products"
            name="products"
            type="text"
            required
            placeholder="e.g. Skincare serums, organic soaps, wigs"
            value={form.products}
            onChange={(e) => setForm({ ...form, products: e.target.value })}
            className="mt-1.5 w-full rounded-xl border border-stone-300 bg-stone-50/50 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-emerald-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
          />
        </div>

        <div>
          <label htmlFor="volume" className="block text-sm font-medium text-stone-800">
            Daily Enquiry Volume <span className="text-rose-600">*</span>
          </label>
          <select
            id="volume"
            name="volume"
            value={form.volume}
            onChange={(e) => setForm({ ...form, volume: e.target.value })}
            className="mt-1.5 w-full rounded-xl border border-stone-300 bg-stone-50/50 px-4 py-3 text-sm text-stone-900 focus:border-emerald-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
          >
            {VOLUME_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="bottleneck" className="block text-sm font-medium text-stone-800">
          Biggest DM Bottleneck Right Now <span className="text-rose-600">*</span>
        </label>
        <select
          id="bottleneck"
          name="bottleneck"
          required
          value={form.bottleneck}
          onChange={(e) => setForm({ ...form, bottleneck: e.target.value })}
          className="mt-1.5 w-full rounded-xl border border-stone-300 bg-stone-50/50 px-4 py-3 text-sm text-stone-900 focus:border-emerald-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
        >
          <option value="" disabled>
            Select your biggest challenge...
          </option>
          {BOTTLENECK_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {status === "error" && (
        <p className="rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-700">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-emerald-700 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-700/20 transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting"
          ? "Sending Audit Request..."
          : "Get My Free Automation Audit →"}
      </button>

      <p className="text-center text-xs text-stone-500">
        100% free, zero-obligation audit. We never spam or share your business data.
      </p>
    </form>
  );
}
