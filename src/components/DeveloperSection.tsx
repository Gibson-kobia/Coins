"use client";
import { motion } from "framer-motion";
import { Code2, Terminal, Webhook, FileCode2, ArrowRight } from "lucide-react";
import Link from "next/link";

const devFeatures = [
  { icon: Code2, title: "REST API", desc: "Fully documented, versioned, predictable." },
  { icon: Webhook, title: "Webhooks", desc: "Real-time event delivery for payments and transfers." },
  { icon: Terminal, title: "SDKs", desc: "TypeScript, Python, and Go SDKs — production-ready." },
  { icon: FileCode2, title: "Payment Links", desc: "No-code checkout for merchants and operators." },
];

const codeSnippet = `// Create a transfer
const transfer = await nexara.transfers.create({
  from: "wallet_abc123",
  to: "exchange_coinbase",
  amount: "500.00",
  currency: "USDT",
  memo: "Settlement batch #42"
});

// Response
{
  "id": "txn_9xKm2...",
  "status": "confirmed",
  "settled_at": "2024-01-15T10:32:01Z",
  "fee": "0.12",
  "network": "polygon"
}`;

export default function DeveloperSection() {
  return (
    <section id="developers" className="relative py-16 sm:py-24 bg-[#040410]">
      <div className="absolute inset-0 grid-overlay opacity-25" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-medium text-blue-400 uppercase tracking-widest mb-3">Developer Platform</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-5">
              Build financial products{" "}
              <span className="gradient-text">faster</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8 text-sm sm:text-base">
              Nexara&apos;s API-first infrastructure gives developers everything needed to build wallet systems, payment flows, and data integrations without reinventing the rails.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {devFeatures.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <feat.icon className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{feat.title}</p>
                    <p className="text-xs text-slate-400">{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-500 hover:to-indigo-500 transition-all"
              >
                View Documentation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/api-reference"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm text-slate-300 bg-white/5 border border-white/10 rounded-xl hover:bg-white/[0.08] hover:text-white transition-all"
              >
                API Reference
              </Link>
            </div>
          </motion.div>

          {/* Right: code block */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-[#080818] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-3 text-[10px] text-slate-500 font-mono">nexara-api.ts</span>
              </div>
              <pre className="px-5 py-4 text-[11px] font-mono text-slate-300 leading-relaxed overflow-x-auto">
                <code>{codeSnippet}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
