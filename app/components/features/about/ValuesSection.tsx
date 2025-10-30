import { aboutData } from "@/data/about";
import { AnimatedSection } from "../../ui";

export function ValuesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">{aboutData.values.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {aboutData.values.subtitle}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutData.values.items.map((value, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="text-purple-600" size={24} />
                </div>
                <h3 className="text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
