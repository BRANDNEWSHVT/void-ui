import { Select as BaseSelect } from '@base-ui-components/react/select';
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
    <div>
      {label && (
        <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-(--void-muted)">
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
        'flex w-full items-center justify-between rounded-lg border border-(--void-border) bg-white/5 px-4 py-3',
        'font-mono text-sm text-(--void-text) transition-colors',
        'hover:border-(--void-border-hover) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--void-accent)',
        'data-[popup-open]:border-(--void-accent)'
      )}
    >
      <BaseSelect.Value>
        {(value) =>
          value ?? <span className="text-(--void-muted)">{placeholder}</span>
        }
      </BaseSelect.Value>
      <BaseSelect.Icon className="text-(--void-muted)">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
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
            'origin-[var(--transform-origin)] rounded-lg border border-(--void-border) bg-(--void-surface) p-1',
            'shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl',
            'transition-[transform,opacity] data-[ending-style]:scale-95 data-[ending-style]:opacity-0',
            'data-[starting-style]:scale-95 data-[starting-style]:opacity-0'
          )}
        >
          {options.map((option) => (
            <BaseSelect.Item
              key={option.value}
              value={option.value}
              className={cn(
                'flex cursor-pointer items-center rounded-md px-3 py-2 font-mono text-sm text-(--void-text) outline-none',
                'transition-colors data-[highlighted]:bg-white/10 data-[highlighted]:text-(--void-accent)'
              )}
            >
              <BaseSelect.ItemText>{option.label}</BaseSelect.ItemText>
              <BaseSelect.ItemIndicator className="ml-auto text-(--void-accent)">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M10 3L4.5 8.5L2 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
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
