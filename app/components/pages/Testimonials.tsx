import { TestimonialsHeroSection } from "../features/testimonials/TestimonialsHeroSection";
import { StatsSection } from "../features/testimonials/StatsSection";
import { TestimonialsGridSection } from "../features/testimonials/TestimonialsGridSection";
import { SuccessStoriesSection } from "../features/testimonials/SuccessStoriesSection";
import { VideoTestimonialsSection } from "../features/testimonials/VideoTestimonialsSection";

export function Testimonials() {
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
