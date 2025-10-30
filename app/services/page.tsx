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
