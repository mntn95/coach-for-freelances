import { testimonialsPageData } from "@/data/testimonials";
import { AnimatedSection } from "../../ui/animated";
import { Section } from "../../ui/section";

export function StatsSection() {
  return (
    <Section background="gray" containerSize="md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {testimonialsPageData.stats.map((stat, index) => (
            <AnimatedSection
              key={`stat-${stat.value}-${index}`}
              delay={index * 0.1}
            >
              <div className="text-center">
                <div className="text-purple-600 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </Section>
  );
}
