import { Fieldset as BaseFieldset } from '@base-ui-components/react/fieldset';
import { cn } from './utils';

export function Fieldset({
  className,
  ...props
}: React.ComponentProps<typeof BaseFieldset.Root>) {
  return (
    <BaseFieldset.Root
      data-slot="fieldset"
      className={cn('flex flex-col gap-4', className)}
      {...props}
    />
  );
}

export function FieldsetLegend({
  className,
  ...props
}: React.ComponentProps<typeof BaseFieldset.Legend>) {
  return (
    <BaseFieldset.Legend
      data-slot="fieldset-legend"
      className={cn(
        'text-base font-semibold text-(--void-text) pb-2 mb-2',
        'border-b border-(--void-border)',
        className
      )}
      {...props}
    />
  );
}

export function FieldsetDescription({
  className,
  ...props
}: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot="fieldset-description"
      className={cn('text-sm text-(--void-muted) -mt-2 mb-2', className)}
      {...props}
    />
  );
}
