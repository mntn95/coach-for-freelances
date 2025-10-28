import { servicesPageData } from "@/data/services";
import { AnimatedSection } from "../../ui/animated";
import { Section } from "../../ui/section";

export function ProcessSection() {
  return (
    <Section containerSize="lg" background="gray">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">
            {servicesPageData.process.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {servicesPageData.process.subtitle}
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicesPageData.process.steps.map((step, index) => (
          <AnimatedSection
            key={`process-${step.step}-${index}`}
            delay={index * 0.1}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">{step.step}</span>
              </div>
              <h3 className="text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}
