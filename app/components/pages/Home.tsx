import { useNavigation } from "@/hooks/useNavigation";
import type { Page, WithNavigation } from "@/types";
import { CTASection } from "../features/home/CTASection";
import { HeroSection } from "../features/home/HeroSection";
import { ProblemSection } from "../features/home/ProblemSection";
import { ServicesSection } from "../features/home/ServicesSection";
import { StatsSection } from "../features/home/StatsSection";
import { TestimonialsSection } from "../features/home/TestimonialsSection";

export function Home({ onNavigate }: WithNavigation) {
  const { navigate } = useNavigation();

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    navigate();
  };

  return (
    <div>
      <HeroSection onNavigate={handleNavigate} />
      <StatsSection />
      <ProblemSection />
      <ServicesSection onNavigate={handleNavigate} />
      <TestimonialsSection onNavigate={handleNavigate} />
      <CTASection onNavigate={handleNavigate} />
    </div>
  );
}
