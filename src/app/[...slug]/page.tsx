import { notFound } from 'next/navigation';

import { createServerClient } from '@/lib/nodehive';
import NodePage from '@/components/node/page/node-page';

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

  console.log('slugString', slugString);

  // Retrieve a resource, utilizing its unique slug as the identifier
  const entity = await client.getResourceBySlug(slugString);

  console.log('entity', entity);

  // Redirect to the 404 page using the notFound() function if no entity is received
  if (!entity) {
    notFound();
  }

  return (
    <>
      {entity?.data.type == 'node--page' && <NodePage node={entity} />}

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
