import type { Page } from '@/types/navigation';

interface NavigationButtonProps {
  page: Page;
  label: string;
  onClick: (page: Page) => void;
}

export function NavigationButton({ page, label, onClick }: NavigationButtonProps) {
  const handleClick = () => {
    onClick(page);
  };

  return (
    <button
      onClick={handleClick}
      className="text-sm hover:text-purple-400 transition-colors"
      aria-label={`Navigate to ${label}`}
    >
      {label}
    </button>
  );
}
