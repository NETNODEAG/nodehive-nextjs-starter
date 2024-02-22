import Link from 'next/link';

import { internalLinkUriToSlug } from '@/lib/utils';

export default function FragmentCallToAction({ fragment }) {
  const cta = fragment?.data?.field_cta_link;
  const ctaUrl = internalLinkUriToSlug(cta?.uri);
  const ctaLabel = cta?.title;

  if (!ctaUrl || !ctaLabel) return null;

  return (
    <div className="flex justify-center">
      <Link href={ctaUrl} className="btn btn-primary">
        {ctaLabel}
      </Link>
    </div>
  );
}
