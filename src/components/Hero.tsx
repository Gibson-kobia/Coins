"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Route, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { platforms } from "@/lib/platforms";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 sm:pt-24">
      <div className="absolute inset-0 grid-overlay opacity-35" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-16 h-80 w-80 rounded-full bg-blue-700/10 blur-3xl" />
        <div className="absolute right-1/4 top-20 h-72 w-72 rounded-full bg-indigo-700/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8 lg:pb-10">
        <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-300">
              <Zap className="h-3 w-3" />
              Shared Connection Layer
            </div>

            <h1 className="text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl">
              Choose your platform, then continue through one shared Nexara onboarding flow.
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
              Every platform card is an individual entry point. Nexara carries selected platform context into one reusable intake, then routes onboarding and status tracking in one control layer.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#platforms"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] hover:from-blue-500 hover:to-indigo-500"
              >
                Choose Platform <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-slate-200 transition-colors hover:bg-white/[0.08]"
              >
                View Product Preview
              </Link>
            </div>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500">
              {[
                "Platform-specific entry cards",
                "One reusable onboarding intake",
                "Unified connection status visibility",
              ].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="rounded-2xl border border-white/10 bg-[#0A1122]/85 p-4 shadow-[0_20px_60px_rgba(2,6,23,0.45)] sm:p-5"
          >
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-blue-300">Flow Snapshot</p>
                <p className="mt-1 text-sm font-semibold text-white">Platform card -&gt; Shared form -&gt; Status board</p>
              </div>
              <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1 text-[11px] text-cyan-300">Live UX</span>
            </div>

            <div className="space-y-2.5">
              {platforms.slice(0, 4).map((platform) => (
                <div key={platform.id} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 overflow-hidden rounded-lg border border-white/10 bg-black/20 p-1">
                      <Image src={platform.logo} alt={`${platform.name} icon`} width={32} height={32} className="h-full w-full rounded object-cover" />
                    </div>
                    <div>
                      <p className="text-sm text-white">{platform.name}</p>
                      <p className="text-[11px] text-slate-500">{platform.ctaLabel}</p>
                    </div>
                  </div>
                  <Route className="h-4 w-4 text-slate-500" />
                </div>
              ))}
            </div>

            <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.02] p-3">
              <p className="text-[11px] text-slate-500">Selected platform context is preserved through onboarding and post-submit connection status.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
