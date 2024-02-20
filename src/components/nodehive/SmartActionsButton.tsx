import LogoutForm from './auth/LogoutForm';

export default function SmartActionsButton() {
  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2">
      <div className="rounded-full bg-neutral-900 p-2 text-sm font-bold text-white shadow-sm shadow-neutral-700">
        <ul className="flex items-center gap-4">
          <li>
            <span className="text-xs uppercase">NodeHive</span>
          </li>
          <li>
            <LogoutForm />
          </li>
        </ul>
      </div>
    </div>
  );
}
