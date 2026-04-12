"use client";
import { motion } from "framer-motion";
import { UserPlus, BadgeCheck, Link2, Send } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Create Account",
    desc: "Sign up with email. No wallet required to start. Instant onboarding.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: BadgeCheck,
    number: "02",
    title: "Verify Identity",
    desc: "Complete a streamlined KYC flow. Built for compliance, not friction.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
  {
    icon: Link2,
    number: "03",
    title: "Connect & Fund",
    desc: "Link your exchanges, wallets, or bank accounts via API or OAuth.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
  {
    icon: Send,
    number: "04",
    title: "Send, Settle & Track",
    desc: "Move value, settle payments, and monitor activity in real time.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-medium text-blue-400 uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            From sign-up to settlement{" "}
            <span className="gradient-text">in minutes</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-blue-500/30 via-indigo-500/30 to-emerald-500/30" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative text-center"
            >
              <div className={`relative w-14 h-14 rounded-2xl ${step.bg} border ${step.border} flex items-center justify-center mx-auto mb-4 z-10`}>
                <step.icon className={`w-6 h-6 ${step.color}`} />
                <span className="absolute -top-2 -right-2 text-[9px] font-bold text-slate-500 bg-[#080818] border border-white/10 rounded-md px-1">
                  {step.number}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
