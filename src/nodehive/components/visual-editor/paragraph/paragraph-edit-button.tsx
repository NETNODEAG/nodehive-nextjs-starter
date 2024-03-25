'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { EditIcon } from '@/lib/icons';

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
  }, []);

  if (!isInIframe) {
    return null;
  }

  return (
    <>
      <div className="absolute right-1 top-0 flex transform-gpu gap-2 antialiased opacity-75 transition-all duration-75 ease-in-out hover:scale-125 hover:opacity-100">
        {/** 
        <p className="mb-2 max-w-2xl text-xs leading-6 text-neutral-500">
          {type}
        </p>
        */}
        <button
          onClick={editComponent}
          className="rounded-lg bg-primary-600 p-1 text-xs font-bold text-white transition-colors hover:bg-primary-700"
        >
          <span className="sr-only">{label}df</span>

          <EditIcon />
        </button>
      </div>
    </>
  );
}
