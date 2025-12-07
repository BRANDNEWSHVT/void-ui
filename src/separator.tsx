import { Separator as BaseSeparator } from '@base-ui-components/react/separator';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './utils';

export const separatorVariants = cva('bg-(--void-border)', {
  variants: {
    orientation: {
      horizontal: 'w-full h-px',
      vertical: 'w-px min-h-5',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

export function Separator({
  className,
  orientation = 'horizontal',
  ...props
}: React.ComponentProps<typeof BaseSeparator> &
  VariantProps<typeof separatorVariants>) {
  return (
    <BaseSeparator
      data-slot="separator"
      orientation={orientation}
      className={cn(separatorVariants({ orientation, className }))}
      {...props}
    />
  );
}
