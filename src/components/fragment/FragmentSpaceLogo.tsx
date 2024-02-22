import Image from 'next/image';
import Link from 'next/link';

import { absoluteUrl } from '@/lib/utils';
import Logo from '/public/logo.svg';

export default async function FragmentSpaceLogo({ fragment }) {
  const logo = fragment?.data?.field_logo;

  return (
    <Link href="/" className="block">
      {logo?.uri?.url ? (
        <Image
          src={absoluteUrl(logo?.uri?.url)}
          alt={logo?.filename}
          width={160}
          height={160}
          className="max-h-[29px] w-auto"
        />
      ) : (
        <Logo className="h-[29px] max-w-[160px]" />
      )}
    </Link>
  );
}
