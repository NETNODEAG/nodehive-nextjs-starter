import AuthWrapper from '@/nodehive/components/auth/AuthWrapper';
import NodeEditButton from '@/nodehive/components/visual-editor/node/NodeEditButton';
import { DrupalNode, DrupalParagraph } from 'next-drupal';

import Paragraph from '@/components/paragraph/Paragraph';

export interface NodePageProps {
  node: DrupalNode;
}

export default function NodePage({ node }: NodePageProps) {
  const nodeData = node?.data;
  const title = nodeData?.title;
  const paragraphs = nodeData?.field_paragraphs;

  return (
    <article data-node-type="Page" className="space-y-8">
      <AuthWrapper>
        <NodeEditButton node={node} />
      </AuthWrapper>

      <h1 className="text-4xl font-bold sm:text-6xl">{title}</h1>

      {Array.isArray(paragraphs) &&
        paragraphs?.map((paragraph: DrupalParagraph) => {
          return <Paragraph key={paragraph.id} paragraph={paragraph} />;
        })}
    </article>
  );
}
