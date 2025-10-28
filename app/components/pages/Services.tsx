import type { Page } from "@/types/navigation";
import { CTASection } from "../features/services/CTASection";
import { FAQSection } from "../features/services/FAQSection";
import { ProcessSection } from "../features/services/ProcessSection";
import { ServicesGridSection } from "../features/services/ServicesGridSection";
import { ServicesHeroSection } from "../features/services/ServicesHeroSection";

interface ServicesProps {
  onNavigate: (page: Page) => void;
}

export function Services({ onNavigate }: ServicesProps) {
  return (
    <div>
      <ServicesHeroSection />
      <ServicesGridSection onNavigate={onNavigate} />
      <ProcessSection />
      <FAQSection />
      <CTASection onNavigate={onNavigate} />
    </div>
  );
}
