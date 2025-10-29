import { workshopsPageData } from "@/data/workshops";
import { AnimatedSection } from "../../ui/animated";

export function BenefitsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workshopsPageData.benefits.map((benefit, index) => (
            <AnimatedSection
              key={`benefit-${benefit.title}-${index}`}
              delay={index * 0.1}
            >
              <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">
                  {typeof benefit.icon === "string" ? (
                    benefit.icon
                  ) : (
                    <benefit.icon className="w-8 h-8 mx-auto" />
                  )}
                </div>
                <h3 className="text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
