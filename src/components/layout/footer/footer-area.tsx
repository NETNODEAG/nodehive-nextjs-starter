import { createServerClient } from '@/nodehive/client';

import Area from '@/components/area/Area';

export default async function FooterArea() {
  const client = createServerClient();

  const area = await client.getArea('60612242-2d11-4567-a3f0-28c8b0c805d5');

  return (
    <div className="flex items-center justify-between gap-4">
      <Area area={area} />
    </div>
  );
}
