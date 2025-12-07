import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './utils';

export const cardVariants = cva(
  'text-(--void-text) rounded-xl border border-(--void-border)',
  {
    variants: {
      variant: {
        default: 'bg-(--void-surface)',
        ghost: 'bg-transparent',
      },
    },
    defaultVariants: { variant: 'default' },
  }
);

export function Card({
  variant,
  className,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof cardVariants>) {
  return (
    <div
      data-slot="card"
      className={cn(cardVariants({ variant, className }))}
      {...props}
    />
  );
}

export function CardHeader({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn('p-6 border-b border-(--void-border)', className)}
      {...props}
    />
  );
}

export function CardTitle({ className, ...props }: React.ComponentProps<'h3'>) {
  return (
    <h3
      data-slot="card-title"
      className={cn('text-lg font-semibold leading-none', className)}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot="card-description"
      className={cn('text-(--void-muted) text-sm mt-1', className)}
      {...props}
    />
  );
}

export function CardBody({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div data-slot="card-body" className={cn('p-6', className)} {...props} />
  );
}

export function CardFooter({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        'flex items-center gap-2 p-6 bg-white/5 border-t border-(--void-border) rounded-b-xl',
        className
      )}
      {...props}
    />
  );
}
