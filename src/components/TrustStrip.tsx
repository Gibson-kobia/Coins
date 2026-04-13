"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Shield, Timer, Workflow } from "lucide-react";

const benefitItems = [
  {
    icon: Shield,
    title: "Secure onboarding",
    description: "Encrypted intake handling from first submission to review.",
  },
  {
    icon: Workflow,
    title: "Reusable intake",
    description: "One data structure across platforms removes duplicate onboarding steps.",
  },
  {
    icon: Timer,
    title: "Faster launch path",
    description: "Your selected platform request is queued immediately for team follow-up.",
  },
  {
    icon: CheckCircle2,
    title: "Built to scale",
    description: "Add more platform connections later without restarting everything.",
  },
];

export default function TrustStrip() {
  return (
    <section className="relative border-y border-white/5 py-10 sm:py-12">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-900/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-center"
        >
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-blue-400">Why One Shared Intake</p>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Benefits of one reusable onboarding layer.</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">
          {benefitItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="rounded-xl border border-white/10 bg-[#0A0F1E]/80 p-4"
            >
              <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10">
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
