import type { Page } from '@/types/navigation';
import { NAV_ITEMS } from '@/constants/navigation';

interface NavigationItemProps {
  page: Page;
  label: string;
  currentPage: Page;
  onNavigate: (page: Page) => void;
  variant: 'desktop' | 'mobile';
}

export function NavigationItem({ page, label, currentPage, onNavigate, variant }: NavigationItemProps) {
  const handleClick = () => {
    onNavigate(page);
  };

  const getClasses = () => {
    const baseClasses = 'transition-colors';
    const isActive = currentPage === page;
    
    if (variant === 'desktop') {
      return `${baseClasses} ${
        isActive ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'
      }`;
    } else {
      return `${baseClasses} block w-full text-left px-4 py-2 ${
        isActive 
          ? 'text-purple-600 bg-purple-50' 
          : 'text-gray-600 hover:text-purple-600 hover:bg-gray-50'
      }`;
    }
  };

  return (
    <button
      onClick={handleClick}
      className={getClasses()}
      aria-label={`Navigate to ${label} page`}
      role="button"
      tabIndex={0}
    >
      {label}
    </button>
  );
}
