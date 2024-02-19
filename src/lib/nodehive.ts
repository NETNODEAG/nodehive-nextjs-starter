import { cookies } from 'next/headers';
import { NodeHiveClient } from 'nodehive-js';

import { NodeHiveConfig } from '@/config/nodehive.config';

export const createServerClient = () => {
  const userToken = cookies().get('userToken')?.value;
  let options = {};

  if (userToken) {
    options = { token: userToken };
  }

  const nodehiveClient = new NodeHiveClient(
    process.env.NEXT_PUBLIC_DRUPAL_REST_BASE_URL,
    NodeHiveConfig,
    options
  );

  return nodehiveClient;
};
