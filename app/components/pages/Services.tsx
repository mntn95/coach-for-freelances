import { CTASection } from "../features/services/CTASection";
import { FAQSection } from "../features/services/FAQSection";
import { ProcessSection } from "../features/services/ProcessSection";
import { ServicesGridSection } from "../features/services/ServicesGridSection";
import { ServicesHeroSection } from "../features/services/ServicesHeroSection";

export function Services() {
  return (
    <div>
      <ServicesHeroSection />
      <ServicesGridSection />
      <ProcessSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
