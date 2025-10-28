import { homeData } from "@/data/home";
import type { Page } from "@/types/navigation";
import { CTAButton } from "../../CTAButton";
import { ScrollReveal } from "../../ScrollReveal";

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
        <ScrollReveal>
          <h2 className="text-white mb-6">{homeData.cta.title}</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-xl text-purple-100 mb-8">
            {homeData.cta.description}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <CTAButton
            onClick={() => handleNavigate("booking")}
            variant="secondary"
          >
            {homeData.cta.buttonText}
          </CTAButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
