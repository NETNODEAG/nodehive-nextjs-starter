import Image from 'next/image';
import { DrupalParagraph } from '@/nodehive/types';

import { FormattedText } from '@/components/layout/formatted-text';

export interface ParagraphTextProps {
  paragraph: DrupalParagraph;
}

export default function ParagraphText({ paragraph }: ParagraphTextProps) {
  const text = paragraph.field_text;
  const title = paragraph?.field_title;
  const byline = paragraph?.field_byline;
  const image = paragraph?.field_image;
  const image_url =
    paragraph.field_image[0]?.field_media_image?.image_style_uri?.large;

  return (
    <section data-paragraph-type="Text" className="grid grid-cols-2 gap-2">
      <div>
        {byline && <h2 className="text-xl">{byline}</h2>}
        <h1 className="mb-4 mt-2 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
          {title}
        </h1>
        {text && (
          <FormattedText html={text?.processed} className="prose max-w-prose" />
        )}
      </div>

      {image && (
        <div className="lg:pl-20">
          {image_url && (
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={image_url}
                priority={true}
                alt=""
                width={300}
                height={300}
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          )}
        </div>
      )}
    </section>
  );
}
