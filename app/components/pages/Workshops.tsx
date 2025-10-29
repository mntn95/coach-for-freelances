import { WorkshopsHeroSection } from "../features/workshops/WorkshopsHeroSection";
import { BenefitsSection } from "../features/workshops/BenefitsSection";
import { WorkshopsGridSection } from "../features/workshops/WorkshopsGridSection";
import { IncludedSection } from "../features/workshops/IncludedSection";
import { TestimonialsSection } from "../features/workshops/TestimonialsSection";
import { CTASection } from "../features/workshops/CTASection";

export function Workshops() {
  return (
    <div>
      <WorkshopsHeroSection />
      <BenefitsSection />
      <WorkshopsGridSection />
      <IncludedSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
