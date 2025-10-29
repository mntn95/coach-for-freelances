"use client";

import { BookingHeroSection } from "../features/booking/BookingHeroSection";
import { CalendlySection } from "../features/booking/CalendlySection";
import { ExpectationsSection } from "../features/booking/ExpectationsSection";
import { FAQSection } from "../features/booking/FAQSection";
import { InfoSection } from "../features/booking/InfoSection";

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
