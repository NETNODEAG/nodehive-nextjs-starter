import Link from 'next/link';
import { createServerClient } from '@/nodehive/client';
import MenuWrapper from '@/nodehive/components/visual-editor/menu/menu-wrapper';

interface Props {
  menuId: string;
}

export default async function HeaderNavigation({ menuId }: Props) {
  const client = createServerClient();

  const navigation = await client.getMenuItems(menuId);

  if (!navigation?.data?.length) {
    return null;
  }

  return (
    <MenuWrapper menuId={menuId}>
      <nav className="hidden md:block">
        <ul className="flex gap-8">
          {navigation?.data?.map((item) => (
            <li key={item.id}>
              <Link href={item.url} className="font-semibold">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </MenuWrapper>
  );
}
