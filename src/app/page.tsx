import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { siteConfig } from '@/config/site';

import { createServerClient } from '@/lib/nodehive';
import { absoluteUrl } from '@/lib/utils';
import NodePage from '@/components/node/node-page/NodePage';


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

  return <>
    {entity?.data.type == 'node--page' && <NodePage node={entity} />}
    {
      <details open className="container mx-auto px-4">
        <summary>JSON Output</summary>
        <pre className="rounded-md bg-black p-8 text-xs text-slate-50">
          {JSON.stringify(entity, null, 2)}
        </pre>
      </details>
      }
  </>;
}
