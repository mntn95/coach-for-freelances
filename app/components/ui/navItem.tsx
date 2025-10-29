"use client";

import Link from "next/link";
import { getPagePath } from "@/lib/navigation";
import type { Page } from "@/types";

interface NavigationItemProps {
  page: Page;
  label: string;
  currentPage: Page | null;
  variant?: "desktop" | "mobile";
}

export function NavigationItem({
  page,
  label,
  currentPage,
  variant = "desktop",
}: NavigationItemProps) {
  const getClasses = () => {
    const baseClasses = "transition-colors";
    const isActive = currentPage === page;

    if (variant === "desktop") {
      return `${baseClasses} ${
        isActive ? "text-purple-600" : "text-gray-600 hover:text-purple-600"
      }`;
    } else {
      return `${baseClasses} block w-full text-left px-4 py-2 ${
        isActive
          ? "text-purple-600 bg-purple-50"
          : "text-gray-600 hover:text-purple-600 hover:bg-gray-50"
      }`;
    }
  };

  return (
    <Link
      href={getPagePath(page)}
      className={getClasses()}
      aria-label={`Navigate to ${label} page`}
    >
      {label}
    </Link>
  );
}
