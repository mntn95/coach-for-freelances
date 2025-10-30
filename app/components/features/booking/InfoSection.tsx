import { bookingData } from "@/data/booking";
import { AnimatedSection } from "../../ui";

export function InfoSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bookingData.info.items.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="bg-white p-6 rounded-xl text-center shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-purple-600" size={24} />
                </div>
                <h3 className="text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
