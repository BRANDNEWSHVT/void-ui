import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './utils';

export const spinnerVariants = cva('animate-spin', {
  variants: {
    size: {
      xs: 'size-3',
      sm: 'size-4',
      md: 'size-5',
      lg: 'size-6',
      xl: 'size-8',
    },
    variant: {
      default: 'text-(--void-muted)',
      primary: 'text-(--void-primary)',
      success: 'text-(--void-success)',
      warning: 'text-(--void-warning)',
      danger: 'text-(--void-danger)',
      info: 'text-(--void-info)',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'default',
  },
});

export interface SpinnerProps
  extends Omit<React.ComponentProps<'svg'>, 'children'>,
    VariantProps<typeof spinnerVariants> {}

export function Spinner({ size, variant, className, ...props }: SpinnerProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      data-slot="spinner"
      aria-label="Loading"
      className={cn(spinnerVariants({ size, variant }), className)}
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}
