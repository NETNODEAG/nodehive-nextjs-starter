import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import LoginForm from '@/components/nodehive/auth/LoginForm';

export default function Page() {
  const cookieStore = cookies();
  const userToken = cookieStore.get('userToken')?.value;

  if (userToken) {
    redirect('/');
  }

  return (
    <section className="space-y-8">
      <h1 className="text-4xl font-bold sm:text-6xl">Login</h1>

      <LoginForm />
    </section>
  );
}
