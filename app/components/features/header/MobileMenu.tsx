import { Menu, X } from 'lucide-react';
import { Button } from '../../ui/button';
import { NavigationItem } from '../../ui/NavigationItem';
import { NAV_ITEMS, BOOKING_PAGE, NAV_LABELS } from '@/constants/navigation';
import type { Page } from '@/types/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function MobileMenu({ isOpen, onToggle, currentPage, onNavigate }: MobileMenuProps) {
  const handleNavigate = (page: Page) => {
    onNavigate(page);
    onToggle(); // Close menu after navigation
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={onToggle}
        className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
        aria-label={isOpen ? 'Close mobile menu' : 'Open mobile menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden py-4 space-y-4 border-t border-gray-200">
          {NAV_ITEMS.map((item) => (
            <NavigationItem
              key={item.page}
              page={item.page}
              label={item.label}
              currentPage={currentPage}
              onNavigate={handleNavigate}
              variant="mobile"
            />
          ))}
          <div className="px-4 pt-2">
            <Button
              onClick={() => handleNavigate(BOOKING_PAGE)}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              aria-label={`Navigate to ${NAV_LABELS.BOOKING} page`}
            >
              {NAV_LABELS.BOOKING}
            </Button>
          </div>
        </nav>
      )}
    </>
  );
}
