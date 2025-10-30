import { testimonialsPageData } from '@/data/testimonials';
import { ScrollReveal, Section } from '../../ui';

export const TestimonialsHeroSection = () => (
  <Section background="gradient" containerSize="lg">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <ScrollReveal animatesInView={false}>
        <h1 className="text-white mb-6">{testimonialsPageData.hero.title}</h1>
      </ScrollReveal>
      <ScrollReveal animatesInView={false} delay={0.1}>
        <p className="text-xl text-purple-100">{testimonialsPageData.hero.subtitle}</p>
      </ScrollReveal>
    </div>
  </Section>
);
