import { BrandSection } from '../features/footer/BrandSection';
import { NavigationSection } from '../features/footer/NavigationSection';
import { ContactSection } from '../features/footer/ContactSection';
import { BottomBar } from '../features/footer/BottomBar';
import type { Page } from '@/types/navigation';
import { useNavigation } from '@/hooks/useNavigation';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const { navigate } = useNavigation();

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    navigate(page);
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BrandSection />
          <NavigationSection onNavigate={handleNavigate} />
          <ContactSection />
        </div>
        <BottomBar onNavigate={handleNavigate} />
      </div>
    </footer>
  );
}
