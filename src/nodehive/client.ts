import { cookies } from 'next/headers';
import { NodeHiveConfig } from '@/nodehive/jsonapi-config';
import { NodeHiveClient } from 'nodehive-js';

export const cookieUserToken = process.env.NEXT_PUBLIC_COOKIE_USER_TOKEN;
export const cookieUser = process.env.NEXT_PUBLIC_COOKIE_USER;

export const createServerClient = () => {
  let options = {};

  const hasUserToken = cookies().has(cookieUserToken);
  const userToken = cookies().get(cookieUserToken)?.value;

  if (hasUserToken) {
    options = { token: userToken };
  }

  const nodehiveClient = new NodeHiveClient(
    process.env.NEXT_PUBLIC_DRUPAL_REST_BASE_URL,
    NodeHiveConfig,
    options
  );

  return nodehiveClient;
};
