import { cookies } from 'next/headers';
import { cookieUserToken } from '@/nodehive/client';

interface AuthWrapperProps {
  children: React.ReactNode;
}

export function AuthWrapper({ children }: AuthWrapperProps) {
  const cookieStore = cookies();

  const userToken = cookieStore.has(cookieUserToken);

  if (userToken) {
    return (
      <div className="rounded-lg outline-primary-700 hover:outline-dashed hover:outline-2 hover:-outline-offset-2">
        {children}
      </div>
    );
  }
}

export function NotLoggedIn({ children }: AuthWrapperProps) {
  const cookieStore = cookies();

  const userToken = cookieStore.has(cookieUserToken);

  if (!userToken) return children;
}
