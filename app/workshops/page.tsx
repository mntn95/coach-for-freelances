import type { Metadata } from 'next';
import {
  WorkshopsHeroSection,
  BenefitsSection,
  WorkshopsGridSection,
  IncludedSection,
  TestimonialsSection,
  CTASection,
} from '../components/features/workshops';

const WorkshopsPage = () => (
  <div>
    <WorkshopsHeroSection />
    <BenefitsSection />
    <WorkshopsGridSection />
    <IncludedSection />
    <TestimonialsSection />
    <CTASection />
  </div>
);

export default WorkshopsPage;

export const metadata: Metadata = {
  title: 'Ateliers',
  description:
    'Ateliers pratiques pour freelances IT : prospection, positionnement, pricing et plus.',
  alternates: { canonical: '/workshops' },
};
