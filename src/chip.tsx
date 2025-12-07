import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './utils';

export const chipVariants = cva(
  'inline-flex items-center gap-1.5 font-mono text-sm border',
  {
    variants: {
      variant: {
        default:
          'bg-(--void-bg-subtle) border-(--void-border) text-(--void-text)',
        primary: 'bg-(--void-primary) border-(--void-primary) text-white',
        secondary:
          'bg-(--void-bg-muted) border-(--void-border) text-(--void-text)',
        success: 'bg-emerald-500 border-emerald-500 text-white',
        warning: 'bg-amber-500 border-amber-500 text-black',
        danger: 'bg-red-500 border-red-500 text-white',
        info: 'bg-blue-500 border-blue-500 text-white',
      },
      size: {
        sm: 'px-2 h-6 rounded text-xs *:[svg]:size-3',
        md: 'px-2.5 h-7 rounded-lg *:[svg]:size-3.5',
        lg: 'px-3 h-8 rounded-lg *:[svg]:size-4',
      },
      pill: {
        true: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export function Chip({
  variant,
  size,
  pill,
  className,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof chipVariants>) {
  return (
    <div
      data-slot="chip"
      className={cn(chipVariants({ variant, size, pill, className }))}
      {...props}
    />
  );
}

export function ChipButton({
  className,
  ...props
}: React.ComponentProps<'button'>) {
  return (
    <button
      data-slot="chip-button"
      className={cn(
        'opacity-60 hover:opacity-100 transition-opacity cursor-pointer',
        className
      )}
      {...props}
    />
  );
}
