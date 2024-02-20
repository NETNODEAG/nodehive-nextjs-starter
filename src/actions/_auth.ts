'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { createServerClient } from '@/lib/nodehive';

/**
 * Login
 * @param {FormData} formData - The form data
 *
 * @returns {Promise}
 */
export async function login(formData: FormData) {
  const cookieStore = cookies();
  const client = createServerClient();

  let error = null;

  const email = formData.get('email');
  const password = formData.get('password');

  try {
    const { data: token, error: tokenError } = await client.getJWTAccessToken(
      email,
      password
    );

    if (!tokenError && tokenError !== undefined) {
      error = tokenError;
    } else {
      cookieStore.set({
        name: 'userToken',
        value: token,
        httpOnly: true,
        sameSite: 'strict',
        secure: true,
        path: '/',
      });
    }
  } catch (e) {
    console.error(e);
    error = e?.message;
  }

  if (!error) {
    redirect('/');
  }

  return { error };
}

/**
 * Logout
 *
 * @returns {Promise}
 */
export async function logout() {
  const cookieStore = cookies();

  const userToken = cookieStore.get('userToken')?.value;

  if (userToken) {
    cookieStore.delete('userToken');
    redirect('/nodehive/login');
  }
}
