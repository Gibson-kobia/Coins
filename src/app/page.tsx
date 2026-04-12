import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ConnectedPlatforms from "@/components/ConnectedPlatforms";
import TrustStrip from "@/components/TrustStrip";
import CoreFeatures from "@/components/CoreFeatures";
import ProductEcosystem from "@/components/ProductEcosystem";
import HowItWorks from "@/components/HowItWorks";
import TransactionShowcase from "@/components/TransactionShowcase";
import Security from "@/components/Security";
import DeveloperSection from "@/components/DeveloperSection";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050510]">
      <Navbar />
      <Hero />
      <ConnectedPlatforms />
      <TrustStrip />
      <CoreFeatures />
      <ProductEcosystem />
      <HowItWorks />
      <TransactionShowcase />
      <Security />
      <DeveloperSection />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
