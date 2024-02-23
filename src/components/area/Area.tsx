import { DrupalArea } from '@/nodehive/types';

import Fragment from '@/components/fragment/Fragment';

interface AreaProps {
  area: DrupalArea;
}

export default function Area({ area }: AreaProps) {
  const fragments = area?.data?.fragment_id;

  return (
    <>
      {fragments?.map((fragment) => {
        return <Fragment key={fragment?.id} fragment={fragment} />;
      })}
    </>
  );
}
