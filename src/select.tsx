import { Select as BaseSelect } from '@base-ui-components/react/select';
import { CaretDown, Check } from '@phosphor-icons/react';
import { cn } from './utils';

export type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

export function Select(props: React.ComponentProps<typeof BaseSelect.Root>) {
  return <BaseSelect.Root data-slot="select" {...props} />;
}

export interface SelectTriggerProps
  extends React.ComponentProps<typeof BaseSelect.Trigger> {
  placeholder?: string;
}

export function SelectTrigger({
  className,
  placeholder = 'Select...',
  ...props
}: SelectTriggerProps) {
  return (
    <BaseSelect.Trigger
      data-slot="select-trigger"
      className={cn(
        'flex h-10 w-full items-center justify-between rounded-lg px-3',
        'bg-(--void-surface) text-sm text-(--void-text)',
        'border border-(--void-border)',
        'transition-colors duration-150',
        'hover:border-(--void-border-hover)',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--void-primary)/30 focus-visible:border-(--void-primary)',
        'data-popup-open:border-(--void-primary) data-popup-open:ring-2 data-popup-open:ring-(--void-primary)/30',
        'disabled:opacity-50 disabled:pointer-events-none',
        className
      )}
      {...props}
    >
      <BaseSelect.Value aria-placeholder={placeholder} />
      <BaseSelect.Icon className="text-(--void-muted)">
        <CaretDown size={14} />
      </BaseSelect.Icon>
    </BaseSelect.Trigger>
  );
}

export function SelectContent({
  className,
  children,
  side = 'bottom',
  ...props
}: React.ComponentProps<typeof BaseSelect.Positioner>) {
  return (
    <BaseSelect.Portal>
      <BaseSelect.Positioner side={side} sideOffset={8} {...props}>
        <BaseSelect.Popup
          data-slot="select-content"
          className={cn(
            'origin-(--transform-origin) min-w-(--anchor-width) rounded-lg p-1.5',
            'bg-(--void-surface) border border-(--void-border)',
            'shadow-(--void-shadow-lg)',
            'transition-all duration-150',
            'data-starting-style:scale-95 data-starting-style:opacity-0',
            'data-ending-style:scale-95 data-ending-style:opacity-0',
            className
          )}
        >
          {children}
        </BaseSelect.Popup>
      </BaseSelect.Positioner>
    </BaseSelect.Portal>
  );
}

export function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseSelect.Item>) {
  return (
    <BaseSelect.Item
      data-slot="select-item"
      className={cn(
        'relative flex cursor-pointer select-none items-center rounded-md px-2.5 py-1.5 pr-8',
        'text-sm text-(--void-text) outline-none',
        'transition-colors duration-100',
        'data-highlighted:bg-(--void-bg-muted)',
        'data-disabled:pointer-events-none data-disabled:opacity-50',
        className
      )}
      {...props}
    >
      <BaseSelect.ItemText>{children}</BaseSelect.ItemText>
      <BaseSelect.ItemIndicator className="absolute right-2 text-(--void-primary)">
        <Check size={14} weight="bold" />
      </BaseSelect.ItemIndicator>
    </BaseSelect.Item>
  );
}

export function SelectGroup({
  className,
  ...props
}: React.ComponentProps<typeof BaseSelect.Group>) {
  return (
    <BaseSelect.Group
      data-slot="select-group"
      className={cn(className)}
      {...props}
    />
  );
}

export function SelectGroupLabel({
  className,
  ...props
}: React.ComponentProps<typeof BaseSelect.GroupLabel>) {
  return (
    <BaseSelect.GroupLabel
      data-slot="select-group-label"
      className={cn(
        'px-2.5 py-1.5 text-xs font-medium text-(--void-muted)',
        className
      )}
      {...props}
    />
  );
}

export function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="select-separator"
      className={cn('my-1.5 h-px bg-(--void-border)', className)}
      {...props}
    />
  );
}
