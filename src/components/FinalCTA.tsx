"use client";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-overlay opacity-25" />
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-900/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-400">
            <Zap className="h-3 w-3" />
            Ready to connect
          </div>

          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Start with one platform.
            <span className="gradient-text"> Expand from the same form.</span>
          </h2>

          <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
            Pick a card, submit your details once, and let Nexara handle the intake process for your selected connection.
          </p>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="#platforms"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-3 text-sm font-semibold text-white shadow-xl shadow-blue-500/25 transition-all hover:scale-[1.02] hover:from-blue-500 hover:to-indigo-500"
            >
              Choose A Platform <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/connect"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-3 text-sm font-medium text-slate-300 transition-all hover:bg-white/[0.08] hover:text-white"
            >
              Open Connect Form
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
