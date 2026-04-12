"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "We replaced three different tools with Nexara. Our treasury team now has a single place to track every wallet and exchange account.",
    name: "Priya Mehta",
    role: "Head of Treasury, Meridian Fintech",
    initials: "PM",
    accent: "#3b82f6",
  },
  {
    quote: "The API is clean and the documentation is actually good. We had our payment flow live in a week, not a month.",
    name: "James Oluwafemi",
    role: "Lead Engineer, Paycraft Labs",
    initials: "JO",
    accent: "#8b5cf6",
  },
  {
    quote: "Cross-border settlement used to take 2–3 days through our old provider. Through Nexara's stablecoin rails, it's hours.",
    name: "Sofia Andrade",
    role: "Payments Ops Lead, Velora Commerce",
    initials: "SA",
    accent: "#06b6d4",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-medium text-blue-400 uppercase tracking-widest mb-3">Use Cases</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Teams building on{" "}
            <span className="gradient-text">Nexara</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#0a0a1e]/80 border border-white/[0.06] rounded-2xl p-6 flex flex-col gap-4"
            >
              <Quote className="w-5 h-5 text-slate-600" />
              <p className="text-sm text-slate-300 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ background: `${t.accent}25`, border: `1px solid ${t.accent}30` }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">{t.name}</p>
                  <p className="text-[10px] text-slate-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
