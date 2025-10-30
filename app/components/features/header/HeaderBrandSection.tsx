"use client";

import Link from "next/link";
import { brandInfo } from "@/data/brand";
import { Image } from "../../ui";

export function HeaderBrandSection() {
  return (
    <Link
      href="/"
      className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
      aria-label={`Navigate to ${brandInfo.name} homepage`}
    >
      <Image
        src={brandInfo.logo}
        alt={`${brandInfo.name} Logo`}
        width={40}
        height={40}
        className="object-contain"
        context="logo"
      />
      <span className="text-gray-900">{brandInfo.name}</span>
    </Link>
  );
}
