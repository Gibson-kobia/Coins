"use client";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "Do you use one form for every platform?",
    a: "Yes. You choose a platform card first, then complete one shared Nexara onboarding form.",
  },
  {
    q: "Can I submit for multiple platforms?",
    a: "Start with one platform. After submission, our team can extend your onboarding to additional platforms.",
  },
  {
    q: "Are Beta platforms available now?",
    a: "Yes. Beta cards are clickable and routed through the same shared form.",
  },
  {
    q: "What happens after I submit?",
    a: "You receive a confirmation, and our team follows up with next steps and expected timelines.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-14 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-7 text-center"
        >
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Frequently Asked Questions</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-slate-400">Short answers about platform selection and the shared connect process.</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-4 sm:p-5"
            >
              <p className="text-sm font-semibold text-white">{item.q}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
