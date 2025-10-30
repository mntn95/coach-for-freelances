"use client";

import {
  TestimonialsHeroSection,
  StatsSection,
  TestimonialsGridSection,
  SuccessStoriesSection,
  VideoTestimonialsSection,
} from "../components/features/testimonials";

export default function TestimonialsPage() {
  return (
    <div>
      <TestimonialsHeroSection />
      <StatsSection />
      <TestimonialsGridSection />
      <SuccessStoriesSection />
      <VideoTestimonialsSection />
    </div>
  );
}
