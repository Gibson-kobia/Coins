"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Shield, Timer, Workflow } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "Secure onboarding",
    description: "Data is encrypted in transit and at rest.",
  },
  {
    icon: Workflow,
    title: "Shared integration intake",
    description: "One form supports all current platforms.",
  },
  {
    icon: Timer,
    title: "Fast team follow-up",
    description: "Most requests get a response within 1 business day.",
  },
  {
    icon: CheckCircle2,
    title: "Multi-platform readiness",
    description: "Add new connections without rebuilding onboarding.",
  },
];

export default function TrustStrip() {
  return (
    <section id="flow" className="relative border-y border-white/5 py-10 sm:py-12">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-900/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
            >
              <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg border border-blue-500/15 bg-blue-500/10">
                <item.icon className="h-4 w-4 text-blue-300" />
              </div>
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
