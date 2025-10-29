"use client";

import Link from "next/link";
import { NAV_ITEMS, BOOKING_PAGE, NAV_LABELS } from "@/constants/navigation";
import type { Page } from "@/types";
import { getPagePath } from "@/lib/navigation";
import { Button } from "../../ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  currentPage: Page | null;
}

export function MobileMenu({ isOpen, onToggle, currentPage }: MobileMenuProps) {
  return (
    <>
      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden py-4 space-y-4 border-t border-gray-200">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.page}
              href={getPagePath(item.page)}
              onClick={onToggle}
              className={`block w-full text-left px-4 py-2 transition-colors ${
                currentPage === item.page
                  ? "text-purple-600 bg-purple-50"
                  : "text-gray-600 hover:text-purple-600 hover:bg-gray-50"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="px-4 pt-2">
            <Link href={getPagePath(BOOKING_PAGE)} onClick={onToggle}>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                {NAV_LABELS.BOOKING}
              </Button>
            </Link>
          </div>
        </nav>
      )}
    </>
  );
}
