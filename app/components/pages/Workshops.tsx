import { WorkshopsHeroSection } from "../features/workshops/WorkshopsHeroSection";
import { BenefitsSection } from "../features/workshops/BenefitsSection";
import { WorkshopsGridSection } from "../features/workshops/WorkshopsGridSection";
import { IncludedSection } from "../features/workshops/IncludedSection";
import { TestimonialsSection } from "../features/workshops/TestimonialsSection";
import { CTASection } from "../features/workshops/CTASection";
import type { Page, WithNavigation } from "@/types";
import { useNavigation } from "@/hooks/useNavigation";

export function Workshops({ onNavigate }: WithNavigation) {
  const { navigate } = useNavigation();

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    navigate();
  };

  return (
    <div>
      <WorkshopsHeroSection />
      <BenefitsSection />
      <WorkshopsGridSection onNavigate={handleNavigate} />
      <IncludedSection />
      <TestimonialsSection />
      <CTASection onNavigate={handleNavigate} />
    </div>
  );
}
