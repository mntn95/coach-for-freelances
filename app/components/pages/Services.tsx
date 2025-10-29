import { CTASection } from "../features/services/CTASection";
import { FAQSection } from "../features/services/FAQSection";
import { ProcessSection } from "../features/services/ProcessSection";
import { ServicesGridSection } from "../features/services/ServicesGridSection";
import { ServicesHeroSection } from "../features/services/ServicesHeroSection";
import type { WithNavigation } from "@/types";

export function Services({ onNavigate }: WithNavigation) {
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
