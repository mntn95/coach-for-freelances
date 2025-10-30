import { testimonialsPageData } from "@/data/testimonials";
import { lazy, Suspense } from "react";
import { ScrollReveal, Section } from "../../ui";

// Lazy load the video testimonials section for better performance
const VideoTestimonialsContent = lazy(
  () => import("./VideoTestimonialsContent")
);

export function VideoTestimonialsSection() {
  return (
    <Section containerSize="lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">
              {testimonialsPageData.videoTestimonials.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {testimonialsPageData.videoTestimonials.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <Suspense
          fallback={
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonialsPageData.videoTestimonials.videos.map((_, index) => (
                <ScrollReveal
                  key={`video-skeleton-${index}`}
                  delay={index * 0.1}
                >
                  <div className="relative aspect-video bg-gray-200 rounded-xl overflow-hidden animate-pulse">
                    <div className="absolute inset-0 bg-gray-300"></div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          }
        >
          <VideoTestimonialsContent />
        </Suspense>

        <ScrollReveal delay={0.4}>
          <p className="text-center text-gray-500 mt-8 text-sm">
            {testimonialsPageData.videoTestimonials.placeholder}
          </p>
        </ScrollReveal>
      </div>
    </Section>
  );
}
