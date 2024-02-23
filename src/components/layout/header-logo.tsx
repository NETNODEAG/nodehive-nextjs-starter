import { createServerClient } from '@/nodehive/client';

import Fragment from '@/components/fragment/Fragment';

export default async function HeaderLogo() {
  const client = createServerClient();

  const fragment = await client.getFragment(
    '79261be4-ca1a-4959-878f-b07fe4ed3e18',
    'space_logo'
  );

  return <Fragment fragment={fragment?.data} />;
}
