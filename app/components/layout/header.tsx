import { HeaderBrandSection } from '../features/header/HeaderBrandSection';
import { DesktopNavigation } from '../features/header/DesktopNavigation';
import { MobileMenu } from '../features/header/MobileMenu';
import { useMobileMenu } from '../../hooks/useMobileMenu';
import type { Page } from '@/types/navigation';
import { useNavigation } from '@/hooks/useNavigation';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const { navigate } = useNavigation();
  const { isOpen, toggle } = useMobileMenu();

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    navigate(page);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <HeaderBrandSection onNavigate={handleNavigate} />
          <DesktopNavigation currentPage={currentPage} onNavigate={handleNavigate} />
          <MobileMenu 
            isOpen={isOpen} 
            onToggle={toggle} 
            currentPage={currentPage} 
            onNavigate={handleNavigate} 
          />
        </div>
      </div>
    </header>
  );
}
