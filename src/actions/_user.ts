'use server';

import { cookies } from 'next/headers';
import { createServerClient } from '@/nodehive/client';

/**
 * Get user
 *
 * @returns {Promise}
 */
export async function getUser() {
  const cookieStore = cookies();
  const client = createServerClient();

  const userToken = cookieStore.get('userToken')?.value;

  if (!userToken) {
    return { user: null };
  }

  const userData = await client.fetchUserDetails(userToken);

  return { user: userData };
}

/**
 * Save user details
 *
 * @param {Object} user - The user object
 *
 * @returns {Promise}
 */
export async function saveUserDetails(user) {
  const cookieStore = cookies();

  cookieStore.set({
    name: 'user',
    value: JSON.stringify(user),
    httpOnly: true,
    sameSite: 'strict',
    secure: true,
    path: '/',
  });
}

/**
 * Read user details
 *
 * @returns {Promise}
 */
export async function readUserDetails() {
  const cookieStore = cookies();

  const user = cookieStore.get('user')?.value;

  if (!user) {
    return null;
  }

  return JSON.parse(cookieStore.get('user')?.value);
}
