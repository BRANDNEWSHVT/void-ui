import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './utils';

export const buttonVariants = cva(
  [
    'relative inline-flex items-center justify-center gap-2 font-medium text-sm',
    'transition-all duration-200 ease-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--void-bg)]',
    'active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        default: [
          'bg-[var(--void-surface)] text-[var(--void-text)]',
          'border border-[var(--void-border)] shadow-[var(--void-shadow-sm)]',
          'hover:bg-[var(--void-bg-muted)] hover:border-[var(--void-border-hover)]',
          'focus-visible:ring-[var(--void-muted)]',
        ],
        primary: [
          'bg-[var(--void-primary)] text-[var(--void-primary-foreground)] font-semibold',
          'shadow-[var(--void-shadow-md)]',
          'hover:bg-[var(--void-primary-hover)] hover:shadow-[var(--void-glow-primary)]',
          'focus-visible:ring-[var(--void-primary)]',
        ],
        secondary: [
          'bg-[var(--void-secondary)] text-[var(--void-secondary-foreground)]',
          'shadow-[var(--void-shadow-sm)]',
          'hover:bg-[var(--void-secondary-hover)]',
          'focus-visible:ring-[var(--void-secondary)]',
        ],
        success: [
          'bg-[var(--void-success)] text-[var(--void-success-foreground)] font-semibold',
          'shadow-[var(--void-shadow-md)]',
          'hover:bg-[var(--void-success-hover)] hover:shadow-[var(--void-glow-success)]',
          'focus-visible:ring-[var(--void-success)]',
        ],
        warning: [
          'bg-[var(--void-warning)] text-[var(--void-warning-foreground)] font-semibold',
          'shadow-[var(--void-shadow-md)]',
          'hover:bg-[var(--void-warning-hover)]',
          'focus-visible:ring-[var(--void-warning)]',
        ],
        danger: [
          'bg-[var(--void-danger)] text-[var(--void-danger-foreground)] font-semibold',
          'shadow-[var(--void-shadow-md)]',
          'hover:bg-[var(--void-danger-hover)] hover:shadow-[var(--void-glow-danger)]',
          'focus-visible:ring-[var(--void-danger)]',
        ],
        ghost: [
          'text-[var(--void-muted)]',
          'hover:bg-[var(--void-bg-muted)] hover:text-[var(--void-text)]',
          'focus-visible:ring-[var(--void-muted)]',
        ],
        outline: [
          'bg-transparent text-[var(--void-primary)]',
          'border border-[var(--void-primary)]/50',
          'hover:bg-[var(--void-primary)]/10 hover:border-[var(--void-primary)]',
          'focus-visible:ring-[var(--void-primary)]',
        ],
        'outline-secondary': [
          'bg-transparent text-[var(--void-text)]',
          'border border-[var(--void-border)]',
          'hover:bg-[var(--void-bg-muted)] hover:border-[var(--void-border-hover)]',
          'focus-visible:ring-[var(--void-muted)]',
        ],
        'outline-danger': [
          'bg-transparent text-[var(--void-danger)]',
          'border border-[var(--void-danger)]/50',
          'hover:bg-[var(--void-danger)]/10 hover:border-[var(--void-danger)]',
          'focus-visible:ring-[var(--void-danger)]',
        ],
      },
      size: {
        xs: 'h-7 px-2.5 text-xs rounded-md',
        sm: 'h-8 px-3 text-sm rounded-md',
        md: 'h-9 px-4 text-sm rounded-lg',
        lg: 'h-11 px-6 text-base rounded-lg',
        icon: 'h-9 w-9 rounded-lg',
        'icon-sm': 'h-7 w-7 rounded-md',
        'icon-lg': 'h-11 w-11 rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
