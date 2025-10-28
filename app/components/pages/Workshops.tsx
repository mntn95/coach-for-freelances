import { WorkshopsHeroSection } from "../features/workshops/WorkshopsHeroSection";
import { BenefitsSection } from "../features/workshops/BenefitsSection";
import { WorkshopsGridSection } from "../features/workshops/WorkshopsGridSection";
import { IncludedSection } from "../features/workshops/IncludedSection";
import { TestimonialsSection } from "../features/workshops/TestimonialsSection";
import { CTASection } from "../features/workshops/CTASection";
import type { Page } from "@/types/navigation";
import { useNavigation } from "@/hooks/useNavigation";

interface WorkshopsProps {
  onNavigate: (page: Page) => void;
}

export function Workshops({ onNavigate }: WorkshopsProps) {
  const { navigate } = useNavigation();

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    navigate(page);
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
