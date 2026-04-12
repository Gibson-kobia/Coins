import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Nexara — Unified Digital Finance",
  description: "Connect your exchanges, wallets, and payment rails. One platform for all your digital finance.",
  keywords: ["fintech", "crypto", "digital finance", "payments", "wallet", "exchange"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${geist.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
