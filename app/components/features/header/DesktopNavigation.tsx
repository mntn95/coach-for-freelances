"use client";

import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { NavigationItem } from "@/app/components/ui/navItem";
import { BOOKING_PAGE, NAV_ITEMS, NAV_LABELS } from "@/constants/navigation";
import { getPagePath } from "@/lib/navigation";
import type { Page } from "@/types";

interface DesktopNavigationProps {
  currentPage: Page | null;
}

export function DesktopNavigation({ currentPage }: DesktopNavigationProps) {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      {NAV_ITEMS.map((item) => (
        <NavigationItem
          key={item.page}
          page={item.page}
          label={item.label}
          currentPage={currentPage}
          variant="desktop"
        />
      ))}
      <Link href={getPagePath(BOOKING_PAGE)}>
        <Button
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          aria-label={`Navigate to ${NAV_LABELS.BOOKING} page`}
        >
          {NAV_LABELS.BOOKING}
        </Button>
      </Link>
    </nav>
  );
}
