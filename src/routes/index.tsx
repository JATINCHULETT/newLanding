import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Ticker } from "@/components/site/Ticker";
import { ProblemSection } from "@/components/site/ProblemSection";
import { WhyJaagr } from "@/components/site/WhyJaagr";
import { JaagrFramework } from "@/components/site/JaagrFramework";
import { PlatformExperience } from "@/components/site/PlatformExperience";
import { HowItWorks } from "@/components/site/HowItWorks";
import { SchoolEcosystem } from "@/components/site/SchoolEcosystem";
import { HeroParallaxShowcase } from "@/components/site/HeroParallaxShowcase";
import { ImpactStory } from "@/components/site/ImpactStory";
import { CBSESection } from "@/components/site/CBSESection";
import { TrustSection } from "@/components/site/TrustSection";
import { Founder } from "@/components/site/Founder";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";

const TITLE = "Jaagr Mind: Emotional Fitness System for Indian Schools";
const DESCRIPTION =
  "Jaagr Mind helps Indian schools notice students who need support earlier, equip every teacher to respond with confidence, and build emotional strength into everyday school life.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pb-20 sm:pb-24">
        <Hero />
        <Ticker />
        <ProblemSection />
        <WhyJaagr />
        <JaagrFramework />
        <PlatformExperience />
        <HowItWorks />
        <SchoolEcosystem />
        <HeroParallaxShowcase />
        <ImpactStory />
        <CBSESection />
        <TrustSection />
        <Founder />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
