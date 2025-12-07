import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './utils';

export const cardVariants = cva(
  [
    'relative text-(--void-text) rounded-xl',
    'border border-(--void-border)',
    'transition-all duration-200',
  ],
  {
    variants: {
      variant: {
        default: 'bg-(--void-surface) shadow-[var(--void-shadow-md)]',
        elevated: 'bg-(--void-surface) shadow-[var(--void-shadow-lg)]',
        glass: [
          'bg-[var(--void-glass)] backdrop-blur-xl',
          'border-[var(--void-glass-border)]',
          'shadow-[var(--void-shadow-lg)]',
        ],
        ghost: 'bg-transparent border-transparent',
        outline: 'bg-transparent',
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

export function CardContent({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div data-slot="card-content" className={cn('p-6', className)} {...props} />
  );
}

export function CardBody(props: React.ComponentProps<'div'>) {
  return <CardContent data-slot="card-body" {...props} />;
}

export function CardFooter({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        'flex items-center gap-2 p-6 bg-(--void-bg-subtle) border-t border-(--void-border) rounded-b-xl',
        className
      )}
      {...props}
    />
  );
}
