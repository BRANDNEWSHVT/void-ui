import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './utils';

export const badgeVariants = cva(
  'inline-flex items-center justify-center gap-1 font-medium whitespace-nowrap',
  {
    variants: {
      variant: {
        default:
          'bg-(--void-bg-muted) text-(--void-text) border border-(--void-border)',
        primary:
          'bg-[var(--void-primary)] text-[var(--void-primary-foreground)]',
        'primary-subtle':
          'bg-[var(--void-primary)]/10 text-[var(--void-primary)] border border-[var(--void-primary)]/20',
        secondary:
          'bg-[var(--void-secondary)] text-[var(--void-secondary-foreground)]',
        'secondary-subtle':
          'bg-[var(--void-bg-muted)] text-[var(--void-muted)] border border-(--void-border)',
        success:
          'bg-[var(--void-success)] text-[var(--void-success-foreground)]',
        'success-subtle':
          'bg-[var(--void-success)]/10 text-[var(--void-success)] border border-[var(--void-success)]/20',
        warning:
          'bg-[var(--void-warning)] text-[var(--void-warning-foreground)]',
        'warning-subtle':
          'bg-[var(--void-warning)]/10 text-[var(--void-warning)] border border-[var(--void-warning)]/20',
        danger: 'bg-[var(--void-danger)] text-[var(--void-danger-foreground)]',
        'danger-subtle':
          'bg-[var(--void-danger)]/10 text-[var(--void-danger)] border border-[var(--void-danger)]/20',
        info: 'bg-[var(--void-info)] text-[var(--void-info-foreground)]',
        'info-subtle':
          'bg-[var(--void-info)]/10 text-[var(--void-info)] border border-[var(--void-info)]/20',
        outline:
          'bg-transparent text-(--void-text) border border-(--void-border)',
      },
      size: {
        sm: 'h-5 px-1.5 text-[10px] rounded',
        md: 'h-6 px-2 text-xs rounded-md',
        lg: 'h-7 px-2.5 text-sm rounded-md',
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
