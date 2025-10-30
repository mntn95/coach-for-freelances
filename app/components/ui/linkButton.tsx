import { ArrowRight } from "lucide-react";
import { Button } from "./button";
import { LinkButtonProps } from "@/types";

export function LinkButton({
  onClick,
  variant = "primary",
  children,
  icon = true,
  className = "",
}: LinkButtonProps) {
  const variants = {
    primary:
      "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white hover:text-white",
    secondary:
      "bg-white text-purple-600 hover:bg-gray-50 hover:text-purple-600 border-2 border-purple-600",
    outline:
      "border-2 border-white text-white hover:bg-white hover:text-purple-600",
  };

  return (
    <Button
      onClick={onClick}
      variant="ghost"
      className={`group ${variants[variant]} ${className}`}
      size="lg"
    >
      {children}
      {icon && (
        <ArrowRight
          className="ml-2 group-hover:translate-x-1 transition-transform"
          size={20}
        />
      )}
    </Button>
  );
}
