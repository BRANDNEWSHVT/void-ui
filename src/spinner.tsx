import { cn } from './utils';

export interface SpinnerProps extends React.ComponentProps<'svg'> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
}

const sizeClasses = {
  sm: 'size-4',
  md: 'size-5',
  lg: 'size-6',
};

const variantClasses = {
  default: 'text-[var(--void-text)]',
  primary: 'text-[var(--void-primary)]',
  success: 'text-[var(--void-success)]',
  warning: 'text-[var(--void-warning)]',
  danger: 'text-[var(--void-danger)]',
  info: 'text-[var(--void-info)]',
};

export function Spinner({
  size = 'md',
  variant = 'default',
  className,
  ...props
}: SpinnerProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      data-slot="spinner"
      className={cn(
        sizeClasses[size],
        variantClasses[variant],
        'animate-spin',
        className
      )}
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}
