import { ScrollReveal } from '../../ScrollReveal';
import { TestimonialCard } from '../../TestimonialCard';
import { testimonials } from '@/data/testimonials';
import type { Page } from '@/types/navigation';

interface TestimonialsSectionProps {
  onNavigate: (page: Page) => void;
}

export function TestimonialsSection({ onNavigate }: TestimonialsSectionProps) {
  const handleNavigate = (page: Page) => {
    onNavigate(page);
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Ils ont doublé leurs revenus</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des freelances comme vous qui ont franchi le cap
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
              delay={index * 0.1}
            />
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="text-center mt-12">
            <button
              onClick={() => handleNavigate('testimonials')}
              className="text-purple-600 hover:text-purple-700 underline"
            >
              Lire tous les témoignages →
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
