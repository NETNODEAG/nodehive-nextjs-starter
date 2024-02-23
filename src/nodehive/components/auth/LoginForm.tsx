'use client';

import { login } from '@/actions/_auth';
import { getUser, saveUserDetails } from '@/actions/_user';

export default function LoginForm() {
  return (
    <form
      action={async (formData: FormData) => {
        await login(formData);
        const { user } = await getUser();

        await saveUserDetails(user);
      }}
      className="mx-auto max-w-2xl space-y-8"
    >
      <div className="flex flex-col">
        <label htmlFor="email" className="text-sm font-bold">
          Email
        </label>
        <input type="text" name="email" id="email" className="rounded-md" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="text-sm font-bold">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="rounded-md"
        />
      </div>
      <button type="submit" className="btn-primary">
        Login
      </button>
    </form>
  );
}
