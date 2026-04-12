import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
