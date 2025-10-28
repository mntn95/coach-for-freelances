import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import { Image } from '../ui/image';
import type { Page } from '@/types/navigation';
import { NAV_ITEMS, BOOKING_PAGE, NAV_LABELS } from '@/constants/navigation';
import { useNavigation } from '@/hooks/useNavigation';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { navigate } = useNavigation();

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    navigate(page);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logo.png"
              alt="Laura Bianchi Logo"
              width={40}
              height={40}
              className="object-contain"
              context="logo"
            />
            <span className="text-gray-900">Laura Bianchi</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`transition-colors ${
                  currentPage === item.page
                    ? 'text-purple-600'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => handleNavigate(BOOKING_PAGE)}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              {NAV_LABELS.BOOKING}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 border-t border-gray-200">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`block w-full text-left px-4 py-2 transition-colors ${
                  currentPage === item.page
                    ? 'text-purple-600 bg-purple-50'
                    : 'text-gray-600 hover:text-purple-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-2">
              <Button
                onClick={() => handleNavigate(BOOKING_PAGE)}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                {NAV_LABELS.BOOKING}
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
