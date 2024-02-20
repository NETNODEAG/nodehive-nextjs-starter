import { cookies } from 'next/headers';

interface AuthWrapperProps {
  children: React.ReactNode;
}

export default function AuthWrapper({ children }: AuthWrapperProps) {
  const cookieStore = cookies();

  const userToken = cookieStore.get('userToken')?.value;

  if (userToken) return children;
}
