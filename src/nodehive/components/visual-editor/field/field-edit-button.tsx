'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function FieldEditButton({ label, type, field, nodeId, lang }) {
  const pathname = usePathname();
  const [isInIframe, setIsInIframe] = useState(false);

  const editComponent = (e) => {
    e.preventDefault();

    // TODO: Add language information. To edit the content in the correct language.
    // Backend implementation is not ready yet.
    window.parent.postMessage(
      {
        type: type,
        field: field,
        id: nodeId,
        pathname: pathname,
        lang: lang,
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
