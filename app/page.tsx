'use client';

import {
  CTASection,
  HeroSection,
  ProblemSection,
  ServicesSection,
  StatsSection,
  TestimonialsSection,
} from './components/features/home';

const HomePage = () => (
  <div>
    <HeroSection />
    <StatsSection />
    <ProblemSection />
    <ServicesSection />
    <TestimonialsSection />
    <CTASection />
  </div>
);

export default HomePage;
