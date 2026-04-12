"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { activePlatforms } from "@/lib/platforms";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-[86vh] flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-50" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-blue-600/8 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-indigo-600/8 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-900/5 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-0">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-6 lg:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-400"
            >
              <Zap className="h-3 w-3" />
              Shared Onboarding Flow
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
              >
                Choose a platform, then complete
                <span className="gradient-text"> one shared Nexara form.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-lg text-base leading-relaxed text-slate-400 sm:text-lg"
              >
                Pick Coinbase, Binance, Bybit, Noones, wallets, or payment rails. Nexara pre-fills your
                selected platform and routes your onboarding through one consistent intake.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="#platforms"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] hover:from-blue-500 hover:to-indigo-500 hover:shadow-blue-500/40"
              >
                Choose Platform <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/connect"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-slate-300 transition-all hover:bg-white/[0.08] hover:text-white"
              >
                Open Shared Form
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-500"
            >
              {["Single onboarding intake", "Platform context preselected", "Fast team follow-up"].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="glow-card relative rounded-2xl border border-white/[0.08] bg-[#0c0c20]/85 p-5 shadow-2xl backdrop-blur-xl sm:p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="mb-1 text-xs text-slate-500">Current flow</p>
                  <p className="text-xl font-semibold text-white sm:text-2xl">Platform card -&gt; Shared form</p>
                </div>
                <span className="rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 text-xs text-emerald-400">
                  Live
                </span>
              </div>

              <div className="space-y-2.5">
                {activePlatforms.slice(0, 4).map((platform, i) => (
                  <motion.div
                    key={platform.id}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="group flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.03] p-3 transition-all hover:border-white/15"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 overflow-hidden rounded-lg border border-white/10 bg-black/20">
                        <Image
                          src={platform.logo}
                          alt={`${platform.name} logo`}
                          width={32}
                          height={32}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">{platform.name}</p>
                        <p className="text-[11px] text-slate-500">{platform.status === "beta" ? "Beta" : "Available"}</p>
                      </div>
                    </div>
                    <Link
                      href={`/connect?platform=${platform.slug}`}
                      className="text-xs text-blue-400 transition-colors group-hover:text-blue-300"
                    >
                      Connect
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 border-t border-white/8 pt-3">
                <p className="text-[11px] text-slate-500">No duplicate forms per company. One reusable onboarding flow.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
