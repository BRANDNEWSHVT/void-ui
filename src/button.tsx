import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './utils';

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center font-mono text-sm uppercase tracking-wider',
    'transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--void-accent)]',
    'focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--void-bg)]',
    'active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-[var(--void-accent)] text-white',
          'hover:bg-[var(--void-accent)]/90 hover:shadow-[0_0_20px_rgba(255,42,0,0.4)]',
          'disabled:hover:shadow-none',
        ],
        secondary: [
          'border border-[var(--void-border)] bg-(--void-bg-subtle) text-[var(--void-text)] backdrop-blur',
          'hover:border-[var(--void-border-hover)] hover:bg-(--void-bg-muted)',
        ],
        ghost: ['text-[var(--void-text)]', 'hover:text-[var(--void-accent)]'],
        danger: [
          'border border-[var(--void-accent)] bg-transparent text-[var(--void-accent)]',
          'hover:bg-[var(--void-accent)] hover:text-white',
        ],
      },
      size: {
        sm: 'h-8 px-4 py-2 rounded-full',
        md: 'h-10 px-6 py-3 rounded-full',
        lg: 'h-12 px-8 py-4 rounded-full',
        icon: 'h-10 w-10 rounded-full',
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
