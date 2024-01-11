import { cookies } from 'next/headers';
import { NodeHiveClient } from 'nodehive-js';

export const createServerClient = () => {
  const token = cookies().get('userToken');
  let options = {};

  if (token && token.value) {
    options = { token: token.value };
  }

  const nodehiveClient = new NodeHiveClient(
    process.env.NEXT_PUBLIC_DRUPAL_REST_BASE_URL,
    options
  );

  return nodehiveClient;
};
