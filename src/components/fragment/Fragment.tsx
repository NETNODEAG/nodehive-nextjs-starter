import VisualEditorFragmentWrapper from '@/components/nodehive/visualeditor/fragment/VisualEditorFragmentWrapper';
import { fragmentTypes, isFragmentType } from './fragments';

export default function Fragment({ fragment }) {
  const fragmentType = fragment?.type;

  if (isFragmentType(fragmentType)) {
    const FragmentInstance = fragmentTypes[fragmentType];
    return (
      <VisualEditorFragmentWrapper entity={fragment}>
        <FragmentInstance fragment={fragment} />
      </VisualEditorFragmentWrapper>
    );
  }

  return null;
}