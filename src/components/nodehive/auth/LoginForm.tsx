import { login } from '@/actions/_auth';

export default function LoginForm() {
  return (
    <form action={login} className="mx-auto max-w-2xl space-y-8">
      <div className="flex flex-col">
        <label htmlFor="email" className="text-sm font-bold">
          Email
        </label>
        <input type="text" name="email" id="email" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="text-sm font-bold">
          Password
        </label>
        <input type="password" name="password" id="password" />
      </div>
      <button type="submit" className="btn-primary">
        Login
      </button>
    </form>
  );
}
