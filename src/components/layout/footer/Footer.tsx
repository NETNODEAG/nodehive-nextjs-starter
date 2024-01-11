import Link from 'next/link';

import { getDrupalMenu } from '@/lib/jsonapi/menu/get-menu';

export default async function Footer() {
  const footerNavigation = await getDrupalMenu('footer');

  return (
    <footer>
      <nav>
        <ul>
          {footerNavigation.map((item) => (
            <li key={item.id}>
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
