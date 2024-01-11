import { DrupalParagraph } from 'next-drupal';

import { isParagraphType, paragraphTypes } from './paragraphs';

interface ParagraphProps {
  paragraph: DrupalParagraph;
}
export default function Paragraph({ paragraph }: ParagraphProps) {
  if (isParagraphType(paragraph.type)) {
    const ParagraphInstance = paragraphTypes[paragraph.type];
    return <ParagraphInstance paragraph={paragraph} />;
  }
  return null;
}
