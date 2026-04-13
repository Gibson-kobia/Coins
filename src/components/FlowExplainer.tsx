"use client";
import { motion } from "framer-motion";

const steps = [
  {
    title: "1. Choose your platform",
    text: "Open Coinbase, Binance, Bybit, Noones, External Wallets, or Bank & Payment Rails from the card grid.",
  },
  {
    title: "2. Continue with one form",
    text: "Nexara carries your selected platform into the shared onboarding journey automatically.",
  },
  {
    title: "3. Submit once, expand later",
    text: "Your intake stays reusable, so adding more platform connections does not require restarting onboarding.",
  },
];

export default function FlowExplainer() {
  return (
    <section id="flow" className="py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-center"
        >
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-blue-400">Shared Onboarding Flow</p>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            One onboarding path for every selected platform.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 sm:gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-xl border border-white/10 bg-[#0A0F1E]/80 p-4"
            >
              <p className="text-sm font-semibold text-white">{step.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
