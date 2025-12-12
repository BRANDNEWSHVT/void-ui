import { Menu as BaseMenu } from '@base-ui/react/menu';
import { Check, Circle } from '@phosphor-icons/react';
import { cn } from './utils';

export function Dropdown(props: React.ComponentProps<typeof BaseMenu.Root>) {
  return <BaseMenu.Root data-slot="dropdown" {...props} />;
}

export function DropdownTrigger({
  className,
  ...props
}: React.ComponentProps<typeof BaseMenu.Trigger>) {
  return (
    <BaseMenu.Trigger
      data-slot="dropdown-trigger"
      className={cn('cursor-pointer', className)}
      {...props}
    />
  );
}

export function DropdownContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseMenu.Positioner>) {
  return (
    <BaseMenu.Portal>
      <BaseMenu.Backdrop className="fixed inset-0" />
      <BaseMenu.Positioner sideOffset={8} {...props}>
        <BaseMenu.Popup
          data-slot="dropdown-content"
          className={cn(
            'origin-(--transform-origin) min-w-44 p-1.5',
            'bg-(--void-surface) border border-(--void-border) rounded-lg',
            'shadow-(--void-shadow-lg)',
            'transition-all duration-150',
            'data-ending-style:opacity-0 data-ending-style:scale-95',
            'data-starting-style:opacity-0 data-starting-style:scale-95',
            className
          )}
        >
          {children}
        </BaseMenu.Popup>
      </BaseMenu.Positioner>
    </BaseMenu.Portal>
  );
}

const dropdownItemClasses = [
  'flex items-center gap-2.5 py-2 px-2.5 rounded-md cursor-pointer select-none',
  'text-sm text-(--void-text) outline-none transition-colors',
  'data-highlighted:bg-(--void-bg-muted)',
  'data-disabled:opacity-50 data-disabled:cursor-not-allowed',
  '*:[svg]:size-4 *:[svg]:text-(--void-muted) *:[svg]:shrink-0',
];

export function DropdownItem({
  className,
  ...props
}: React.ComponentProps<typeof BaseMenu.Item>) {
  return (
    <BaseMenu.Item
      data-slot="dropdown-item"
      className={cn(dropdownItemClasses, className)}
      {...props}
    />
  );
}

export function DropdownSeparator({
  className,
  ...props
}: React.ComponentProps<typeof BaseMenu.Separator>) {
  return (
    <BaseMenu.Separator
      data-slot="dropdown-separator"
      className={cn('h-px my-1.5 -mx-1.5 bg-(--void-border)', className)}
      {...props}
    />
  );
}

export function DropdownGroup(
  props: React.ComponentProps<typeof BaseMenu.Group>
) {
  return <BaseMenu.Group data-slot="dropdown-group" {...props} />;
}

export function DropdownGroupLabel({
  className,
  ...props
}: React.ComponentProps<typeof BaseMenu.GroupLabel>) {
  return (
    <BaseMenu.GroupLabel
      data-slot="dropdown-group-label"
      className={cn(
        'px-2.5 py-1.5 text-(--void-muted) text-xs font-medium',
        className
      )}
      {...props}
    />
  );
}

export function DropdownCheckboxItem({
  children,
  className,
  ...props
}: React.ComponentProps<typeof BaseMenu.CheckboxItem>) {
  return (
    <BaseMenu.CheckboxItem
      data-slot="dropdown-checkbox-item"
      className={cn(dropdownItemClasses, 'pl-7', className)}
      {...props}
    >
      <BaseMenu.CheckboxItemIndicator className="absolute left-2.5">
        <Check size={14} weight="bold" className="text-(--void-primary)" />
      </BaseMenu.CheckboxItemIndicator>
      {children}
    </BaseMenu.CheckboxItem>
  );
}

export function DropdownRadioGroup(
  props: React.ComponentProps<typeof BaseMenu.RadioGroup>
) {
  return <BaseMenu.RadioGroup data-slot="dropdown-radio-group" {...props} />;
}

export function DropdownRadioItem({
  children,
  className,
  ...props
}: React.ComponentProps<typeof BaseMenu.RadioItem>) {
  return (
    <BaseMenu.RadioItem
      data-slot="dropdown-radio-item"
      className={cn(dropdownItemClasses, 'pl-7', className)}
      {...props}
    >
      <BaseMenu.RadioItemIndicator className="absolute left-2.5">
        <Circle size={8} weight="fill" className="text-(--void-primary)" />
      </BaseMenu.RadioItemIndicator>
      {children}
    </BaseMenu.RadioItem>
  );
}
