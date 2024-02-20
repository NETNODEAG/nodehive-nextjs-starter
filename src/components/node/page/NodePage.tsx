import { DrupalNode, DrupalParagraph } from 'next-drupal';

import AuthWrapper from '@/components/nodehive/auth/AuthWrapper';
import EditButton from '@/components/nodehive/visualeditor/NodeEditButton';
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
        <EditButton node={node} />
      </AuthWrapper>

      <h1 className="text-4xl font-bold sm:text-6xl">{title}</h1>

      {Array.isArray(paragraphs) &&
        paragraphs?.map((paragraph: DrupalParagraph) => {
          return (
            <div
              key={paragraph.id}
              className="overflow-hidden rounded-lg p-8 ring-2 ring-neutral-900/10"
            >
              <p className="mb-2 max-w-2xl text-xs leading-6 text-neutral-500">
                {paragraph.type}
              </p>

              <Paragraph paragraph={paragraph} />
            </div>
          );
        })}
    </article>
  );
}
