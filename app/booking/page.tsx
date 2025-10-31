import type { Metadata } from 'next';

import {
  BookingHeroSection,
  InfoSection,
  ExpectationsSection,
  FAQSection,
  CalendlySection,
} from '../components/features/booking';

const BookingPage = () => (
  <div>
    <BookingHeroSection />
    <InfoSection />
    <ExpectationsSection />
    <CalendlySection />
    <FAQSection />
  </div>
);

export default BookingPage;

export const metadata: Metadata = {
  title: 'Réserver un appel',
  description: 'Planifiez un appel découverte gratuit de 45 minutes avec Laura Bianchi.',
  alternates: { canonical: '/booking' },
};
