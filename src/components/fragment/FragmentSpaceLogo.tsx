import Image from 'next/image';
import Link from 'next/link';

import { absoluteUrl } from '@/lib/utils';

export default async function FragmentSpaceLogo({ fragment }) {
  const logo = fragment?.field_logo;

  return (
    <Link href="/" className="block">
      {logo?.uri?.url ? (
        <Image
          src={absoluteUrl(logo?.uri?.url)}
          alt={logo?.filename}
          width={200}
          height={200}
          className="max-h-[35px] w-auto"
        />
      ) : (
        <span className="font-bold">NodeHive Next.js Starter</span>
      )}
    </Link>
  );
}
