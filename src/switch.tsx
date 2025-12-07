import { Switch as BaseSwitch } from '@base-ui-components/react/switch';
import { cn } from './utils';

export interface SwitchProps
  extends React.ComponentProps<typeof BaseSwitch.Root> {
  label?: string;
}

export function Switch({ label, className, ...props }: SwitchProps) {
  return (
    <label className="flex cursor-pointer items-center gap-3">
      <BaseSwitch.Root
        data-slot="switch"
        className={cn(
          'relative h-6 w-11 rounded-full border border-[var(--void-border)] bg-(--void-bg-subtle)',
          'transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--void-primary)]',
          'data-[checked]:border-[var(--void-primary)] data-[checked]:bg-[var(--void-primary)]',
          'disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      >
        <BaseSwitch.Thumb
          data-slot="switch-thumb"
          className={cn(
            'block h-5 w-5 translate-x-0 rounded-full bg-[var(--void-text)] shadow-lg',
            'transition-transform data-[checked]:translate-x-5'
          )}
        />
      </BaseSwitch.Root>
      {label && (
        <span className="font-mono text-sm text-[var(--void-text)]">
          {label}
        </span>
      )}
    </label>
  );
}
