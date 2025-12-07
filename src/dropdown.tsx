import { Menu as BaseMenu } from '@base-ui-components/react/menu';
import { cn } from './utils';

export function Dropdown(props: React.ComponentProps<typeof BaseMenu.Root>) {
  return <BaseMenu.Root data-slot="dropdown" {...props} />;
}

export function DropdownTrigger(
  props: React.ComponentProps<typeof BaseMenu.Trigger>
) {
  return <BaseMenu.Trigger data-slot="dropdown-trigger" {...props} />;
}

export function DropdownContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseMenu.Positioner>) {
  return (
    <BaseMenu.Portal>
      <BaseMenu.Backdrop className="fixed inset-0" />
      <BaseMenu.Positioner sideOffset={6} {...props}>
        <BaseMenu.Popup
          data-slot="dropdown-content"
          className={cn(
            'origin-(--transform-origin) bg-(--void-surface) border border-(--void-border) rounded-xl',
            'p-1 min-w-40 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl',
            'transition-[transform,opacity] data-ending-style:opacity-0 data-ending-style:scale-90',
            'data-starting-style:opacity-0 data-starting-style:scale-90',
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
  'flex items-center gap-3 py-2 px-3 rounded-lg cursor-pointer select-none',
  'font-mono text-sm text-(--void-text) outline-none transition-colors',
  'data-highlighted:bg-white/10 data-highlighted:text-(--void-accent)',
  '*:[svg]:size-4 *:[svg]:text-(--void-muted)',
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
      className={cn('h-px my-1 bg-(--void-border)', className)}
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
        'px-3 py-1.5 text-(--void-muted) font-mono text-xs uppercase tracking-wider',
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
      className={cn(dropdownItemClasses, 'pl-8 data-checked:pl-3', className)}
      {...props}
    >
      <BaseMenu.CheckboxItemIndicator className="w-4">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-(--void-accent)"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
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
      className={cn(dropdownItemClasses, 'pl-8 data-checked:pl-3', className)}
      {...props}
    >
      <BaseMenu.RadioItemIndicator className="w-4">
        <svg
          width="8"
          height="8"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-(--void-accent)"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
      </BaseMenu.RadioItemIndicator>
      {children}
    </BaseMenu.RadioItem>
  );
}
