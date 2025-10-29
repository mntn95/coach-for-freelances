import { brandInfo } from "@/data/brand";
import type { WithNavigation } from "@/types";
import { Image } from "../../ui/image";

export function HeaderBrandSection({ onNavigate }: WithNavigation) {
  const handleClick = () => {
    onNavigate("home");
  };

  return (
    <button
      onClick={handleClick}
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
    </button>
  );
}
