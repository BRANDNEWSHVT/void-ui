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
  ...props
}: React.ComponentProps<typeof BaseMenu.Trigger>) {
  return (
    <BaseMenu.Trigger
      data-slot="menu-trigger"
      className={cn(className)}
      {...props}
    />
  );
}

export function MenuContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseMenu.Positioner>) {
  return (
    <BaseMenu.Portal>
      <BaseMenu.Backdrop className="fixed inset-0" />
      <BaseMenu.Positioner sideOffset={8} {...props}>
        <BaseMenu.Popup
          data-slot="menu-content"
          className={cn(
            'origin-(--transform-origin) min-w-44 p-1.5',
            'bg-(--void-surface) border border-(--void-border) rounded-lg',
            'shadow-(--void-shadow-lg)',
            'transition-all duration-150',
            'data-starting-style:scale-95 data-starting-style:opacity-0',
            'data-ending-style:scale-95 data-ending-style:opacity-0',
            className
          )}
        >
          {children}
        </BaseMenu.Popup>
      </BaseMenu.Positioner>
    </BaseMenu.Portal>
  );
}

export interface MenuItemProps
  extends React.ComponentProps<typeof BaseMenu.Item> {
  shortcut?: string;
}

export function MenuItem({
  className,
  children,
  shortcut,
  ...props
}: MenuItemProps) {
  return (
    <BaseMenu.Item
      data-slot="menu-item"
      className={cn(
        'flex cursor-pointer select-none items-center gap-2 rounded-md px-2.5 py-1.5',
        'text-sm text-(--void-text) outline-none',
        'transition-colors duration-100',
        'data-highlighted:bg-(--void-bg-muted)',
        'data-disabled:pointer-events-none data-disabled:opacity-50',
        '[&>svg]:size-4 [&>svg]:shrink-0',
        className
      )}
      {...props}
    >
      {children}
      {shortcut && (
        <span className="text-xs text-(--void-muted) ml-auto">{shortcut}</span>
      )}
    </BaseMenu.Item>
  );
}

export function MenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof BaseMenu.Separator>) {
  return (
    <BaseMenu.Separator
      data-slot="menu-separator"
      className={cn('my-1.5 h-px bg-(--void-border)', className)}
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
        'px-2.5 py-1.5 text-xs font-medium text-(--void-muted)',
        className
      )}
      {...props}
    />
  );
}
