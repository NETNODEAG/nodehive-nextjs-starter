import { DrupalParagraph } from 'next-drupal';

import { FormattedText } from '@/components/layout/FormattedText';

export interface ParagraphTextProps {
  paragraph: DrupalParagraph;
}

export default function ParagraphText({ paragraph }: ParagraphTextProps) {
  const text = paragraph.field_text;

  return (
    <section data-paragraph-type="Text">
      {text && <FormattedText html={text?.processed} className="prose" />}
    </section>
  );
}
