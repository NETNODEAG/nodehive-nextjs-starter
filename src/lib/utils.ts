import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Tailwind CSS classnames generator
 *
 * @param inputs - Classnames to be merged
 * @returns Tailwind CSS classnames
 *
 * @example
 * ```tsx
 * import { cn } from 'lib/utils';
 *
 * const className = cn('text-red-500', 'bg-blue-500');
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * This function is used to generate an absolute URL from a relative URL
 * It will use the NEXT_PUBLIC_DRUPAL_BASE_URL environment variable to generate the absolute URL
 *
 * @example
 * ```tsx
 * <img src={absoluteUrl(image.url)} alt={image.alt} />
 * ```
 */
export function absoluteUrl(input: string) {
  return `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${input}`;
}

/**
 * This function is used to check if a URL is relative or absolute
 *
 * @example
 * ```tsx
 * <a href={isRelative(url) ? url : absoluteUrl(url)} />
 * ```
 */
export function isRelative(url: string) {
  return !new RegExp('^(?:[a-z]+:)?//', 'i').test(url);
}
