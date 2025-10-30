/**
 * Container component for consistent max-width and padding
 * Provides consistent layout spacing across all pages
 */

import { ContainerProps } from '@/types';

const sizeClasses = {
  sm: 'max-w-3xl',
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  full: 'max-w-full',
} as const;

const Container = ({ children, className = '', size = 'xl' }: ContainerProps) => (
  <div className={`${sizeClasses[size]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

export { Container };
