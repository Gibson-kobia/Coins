export type PlatformStatus = "available" | "beta" | "coming-soon";

export type Platform = {
  id: string;
  name: string;
  slug: string;
  logo: string;
  shortDescription: string;
  status: PlatformStatus;
  ctaLabel: string;
  accent: string;
};

export const platforms: Platform[] = [
  {
    id: "coinbase",
    name: "Coinbase",
    slug: "coinbase",
    logo: "/logos/coinbase.svg",
    shortDescription: "Connect exchange balances, spot activity, and account ownership data.",
    status: "available",
    ctaLabel: "Connect Coinbase",
    accent: "#3B82F6",
  },
  {
    id: "binance",
    name: "Binance",
    slug: "binance",
    logo: "/logos/binance.svg",
    shortDescription: "Sync Binance trading accounts, positions, and transfer history in one intake.",
    status: "available",
    ctaLabel: "Connect Binance",
    accent: "#EAB308",
  },
  {
    id: "bybit",
    name: "Bybit",
    slug: "bybit",
    logo: "/logos/bybit.svg",
    shortDescription: "Route Bybit onboarding for spot and derivatives through the shared Nexara flow.",
    status: "beta",
    ctaLabel: "Join Bybit Beta",
    accent: "#F59E0B",
  },
  {
    id: "noones",
    name: "Noones",
    slug: "noones",
    logo: "/logos/noones.svg",
    shortDescription: "Connect Noones account profile and transaction context using the same form.",
    status: "beta",
    ctaLabel: "Connect Noones",
    accent: "#A78BFA",
  },
  {
    id: "external-wallets",
    name: "External Wallets",
    slug: "external-wallets",
    logo: "/logos/external-wallets.svg",
    shortDescription: "Link external and hardware wallets for shared onboarding and review.",
    status: "available",
    ctaLabel: "Connect Wallets",
    accent: "#22D3EE",
  },
  {
    id: "bank-payment-rails",
    name: "Bank & Payment Rails",
    slug: "bank-payment-rails",
    logo: "/logos/bank-payment-rails.svg",
    shortDescription: "Request ACH, SEPA, SWIFT, and local rails onboarding from the same intake flow.",
    status: "coming-soon",
    ctaLabel: "Request Rails Access",
    accent: "#34D399",
  },
];

export function getPlatformBySlug(slug: string) {
  return platforms.find((item) => item.slug === slug);
}
