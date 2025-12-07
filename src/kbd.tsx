import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './utils';

export const kbdVariants = cva(
  [
    'inline-flex items-center justify-center gap-1 px-1.5 h-5.5 min-w-5.5',
    'rounded border border-(--void-border) font-mono text-xs',
  ],
  {
    variants: {
      variant: {
        default: 'bg-(--void-bg-subtle) text-(--void-text)',
        outline: 'bg-transparent text-(--void-muted)',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export function Kbd({
  variant,
  className,
  ...props
}: React.ComponentProps<'kbd'> & VariantProps<typeof kbdVariants>) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(kbdVariants({ variant, className }))}
      {...props}
    />
  );
}

export function KbdGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="kbd-group"
      className={cn('flex items-center gap-1', className)}
      {...props}
    />
  );
}
