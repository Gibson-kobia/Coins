"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { platforms } from "@/lib/platforms";

const statusStyles = {
  available: "border-emerald-500/25 bg-emerald-500/10 text-emerald-300",
  beta: "border-blue-500/25 bg-blue-500/10 text-blue-300",
  "coming-soon": "border-slate-500/25 bg-slate-500/10 text-slate-400",
};

const statusText = {
  available: "Available",
  beta: "Beta",
  "coming-soon": "Coming Soon",
};

export default function ConnectedPlatforms() {
  return (
    <section id="platforms" className="relative py-14 sm:py-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[260px] w-[720px] -translate-x-1/2 rounded-full bg-indigo-900/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center sm:mb-10"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-blue-400">Choose A Platform</p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">One set of cards. One shared connect form.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
            Select a company below and Nexara carries that platform into a single reusable onboarding intake.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
          {platforms.map((platform, i) => {
            const card = (
              <>
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 overflow-hidden rounded-xl border border-white/10 bg-black/25 p-1">
                      <Image
                        src={platform.logo}
                        alt={`${platform.name} logo`}
                        width={32}
                        height={32}
                        className="h-full w-full rounded-md object-cover"
                      />
                    </div>
                    <h3 className="text-sm font-semibold text-white sm:text-base">{platform.name}</h3>
                  </div>
                  <span
                    className={`rounded-full border px-2 py-0.5 text-[10px] font-medium sm:text-[11px] ${statusStyles[platform.status]}`}
                  >
                    {statusText[platform.status]}
                  </span>
                </div>

                <p className="min-h-14 text-xs leading-relaxed text-slate-400 sm:text-sm">{platform.shortDescription}</p>

                <div className="mt-4 flex items-center justify-between border-t border-white/8 pt-3">
                  <span className="text-xs text-slate-500">Shared onboarding intake</span>
                  <span className="text-xs font-medium text-blue-300">{platform.ctaLabel}</span>
                </div>
              </>
            );

            if (platform.status === "coming-soon") {
              return (
                <motion.div
                  key={platform.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 opacity-70 sm:p-5"
                >
                  {card}
                </motion.div>
              );
            }

            return (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
              >
                <Link
                  href={`/connect?platform=${platform.slug}`}
                  className="group block rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/35 hover:bg-white/[0.05] sm:p-5"
                >
                  {card}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
