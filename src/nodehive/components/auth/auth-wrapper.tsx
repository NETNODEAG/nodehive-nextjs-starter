import { cookies } from 'next/headers';
import { cookieUserToken } from '@/nodehive/client';

interface AuthWrapperProps {
  children: React.ReactNode;
}

export default function AuthWrapper({ children }: AuthWrapperProps) {
  const cookieStore = cookies();

  const userToken = cookieStore.has(cookieUserToken);

  if (userToken) return children;
}
