"use client";
import { Zap } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  Product: [
    { label: "Overview", href: "/products" },
    { label: "Wallet Management", href: "/products" },
    { label: "Merchant Checkout", href: "/products" },
    { label: "Analytics", href: "/products" },
    { label: "Pricing", href: "/pricing" },
  ],
  Solutions: [
    { label: "Personal Finance", href: "/solutions" },
    { label: "Business Payments", href: "/solutions" },
    { label: "Cross-Border", href: "/solutions" },
    { label: "Treasury", href: "/solutions" },
  ],
  Developers: [
    { label: "Documentation", href: "/docs" },
    { label: "API Reference", href: "/api-reference" },
    { label: "SDKs", href: "/developers" },
    { label: "Webhooks", href: "/developers" },
    { label: "Status", href: "/company" },
  ],
  Company: [
    { label: "About", href: "/company" },
    { label: "Blog", href: "/company" },
    { label: "Careers", href: "/company" },
    { label: "Contact", href: "/contact" },
    { label: "Security", href: "/security" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/company" },
    { label: "Terms of Service", href: "/company" },
    { label: "Cookie Policy", href: "/company" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#040410] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-sm font-semibold text-white">Nexara</span>
            </Link>
            <p className="text-xs text-slate-500 leading-relaxed max-w-[160px]">
              Unified digital finance infrastructure for modern teams.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-xs font-semibold text-slate-300 mb-3">{group}</p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Nexara Technologies, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["Twitter", "LinkedIn", "GitHub"].map((social) => (
              <Link key={social} href="/company" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">
                {social}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
