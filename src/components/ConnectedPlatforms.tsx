"use client";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

const platforms = [
  {
    name: "Coinbase",
    description: "Connect your Coinbase account to view spot balances, track trades, and unify your portfolio.",
    status: "Available",
    statusColor: "emerald",
    cta: "Connect Account",
    ctaHref: "/get-started",
    accent: "#3b82f6",
    bg: "from-blue-500/8 to-blue-600/3",
    border: "border-blue-500/20",
  },
  {
    name: "Binance",
    description: "Link your Binance API keys to sync trading activity, balances, and P&L in real time.",
    status: "Available",
    statusColor: "emerald",
    cta: "Connect Account",
    ctaHref: "/get-started",
    accent: "#eab308",
    bg: "from-yellow-500/8 to-yellow-600/3",
    border: "border-yellow-500/20",
  },
  {
    name: "Bybit",
    description: "Bring your Bybit derivatives and spot accounts into a single unified view.",
    status: "Beta",
    statusColor: "blue",
    cta: "Link Platform",
    ctaHref: "/get-started",
    accent: "#f97316",
    bg: "from-orange-500/8 to-orange-600/3",
    border: "border-orange-500/20",
  },
  {
    name: "Noones",
    description: "Connect Noones peer-to-peer trading activity and wallet balances to your Nexara dashboard.",
    status: "Beta",
    statusColor: "blue",
    cta: "Link Platform",
    ctaHref: "/get-started",
    accent: "#8b5cf6",
    bg: "from-violet-500/8 to-violet-600/3",
    border: "border-violet-500/20",
  },
  {
    name: "External Wallets",
    description: "Import balances and transaction history from MetaMask, Trust Wallet, Ledger, and hardware wallets.",
    status: "Available",
    statusColor: "emerald",
    cta: "Connect Wallet",
    ctaHref: "/get-started",
    accent: "#06b6d4",
    bg: "from-cyan-500/8 to-cyan-600/3",
    border: "border-cyan-500/20",
  },
  {
    name: "Bank & Payment Rails",
    description: "Bridge traditional payment infrastructure — ACH, SWIFT, SEPA, and domestic bank rails.",
    status: "Coming Soon",
    statusColor: "slate",
    cta: "Learn More",
    ctaHref: "/products",
    accent: "#10b981",
    bg: "from-emerald-500/8 to-emerald-600/3",
    border: "border-emerald-500/20",
  },
];

const statusStyles: Record<string, string> = {
  emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
  blue: "bg-blue-500/10 text-blue-400 border-blue-500/25",
  slate: "bg-slate-500/10 text-slate-400 border-slate-500/25",
  yellow: "bg-yellow-500/10 text-yellow-400 border-yellow-500/25",
};

export default function ConnectedPlatforms() {
  return (
    <section id="platforms" className="relative py-16 sm:py-20">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-900/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <p className="text-xs font-medium text-blue-400 uppercase tracking-widest mb-3">Account Connectivity</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Bring your entire{" "}
            <span className="gradient-text">finance stack</span> together
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Nexara connects the platforms you already use. Not a new account — a unified view of everything you already own.
          </p>
        </motion.div>

        {/* Platform grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative group bg-gradient-to-br ${platform.bg} border ${platform.border} rounded-2xl p-5 hover:border-opacity-50 transition-all duration-300 overflow-hidden`}
            >
              {/* Edge shimmer */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 0% 0%, ${platform.accent}10 0%, transparent 60%)`,
                }}
              />

              <div className="relative">
                {/* Name + status */}
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold text-white"
                      style={{ background: `${platform.accent}25`, border: `1px solid ${platform.accent}30` }}
                    >
                      {platform.name[0]}
                    </div>
                    <h3 className="text-sm font-semibold text-white">{platform.name}</h3>
                  </div>
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${statusStyles[platform.statusColor]}`}>
                    {platform.status}
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">{platform.description}</p>

                <Link
                  href={platform.ctaHref}
                  className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors group/link"
                  style={{ color: platform.accent }}
                >
                  {platform.cta}
                  <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group"
          >
            View all integrations
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
