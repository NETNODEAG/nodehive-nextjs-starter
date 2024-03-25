'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { EditIcon } from '@/lib/icons';
import { cn, formatDate } from '@/lib/utils';

export default function NodeEditButton({ node }) {
  const pathname = usePathname();

  const nodeData = node?.data;
  const internalId = nodeData?.drupal_internal__nid;
  const title = nodeData?.title;
  const created = nodeData?.created;
  const changed = nodeData?.changed;
  const moderationState = nodeData?.moderation_state;
  const language = nodeData?.langcode;

  const [isInIframe, setIsInIframe] = useState(false);

  const editNode = (e) => {
    if (!isInIframe) {
      const editUrl = `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/node/${internalId}/edit?destination=${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}${pathname}`;
      window.open(editUrl, '_blank');
    } else {
      e.preventDefault();

      // TODO: Add language information. To edit the content in the correct language.
      // Backend implementation is not ready yet.
      window.parent.postMessage(
        {
          type: 'node',
          id: nodeData?.drupal_internal__nid,
          lang: nodeData?.langcode,
        },
        '*'
      );
    }
  };

  useEffect(() => {
    const inIframe = window.self !== window.top;
    setIsInIframe(inIframe);
  }, []);

  return (
    <div className="w-full">
      <div
        className={cn(
          moderationState === 'published' &&
            'bg-primary-600/10 text-primary-900',
          moderationState === 'draft' && 'bg-[#fdf7e4] text-[#3d3a1d]',
          moderationState === 'archived' && 'bg-[#f7e2e0] text-[#3d1d1d]',
          'flex items-center justify-between gap-4 rounded-lg bg-primary-600 p-3 text-xs'
        )}
      >
        <div>
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <ul className="flex flex-col text-white lg:flex-row  lg:gap-2 ">
            <li>
              <span>
                <strong>Id:</strong> {internalId}
              </span>
            </li>
            <li>
              <span>
                <strong>Created:</strong> {formatDate(created)}
              </span>
            </li>
            <li>
              <span>
                <strong>Changed:</strong> {formatDate(changed)}
              </span>
            </li>
            <li>
              <span>
                <strong>Moderation state:</strong> {moderationState}
              </span>
            </li>
            <li>
              <span>
                <strong>Language:</strong> {language}
              </span>
            </li>
          </ul>
        </div>

        <button
          onClick={editNode}
          className="flex gap-2 rounded-lg border-2 border-white p-2 text-xs font-bold text-white transition-colors hover:bg-teal-700"
        >
          <EditIcon />
          Edit
        </button>
      </div>
    </div>
  );
}
