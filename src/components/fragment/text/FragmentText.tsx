import { FormattedText } from '@/components/layout/FormattedText';

export default function FragmentText({ fragment }) {
  const text = fragment?.field_text_content;

  return <FormattedText html={text?.processed} className="prose" />;
}
