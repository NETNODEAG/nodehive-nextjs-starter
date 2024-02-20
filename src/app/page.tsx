import { notFound } from 'next/navigation';

import { createServerClient } from '@/lib/nodehive';
import Node from '@/components/node/Node';
import AuthWrapper from '@/components/nodehive/auth/AuthWrapper';
import SmartActionsButton from '@/components/nodehive/SmartActionsButton';

export default async function RootPage() {
  const client = createServerClient();

  // Retrieve a resource, utilizing its unique slug as the identifier
  const entity = await client.getResourceBySlug(
    process.env.NODEHIVE_STARTPAGE_SLUG
  );

  // Redirect to the 404 page using the notFound() function if no entity is received
  if (!entity) {
    notFound();
  }

  return (
    <>
      <Node node={entity} />

      <AuthWrapper>
        <SmartActionsButton />
      </AuthWrapper>

      {
        <details className="container mx-auto mb-10 mt-10 rounded-md bg-black p-8 px-4 text-xs text-slate-50">
          <summary className="cursor-pointer font-bold">
            API JSON Output
          </summary>
          <pre className="mt-8">{JSON.stringify(entity, null, 2)}</pre>
        </details>
      }
    </>
  );
}
