import { Select as BaseSelect } from '@base-ui-components/react/select';
import { CaretDown, Check } from '@phosphor-icons/react';
import { cn } from './utils';

export type SelectOption = {
  value: string;
  label: string;
};

export interface SelectProps
  extends React.ComponentProps<typeof BaseSelect.Root> {
  label?: string;
  options: SelectOption[];
  placeholder?: string;
}

export function Select({
  label,
  options,
  placeholder = 'Select an option',
  ...props
}: SelectProps) {
  return (
    <div className="space-y-1.5">
      {label && (
        <label className="block text-sm font-medium text-(--void-text)">
          {label}
        </label>
      )}
      <BaseSelect.Root {...props}>
        <SelectTrigger placeholder={placeholder} />
        <SelectContent options={options} />
      </BaseSelect.Root>
    </div>
  );
}

function SelectTrigger({ placeholder }: { placeholder: string }) {
  return (
    <BaseSelect.Trigger
      data-slot="select-trigger"
      className={cn(
        'flex h-10 w-full items-center justify-between rounded-lg px-3 py-2',
        'bg-(--void-surface) text-sm text-(--void-text)',
        'border border-(--void-border) shadow-[var(--void-shadow-sm)]',
        'transition-all duration-200',
        'hover:border-(--void-border-hover)',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--void-primary)/20 focus-visible:border-(--void-primary)',
        'data-popup-open:border-(--void-primary) data-popup-open:ring-2 data-popup-open:ring-(--void-primary)/20'
      )}
    >
      <BaseSelect.Value>
        {(value) =>
          value ?? <span className="text-(--void-muted)">{placeholder}</span>
        }
      </BaseSelect.Value>
      <BaseSelect.Icon className="text-(--void-muted)">
        <CaretDown size={14} weight="bold" />
      </BaseSelect.Icon>
    </BaseSelect.Trigger>
  );
}

function SelectContent({ options }: { options: SelectOption[] }) {
  return (
    <BaseSelect.Portal>
      <BaseSelect.Positioner sideOffset={8}>
        <BaseSelect.Popup
          data-slot="select-content"
          className={cn(
            'origin-(--transform-origin) rounded-lg p-1',
            'bg-(--void-surface) border border-(--void-border)',
            'shadow-[var(--void-shadow-lg)]',
            'transition-all duration-200',
            'data-ending-style:scale-95 data-ending-style:opacity-0',
            'data-starting-style:scale-95 data-starting-style:opacity-0'
          )}
        >
          {options.map((option) => (
            <BaseSelect.Item
              key={option.value}
              value={option.value}
              className={cn(
                'relative flex cursor-pointer select-none items-center rounded-md px-2 py-1.5',
                'text-sm text-(--void-text) outline-none',
                'transition-colors duration-150',
                'data-highlighted:bg-(--void-bg-muted) data-highlighted:text-(--void-text)'
              )}
            >
              <BaseSelect.ItemText>{option.label}</BaseSelect.ItemText>
              <BaseSelect.ItemIndicator className="ml-auto text-(--void-primary)">
                <Check size={14} weight="bold" />
              </BaseSelect.ItemIndicator>
            </BaseSelect.Item>
          ))}
        </BaseSelect.Popup>
      </BaseSelect.Positioner>
    </BaseSelect.Portal>
  );
}

// Export individual parts for composition
export const SelectRoot = BaseSelect.Root;
export const SelectValue = BaseSelect.Value;
export const SelectIcon = BaseSelect.Icon;
export const SelectPortal = BaseSelect.Portal;
export const SelectPositioner = BaseSelect.Positioner;
export const SelectPopup = BaseSelect.Popup;
export const SelectItem = BaseSelect.Item;
export const SelectItemText = BaseSelect.ItemText;
export const SelectItemIndicator = BaseSelect.ItemIndicator;
