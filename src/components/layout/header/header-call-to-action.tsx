import { createServerClient } from '@/nodehive/client';

import FragmentCallToAction from '@/components/fragment/FragmentCallToAction';

export default async function HeaderCallToAction() {
  const client = createServerClient();

  const fragment = await client.getFragment(
    'c797de39-f9bb-4191-9db4-f61bbd6a1a5a',
    'cta'
  );

  return <FragmentCallToAction fragment={fragment} />;
}
