import { workshopsPageData, workshopTestimonials } from "@/data/workshops";
import { lazy, Suspense } from "react";
import { AnimatedSection } from "../../ui/animated";

// Lazy load the testimonials content for better performance
const TestimonialsContent = lazy(() => import("./TestimonialsContent"));

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-center text-gray-900 mb-12">
            {workshopsPageData.testimonials.title}
          </h2>
        </AnimatedSection>

        <Suspense
          fallback={
            <div className="space-y-6">
              {workshopTestimonials.map((_, index) => (
                <AnimatedSection
                  key={`testimonial-skeleton-${index}`}
                  delay={index * 0.1}
                >
                  <div className="bg-white border border-gray-200 rounded-lg p-6 animate-pulse">
                    <div className="h-4 bg-gray-200 rounded mb-4"></div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                      <div className="h-4 bg-gray-200 rounded w-32"></div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          }
        >
          <TestimonialsContent />
        </Suspense>
      </div>
    </section>
  );
}
