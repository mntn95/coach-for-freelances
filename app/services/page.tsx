import {
  CTASection,
  FAQSection,
  ProcessSection,
  ServicesGridSection,
  ServicesHeroSection,
} from "../components/features/services";

export default function ServicesPage() {
  return (
    <div>
      <ServicesHeroSection />
      <ServicesGridSection />
      <ProcessSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
