'use client';

import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

export default function OpenVisualEditor() {
  const pathname = usePathname();

  const openBackend = () => {
    const frontendUrl = `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}${pathname}`;
    const url = `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/space/${process.env.NEXT_PUBLIC_DRUPAL_NODEHIVE_SPACE_ID}/visualeditor?url=${frontendUrl}`;

    window.open(url, '_blank');
  };

  return (
    <button
      onClick={openBackend}
      className={cn(
        'flex h-[32px] w-[32px] items-center justify-center rounded-full text-white transition-colors hover:bg-neutral-700',
        'cursor-pointer'
      )}
    >
      <span className="sr-only">Visual Editor</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
        />
      </svg>
    </button>
  );
}
