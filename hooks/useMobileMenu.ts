import { useState } from 'react';

interface UseMobileMenuReturn {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

/**
 * Custom hook for managing mobile menu state
 * Provides state and handlers for opening, closing, and toggling mobile menu
 *
 * @returns Object containing menu state and control functions
 */
export const useMobileMenu = (): UseMobileMenuReturn => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return {
    isOpen,
    open,
    close,
    toggle,
  };
};
