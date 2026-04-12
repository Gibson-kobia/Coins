"use client";
import { motion } from "framer-motion";
import { Zap, Wallet, ShoppingCart, BarChart3, Layers, ShieldAlert } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Transfers",
    desc: "Move assets across platforms with sub-second confirmation. Supports crypto, stablecoin, and fiat rails.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    glow: "group-hover:shadow-blue-500/10",
  },
  {
    icon: Wallet,
    title: "Wallet Infrastructure",
    desc: "Custodial and non-custodial wallet management with threshold controls and access policies.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    glow: "group-hover:shadow-violet-500/10",
  },
  {
    icon: ShoppingCart,
    title: "Merchant Checkout",
    desc: "Accept crypto payments with automatic settlement. Embeddable, API-driven, and fully customizable.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    glow: "group-hover:shadow-emerald-500/10",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    desc: "Track portfolio movements, transfer volumes, and liquidity positions across all connected accounts.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    glow: "group-hover:shadow-cyan-500/10",
  },
  {
    icon: Layers,
    title: "Multi-Asset Support",
    desc: "BTC, ETH, USDC, USDT, and emerging assets. Stablecoin-native with cross-chain routing.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    glow: "group-hover:shadow-indigo-500/10",
  },
  {
    icon: ShieldAlert,
    title: "Fraud & Risk Controls",
    desc: "Transaction screening, behavioral scoring, and configurable risk rules protect every movement.",
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
    glow: "group-hover:shadow-rose-500/10",
  },
];

export default function CoreFeatures() {
  return (
    <section id="features" className="relative py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-medium text-blue-400 uppercase tracking-widest mb-3">Core Capabilities</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Infrastructure built for{" "}
            <span className="gradient-text">modern finance</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-sm sm:text-base">
            Every module designed to be composable, scalable, and integration-ready from day one.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative bg-[#0a0a1e]/60 border ${feature.border} rounded-2xl p-6 hover:border-opacity-60 transition-all duration-300 hover:shadow-xl ${feature.glow}`}
            >
              <div className={`w-10 h-10 rounded-xl ${feature.bg} ${feature.border} border flex items-center justify-center mb-4`}>
                <feature.icon className={`w-5 h-5 ${feature.color}`} />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
