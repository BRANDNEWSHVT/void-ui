import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './utils';

export const kbdVariants = cva(
  [
    'inline-flex items-center justify-center font-mono',
    'rounded border border-(--void-border)',
    'shadow-[0_1px_0_1px_rgba(0,0,0,0.3)]',
  ],
  {
    variants: {
      variant: {
        default: 'bg-(--void-surface) text-(--void-text)',
        subtle:
          'bg-(--void-bg-muted) text-(--void-muted) border-transparent shadow-none',
      },
      size: {
        sm: 'px-1 h-5 min-w-5 text-[10px]',
        md: 'px-1.5 h-6 min-w-6 text-xs',
        lg: 'px-2 h-7 min-w-7 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface KbdProps
  extends React.ComponentProps<'kbd'>,
    VariantProps<typeof kbdVariants> {}

export function Kbd({ variant, size, className, ...props }: KbdProps) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(kbdVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export function KbdGroup({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="kbd-group"
      className={cn('inline-flex items-center gap-1', className)}
      {...props}
    />
  );
}
