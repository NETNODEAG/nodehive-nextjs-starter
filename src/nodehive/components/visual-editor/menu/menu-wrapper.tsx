import { cn } from '@/lib/utils';

export default function MenuWrapper({
  type = 'menu',
  menuId,
  children,
  negative = false,
}) {
  return (
    <div
      data-nodehive-type="menu"
      className={cn(
        'relative overflow-hidden rounded-lg p-2 ring-2 md:p-2',
        negative ? 'ring-white/90' : 'ring-black/10'
      )}
    >
      <p
        className={cn(
          'mb-2 max-w-2xl text-xs leading-6',
          negative ? 'text-white' : 'text-neutral-500'
        )}
      >
        {type}--{menuId}
      </p>

      {children}
    </div>
  );
}
