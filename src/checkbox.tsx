import { Checkbox as BaseCheckbox } from '@base-ui-components/react/checkbox';
import { CheckboxGroup as BaseCheckboxGroup } from '@base-ui-components/react/checkbox-group';
import { cn } from './utils';

export interface CheckboxProps
  extends React.ComponentProps<typeof BaseCheckbox.Root> {
  label?: string;
}

export function Checkbox({ label, className, ...props }: CheckboxProps) {
  return (
    <label className="flex cursor-pointer items-center gap-3">
      <BaseCheckbox.Root
        data-slot="checkbox"
        className={cn(
          'flex h-5 w-5 items-center justify-center rounded border border-[var(--void-border)] bg-(--void-bg-subtle)',
          'transition-colors hover:border-[var(--void-border-hover)]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--void-accent)]',
          'data-[checked]:border-[var(--void-accent)] data-[checked]:bg-[var(--void-accent)]',
          'disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      >
        <BaseCheckbox.Indicator
          className="text-white data-[unchecked]:hidden"
          render={(indicatorProps, state) => (
            <span {...indicatorProps}>
              {state.indeterminate ? (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              ) : (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 3L4.5 8.5L2 6" />
                </svg>
              )}
            </span>
          )}
        />
      </BaseCheckbox.Root>
      {label && (
        <span className="font-mono text-sm text-[var(--void-text)]">
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
      className={cn('flex flex-col gap-3', className)}
      {...props}
    />
  );
}
