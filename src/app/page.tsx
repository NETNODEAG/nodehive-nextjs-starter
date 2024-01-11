import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';

import { siteConfig } from '@/config/site';
import { getResourceBySlug } from '@/lib/get-slug';
import { getSinglePageNode } from '@/lib/jsonapi/node/get-page';
import { absoluteUrl } from '@/lib/utils';
import NodePage from '@/components/node/node-page/NodePage';

const RESOURCE_TYPES = ['node--page'];

// INFO: Adapt the STARTPAGE_SLUG to your needs.
const STARTPAGE_SLUG = ['node/1'];

async function getResource(slug = STARTPAGE_SLUG) {
  const nodeRequest = await getResourceBySlug(slug);

  // Redirect to the 404 page if the nodeRequest object is not found.
  if (!nodeRequest) {
    notFound();
  }

  const resourceName = nodeRequest?.jsonapi?.resourceName;

  // Redirect to the 404 page if the resource type is not among the permitted types.
  if (!RESOURCE_TYPES.includes(resourceName)) {
    notFound();
  }

  // If the resource possesses a redirect, navigate to the updated resource.
  if (nodeRequest?.redirect && nodeRequest.redirect.length > 0) {
    const redirectTo = nodeRequest.redirect[0]?.to;

    redirect(redirectTo);
  }

  const nodeDictionary = {
    'node--page': getSinglePageNode,
  };

  const getNode = nodeDictionary[resourceName];

  if (getNode) {
    return await getNode(nodeRequest?.entity?.uuid);
  }

  // Redirect to the 404 page using the notFound() function if no entity is received.
  notFound();
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const { slug } = params;

  const entity = await getResource(slug);

  const leadText = entity?.field_lead_text;
  const mainImage = entity?.field_main_image?.field_media_image?.uri?.url;

  // Dynamic metadata.
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
}

export default async function RootPage() {
  // The getResource() function is used to retrieve a resource, utilizing its unique slug as the identifier.
  const entity = await getResource(STARTPAGE_SLUG);

  // Redirect to the 404 page using the notFound() function if no entity is received.
  if (!entity) {
    notFound();
  }

  return <>{entity?.type === 'node--page' && <NodePage node={entity} />}</>;
}
