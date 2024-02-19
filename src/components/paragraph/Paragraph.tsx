import { DrupalParagraph } from 'next-drupal';

import { isParagraphType, paragraphTypes } from './paragraphs';

interface ParagraphProps {
  paragraph: DrupalParagraph;
}

export default function Paragraph({ paragraph }: ParagraphProps) {
  const paragraphType = paragraph?.type;

  if (isParagraphType(paragraphType)) {
    const ParagraphInstance = paragraphTypes[paragraphType];
    return <ParagraphInstance paragraph={paragraph} />;
  }

  return null;
}
