import { Checkbox as BaseCheckbox } from '@base-ui-components/react/checkbox';
import { CheckboxGroup as BaseCheckboxGroup } from '@base-ui-components/react/checkbox-group';
import { Check, Minus } from '@phosphor-icons/react';
import { cn } from './utils';

export interface CheckboxProps
  extends React.ComponentProps<typeof BaseCheckbox.Root> {
  label?: string;
}

export function Checkbox({ label, className, id, ...props }: CheckboxProps) {
  return (
    <label
      htmlFor={id}
      className="group flex cursor-pointer items-center gap-2.5 select-none"
    >
      <BaseCheckbox.Root
        id={id}
        data-slot="checkbox"
        className={cn(
          'flex size-[18px] items-center justify-center rounded',
          'border border-(--void-border) bg-(--void-surface)',
          'transition-all duration-150',
          'hover:border-(--void-border-hover)',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--void-primary)/30',
          'data-checked:border-(--void-primary) data-checked:bg-(--void-primary)',
          'data-indeterminate:border-(--void-primary) data-indeterminate:bg-(--void-primary)',
          'disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      >
        <BaseCheckbox.Indicator className="text-(--void-primary-foreground) data-unchecked:hidden">
          <Check size={12} weight="bold" />
        </BaseCheckbox.Indicator>
        <BaseCheckbox.Indicator className="text-(--void-primary-foreground) data-unchecked:hidden data-checked:hidden">
          <Minus size={12} weight="bold" />
        </BaseCheckbox.Indicator>
      </BaseCheckbox.Root>
      {label && (
        <span className="text-sm text-(--void-text) group-has-disabled:opacity-50">
          {label}
        </span>
      )}
    </label>
  );
}

export function CheckboxGroup({
  className,
  ...props
}: React.ComponentProps<typeof BaseCheckboxGroup>) {
  return (
    <BaseCheckboxGroup
      data-slot="checkbox-group"
      className={cn('flex flex-col gap-2.5', className)}
      {...props}
    />
  );
}
