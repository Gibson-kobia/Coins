"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-8 sm:pt-24 sm:pb-10">
      <div className="absolute inset-0 grid-overlay opacity-35" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-10 h-72 w-72 rounded-full bg-blue-700/10 blur-3xl" />
        <div className="absolute right-1/4 top-16 h-64 w-64 rounded-full bg-indigo-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-300">
            <Zap className="h-3 w-3" />
            Product-Led Onboarding
          </div>

          <h1 className="text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl">
            Choose Coinbase, Binance, Bybit, Noones, wallets, or rails,
            <span className="gradient-text"> then continue through one shared Nexara form.</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
            Every platform card is its own onboarding entry point. Select the platform you need and Nexara carries that context through a single reusable intake flow.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="#platforms"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] hover:from-blue-500 hover:to-indigo-500"
            >
              View Platform Cards <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/connect"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-slate-200 transition-colors hover:bg-white/[0.08]"
            >
              Open Shared Form
            </Link>
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-slate-500">
            {["Distinct platform cards", "One onboarding structure", "No duplicate submissions"].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
