"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap, TrendingUp, Shield, Globe } from "lucide-react";
import Link from "next/link";

const platformCards = [
  { name: "Coinbase", type: "Exchange", color: "from-blue-500/20 to-blue-600/10", dot: "#3b82f6", balance: "$12,450.80", change: "+2.4%" },
  { name: "Binance", type: "Exchange", color: "from-yellow-500/20 to-yellow-600/10", dot: "#eab308", balance: "$8,921.30", change: "+1.1%" },
  { name: "Bybit", type: "Exchange", color: "from-orange-500/20 to-orange-600/10", dot: "#f97316", balance: "$5,340.00", change: "-0.3%" },
  { name: "MetaMask", type: "Wallet", color: "from-orange-400/20 to-amber-600/10", dot: "#fb923c", balance: "$3,102.50", change: "+5.8%" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-overlay opacity-50" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-600/8 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-indigo-600/8 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-900/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Copy */}
          <div className="space-y-6 lg:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium"
            >
              <Zap className="w-3 h-3" />
              Unified Digital Finance Infrastructure
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
              >
                Connect the platforms{" "}
                <span className="gradient-text">you already use.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-lg"
              >
                Nexara unifies your exchanges, wallets, and payment rails into a single dashboard. Track balances, move assets, and settle instantly — without switching tabs.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-500 hover:to-indigo-500 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02]"
              >
                Start for Free <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-slate-300 bg-white/5 border border-white/10 rounded-xl hover:bg-white/[0.08] hover:text-white transition-all"
              >
                See How It Works
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-500"
            >
              {["No setup fees", "Connect in minutes", "Bank-grade security"].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Platform Module */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Main card */}
            <div className="relative bg-[#0c0c20]/80 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 shadow-2xl glow-card">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">Total Portfolio</p>
                  <p className="text-2xl font-bold text-white">$29,814.60</p>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                  <TrendingUp className="w-3 h-3 text-emerald-400" />
                  <span className="text-xs text-emerald-400 font-medium">+3.2%</span>
                </div>
              </div>

              {/* Mini chart */}
              <div className="mb-4 h-16 relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-500/5 to-indigo-500/5 border border-white/5">
                <svg viewBox="0 0 300 64" className="w-full h-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,48 C30,44 60,36 90,32 C120,28 150,38 180,30 C210,22 240,16 270,10 C285,7 295,6 300,5" fill="none" stroke="#3b82f6" strokeWidth="2" />
                  <path d="M0,48 C30,44 60,36 90,32 C120,28 150,38 180,30 C210,22 240,16 270,10 C285,7 295,6 300,5 L300,64 L0,64 Z" fill="url(#chartGrad)" />
                </svg>
              </div>

              {/* Platform cards */}
              <div className="space-y-2">
                {platformCards.map((card, i) => (
                  <motion.div
                    key={card.name}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className={`flex items-center justify-between p-3 rounded-xl bg-gradient-to-r ${card.color} border border-white/5 hover:border-white/10 transition-all group`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-black/30 border border-white/10 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full" style={{ background: card.dot }} />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-white">{card.name}</p>
                        <p className="text-[10px] text-slate-500">{card.type}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-semibold text-white">{card.balance}</p>
                      <p className={`text-[10px] ${card.change.startsWith("+") ? "text-emerald-400" : "text-red-400"}`}>{card.change}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom status */}
              <div className="mt-4 flex items-center justify-between pt-3 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] text-slate-500">All platforms synced</span>
                </div>
                <div className="flex items-center gap-3 text-[10px] text-slate-500">
                  <span className="flex items-center gap-1"><Shield className="w-3 h-3 text-blue-400" /> Encrypted</span>
                  <span className="flex items-center gap-1"><Globe className="w-3 h-3 text-indigo-400" /> Live</span>
                </div>
              </div>
            </div>

            {/* Floating accent */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-[#0c0c20]/90 backdrop-blur-xl border border-blue-500/20 rounded-xl p-3 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <Zap className="w-3 h-3 text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-medium text-white">Instant Transfer</p>
                  <p className="text-[9px] text-emerald-400">Confirmed</p>
                </div>
              </div>
            </motion.div>

            {/* Floating bottom */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-[#0c0c20]/90 backdrop-blur-xl border border-violet-500/20 rounded-xl p-3 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                  <Shield className="w-3 h-3 text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-medium text-white">Risk Score</p>
                  <p className="text-[9px] text-blue-400">Minimal</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
