/**
 * Badge component for consistent badge styling
 * Handles various badge variants and sizes
 */

import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'gradient' | 'outline' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const variantClasses = {
  default: 'bg-gray-100 text-gray-800',
  gradient: 'bg-gradient-to-r from-purple-600 to-blue-600 text-white',
  outline: 'border border-gray-300 text-gray-700 bg-transparent',
  success: 'bg-green-100 text-green-800',
  warning: 'bg-yellow-100 text-yellow-800',
  error: 'bg-red-100 text-red-800',
} as const;

const sizeClasses = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-1.5 text-sm',
  lg: 'px-4 py-2 text-base',
} as const;

export function Badge({ 
  children, 
  variant = 'default',
  size = 'md',
  className = ''
}: BadgeProps) {
  const variantClass = variantClasses[variant];
  const sizeClass = sizeClasses[size];
  
  return (
    <span className={`inline-flex items-center rounded-full font-medium ${variantClass} ${sizeClass} ${className}`}>
      {children}
    </span>
  );
}