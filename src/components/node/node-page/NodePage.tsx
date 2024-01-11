import { DrupalNode, DrupalParagraph } from 'next-drupal';

import Paragraph from '@/components/paragraph/Paragraph';

interface NodePageProps {
  node: DrupalNode;
}

export default function NodePage({ node }: NodePageProps) {
  const title = node.title;
  const paragraphs = node.field_paragraphs;

  return (
    <article data-node-type="Page">
      <h1>{title}</h1>

      {Array.isArray(paragraphs) &&
        paragraphs?.map((paragraph: DrupalParagraph) => {
          return <Paragraph key={paragraph.id} paragraph={paragraph} />;
        })}
    </article>
  );
}
