import { cn } from '@/lib/utils';
import MenuEditButton from './menu-edit-button';

export default function MenuWrapper({
  type = 'menu',
  menuId,
  children,
  negative = false,
}) {
  return (
    <div data-nodehive-type="menu" className="relative">
      <MenuEditButton type={type} menuId={menuId} label="Edit menu" />

      {children}
    </div>
  );
}
