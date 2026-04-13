"use client";

import { motion } from "framer-motion";
import { Activity, CheckCircle2, Clock3 } from "lucide-react";

const statuses = [
  { platform: "Coinbase", state: "In Review", tone: "text-amber-300" },
  { platform: "Binance", state: "Connected", tone: "text-emerald-300" },
  { platform: "External Wallets", state: "Awaiting User Action", tone: "text-cyan-300" },
];

export default function DashboardPreview() {
  return (
    <section id="dashboard-preview" className="py-12 sm:py-14">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl border border-white/10 bg-[#0B1020]/85 p-5 sm:p-6"
        >
          <p className="mb-2 text-xs uppercase tracking-[0.16em] text-blue-300">Post-Submit Experience</p>
          <h3 className="text-2xl font-bold text-white sm:text-3xl">Track connection progress in one control workspace.</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            After onboarding submission, users see platform-specific status, next steps, and sync visibility in a single Nexara view.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">Status timeline</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">Connection health</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">Unified activity feed</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#111835]/85 to-[#0B1020]/85 p-5 shadow-[0_16px_40px_rgba(2,6,23,0.5)] sm:p-6"
        >
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-semibold text-white">Connection Status Board</p>
            <span className="rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2 py-0.5 text-[11px] text-emerald-300">Live Demo</span>
          </div>

          <div className="space-y-2.5">
            {statuses.map((item) => (
              <div key={item.platform} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3">
                <div>
                  <p className="text-sm text-white">{item.platform}</p>
                  <p className="text-[11px] text-slate-500">Connection pathway</p>
                </div>
                <p className={`text-xs font-medium ${item.tone}`}>{item.state}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2 text-center">
              <CheckCircle2 className="mx-auto mb-1 h-4 w-4 text-emerald-300" />
              <p className="text-[10px] text-slate-400">2 Connected</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2 text-center">
              <Clock3 className="mx-auto mb-1 h-4 w-4 text-amber-300" />
              <p className="text-[10px] text-slate-400">1 In Review</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2 text-center">
              <Activity className="mx-auto mb-1 h-4 w-4 text-cyan-300" />
              <p className="text-[10px] text-slate-400">3 Recent Syncs</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
