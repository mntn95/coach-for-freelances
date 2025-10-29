import {
  extendedTestimonials,
  testimonialsPageData,
} from "@/data/testimonials";
import { TestimonialCard } from "../cards/TestimonialCard";
import { AnimatedSection } from "../../ui/animated";
import { Section } from "../../ui/section";

export function TestimonialsGridSection() {
  return (
    <Section containerSize="lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">
              {testimonialsPageData.testimonials.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {testimonialsPageData.testimonials.subtitle}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {extendedTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`testimonial-${testimonial.name}-${index}`}
              {...testimonial}
              delay={index * 0.05}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
