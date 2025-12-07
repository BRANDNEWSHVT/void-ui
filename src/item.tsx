import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './utils';

export const itemVariants = cva(
  'relative flex flex-1 text-left transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-(--void-surface) border border-(--void-border)',
        outline: 'border border-(--void-border)',
        ghost: 'bg-transparent',
        primary: 'bg-(--void-primary)/10 border border-(--void-primary)/20',
        danger: 'bg-red-500/10 border border-red-500/20',
        success: 'bg-emerald-500/10 border border-emerald-500/20',
        warning: 'bg-amber-500/10 border border-amber-500/20',
        info: 'bg-blue-500/10 border border-blue-500/20',
      },
      size: {
        sm: 'p-3 rounded-lg gap-2',
        md: 'p-4 rounded-xl gap-3',
        lg: 'p-5 rounded-xl gap-4',
      },
      direction: {
        row: 'flex-row items-center',
        column: 'flex-col',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      direction: 'row',
    },
  }
);

export function Item({
  className,
  variant,
  size,
  direction,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof itemVariants>) {
  return (
    <div
      data-slot="item"
      className={cn(itemVariants({ variant, size, direction, className }))}
      {...props}
    />
  );
}

export function ItemContent({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="item-content"
      className={cn('flex flex-col items-start gap-1 flex-1', className)}
      {...props}
    />
  );
}

export function ItemTitle({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="item-title"
      className={cn('text-(--void-text) font-medium', className)}
      {...props}
    />
  );
}

export function ItemDescription({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="item-description"
      className={cn('text-(--void-muted) text-sm', className)}
      {...props}
    />
  );
}

export function ItemMedia({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="item-media"
      className={cn(
        'shrink-0 *:[img]:size-10 *:[img]:rounded *:[svg]:size-5',
        className
      )}
      {...props}
    />
  );
}

export function ItemAction({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="item-action"
      className={cn(
        'ml-auto flex items-center gap-2 *:[svg]:size-4',
        className
      )}
      {...props}
    />
  );
}
