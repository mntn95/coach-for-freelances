import { servicesPageData } from "@/data/services";
import { ScrollReveal, Section } from "../../ui";

export function FAQSection() {
  return (
    <Section containerSize="lg">
      <ScrollReveal>
        <h2 className="text-center text-gray-900 mb-12">
          {servicesPageData.faq.title}
        </h2>
      </ScrollReveal>

      <div className="space-y-6">
        {servicesPageData.faq.items.map((item, index) => (
          <ScrollReveal key={`faq-${item.q}-${index}`} delay={index * 0.05}>
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-purple-300 transition-colors">
              <h3 className="text-gray-900 mb-2">{item.q}</h3>
              <p className="text-gray-600">{item.a}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
