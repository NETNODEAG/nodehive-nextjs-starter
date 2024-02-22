import FragmentCallToAction from './cta/FragmentCallToAction';
import FragmentSpaceLogo from './space-logo/FragmentSpaceLogo';
import FragmentText from './text/FragmentText';

export function isFragmentType(key: string) {
  return key in fragmentTypes;
}

export const fragmentTypes = {
  'nodehive_fragment--cta': FragmentCallToAction,
  'nodehive_fragment--text': FragmentText,
  'nodehive_fragment--space_logo': FragmentSpaceLogo,
};
