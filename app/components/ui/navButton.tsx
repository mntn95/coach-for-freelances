import type { NavigationButtonProps } from "@/types";

export function NavigationButton({
  page,
  label,
  onClick,
}: NavigationButtonProps) {
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
