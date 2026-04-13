"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { platforms } from "@/lib/platforms";

const statusStyles = {
  available: "border-emerald-500/25 bg-emerald-500/10 text-emerald-300",
  beta: "border-cyan-500/25 bg-cyan-500/10 text-cyan-300",
  "coming-soon": "border-violet-500/25 bg-violet-500/10 text-violet-300",
};

const statusText = {
  available: "Available",
  beta: "Beta",
  "coming-soon": "Coming Soon",
};

export default function ConnectedPlatforms() {
  return (
    <section id="platforms" className="relative py-10 sm:py-12">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[200px] w-[680px] -translate-x-1/2 rounded-full bg-indigo-900/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-center sm:mb-8"
        >
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-blue-400">Platform Entry Points</p>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Pick one card, continue with one shared onboarding flow.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 sm:gap-3.5">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              <Link
                href={`/connect?platform=${platform.slug}`}
                className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-[#0B1020]/90 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_10px_28px_rgba(3,8,24,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 sm:p-5"
              >
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full blur-2xl opacity-35"
                  style={{ backgroundColor: platform.accent }}
                />

                <div className="relative">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-xl border bg-black/25 p-1"
                        style={{ borderColor: `${platform.accent}66`, boxShadow: `0 0 0 1px ${platform.accent}22 inset` }}
                      >
                        <Image
                          src={platform.logo}
                          alt={`${platform.name} logo`}
                          width={32}
                          height={32}
                          className="h-full w-full rounded-md object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-white">{platform.name}</h3>
                        <span
                          className={`mt-1 inline-flex rounded-full border px-2 py-0.5 text-[10px] font-medium ${statusStyles[platform.status]}`}
                        >
                          {statusText[platform.status]}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="min-h-12 text-xs leading-relaxed text-slate-400 sm:text-[13px]">
                    {platform.shortDescription}
                  </p>

                  <div className="mt-3 border-t border-white/10 pt-3">
                    <span className="mb-2 block text-[11px] text-slate-500">Platform-specific entry</span>
                    <span className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-100 transition-all group-hover:border-blue-300/40 group-hover:bg-blue-500/10 group-hover:text-blue-200">
                      {platform.ctaLabel}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
