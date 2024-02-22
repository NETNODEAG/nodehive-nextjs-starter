import { notFound } from 'next/navigation';
import { createServerClient } from '@/nodehive/client';

import Node from '@/components/node/Node';
import AuthWrapper from '@/components/nodehive/auth/AuthWrapper';
import SmartActionsButton from '@/components/nodehive/SmartActionsButton';

interface PageProps {
  params: { slug: Array<string> };
}

export default async function Page({ params }: PageProps) {
  const client = createServerClient();

  const { slug } = params;

  // Redirect to the 404 page using the notFound() function if no slug is received
  if (!slug) {
    notFound();
  }

  // Join the slug array into a string
  const slugString = slug.join('/');

  // Retrieve a resource, utilizing its unique slug as the identifier
  const entity = await client.getResourceBySlug(slugString);

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
