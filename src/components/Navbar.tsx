"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Platforms", href: "#platforms" },
  { label: "How It Works", href: "#flow" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/5 bg-[#050510]/90 shadow-lg shadow-black/20 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="group flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/25">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-semibold tracking-tight text-white transition-colors group-hover:text-blue-300">
                Nexara
              </span>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <Link href="/signin" className="px-4 py-2 text-sm text-slate-300 transition-colors hover:text-white">
                Sign In
              </Link>
              <Link
                href="/connect"
                className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition-all hover:from-blue-500 hover:to-indigo-500 hover:shadow-blue-500/30"
              >
                Connect Account
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-slate-300 transition-colors hover:text-white lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 border-b border-white/5 bg-[#080818]/95 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto max-w-7xl space-y-1 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-2 border-t border-white/5 pt-3">
                <Link
                  href="/signin"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  Sign In
                </Link>
                <Link
                  href="/connect"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 text-center text-sm font-medium text-white"
                >
                  Connect Account
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
