import { Field } from '@base-ui-components/react/field';
import { Input as BaseInput } from '@base-ui-components/react/input';
import { cn } from './utils';

export interface InputProps extends React.ComponentProps<typeof BaseInput> {
  label?: string;
  description?: string;
  error?: string;
}

export function Input({
  label,
  description,
  error,
  className,
  ...props
}: InputProps) {
  return (
    <Field.Root>
      {label && (
        <Field.Label className="mb-2 block font-mono text-xs uppercase tracking-wider text-[var(--void-muted)]">
          {label}
        </Field.Label>
      )}
      <BaseInput
        data-slot="input"
        className={cn(
          'w-full rounded-lg border border-[var(--void-border)] bg-white/5 px-4 py-3',
          'font-mono text-sm text-[var(--void-text)] placeholder:text-[var(--void-muted)]',
          'transition-colors focus:border-[var(--void-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--void-accent)]',
          'data-[invalid]:border-[var(--void-accent)] data-[invalid]:ring-1 data-[invalid]:ring-[var(--void-accent)]',
          'disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      />
      {description && (
        <Field.Description className="mt-2 font-mono text-xs text-[var(--void-muted)]">
          {description}
        </Field.Description>
      )}
      {error && (
        <Field.Error className="mt-2 font-mono text-xs text-[var(--void-accent)]">
          {error}
        </Field.Error>
      )}
    </Field.Root>
  );
}

export { Field };
