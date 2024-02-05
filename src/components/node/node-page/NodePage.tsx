import { DrupalNode, DrupalParagraph } from 'next-drupal';

import Paragraph from '@/components/paragraph/Paragraph';

interface NodePageProps {
  node: DrupalNode;
}

export default function NodePage({ node }: NodePageProps) {
  const title = node.data.title;
  const paragraphs = node.data.field_paragraphs;

  return (
    <article className="container mx-auto" data-node-type="Page">
      <h1 className="mb-10 mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:tracking-tighter">
        {title}
      </h1>

      {Array.isArray(paragraphs) &&
        paragraphs?.map((paragraph: DrupalParagraph) => {
          return <div className="w-full p-10 mb-5 overflow-hidden rounded-lg ring-1 ring-slate-900/10">
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">{paragraph.type}</p>
            <Paragraph key={paragraph.id} paragraph={paragraph} />

            </div>;
        })}
    </article>
  );
}
