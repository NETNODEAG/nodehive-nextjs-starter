import LogoutForm from '@/nodehive/components/auth/LogoutForm';
import SmartActionsRefreshPage from '@/nodehive/components/smart-actions/SmartActionsRefreshPage';
import SmartActionsUserProfile from '@/nodehive/components/smart-actions/SmartActionsUserProfile';
import SmartActionsVisualEditor from '@/nodehive/components/smart-actions/SmartActionsVisualEditor';

export default function SmartActionsButton() {
  return (
    <div className="fixed bottom-10 left-1/2 z-50 -translate-x-1/2">
      <div className="rounded-full bg-neutral-900 p-2 text-sm font-bold text-white shadow-[0_8px_40px_rgba(0,0,0,0.25)] shadow-white/20 backdrop-blur-2xl ">
        <ul className="flex items-center gap-2">
          <li>
            <SmartActionsUserProfile />
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
