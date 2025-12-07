import { Menu as BaseMenu } from '@base-ui-components/react/menu';
import { cn } from './utils';

export type MenuItem = {
  label: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  separator?: boolean;
};

export function Menu(props: React.ComponentProps<typeof BaseMenu.Root>) {
  return <BaseMenu.Root data-slot="menu" {...props} />;
}

export function MenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseMenu.Trigger>) {
  return (
    <BaseMenu.Trigger
      data-slot="menu-trigger"
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full border border-(--void-border) bg-(--void-bg-subtle) px-4 py-2',
        'font-mono text-sm text-(--void-text) transition-colors',
        'hover:border-(--void-border-hover) hover:bg-(--void-bg-muted) data-[popup-open]:border-(--void-accent)',
        className
      )}
      {...props}
    >
      {children}
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        className="text-(--void-muted)"
      >
        <path
          d="M3 4.5L6 7.5L9 4.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </BaseMenu.Trigger>
  );
}

export function MenuContent({
  className,
  ...props
}: React.ComponentProps<typeof BaseMenu.Popup>) {
  return (
    <BaseMenu.Portal>
      <BaseMenu.Positioner sideOffset={8}>
        <BaseMenu.Popup
          data-slot="menu-content"
          className={cn(
            'min-w-[180px] origin-[var(--transform-origin)] rounded-xl border border-(--void-border) bg-(--void-surface) p-1',
            'shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl',
            'transition-[transform,opacity] data-[ending-style]:scale-95 data-[ending-style]:opacity-0',
            'data-[starting-style]:scale-95 data-[starting-style]:opacity-0',
            className
          )}
          {...props}
        />
      </BaseMenu.Positioner>
    </BaseMenu.Portal>
  );
}

export function MenuItem({
  className,
  ...props
}: React.ComponentProps<typeof BaseMenu.Item>) {
  return (
    <BaseMenu.Item
      data-slot="menu-item"
      className={cn(
        'flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2',
        'font-mono text-sm text-(--void-text) outline-none transition-colors',
        'data-[highlighted]:bg-(--void-bg-muted) data-[highlighted]:text-(--void-accent)',
        className
      )}
      {...props}
    />
  );
}

export function MenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof BaseMenu.Separator>) {
  return (
    <BaseMenu.Separator
      data-slot="menu-separator"
      className={cn('my-1 h-px bg-(--void-border)', className)}
      {...props}
    />
  );
}

export function MenuGroup(props: React.ComponentProps<typeof BaseMenu.Group>) {
  return <BaseMenu.Group data-slot="menu-group" {...props} />;
}

export function MenuGroupLabel({
  className,
  ...props
}: React.ComponentProps<typeof BaseMenu.GroupLabel>) {
  return (
    <BaseMenu.GroupLabel
      data-slot="menu-group-label"
      className={cn(
        'px-3 py-1.5 font-mono text-xs text-(--void-muted)',
        className
      )}
      {...props}
    />
  );
}
