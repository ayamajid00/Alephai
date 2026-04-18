import { CustomCursor } from "@/components/custom-cursor";
import { BackgroundCanvas } from "@/components/background-canvas";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Ticker } from "@/components/ticker";
import { PainSection } from "@/components/pain-section";
import { SolutionSection } from "@/components/solution-section";
import { IndustriesSection } from "@/components/industries-section";
import { ResultsSection } from "@/components/results-section";
import { AgentDemo } from "@/components/agent-demo";
import { PricingSection } from "@/components/pricing-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <BackgroundCanvas />
      <Navbar />
      <Hero />
      <Ticker />
      <PainSection />
      <SolutionSection />
      <IndustriesSection />
      <ResultsSection />
      <AgentDemo />
      <PricingSection />
      <CtaSection />
      <Footer />
    </>
  );
}
