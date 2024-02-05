import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { siteConfig } from '@/config/site';
import { createServerClient } from '@/lib/nodehive';
import { absoluteUrl } from '@/lib/utils';
import NodePage from '@/components/node/node-page/NodePage';

interface PageProps {
  params: { slug: Array<string> };
}
/* 
// Uncomment this function to enable dynamic metadata
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const client = createServerClient();

  const { slug } = params;

  // Retrieve a resource, utilizing its unique slug as the identifier
  const entity = await client.getResourceBySlug(slug);

  const leadText = entity?.field_lead_text;
  const mainImage = entity?.field_main_image?.field_media_image?.uri?.url;

  // Dynamic metadata
  let seoTitle = entity?.title;
  let seoDescription = leadText || siteConfig.description;
  let seoImage = mainImage ? absoluteUrl(mainImage) : siteConfig.ogImage;

  return {
    title: seoTitle,
    description: seoDescription,
    openGraph: {
      siteName: siteConfig.title,
      title: seoTitle,
      description: seoDescription,
      images: [
        {
          url: seoImage,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}*/

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

  return <>
    {entity?.data.type == 'node--page' && <NodePage node={entity} />}
    {
      <details open className="mt-10 mb-10 container mx-auto px-4 rounded-md bg-black p-8 text-xs text-slate-50">
        <summary>API JSON Output</summary>
        <pre className="">
          {JSON.stringify(entity, null, 2)}
        </pre>
      </details>
      }
  </>;
}
