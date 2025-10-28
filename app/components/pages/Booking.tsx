import { BookingHeroSection } from '../features/booking/BookingHeroSection';
import { InfoSection } from '../features/booking/InfoSection';
import { ExpectationsSection } from '../features/booking/ExpectationsSection';
import { CalendlySection } from '../features/booking/CalendlySection';
import { FAQSection } from '../features/booking/FAQSection';

export function Booking() {
  return (
    <div>
      <BookingHeroSection />
      <InfoSection />
      <ExpectationsSection />
      <CalendlySection />
      <FAQSection />
    </div>
  );
}
