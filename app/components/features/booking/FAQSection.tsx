import { bookingData } from "@/data/booking";
import { ScrollReveal } from "../../ui";

export function FAQSection() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-center text-gray-900 mb-12">
            {bookingData.faq.title}
          </h2>
        </ScrollReveal>

        <div className="space-y-6">
          {bookingData.faq.items.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
