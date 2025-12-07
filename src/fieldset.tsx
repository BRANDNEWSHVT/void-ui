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
      className={cn('font-semibold text-(--void-text) text-lg mb-2', className)}
      {...props}
    />
  );
}
