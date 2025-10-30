"use client";

import {
  BookingHeroSection,
  InfoSection,
  ExpectationsSection,
  FAQSection,
  CalendlySection,
} from "../components/features/booking";

export default function BookingPage() {
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
