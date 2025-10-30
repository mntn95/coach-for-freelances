'use client';

import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useMobileMenu } from '@/hooks/useMobileMenu';
import type { Page } from '@/types';
import { DesktopNavigation } from '../features/header/DesktopNavigation';
import { HeaderBrandSection } from '../features/header/HeaderBrandSection';
import { MobileMenu } from '../features/header/MobileMenu';

export const Header = () => {
  const pathname = usePathname();
  const { isOpen, toggle } = useMobileMenu();

  // Déterminer la page active depuis le pathname
  const getCurrentPage = (): Page | null => {
    if (pathname === '/') return 'home';
    const page = pathname.slice(1);
    const validPages: Page[] = [
      'about',
      'services',
      'workshops',
      'testimonials',
      'booking',
      'legal',
    ];
    return validPages.includes(page as Page) ? (page as Page) : null;
  };

  const currentPage = getCurrentPage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <HeaderBrandSection />
          <DesktopNavigation currentPage={currentPage} />
          {/* Mobile Menu Button */}
          <button
            onClick={toggle}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
            aria-label={isOpen ? 'Close mobile menu' : 'Open mobile menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <MobileMenu isOpen={isOpen} onToggle={toggle} currentPage={currentPage} />
      </div>
    </header>
  );
};
