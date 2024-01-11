import Link from 'next/link';

import { getDrupalMenu } from '@/lib/jsonapi/menu/get-menu';

export default async function Header() {
  const mainNavigation = await getDrupalMenu('main');

  return (
    <header>
      <Link href="/">nn-nextjs-starter</Link>

      <nav>
        <ul>
          {mainNavigation.map((item) => (
            <li key={item.id}>
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
