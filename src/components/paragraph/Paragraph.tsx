import { DrupalParagraph } from 'next-drupal';

import VisualEditorParagraphWrapper from '@/components/nodehive/visualeditor/VisualEditorParagraphWrapper';
import { isParagraphType, paragraphTypes } from './paragraphs';

interface ParagraphProps {
  paragraph: DrupalParagraph;
}

export default function Paragraph({ paragraph }: ParagraphProps) {
  const paragraphType = paragraph?.type;

  if (isParagraphType(paragraphType)) {
    const ParagraphInstance = paragraphTypes[paragraphType];
    return (
      <VisualEditorParagraphWrapper entity={paragraph}>
        <ParagraphInstance paragraph={paragraph} />
      </VisualEditorParagraphWrapper>
    );
  }

  return null;
}
