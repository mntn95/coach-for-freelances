import { workshopsPageData } from "@/data/workshops";
import type { Page } from "@/types/navigation";
import { AnimatedSection } from "../../ui/animated";

interface CTASectionProps {
  onNavigate: (page: Page) => void;
}

export function CTASection({ onNavigate }: CTASectionProps) {
  const handleNavigate = (page: Page) => {
    onNavigate(page);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-white mb-6">{workshopsPageData.cta.title}</h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <p className="text-xl text-purple-100 mb-8">
            {workshopsPageData.cta.subtitle}
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <button
            onClick={() => handleNavigate("booking")}
            className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-50 transition-colors"
          >
            {workshopsPageData.cta.buttonText}
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}
