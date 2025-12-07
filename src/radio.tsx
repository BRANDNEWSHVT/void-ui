import { Radio as BaseRadio } from '@base-ui-components/react/radio';
import { RadioGroup as BaseRadioGroup } from '@base-ui-components/react/radio-group';
import { cn } from './utils';

export function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof BaseRadioGroup>) {
  return (
    <BaseRadioGroup
      data-slot="radio-group"
      className={cn('flex flex-col gap-2.5', className)}
      {...props}
    />
  );
}

export function Radio({
  className,
  ...props
}: React.ComponentProps<typeof BaseRadio.Root>) {
  return (
    <BaseRadio.Root
      data-slot="radio"
      className={cn(
        'size-[18px] flex items-center justify-center rounded-full',
        'border border-(--void-border) bg-(--void-surface)',
        'transition-all duration-150',
        'hover:border-(--void-border-hover)',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--void-primary)/30',
        'data-checked:border-(--void-primary) data-checked:bg-(--void-primary)',
        'disabled:opacity-50 disabled:pointer-events-none',
        className
      )}
      {...props}
    >
      <BaseRadio.Indicator className="size-2 rounded-full bg-(--void-primary-foreground)" />
    </BaseRadio.Root>
  );
}

export interface RadioItemProps
  extends React.ComponentProps<typeof BaseRadio.Root> {
  label?: string;
  description?: string;
}

export function RadioItem({
  label,
  description,
  className,
  id,
  ...props
}: RadioItemProps) {
  return (
    <label
      htmlFor={id}
      className="group flex cursor-pointer items-start gap-2.5 select-none"
    >
      <Radio id={id} className={cn('mt-0.5', className)} {...props} />
      {(label || description) && (
        <div className="flex flex-col">
          {label && (
            <span className="text-sm text-(--void-text) group-has-disabled:opacity-50">
              {label}
            </span>
          )}
          {description && (
            <span className="text-sm text-(--void-muted) group-has-disabled:opacity-50">
              {description}
            </span>
          )}
        </div>
      )}
    </label>
  );
}
