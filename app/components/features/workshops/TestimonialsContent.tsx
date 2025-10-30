import { workshopTestimonials } from '@/data/workshops';
import { ScrollReveal } from '../../ui';

const TestimonialsContent = () => (
  <div className="space-y-6">
    {workshopTestimonials.map((testimonial, index) => (
      <ScrollReveal key={`testimonial-${testimonial.name}-${index}`} delay={index * 0.1}>
        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-purple-300 transition-colors">
          <p className="text-gray-600 italic mb-4">&ldquo;{testimonial.text}&rdquo;</p>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white mr-3">
              {testimonial.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </div>
            <div>
              <div className="text-gray-900">{testimonial.name}</div>
              <div className="text-sm text-gray-500">{testimonial.role}</div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    ))}
  </div>
);

export default TestimonialsContent;
