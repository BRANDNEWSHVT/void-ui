import { Field as BaseField } from '@base-ui-components/react/field';
import { cn } from './utils';

export function Field({
  className,
  ...props
}: React.ComponentProps<typeof BaseField.Root>) {
  return (
    <BaseField.Root
      data-slot="field"
      className={cn('flex flex-col gap-1.5', className)}
      {...props}
    />
  );
}

export interface FieldLabelProps
  extends React.ComponentProps<typeof BaseField.Label> {
  required?: boolean;
}

export function FieldLabel({
  className,
  required,
  children,
  ...props
}: FieldLabelProps) {
  return (
    <BaseField.Label
      data-slot="field-label"
      className={cn('text-sm font-medium text-(--void-text)', className)}
      {...props}
    >
      {children}
      {required && <span className="text-(--void-danger) ml-0.5">*</span>}
    </BaseField.Label>
  );
}

export function FieldDescription({
  className,
  ...props
}: React.ComponentProps<typeof BaseField.Description>) {
  return (
    <BaseField.Description
      data-slot="field-description"
      className={cn('text-sm text-(--void-muted)', className)}
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
      className={cn('text-sm text-(--void-danger)', className)}
      {...props}
    />
  );
}

export function FieldValidity(
  props: React.ComponentProps<typeof BaseField.Validity>
) {
  return <BaseField.Validity data-slot="field-validity" {...props} />;
}
