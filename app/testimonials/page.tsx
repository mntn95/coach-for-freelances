import type { Metadata } from 'next';

import {
  TestimonialsHeroSection,
  StatsSection,
  TestimonialsGridSection,
  SuccessStoriesSection,
  VideoTestimonialsSection,
} from '../components/features/testimonials';

const TestimonialsPage = () => (
  <div>
    <TestimonialsHeroSection />
    <StatsSection />
    <TestimonialsGridSection />
    <SuccessStoriesSection />
    <VideoTestimonialsSection />
  </div>
);

export default TestimonialsPage;

export const metadata: Metadata = {
  title: 'Témoignages',
  description:
    "Retours d'expérience de freelances IT ayant doublé leurs revenus avec l'accompagnement.",
  alternates: { canonical: '/testimonials' },
};
