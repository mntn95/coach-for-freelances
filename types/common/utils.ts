/**
 * Utility types export file
 * Exports all utility types and helpers
 */

// Generic utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

// Form utility types
export interface FormFieldProps {
  name: string;
  label: string;
  required?: boolean;
  error?: string;
}

// API utility types
export interface ApiResponse<T = Record<string, unknown>> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}
