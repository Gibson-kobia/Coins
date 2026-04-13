"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function DeveloperHighlight() {
  return (
    <section id="developers" className="py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl border border-white/10 bg-[#0A1126]/85 p-6 sm:p-7"
        >
          <div className="grid gap-5 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.16em] text-indigo-300">Developer Layer</p>
              <h3 className="text-2xl font-bold text-white sm:text-3xl">Integrate platform onboarding events into your stack.</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Use Nexara APIs and webhooks for connection lifecycle events, verification states, and status updates.
              </p>
              <div className="mt-4 flex gap-3">
                <Link href="/docs" className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 hover:bg-white/[0.08]">
                  Open Docs
                </Link>
                <Link href="/api" className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:from-blue-500 hover:to-indigo-500">
                  API Overview
                </Link>
              </div>
            </div>

            <pre className="overflow-x-auto rounded-xl border border-white/10 bg-[#060B1A] p-4 text-xs leading-relaxed text-slate-300">
{`POST /v1/connections\n{\n  "platform": "coinbase",\n  "status": "in_review",\n  "submittedAt": "2026-04-13T10:42:00Z",\n  "nextStep": "kyb_check"\n}`}
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
