"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownLeft, Clock, CheckCircle2, TrendingUp } from "lucide-react";

const transactions = [
  { type: "send", label: "Transfer to Binance", asset: "USDT", amount: "-$2,500.00", time: "2m ago", status: "confirmed" },
  { type: "receive", label: "Received from Coinbase", asset: "BTC", amount: "+$1,840.50", time: "15m ago", status: "confirmed" },
  { type: "send", label: "Merchant Settlement", asset: "USDC", amount: "-$640.00", time: "1h ago", status: "pending" },
  { type: "receive", label: "Bybit P&L Sync", asset: "ETH", amount: "+$318.20", time: "3h ago", status: "confirmed" },
  { type: "send", label: "Cross-border Rail", asset: "USDT", amount: "-$5,000.00", time: "5h ago", status: "confirmed" },
];

const balances = [
  { asset: "USDT", amount: "18,420.30", sub: "Tether USD", change: "+0.2%", up: true },
  { asset: "BTC", amount: "0.4812", sub: "Bitcoin", change: "+1.8%", up: true },
  { asset: "ETH", amount: "3.204", sub: "Ethereum", change: "-0.6%", up: false },
  { asset: "USDC", amount: "9,200.00", sub: "USD Coin", change: "0.0%", up: true },
];

export default function TransactionShowcase() {
  return (
    <section className="relative py-16 sm:py-24 bg-[#040410]">
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-900/[0.08] blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-indigo-900/[0.08] blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-medium text-blue-400 uppercase tracking-widest mb-3">Transaction Intelligence</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            A dashboard that shows you{" "}
            <span className="gradient-text">everything</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-sm sm:text-base">
            Real-time activity, live balances, and movement analytics — unified across every platform you use.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Transaction feed */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-[#0a0a1e]/80 border border-white/[0.06] rounded-2xl overflow-hidden"
          >
            <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-white">Recent Activity</p>
                <p className="text-[10px] text-slate-500">All platforms · Last 24h</p>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] text-slate-500">Live</span>
              </div>
            </div>
            <div className="divide-y divide-white/5">
              {transactions.map((tx, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-4 px-5 py-3.5 hover:bg-white/[0.02] transition-colors"
                >
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    tx.type === "send" ? "bg-red-500/10 border border-red-500/20" : "bg-emerald-500/10 border border-emerald-500/20"
                  }`}>
                    {tx.type === "send"
                      ? <ArrowUpRight className="w-4 h-4 text-red-400" />
                      : <ArrowDownLeft className="w-4 h-4 text-emerald-400" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-white truncate">{tx.label}</p>
                    <p className="text-[10px] text-slate-500">{tx.asset} · {tx.time}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-xs font-semibold ${tx.type === "send" ? "text-red-400" : "text-emerald-400"}`}>{tx.amount}</p>
                    <div className={`flex items-center justify-end gap-1 text-[9px] ${tx.status === "confirmed" ? "text-emerald-500" : "text-yellow-500"}`}>
                      {tx.status === "confirmed"
                        ? <CheckCircle2 className="w-2.5 h-2.5" />
                        : <Clock className="w-2.5 h-2.5" />}
                      {tx.status}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Balances + chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Mini chart card */}
            <div className="bg-[#0a0a1e]/80 border border-white/[0.06] rounded-2xl p-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-semibold text-white">Portfolio Value</p>
                <div className="flex items-center gap-1 text-emerald-400">
                  <TrendingUp className="w-3 h-3" />
                  <span className="text-[10px] font-medium">+3.2% this week</span>
                </div>
              </div>
              <p className="text-xl font-bold text-white mb-3">$29,814.60</p>
              <div className="h-20 relative">
                <svg viewBox="0 0 240 80" className="w-full h-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="dash-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,60 C20,55 40,48 60,40 C80,32 100,45 120,35 C140,25 160,18 180,12 C200,6 220,5 240,4" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
                  <path d="M0,60 C20,55 40,48 60,40 C80,32 100,45 120,35 C140,25 160,18 180,12 C200,6 220,5 240,4 L240,80 L0,80 Z" fill="url(#dash-grad)" />
                </svg>
              </div>
            </div>

            {/* Balances */}
            <div className="bg-[#0a0a1e]/80 border border-white/[0.06] rounded-2xl overflow-hidden">
              <div className="px-4 py-3 border-b border-white/5">
                <p className="text-xs font-semibold text-white">Asset Balances</p>
              </div>
              <div className="divide-y divide-white/5">
                {balances.map((b) => (
                  <div key={b.asset} className="flex items-center justify-between px-4 py-2.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-lg bg-blue-500/15 border border-blue-500/20 flex items-center justify-center">
                        <span className="text-[8px] font-bold text-blue-300">{b.asset[0]}</span>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-white">{b.asset}</p>
                        <p className="text-[9px] text-slate-500">{b.sub}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-semibold text-white">{b.amount}</p>
                      <p className={`text-[9px] ${b.up ? "text-emerald-400" : "text-red-400"}`}>{b.change}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
