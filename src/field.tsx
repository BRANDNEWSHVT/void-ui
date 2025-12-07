import { Field as BaseField } from '@base-ui-components/react/field';
import { cn } from './utils';

export function Field({
  className,
  ...props
}: React.ComponentProps<typeof BaseField.Root>) {
  return (
    <BaseField.Root
      data-slot="field"
      className={cn('flex flex-col gap-2', className)}
      {...props}
    />
  );
}

export function FieldLabel({
  className,
  ...props
}: React.ComponentProps<typeof BaseField.Label>) {
  return (
    <BaseField.Label
      data-slot="field-label"
      className={cn(
        'font-mono text-xs uppercase tracking-wider text-(--void-muted)',
        className
      )}
      {...props}
    />
  );
}

export function FieldDescription({
  className,
  ...props
}: React.ComponentProps<typeof BaseField.Description>) {
  return (
    <BaseField.Description
      data-slot="field-description"
      className={cn('text-(--void-muted) text-sm', className)}
      {...props}
    />
  );
}

export function FieldError({
  className,
  ...props
}: React.ComponentProps<typeof BaseField.Error>) {
  return (
    <BaseField.Error
      data-slot="field-error"
      className={cn('text-(--void-danger) text-sm', className)}
      {...props}
    />
  );
}

export function FieldValidity(
  props: React.ComponentProps<typeof BaseField.Validity>
) {
  return <BaseField.Validity data-slot="field-validity" {...props} />;
}
