import type { Metadata } from 'next';
import {
  CTASection,
  FAQSection,
  ProcessSection,
  ServicesGridSection,
  ServicesHeroSection,
} from '../components/features/services';

const ServicesPage = () => (
  <div>
    <ServicesHeroSection />
    <ServicesGridSection />
    <ProcessSection />
    <FAQSection />
    <CTASection />
  </div>
);

export default ServicesPage;

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Accompagnements pour freelances IT : séances découvertes, programme 3 mois, sessions stratégiques.',
  alternates: { canonical: '/services' },
};
