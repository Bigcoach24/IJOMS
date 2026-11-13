import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IJOMS | WhatsApp & Instagram DM Automation for Beauty Vendors",
  description:
    "Stop losing customers in your WhatsApp & Instagram DMs. IJOMS builds intelligent 24/7 sales, qualification, and follow-up systems for skincare and beauty brands.",
  openGraph: {
    title: "IJOMS | Stop Losing Customers in Your WhatsApp & Instagram DMs",
    description:
      "Intelligent DM sales & follow-up systems for beauty vendors. Book your Free Automation Audit today.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#FAF8F5] text-stone-900 font-sans selection:bg-emerald-200 selection:text-emerald-950">
        {children}
      </body>
    </html>
  );
}
