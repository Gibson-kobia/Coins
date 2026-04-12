"use client";
import { motion } from "framer-motion";
import { Shield, Lock, Globe, Zap, CheckCircle2, Server } from "lucide-react";

const signals = [
  { icon: Shield, label: "SOC 2 Compliant", desc: "Built on compliant infrastructure" },
  { icon: Lock, label: "AES-256 Encryption", desc: "End-to-end data protection" },
  { icon: Globe, label: "Multi-Region", desc: "Geo-distributed reliability" },
  { icon: Zap, label: "99.9% Uptime", desc: "High-availability design" },
  { icon: CheckCircle2, label: "API-First", desc: "Flexible integration model" },
  { icon: Server, label: "Audit Logs", desc: "Full activity traceability" },
];

export default function TrustStrip() {
  return (
    <section className="relative py-10 border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-900/5 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {signals.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/15 flex items-center justify-center">
                <item.icon className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">{item.label}</p>
                <p className="text-[10px] text-slate-500">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
