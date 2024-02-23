'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function FragmentEditButton({ label, type, uuid, id }) {
  const pathname = usePathname();
  const [isInIframe, setIsInIframe] = useState(false);

  const editComponent = (e) => {
    e.preventDefault();

    // TODO: Add language information. To edit the content in the correct language.
    window.parent.postMessage(
      {
        type: type,
        uuid: uuid,
        id: id,
        pathname: pathname,
      },
      '*'
    );
  };

  useEffect(() => {
    const inIframe = window.self !== window.top;
    setIsInIframe(inIframe);

    const handleMessage = (event) => {
      if (event.data === 'reloadFrame') {
        refreshPage();
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  if (!isInIframe) {
    return null;
  }

  async function refreshPage() {
    let success = false;
    let error = null;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/api/nodehive/revalidate?path=${pathname}`
      );

      if (!response.ok) {
        error = 'Error revalidating the page';
      } else {
        success = true;
        location.reload();
      }
    } catch (error) {
      console.error(error);
      error = error?.message;
    }

    return { success, error };
  }

  return (
    <button
      onClick={editComponent}
      className="absolute right-1 top-1 z-50 rounded-lg bg-primary-600 p-1 text-xs font-bold text-white transition-colors hover:bg-primary-700"
    >
      <span className="sr-only">{label}</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
      </svg>
    </button>
  );
}
