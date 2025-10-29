"use client";

import { CTASection } from "../features/home/CTASection";
import { HeroSection } from "../features/home/HeroSection";
import { ProblemSection } from "../features/home/ProblemSection";
import { ServicesSection } from "../features/home/ServicesSection";
import { StatsSection } from "../features/home/StatsSection";
import { TestimonialsSection } from "../features/home/TestimonialsSection";

export function Home() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <ProblemSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
