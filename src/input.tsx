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
    <Field.Root className="space-y-1.5">
      {label && (
        <Field.Label className="block text-sm font-medium text-[var(--void-text)]">
          {label}
        </Field.Label>
      )}
      <BaseInput
        data-slot="input"
        className={cn(
          'flex h-10 w-full rounded-lg px-3 py-2',
          'bg-[var(--void-surface)] text-sm text-[var(--void-text)]',
          'border border-[var(--void-border)] shadow-[var(--void-shadow-sm)]',
          'placeholder:text-[var(--void-muted)]',
          'transition-all duration-200',
          'hover:border-[var(--void-border-hover)]',
          'focus:border-[var(--void-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--void-primary)]/20',
          'data-invalid:border-[var(--void-danger)] data-invalid:ring-2 data-invalid:ring-[var(--void-danger)]/20',
          'disabled:pointer-events-none disabled:opacity-50 disabled:bg-[var(--void-bg-muted)]',
          className
        )}
        {...props}
      />
      {description && (
        <Field.Description className="text-sm text-[var(--void-muted)]">
          {description}
        </Field.Description>
      )}
      {error && (
        <Field.Error className="text-sm text-[var(--void-danger)]">
          {error}
        </Field.Error>
      )}
    </Field.Root>
  );
}

export { Field };
