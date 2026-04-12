export type PlatformStatus = "available" | "beta" | "coming-soon";

export type Platform = {
  id: string;
  name: string;
  slug: string;
  logo: string;
  shortDescription: string;
  status: PlatformStatus;
  ctaLabel: string;
};

export const platforms: Platform[] = [
  {
    id: "coinbase",
    name: "Coinbase",
    slug: "coinbase",
    logo: "/logos/coinbase.svg",
    shortDescription: "Sync exchange balances and activity through one shared intake form.",
    status: "available",
    ctaLabel: "Connect Coinbase",
  },
  {
    id: "binance",
    name: "Binance",
    slug: "binance",
    logo: "/logos/binance.svg",
    shortDescription: "Link Binance accounts and route onboarding to the same Nexara flow.",
    status: "available",
    ctaLabel: "Connect Binance",
  },
  {
    id: "bybit",
    name: "Bybit",
    slug: "bybit",
    logo: "/logos/bybit.svg",
    shortDescription: "Bring Bybit spot and derivatives onboarding into one reusable process.",
    status: "beta",
    ctaLabel: "Join Bybit Beta",
  },
  {
    id: "noones",
    name: "Noones",
    slug: "noones",
    logo: "/logos/noones.svg",
    shortDescription: "Submit one intake and we map it to your Noones connection path.",
    status: "beta",
    ctaLabel: "Join Noones Beta",
  },
  {
    id: "external-wallets",
    name: "External Wallets",
    slug: "external-wallets",
    logo: "/logos/external-wallets.svg",
    shortDescription: "Connect non-custodial and hardware wallets without separate forms.",
    status: "available",
    ctaLabel: "Connect Wallets",
  },
  {
    id: "bank-payment-rails",
    name: "Bank & Payment Rails",
    slug: "bank-payment-rails",
    logo: "/logos/bank-payment-rails.svg",
    shortDescription: "Traditional payment rails onboarding is opening soon.",
    status: "coming-soon",
    ctaLabel: "Coming Soon",
  },
];

export const activePlatforms = platforms.filter((item) => item.status !== "coming-soon");

export function getPlatformBySlug(slug: string) {
  return platforms.find((item) => item.slug === slug);
}
