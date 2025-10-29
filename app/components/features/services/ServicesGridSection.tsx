import { allServices, servicesPageData } from "@/data/services";
import { useNavigation } from "@/hooks/useNavigation";
import type { WithNavigation } from "@/types";
import type { Page } from "@/types/navigation";
import { ServiceCard } from "../../ServiceCard";
import { AnimatedSection } from "../../ui/animated";
import { Section } from "../../ui/section";

export function ServicesGridSection({ onNavigate }: WithNavigation) {
  const { navigate } = useNavigation();
  const handleNavigate = (page: Page) => {
    onNavigate(page);
    navigate();
  };

  return (
    <Section containerSize="lg">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">
            {servicesPageData.services.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {servicesPageData.services.subtitle}
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allServices.map((service, index) => (
          <ServiceCard
            key={`service-${service.title}-${index}`}
            {...service}
            onBook={() => handleNavigate("booking")}
            delay={index * 0.1}
          />
        ))}
      </div>
    </Section>
  );
}
