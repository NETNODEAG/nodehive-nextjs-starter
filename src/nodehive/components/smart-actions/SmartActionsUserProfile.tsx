import { createServerClient } from '@/nodehive/client';

export default async function SmartActionsUserProfile() {
  const client = createServerClient();

  // const user = client.getUserDetails();
  // console.log('user', user);

  return (
    <span className="block h-[24px] w-[24px] rounded-full bg-white">
      <span className="sr-only">User Profile</span>
    </span>
  );
}
