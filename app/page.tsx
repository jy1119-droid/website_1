import { AmbientBackground } from "@/components/AmbientBackground";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { CapabilityShowcase } from "@/components/sections/CapabilityShowcase";
import { ToolsGrid } from "@/components/sections/ToolsGrid";
import { MiniSuites } from "@/components/sections/MiniSuites";
import { TrustSection } from "@/components/sections/TrustSection";
import { Pricing } from "@/components/sections/Pricing";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <AmbientBackground />
      <Navbar />
      <main className="relative flex flex-col">
        <Hero />
        <CapabilityShowcase />
        <ToolsGrid />
        <MiniSuites />
        <TrustSection />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
