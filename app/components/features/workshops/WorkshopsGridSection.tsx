import { workshops, workshopsPageData } from "@/data/workshops";
import { useNavigation } from "@/hooks/useNavigation";
import type { WithNavigation } from "@/types";
import type { Page } from "@/types/navigation";
import { AnimatedSection } from "../../ui/animated";
import { WorkshopCard } from "../../WorkshopCard";

export function WorkshopsGridSection({ onNavigate }: WithNavigation) {
  const { navigate } = useNavigation();
  const handleNavigate = (page: Page) => {
    onNavigate(page);
    navigate();
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">
              {workshopsPageData.workshops.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {workshopsPageData.workshops.subtitle}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <WorkshopCard
              key={`workshop-${workshop.title}-${index}`}
              {...workshop}
              onBook={() => handleNavigate("booking")}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
