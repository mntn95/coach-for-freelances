"use client";

import {
  CTASection,
  HeroSection,
  ProblemSection,
  ServicesSection,
  StatsSection,
  TestimonialsSection,
} from "./components/features/home";

export default function HomePage() {
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
