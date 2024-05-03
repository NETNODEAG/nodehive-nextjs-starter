import { cookies } from 'next/headers';

export default function Page() {
  const cookieStore = cookies();
  const user = cookieStore.get('user')?.value;

  return (
    <section className="space-y-8">
      <h1 className="text-4xl font-bold sm:text-6xl">Account</h1>
    </section>
  );
}
