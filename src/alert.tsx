import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './utils';

export const alertVariants = cva(
  [
    'w-full px-4 py-3 rounded-lg font-mono text-sm',
    'flex items-center gap-3',
    '*:[svg]:size-4 *:[svg]:shrink-0',
  ],
  {
    variants: {
      variant: {
        default: 'bg-white/5 text-(--void-text) border border-(--void-border)',
        danger:
          'bg-(--void-accent)/10 text-(--void-accent) border border-(--void-accent)/30',
        success:
          'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30',
        warning: 'bg-amber-500/10 text-amber-400 border border-amber-500/30',
        info: 'bg-blue-500/10 text-blue-400 border border-blue-500/30',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant, className }))}
      {...props}
    />
  );
}

export function AlertTitle({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-title"
      className={cn('font-medium', className)}
      {...props}
    />
  );
}

export function AlertDescription({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-description"
      className={cn('text-(--void-muted) font-normal', className)}
      {...props}
    />
  );
}
