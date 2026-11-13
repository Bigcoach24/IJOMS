import Image from "next/image";
import AuditForm from "@/components/AuditForm";
import SkincareDemo from "@/components/SkincareDemo";

const PAIN_POINTS = [
  {
    title: "Repetitive Customer Questions",
    description:
      "Answering 'How much?', 'Is it original?', and 'How do I use it?' 50 times a day drains your energy.",
  },
  {
    title: "Slow Replies = Lost Enquiries",
    description:
      "Beauty shoppers DM three vendors at once. When you reply hours later, they have already paid someone else.",
  },
  {
    title: "Manual Order Handling",
    description:
      "Copying addresses, calculating delivery fees, and confirming stock by hand leads to mistakes and delays.",
  },
  {
    title: "Customers Disappearing After Asking",
    description:
      "Warm buyers ask for your account details, get distracted, and never hear from you again.",
  },
  {
    title: "No Follow-Up or Reorder System",
    description:
      "Past customers finish their serum or cream after 25 days and buy elsewhere because nobody reminded them.",
  },
  {
    title: "Too Many Chats for One Person",
    description:
      "Managing Instagram DMs, WhatsApp messages, and order fulfillment alone means DMs inevitably slip through.",
  },
];

const SOLUTIONS = [
  {
    badge: "01",
    title: "Answer Common Product Questions 24/7",
    description:
      "Instant replies to pricing, ingredients, authenticity, and delivery questions—even while you sleep.",
  },
  {
    badge: "02",
    title: "Qualify Customers Automatically",
    description:
      "Asks about skin type, concerns, and goals so buyers get the right recommendation before checking out.",
  },
  {
    badge: "03",
    title: "Collect Complete Order Information",
    description:
      "Captures product selection, customer name, phone number, and city delivery fee into a clean summary.",
  },
  {
    badge: "04",
    title: "Follow Up With Interested Buyers",
    description:
      "Gently nudges prospects who asked questions or requested payment details without sounding pushy.",
  },
  {
    badge: "05",
    title: "Remind Previous Customers to Reorder",
    description:
      "Checks back in when a customer's bottle is running low, turning one-time buyers into repeat revenue.",
  },
  {
    badge: "06",
    title: "Notify You & Hand Over to a Real Person",
    description:
      "Alerts your team when human intervention is needed and hands complicated conversations straight to you.",
  },
];

const WORKFLOW_STEPS = [
  { step: "01", label: "Customer", detail: "Clicks ad or sends DM" },
  { step: "02", label: "IG / WhatsApp", detail: "Enters your DM inbox" },
  { step: "03", label: "AI Assistant", detail: "Replies in < 5 seconds" },
  { step: "04", label: "Qualification", detail: "Checks skin type & needs" },
  { step: "05", label: "Order", detail: "Captures items & delivery" },
  { step: "06", label: "Follow-up", detail: "Nudges undecided buyers" },
  { step: "07", label: "Human Handoff", detail: "Alerts you to close/confirm" },
  { step: "08", label: "Repeat Purchase", detail: "21–30 day restock reminder" },
];

const AUDIT_HIGHLIGHTS = [
  "Where enquiries may be getting lost",
  "Which repetitive tasks can be automated",
  "Where follow-up opportunities exist",
  "What could be handled by AI",
  "Where human involvement should remain",
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Sticky Top Navigation */}
      <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-[#FAF8F5]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
          <a href="#" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-800 text-sm font-bold tracking-tight text-white">
              IJ
            </span>
            <div>
              <span className="block text-base font-bold tracking-tight text-stone-900">
                IJOMS
              </span>
              <span className="block text-[11px] font-medium text-stone-500">
                Marketing &amp; Automation
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-stone-600 md:flex">
            <a href="#problem" className="transition hover:text-stone-900">
              Problem
            </a>
            <a href="#solution" className="transition hover:text-stone-900">
              Solution
            </a>
            <a href="#demo" className="transition hover:text-stone-900">
              Live Demo
            </a>
            <a href="#workflow" className="transition hover:text-stone-900">
              How It Works
            </a>
            <a href="#guarantee" className="transition hover:text-stone-900">
              7-Day Guarantee
            </a>
          </nav>

          <a
            href="#audit-form"
            className="rounded-full bg-emerald-700 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-800 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Get Free Audit
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-stone-200/70 bg-stone-950 px-4 py-20 text-white sm:px-6 sm:py-28 lg:py-32">
          {/* Background Image & Gradient Scrim */}
          <Image
            src="/img/vendor-store.webp"
            alt="Nigerian skincare store owner ready to serve customers"
            fill
            priority
            className="object-cover object-[70%_25%]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-stone-950/85 via-stone-950/75 to-stone-950/85 lg:bg-gradient-to-r lg:from-stone-950/92 lg:via-stone-950/75 lg:to-stone-950/40"
          />

          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-950/70 px-3.5 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                AI &amp; DM Automation for Skincare &amp; Beauty Vendors
              </span>

              <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]">
                Stop Losing Customers in Your{" "}
                <span className="text-emerald-400">WhatsApp &amp; Instagram DMs.</span>
              </h1>

              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-stone-200 sm:text-lg lg:mx-0">
                We build intelligent sales systems that help beauty businesses respond to
                enquiries, qualify customers, follow up with interested buyers, and create
                repeat-purchase opportunities.
              </p>

              <div className="mt-8 flex flex-col items-center gap-3.5 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href="#audit-form"
                  className="w-full rounded-full bg-emerald-500 px-8 py-4 text-center text-base font-semibold text-stone-950 shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400 sm:w-auto"
                >
                  Get Your Free Automation Audit
                </a>
                <a
                  href="#demo"
                  className="w-full rounded-full border border-white/25 bg-white/10 px-7 py-4 text-center text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 sm:w-auto"
                >
                  Try Interactive Demo
                </a>
              </div>

              <p className="mt-5 text-xs leading-relaxed text-stone-300 sm:text-sm">
                <strong className="font-semibold text-white">
                  You don&apos;t have to buy anything to get the audit.
                </strong>{" "}
                We analyse your current process first and show you what could
                realistically be automated.
              </p>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="problem" className="px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-rose-700">
                The Problem
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
                Running ads isn&apos;t your problem. Losing warm DMs is.
              </h2>
              <p className="mt-3 text-base text-stone-600">
                If you sell skincare or beauty products on Instagram and WhatsApp, this
                probably sounds familiar:
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PAIN_POINTS.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-stone-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section
          id="solution"
          className="border-y border-stone-200/80 bg-white px-4 py-16 sm:px-6 sm:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                The IJOMS Solution
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
                An intelligent sales system tailored to your beauty catalog
              </h2>
              <p className="mt-3 text-base text-stone-600">
                IJOMS builds automated DM workflows that handle routine enquiries,
                qualify buyers, and pass ready-to-pay customers straight to you.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {SOLUTIONS.map((sol) => (
                <div
                  key={sol.badge}
                  className="rounded-2xl border border-stone-200 bg-[#FAF8F5] p-6 transition hover:border-emerald-300"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-700 font-mono text-xs font-bold text-white">
                    {sol.badge}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-stone-900">{sol.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    {sol.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Product Visual Strip */}
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="overflow-hidden rounded-2xl border border-stone-200 bg-[#FAF8F5] p-3">
                <Image
                  src="/img/aurora-products.jpg"
                  alt="Aurora Botanicals skincare routine products"
                  width={800}
                  height={500}
                  className="h-56 w-full rounded-xl object-cover"
                />
                <p className="mt-3 px-1 text-xs font-medium text-stone-600">
                  Recommends the right serum &amp; moisturizer pairing based on skin type
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl border border-stone-200 bg-[#FAF8F5] p-3">
                <Image
                  src="/img/avalon-products.jpg"
                  alt="Avalon skincare collection bottles"
                  width={800}
                  height={500}
                  className="h-56 w-full rounded-xl object-cover"
                />
                <p className="mt-3 px-1 text-xs font-medium text-stone-600">
                  Answers authenticity, usage, and active-ingredient questions automatically
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive AI Demo Section */}
        <section id="demo" className="bg-[#FAF8F5] px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Interactive Demo
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
                Test how your automated beauty sales assistant works
              </h2>
              <p className="mt-3 text-base text-stone-600">
                Try tapping a customer question below to see the full flow: Question →
                Answer → Qualification → Recommendation → Order → Human Handoff.
              </p>
            </div>

            <div className="mt-12 grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <SkincareDemo />
              </div>

              <div className="flex flex-col items-center lg:col-span-5">
                <div className="w-full max-w-sm overflow-hidden rounded-3xl border border-stone-200 bg-white p-3 shadow-lg">
                  <Image
                    src="/img/whatsapp-mockup.jpeg"
                    alt="WhatsApp skincare recommendation and cart preview"
                    width={600}
                    height={750}
                    className="h-auto w-full rounded-2xl object-cover"
                  />
                </div>
                <p className="mt-3 text-center text-xs text-stone-500">
                  Example of how product cards &amp; routine advice appear inside WhatsApp
                </p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <a
                href="#audit-form"
                className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-700/20 transition hover:bg-emerald-800"
              >
                I Want This For My Business →
              </a>
            </div>
          </div>
        </section>

        {/* Visual Workflow Section */}
        <section
          id="workflow"
          className="border-t border-stone-200/80 bg-white px-4 py-16 sm:px-6 sm:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                How It Works
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
                From first DM to repeat purchase—mapped end to end
              </h2>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {WORKFLOW_STEPS.map((item, idx) => (
                <div
                  key={item.step}
                  className="relative flex items-start gap-4 rounded-2xl border border-stone-200 bg-[#FAF8F5] p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-mono text-sm font-bold text-emerald-800">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900">{item.label}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-stone-600">
                      {item.detail}
                    </p>
                  </div>
                  {idx < WORKFLOW_STEPS.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="hidden text-stone-400 lg:absolute lg:-right-3 lg:top-1/2 lg:-translate-y-1/2 lg:block"
                    >
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7-Day Implementation Guarantee */}
        <section id="guarantee" className="bg-white px-4 pb-16 sm:px-6 sm:pb-24">
          <div className="mx-auto max-w-4xl rounded-3xl border border-emerald-200 bg-emerald-950 px-6 py-10 text-white shadow-xl sm:px-12 sm:py-14">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-900 px-3.5 py-1 text-xs font-semibold text-emerald-200">
                  7-Day Implementation Guarantee
                </span>
                <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                  Your agreed workflow live in 7 days—or we keep working at zero extra
                  service charge.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-emerald-100/85 sm:text-base">
                  Once we agree on the automation workflow, IJOMS will have the agreed
                  system functioning within 7 days, or we&apos;ll continue working on the
                  implementation at no additional service charge until it is functioning
                  as agreed.
                </p>
                <p className="mt-3 text-xs text-emerald-200/75">
                  *Important: This is a delivery/implementation guarantee, not a guarantee
                  of a specific number of sales.
                </p>
              </div>
              <a
                href="#audit-form"
                className="shrink-0 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-50"
              >
                Book Free Audit
              </a>
            </div>
          </div>
        </section>

        {/* Free Automation Audit Form */}
        <section
          id="audit-form"
          className="border-t border-stone-200 bg-[#F4F1EA] px-4 py-16 sm:px-6 sm:py-24"
        >
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Free Automation Audit
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
                See What You Could Automate — Free
              </h2>
              <p className="mt-3 text-base text-stone-600">
                We analyse your current customer journey and show you what we recommend
                first—with zero obligation to buy.
              </p>

              <ul className="mx-auto mt-6 grid max-w-xl gap-2 text-left text-sm text-stone-700 sm:grid-cols-2">
                {AUDIT_HIGHLIGHTS.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-0.5 font-bold text-emerald-700">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <AuditForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white px-4 py-8 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-stone-500 sm:flex-row">
          <p className="font-medium text-stone-700">
            © 2026 IJOMS Marketing &amp; Automation Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#problem" className="hover:text-stone-900">
              Problem
            </a>
            <a href="#solution" className="hover:text-stone-900">
              Solution
            </a>
            <a href="#demo" className="hover:text-stone-900">
              Live Demo
            </a>
            <a href="#workflow" className="hover:text-stone-900">
              How It Works
            </a>
            <a href="#audit-form" className="hover:text-stone-900">
              Free Audit
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
