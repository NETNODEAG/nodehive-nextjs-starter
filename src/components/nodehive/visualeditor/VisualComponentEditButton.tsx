'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function VisualComponentEditButton({
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
    <button
      onClick={editComponent}
      className="absolute right-2 top-2 rounded-lg bg-neutral-900 p-2 text-xs font-bold text-white transition-colors hover:bg-neutral-700"
    >
      {label}
    </button>
  );
}
