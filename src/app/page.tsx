import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ConnectedPlatforms from "@/components/ConnectedPlatforms";
import FlowExplainer from "@/components/FlowExplainer";
import TrustStrip from "@/components/TrustStrip";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050510]">
      <Navbar />
      <Hero />
      <ConnectedPlatforms />
      <FlowExplainer />
      <TrustStrip />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
