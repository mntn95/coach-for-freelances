'use client';

import { BottomBar } from '../features/footer/BottomBar';
import { BrandSection } from '../features/footer/BrandSection';
import { ContactSection } from '../features/footer/ContactSection';
import { NavigationSection } from '../features/footer/NavigationSection';

export const Footer = () => (
  <footer className="bg-gray-900 text-gray-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <BrandSection />
        <NavigationSection />
        <ContactSection />
      </div>
      <BottomBar />
    </div>
  </footer>
);
