import { DrupalParagraph } from '@/nodehive/types';

import { FormattedText } from '@/components/layout/formatted-text';

export interface ParagraphTextProps {
  paragraph: DrupalParagraph;
}

export default function ParagraphText({ paragraph }: ParagraphTextProps) {
  const text = paragraph.field_text;

  return (
    <section data-paragraph-type="Text">
      {text && (
        <FormattedText html={text?.processed} className="prose max-w-prose" />
      )}
    </section>
  );
}
