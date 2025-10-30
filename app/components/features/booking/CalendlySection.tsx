'use client';

import { bookingData } from '@/data/booking';
import { isClient, safeDocument } from '@/lib/utils';
import { Calendar } from 'lucide-react';
import { useEffect } from 'react';
import { ScrollReveal } from '../../ui';

const CalendlySection = () => {
  useEffect(() => {
    // Skip if not on client side
    if (!isClient) return;

    const doc = safeDocument();
    if (!doc) return;

    // Check if Calendly script already exists
    const existingScript = doc.querySelector('script[src*="calendly"]');
    if (existingScript) return;

    // Load Calendly widget script
    const script = doc.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    doc.body.appendChild(script);

    return () => {
      const scriptToRemove = doc.querySelector('script[src*="calendly"]');
      if (scriptToRemove && doc.body.contains(scriptToRemove)) {
        doc.body.removeChild(scriptToRemove);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">{bookingData.calendly.title}</h2>
            <p className="text-xl text-gray-600">{bookingData.calendly.subtitle}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Calendly Widget */}
            <div
              className="calendly-inline-widget"
              data-url={bookingData.calendly.url}
              style={{ minWidth: '320px', height: '700px' }}
            ></div>

            {/* Placeholder when Calendly is not configured */}
            <div className="text-center py-20 border-2 border-dashed border-gray-300 rounded-lg">
              <Calendar className="mx-auto text-gray-400 mb-4" size={48} />
              <h3 className="text-gray-900 mb-2">{bookingData.calendly.placeholder.title}</h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                {bookingData.calendly.placeholder.description}
              </p>
              <div className="bg-gray-100 rounded-lg p-4 max-w-2xl mx-auto text-left">
                <code className="text-sm text-gray-800">
                  {bookingData.calendly.placeholder.code}
                </code>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export { CalendlySection };
