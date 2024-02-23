import VisualEditorFragmentWrapper from '@/nodehive/components/visual-editor/fragment/fragment-wrapper';

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
