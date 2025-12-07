import { Switch as BaseSwitch } from '@base-ui-components/react/switch';
import { cn } from './utils';

export interface SwitchProps
  extends React.ComponentProps<typeof BaseSwitch.Root> {
  label?: string;
  description?: string;
}

export function Switch({
  label,
  description,
  className,
  id,
  ...props
}: SwitchProps) {
  const switchElement = (
    <BaseSwitch.Root
      id={id}
      data-slot="switch"
      className={cn(
        'group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full',
        'border border-(--void-border) bg-(--void-bg-muted)',
        'transition-colors duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--void-primary)/30',
        'data-checked:border-(--void-primary) data-checked:bg-(--void-primary)',
        'data-disabled:cursor-not-allowed data-disabled:opacity-50',
        className
      )}
      {...props}
    >
      <BaseSwitch.Thumb
        data-slot="switch-thumb"
        className={cn(
          'pointer-events-none block size-5 rounded-full',
          'bg-white shadow-md',
          'translate-x-0.5 transition-transform duration-200',
          'group-data-checked:translate-x-[22px]'
        )}
        style={{ marginTop: '1px' }}
      />
    </BaseSwitch.Root>
  );

  if (!label && !description) {
    return switchElement;
  }

  return (
    <div className="flex items-start gap-3">
      <div className="shrink-0">{switchElement}</div>
      <label htmlFor={id} className="flex cursor-pointer flex-col select-none">
        {label && (
          <span className="text-sm font-medium text-(--void-text)">
            {label}
          </span>
        )}
        {description && (
          <span className="text-sm text-(--void-muted)">{description}</span>
        )}
      </label>
    </div>
  );
}
