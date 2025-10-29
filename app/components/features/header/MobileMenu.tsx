import { NAV_ITEMS } from "@/constants/navigation";
import type { Page } from "@/types/navigation";
import type { MobileMenuProps } from "@/types/components/features";
import { Button } from "../../ui/button";

export function MobileMenu({
  isOpen,
  onToggle,
  currentPage,
  onNavigate,
}: MobileMenuProps) {
  const handleNavigate = (page: Page) => {
    onNavigate(page);
    onToggle(); // Close menu after navigation
  };

  return (
    <>
      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden py-4 space-y-4 border-t border-gray-200">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.page}
              onClick={() => handleNavigate(item.page)}
              className={`block w-full text-left px-4 py-2 transition-colors ${
                currentPage === item.page
                  ? "text-purple-600 bg-purple-50"
                  : "text-gray-600 hover:text-purple-600 hover:bg-gray-50"
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="px-4 pt-2">
            <Button
              onClick={() => handleNavigate("booking")}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              Réserver un appel
            </Button>
          </div>
        </nav>
      )}
    </>
  );
}
