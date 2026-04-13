import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

type PublicPageTemplateProps = {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export default function PublicPageTemplate({
  eyebrow,
  title,
  description,
  points,
  primaryCta,
  secondaryCta,
}: PublicPageTemplateProps) {
  return (
    <main className="min-h-screen bg-[#050510]">
      <Navbar />
      <section className="relative overflow-hidden px-4 pb-12 pt-24 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-12 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute right-1/4 top-20 h-72 w-72 rounded-full bg-indigo-600/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-5xl rounded-2xl border border-white/10 bg-[#0A1022]/85 p-6 sm:p-8 lg:p-10">
          <p className="mb-2 text-xs uppercase tracking-[0.16em] text-blue-300">{eyebrow}</p>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-400 sm:text-base">{description}</p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {points.map((point) => (
              <div key={point} className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300">
                {point}
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:from-blue-500 hover:to-indigo-500"
            >
              {primaryCta.label}
            </Link>
            {secondaryCta ? (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-slate-200 hover:bg-white/[0.08]"
              >
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
