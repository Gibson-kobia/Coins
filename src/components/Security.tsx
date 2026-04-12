"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Eye, FileText, Key, AlertTriangle } from "lucide-react";

const securityFeatures = [
  {
    icon: ShieldCheck,
    title: "Layered Encryption",
    desc: "Data encrypted in transit and at rest using AES-256 and TLS 1.3 with forward secrecy.",
  },
  {
    icon: Lock,
    title: "Role-Based Access",
    desc: "Granular permission controls per user, team, and API key. Least-privilege by default.",
  },
  {
    icon: Eye,
    title: "Real-Time Monitoring",
    desc: "Continuous anomaly detection across sessions, API usage, and transaction patterns.",
  },
  {
    icon: FileText,
    title: "Audit Logs",
    desc: "Immutable logs of every action, transaction, and configuration change. Export-ready.",
  },
  {
    icon: Key,
    title: "Secure API Keys",
    desc: "Scoped, rotatable API credentials with IP whitelisting and usage quotas.",
  },
  {
    icon: AlertTriangle,
    title: "Risk & Fraud Controls",
    desc: "Behavioral risk scoring and customizable transaction limits reduce exposure.",
  },
];

export default function Security() {
  return (
    <section id="security" className="relative py-16 sm:py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-900/[0.08] blur-3xl rounded-full" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-medium text-blue-400 uppercase tracking-widest mb-3">Security & Trust</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-5">
              Built for the security demands of{" "}
              <span className="gradient-text">real finance</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8 text-sm sm:text-base">
              Every connection, transaction, and API call passes through multiple layers of protection. Security is not a feature — it&apos;s the foundation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {securityFeatures.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-0.5">{item.title}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="bg-[#0a0a1e]/80 border border-white/[0.08] rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Security Status</p>
                    <p className="text-[10px] text-emerald-400">All systems protected</p>
                  </div>
                </div>
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Active</span>
              </div>

              {[
                { label: "Encryption", value: "AES-256 / TLS 1.3", ok: true },
                { label: "2FA Status", value: "Enforced", ok: true },
                { label: "API Key Scope", value: "Read + Trade", ok: true },
                { label: "Anomaly Alerts", value: "0 active flags", ok: true },
                { label: "Last Audit", value: "2 hours ago", ok: true },
                { label: "Compliance Mode", value: "Enabled", ok: true },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between py-1.5">
                  <span className="text-xs text-slate-400">{row.label}</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-white">{row.value}</span>
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
