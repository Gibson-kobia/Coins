"use client";

import { FormEvent, Suspense, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Loader2 } from "lucide-react";
import { activePlatforms, getPlatformBySlug } from "@/lib/platforms";

type FormData = {
  platform: string;
  companyName: string;
  fullName: string;
  workEmail: string;
  phoneNumber: string;
  country: string;
  useCase: string;
  volume: string;
  additionalNotes: string;
  website: string;
  telegramWhatsApp: string;
  preferredContactMethod: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialData: FormData = {
  platform: activePlatforms[0]?.slug ?? "",
  companyName: "",
  fullName: "",
  workEmail: "",
  phoneNumber: "",
  country: "",
  useCase: "",
  volume: "",
  additionalNotes: "",
  website: "",
  telegramWhatsApp: "",
  preferredContactMethod: "Email",
};

function validate(values: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!values.platform) errors.platform = "Please select a platform.";
  if (!values.companyName.trim()) errors.companyName = "Company or business name is required.";
  if (!values.fullName.trim()) errors.fullName = "Full name is required.";

  if (!values.workEmail.trim()) {
    errors.workEmail = "Work email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.workEmail)) {
    errors.workEmail = "Enter a valid email address.";
  }

  if (!values.phoneNumber.trim()) errors.phoneNumber = "Phone number is required.";
  if (!values.country.trim()) errors.country = "Country is required.";
  if (!values.useCase.trim()) errors.useCase = "Use case is required.";
  if (!values.volume.trim()) errors.volume = "Expected usage is required.";

  return errors;
}

export default function ConnectPage() {
  return (
    <Suspense fallback={<ConnectPageLoading />}>
      <ConnectPageContent />
    </Suspense>
  );
}

function ConnectPageContent() {
  const params = useSearchParams();
  const requestedPlatform = params.get("platform") ?? "";

  const preselected = useMemo(() => {
    const match = getPlatformBySlug(requestedPlatform);
    return match && match.status !== "coming-soon" ? match.slug : initialData.platform;
  }, [requestedPlatform]);

  const [formData, setFormData] = useState<FormData>(() => ({ ...initialData, platform: preselected }));
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const selected = getPlatformBySlug(formData.platform);

  const onChange = (key: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(formData);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setSubmitting(false);
    setSuccess(true);
  };

  if (success) {
    return (
      <main className="min-h-screen bg-[#050510] px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center sm:p-8">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10">
            <CheckCircle2 className="h-6 w-6 text-emerald-400" />
          </div>
          <h1 className="text-2xl font-semibold text-white">Thanks, your onboarding request is in.</h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            We received your request for <span className="text-slate-200">{selected?.name ?? "your selected platform"}</span>. A Nexara team member will follow up with next steps shortly.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:bg-white/10"
            >
              Back to Home
            </Link>
            <Link
              href="/connect"
              className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:from-blue-500 hover:to-indigo-500"
            >
              Submit Another Request
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050510] px-4 pb-14 pt-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 sm:mb-8">
          <p className="text-xs uppercase tracking-[0.16em] text-blue-400">Shared Connect Form</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Platform onboarding intake</h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
            One reusable form for all currently supported platforms. Choose a company and submit your onboarding details.
          </p>
        </div>

        <form onSubmit={onSubmit} noValidate className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:space-y-5 sm:p-6">
          <div>
            <label htmlFor="platform" className="mb-1.5 block text-xs font-medium text-slate-300">Selected Platform *</label>
            <select
              id="platform"
              value={formData.platform}
              onChange={(e) => onChange("platform", e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-[#0b1022] px-3 py-2.5 text-sm text-slate-100 outline-none transition focus:border-blue-400/60"
            >
              {activePlatforms.map((platform) => (
                <option key={platform.id} value={platform.slug}>
                  {platform.name} ({platform.status === "beta" ? "Beta" : "Available"})
                </option>
              ))}
            </select>
            {selected && (
              <div className="mt-2 flex items-center gap-2 rounded-lg border border-white/10 bg-black/20 p-2.5">
                <div className="h-8 w-8 overflow-hidden rounded-md border border-white/10">
                  <Image src={selected.logo} alt={`${selected.name} logo`} width={32} height={32} className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-200">{selected.name}</p>
                  <p className="text-[11px] text-slate-500">{selected.shortDescription}</p>
                </div>
              </div>
            )}
            {errors.platform ? <p className="mt-1 text-xs text-rose-400">{errors.platform}</p> : null}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Company / Business Name" required value={formData.companyName} onChange={(value) => onChange("companyName", value)} error={errors.companyName} />
            <Field label="Full Name" required value={formData.fullName} onChange={(value) => onChange("fullName", value)} error={errors.fullName} />
            <Field label="Work Email" required type="email" value={formData.workEmail} onChange={(value) => onChange("workEmail", value)} error={errors.workEmail} />
            <Field label="Phone Number" required value={formData.phoneNumber} onChange={(value) => onChange("phoneNumber", value)} error={errors.phoneNumber} />
            <Field label="Country" required value={formData.country} onChange={(value) => onChange("country", value)} error={errors.country} />
            <Field label="Website" value={formData.website} onChange={(value) => onChange("website", value)} />
            <Field label="Use Case / Intent" required value={formData.useCase} onChange={(value) => onChange("useCase", value)} error={errors.useCase} />
            <Field label="Volume / Expected Usage" required value={formData.volume} onChange={(value) => onChange("volume", value)} error={errors.volume} />
            <Field label="Telegram / WhatsApp" value={formData.telegramWhatsApp} onChange={(value) => onChange("telegramWhatsApp", value)} />
            <div>
              <label htmlFor="preferred-contact" className="mb-1.5 block text-xs font-medium text-slate-300">Preferred Contact Method</label>
              <select
                id="preferred-contact"
                value={formData.preferredContactMethod}
                onChange={(e) => onChange("preferredContactMethod", e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-[#0b1022] px-3 py-2.5 text-sm text-slate-100 outline-none transition focus:border-blue-400/60"
              >
                <option>Email</option>
                <option>Phone</option>
                <option>Telegram</option>
                <option>WhatsApp</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="notes" className="mb-1.5 block text-xs font-medium text-slate-300">Additional Notes</label>
            <textarea
              id="notes"
              value={formData.additionalNotes}
              onChange={(e) => onChange("additionalNotes", e.target.value)}
              rows={4}
              placeholder="Share timelines, constraints, or any onboarding details that help us support your request."
              className="w-full resize-none rounded-xl border border-white/10 bg-[#0b1022] px-3 py-2.5 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-blue-400/60"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 text-sm font-semibold text-white transition-all hover:from-blue-500 hover:to-indigo-500 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Onboarding Request"
            )}
          </button>
        </form>
      </div>
    </main>
  );
}

function ConnectPageLoading() {
  return (
    <main className="min-h-screen bg-[#050510] px-4 pb-14 pt-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
        <p className="text-sm text-slate-400">Loading connect form...</p>
      </div>
    </main>
  );
}

type FieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  type?: "text" | "email";
};

function Field({ label, value, onChange, error, required, type = "text" }: FieldProps) {
  const id = label.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-medium text-slate-300">
        {label} {required ? "*" : ""}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-[#0b1022] px-3 py-2.5 text-sm text-slate-100 outline-none transition focus:border-blue-400/60"
      />
      {error ? <p className="mt-1 text-xs text-rose-400">{error}</p> : null}
    </div>
  );
}
