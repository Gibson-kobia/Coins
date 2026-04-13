"use client";

import { motion } from "framer-motion";
import { Lock, ShieldCheck, Users, FileClock } from "lucide-react";

const items = [
  {
    icon: Lock,
    title: "Encrypted data handling",
    text: "Submission payloads are protected in transit and at rest across the onboarding lifecycle.",
  },
  {
    icon: Users,
    title: "Role-based operator access",
    text: "Connection actions are scoped by role so review and activation remain controlled.",
  },
  {
    icon: FileClock,
    title: "Structured review trail",
    text: "Every platform request follows a traceable workflow with timestamps and status steps.",
  },
  {
    icon: ShieldCheck,
    title: "Status transparency",
    text: "Users can track connection progress in one workspace instead of chasing updates by email.",
  },
];

export default function SecurityCredSection() {
  return (
    <section id="security" className="py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-6 text-center"
        >
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-cyan-300">Trust Layer</p>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Built for secure onboarding operations.</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="rounded-xl border border-white/10 bg-[#0B1020]/80 p-4"
            >
              <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/25 bg-cyan-400/10">
                <item.icon className="h-4 w-4 text-cyan-300" />
              </div>
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-400">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
