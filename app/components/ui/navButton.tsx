"use client";

import Link from "next/link";
import { getPagePath } from "@/lib/navigation";
import type { Page } from "@/types";

interface NavigationButtonProps {
  page: Page;
  label: string;
}

export function NavigationButton({ page, label }: NavigationButtonProps) {
  return (
    <Link
      href={getPagePath(page)}
      className="text-sm hover:text-purple-400 transition-colors"
      aria-label={`Navigate to ${label}`}
    >
      {label}
    </Link>
  );
}
