import LogoutForm from './auth/LogoutForm';
import SmartActionsRefreshPage from './smart-actions/SmartActionsRefreshPage';
import SmartActionsVisualEditor from './smart-actions/SmartActionsVisualEditor';

export default function SmartActionsButton() {
  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2">
      <div className="rounded-full bg-neutral-900 p-2 text-sm font-bold text-white shadow-[0_8px_40px_rgba(0,0,0,0.25)] shadow-neutral-900/30 backdrop-blur-2xl ">
        <ul className="flex items-center gap-2">
          <li>
            <span className="text-xs uppercase">NodeHive</span>
          </li>
          <li>
            <SmartActionsVisualEditor />
          </li>
          <li>
            <SmartActionsRefreshPage />
          </li>
          <li>
            <LogoutForm />
          </li>
        </ul>
      </div>
    </div>
  );
}
