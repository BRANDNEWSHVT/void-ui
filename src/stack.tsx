import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './utils';

export const stackVariants = cva('flex', {
  variants: {
    direction: {
      row: 'flex-row',
      column: 'flex-col',
    },
    spacing: {
      none: 'gap-0',
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
      baseline: 'items-baseline',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },
    wrap: {
      true: 'flex-wrap',
      false: 'flex-nowrap',
    },
  },
  defaultVariants: {
    direction: 'column',
    spacing: 'md',
    align: 'stretch',
    justify: 'start',
    wrap: false,
  },
});

export interface StackProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof stackVariants> {}

export function Stack({
  direction,
  spacing,
  align,
  justify,
  wrap,
  className,
  ...props
}: StackProps) {
  return (
    <div
      data-slot="stack"
      className={cn(
        stackVariants({ direction, spacing, align, justify, wrap }),
        className
      )}
      {...props}
    />
  );
}
