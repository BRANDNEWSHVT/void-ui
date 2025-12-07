import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './utils';

export const badgeVariants = cva(
  'inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider',
  {
    variants: {
      variant: {
        default: 'bg-(--void-bg-muted) text-(--void-text)',
        primary: 'bg-(--void-accent) text-white',
        'primary-subtle': 'bg-(--void-accent)/15 text-(--void-accent)',
        'primary-outline': 'border border-(--void-accent) text-(--void-accent)',
        secondary: 'bg-(--void-bg-muted) text-(--void-text)',
        'secondary-outline': 'border border-(--void-border) text-(--void-text)',
        success: 'bg-emerald-500 text-white',
        'success-subtle': 'bg-emerald-500/15 text-emerald-400',
        'success-outline': 'border border-emerald-500 text-emerald-400',
        warning: 'bg-amber-500 text-black',
        'warning-subtle': 'bg-amber-500/15 text-amber-400',
        'warning-outline': 'border border-amber-500 text-amber-400',
        danger: 'bg-red-500 text-white',
        'danger-subtle': 'bg-red-500/15 text-red-400',
        'danger-outline': 'border border-red-500 text-red-400',
        info: 'bg-blue-500 text-white',
        'info-subtle': 'bg-blue-500/15 text-blue-400',
        'info-outline': 'border border-blue-500 text-blue-400',
      },
      size: {
        sm: 'px-1.5 h-5 rounded text-[10px]',
        md: 'px-2 h-6 rounded',
        lg: 'px-2.5 h-7 rounded',
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

export function Badge({
  variant,
  size,
  pill,
  className,
  ...props
}: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants>) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant, size, pill, className }))}
      {...props}
    />
  );
}
