import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './utils';

export const iconBoxVariants = cva(
  'flex items-center justify-center shrink-0 *:[svg]:size-4',
  {
    variants: {
      variant: {
        default: 'bg-(--void-bg-muted) text-(--void-text)',
        primary: 'bg-(--void-primary) text-white',
        'primary-subtle': 'bg-(--void-primary)/10 text-(--void-primary)',
        secondary: 'bg-(--void-bg-muted) text-(--void-text)',
        success: 'bg-emerald-500 text-white',
        'success-subtle': 'bg-emerald-500/10 text-emerald-400',
        warning: 'bg-amber-500 text-black',
        'warning-subtle': 'bg-amber-500/10 text-amber-400',
        danger: 'bg-red-500 text-white',
        'danger-subtle': 'bg-red-500/10 text-red-400',
        info: 'bg-blue-500 text-white',
        'info-subtle': 'bg-blue-500/10 text-blue-400',
      },
      size: {
        sm: 'size-7 rounded *:[svg]:size-3.5',
        md: 'size-9 rounded-lg *:[svg]:size-4',
        lg: 'size-12 rounded-xl *:[svg]:size-5',
      },
      circle: {
        true: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export function IconBox({
  variant,
  size,
  circle,
  className,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof iconBoxVariants>) {
  return (
    <div
      data-slot="icon-box"
      className={cn(iconBoxVariants({ variant, size, circle, className }))}
      {...props}
    />
  );
}
