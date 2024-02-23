'use client';

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

  const editNode = () => {
    const editUrl = `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/node/${internalId}/edit?destination=${pathname}`;

    window.open(editUrl, '_blank');
  };

  return (
    <div
      className={cn(
        moderationState === 'published' && 'bg-primary-600/10 text-primary-900',
        moderationState === 'draft' && 'bg-[#fdf7e4] text-[#3d3a1d]',
        moderationState === 'archived' && 'bg-[#f7e2e0] text-[#3d1d1d]',
        'flex items-center justify-between gap-4 rounded-lg p-3 text-xs'
      )}
    >
      <ul className="flex flex-col lg:flex-row lg:gap-2">
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

      <button
        onClick={editNode}
        className="flex gap-2 rounded-lg bg-primary-600 p-2 text-xs font-bold text-white transition-colors hover:bg-primary-700"
      >
        <EditIcon />
        Edit {"'"}
        {title}
        {"'"}
      </button>
    </div>
  );
}
