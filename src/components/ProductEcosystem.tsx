"use client";
import { motion } from "framer-motion";
import { User, Building2, Code2, Wallet, Globe, Coins } from "lucide-react";
import Link from "next/link";

const products = [
  {
    icon: User,
    title: "Personal Account",
    desc: "Manage your digital assets, track spending, and monitor investments across all connected platforms from a single view.",
    href: "/products",
    color: "text-blue-400",
    accent: "#3b82f6",
  },
  {
    icon: Building2,
    title: "Business Payments",
    desc: "Accept, route, and settle payments for your business with configurable workflows and multi-currency support.",
    href: "/solutions",
    color: "text-violet-400",
    accent: "#8b5cf6",
  },
  {
    icon: Code2,
    title: "API & Developer Tools",
    desc: "Build finance-native products on Nexara's infrastructure with REST APIs, webhooks, and SDKs.",
    href: "/developers",
    color: "text-cyan-400",
    accent: "#06b6d4",
  },
  {
    icon: Wallet,
    title: "Wallet Management",
    desc: "Generate, manage, and audit wallets at scale. Full custody controls, access policies, and signing infrastructure.",
    href: "/products",
    color: "text-indigo-400",
    accent: "#6366f1",
  },
  {
    icon: Globe,
    title: "Cross-Border Settlement",
    desc: "Route international payments via optimal rails — crypto, stablecoin, or traditional. Transparent FX and settlement.",
    href: "/solutions",
    color: "text-emerald-400",
    accent: "#10b981",
  },
  {
    icon: Coins,
    title: "Stablecoin & Crypto Rails",
    desc: "Use USDC, USDT, and native crypto as settlement layers for programmable payment flows.",
    href: "/products",
    color: "text-amber-400",
    accent: "#f59e0b",
  },
];

export default function ProductEcosystem() {
  return (
    <section className="relative py-16 sm:py-24 bg-[#040410]">
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-medium text-blue-400 uppercase tracking-widest mb-3">Product Ecosystem</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Everything your finance stack{" "}
            <span className="gradient-text">needs</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-sm sm:text-base">
            From personal portfolios to enterprise payment infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={product.href}
                className="group block h-full bg-[#0a0a1e]/80 border border-white/[0.06] rounded-2xl p-6 hover:border-white/[0.15] transition-all duration-300"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${product.accent}15`, border: `1px solid ${product.accent}25` }}
                >
                  <product.icon className={`w-5 h-5 ${product.color}`} />
                </div>
                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">{product.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{product.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
