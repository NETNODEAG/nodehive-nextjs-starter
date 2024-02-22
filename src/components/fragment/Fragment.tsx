import { fragmentTypes, isFragmentType } from './fragments';

export default function Fragment({ fragment }) {
  const fragmentType = fragment?.type;

  if (isFragmentType(fragmentType)) {
    const FragmentInstance = fragmentTypes[fragmentType];
    return <FragmentInstance fragment={fragment} />;
  }

  return null;
}
