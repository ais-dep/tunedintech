import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSolution } from "@/components/home/ProblemSolution";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { HowItWorks } from "@/components/home/HowItWorks";
import { LiveDemoSection } from "@/components/home/LiveDemoSection";
import { CaseStudiesPreview } from "@/components/home/CaseStudiesPreview";
import { PricingPreview } from "@/components/home/PricingPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSolution />
      <ServicesOverview />
      <HowItWorks />
      <LiveDemoSection />
      <CaseStudiesPreview />
      <PricingPreview />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
