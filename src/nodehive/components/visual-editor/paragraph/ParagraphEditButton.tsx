'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function VisualParagraphEditButton({
  label,
  type,
  uuid,
  id,
  parentId,
}) {
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
        parent_id: parentId,
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
      className="absolute right-2 top-2 rounded-lg bg-primary-600 p-2 text-xs font-bold text-white transition-colors hover:bg-primary-700"
    >
      {label}
    </button>
  );
}
