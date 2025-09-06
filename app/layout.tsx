import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "AI Tools Hub – Premium AI Landing",
  description: "A premium, interactive AI tools landing built with Next.js, Tailwind CSS, and Framer Motion. Developer — Bushra Sayyed.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "AI Tools Hub – Premium AI Landing",
    description: "Built with Next.js, Tailwind, Framer Motion. Developer — Bushra Sayyed.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Tools Hub – Premium AI Landing",
    description: "Portfolio-ready, highly interactive. Developer — Bushra Sayyed."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-gradient-to-br from-indigo-950 via-blue-950 to-purple-950 text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
