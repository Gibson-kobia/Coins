"use client";
import Link from "next/link";
import { Zap } from "lucide-react";

const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "Platforms", href: "#platforms" },
      { label: "Shared Connect Form", href: "/connect" },
      { label: "How It Works", href: "#flow" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Contact", href: "/contact" },
      { label: "Security", href: "/security" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Docs", href: "/docs" },
      { label: "API Reference", href: "/api-reference" },
      { label: "Developers", href: "/developers" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#040410]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid grid-cols-1 gap-8 border-b border-white/5 pb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="group mb-3 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600">
                <Zap className="h-3.5 w-3.5 text-white" />
              </div>
              <span className="text-sm font-semibold text-white transition-colors group-hover:text-blue-300">Nexara</span>
            </Link>
            <p className="max-w-xs text-xs leading-relaxed text-slate-500">
              Connect companies and platforms through one reusable onboarding flow.
            </p>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <p className="mb-3 text-xs font-semibold text-slate-300">{group.title}</p>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-xs text-slate-500 transition-colors hover:text-slate-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-3 pt-5 sm:flex-row sm:items-center">
          <p className="text-xs text-slate-600">© {new Date().getFullYear()} Nexara. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-slate-600">
            <Link href="/company" className="transition-colors hover:text-slate-400">Privacy</Link>
            <Link href="/company" className="transition-colors hover:text-slate-400">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
