'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { EditIcon } from '@/lib/icons';

export default function MenuEditButton({
  label,
  type = 'menu',
  menuId,
  lang = 'de',
}) {
  const pathname = usePathname();
  const [isInIframe, setIsInIframe] = useState(false);

  const editComponent = (e) => {
    e.preventDefault();

    // TODO: Add language information. To edit the content in the correct language.
    // Backend implementation is not ready yet.
    window.parent.postMessage(
      {
        type: type,
        menu_id: menuId,
        lang: lang,
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
      className="absolute -right-8 -top-1 z-50 rounded-lg bg-primary-600 p-1 text-xs font-bold text-white transition-colors hover:bg-primary-700"
    >
      <span className="sr-only">{label}</span>

      <EditIcon />
    </button>
  );
}
