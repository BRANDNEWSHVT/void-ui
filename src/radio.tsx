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
      className={cn('flex flex-col gap-3', className)}
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
        'size-4 flex items-center justify-center rounded-full border border-(--void-border) bg-(--void-bg-subtle)',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-(--void-accent)',
        'data-checked:border-(--void-accent) data-checked:bg-(--void-accent)',
        'transition-colors hover:border-(--void-border-hover)',
        'disabled:opacity-50 disabled:pointer-events-none',
        className
      )}
      {...props}
    >
      <BaseRadio.Indicator className="size-2 rounded-full bg-white" />
    </BaseRadio.Root>
  );
}

export interface RadioItemProps
  extends React.ComponentProps<typeof BaseRadio.Root> {
  label?: string;
}

export function RadioItem({ label, className, ...props }: RadioItemProps) {
  return (
    <label className="flex cursor-pointer items-center gap-3">
      <Radio className={className} {...props} />
      {label && (
        <span className="font-mono text-sm text-(--void-text)">{label}</span>
      )}
    </label>
  );
}
