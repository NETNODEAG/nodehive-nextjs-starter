import { createServerClient } from '@/nodehive/client';

import FragmentSpaceLogo from '@/components/fragment/FragmentSpaceLogo';

export default async function HeaderLogo() {
  const client = createServerClient();

  // TODO: Get the fragment from the server
  // const fragment = await client.getFragment(
  //   '79261be4-ca1a-4959-878f-b07fe4ed3e18',
  //   'space_logo'
  // );

  const fragment = null;

  return <FragmentSpaceLogo fragment={fragment} />;
}
