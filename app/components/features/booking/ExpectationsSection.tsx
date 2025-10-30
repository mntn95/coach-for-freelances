import { bookingData } from "@/data/booking";
import { AnimatedSection } from "../../ui";

export function ExpectationsSection() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">
              {bookingData.expectations.title}
            </h2>
            <p className="text-xl text-gray-600">
              {bookingData.expectations.subtitle}
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-6">
          {bookingData.expectations.items.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="flex gap-6 bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center">
                    <span className="text-xl">{item.step}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
