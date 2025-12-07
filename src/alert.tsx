import { cva, type VariantProps } from 'class-variance-authority';
import {
  Info,
  CheckCircle,
  Warning,
  XCircle,
  type IconProps,
} from '@phosphor-icons/react';
import { cn } from './utils';

const alertIcons: Record<string, React.ComponentType<IconProps>> = {
  default: Info,
  primary: Info,
  success: CheckCircle,
  warning: Warning,
  danger: XCircle,
  info: Info,
};

export const alertVariants = cva(
  [
    'relative w-full rounded-lg border p-4',
    'flex gap-3',
    '[&>svg]:size-5 [&>svg]:shrink-0 [&>svg]:mt-0.5',
  ],
  {
    variants: {
      variant: {
        default: [
          'bg-(--void-surface) text-(--void-text)',
          'border-(--void-border)',
          '[&>svg]:text-(--void-muted)',
        ],
        primary: [
          'bg-[var(--void-primary)]/5 text-(--void-text)',
          'border-[var(--void-primary)]/20',
          '[&>svg]:text-[var(--void-primary)]',
        ],
        success: [
          'bg-[var(--void-success)]/5 text-(--void-text)',
          'border-[var(--void-success)]/20',
          '[&>svg]:text-[var(--void-success)]',
        ],
        warning: [
          'bg-[var(--void-warning)]/5 text-(--void-text)',
          'border-[var(--void-warning)]/20',
          '[&>svg]:text-[var(--void-warning)]',
        ],
        danger: [
          'bg-[var(--void-danger)]/5 text-(--void-text)',
          'border-[var(--void-danger)]/20',
          '[&>svg]:text-[var(--void-danger)]',
        ],
        info: [
          'bg-[var(--void-info)]/5 text-(--void-text)',
          'border-[var(--void-info)]/20',
          '[&>svg]:text-[var(--void-info)]',
        ],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface AlertProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof alertVariants> {
  icon?: boolean;
}

export function Alert({
  className,
  variant = 'default',
  icon = true,
  children,
  ...props
}: AlertProps) {
  const IconComponent = alertIcons[variant || 'default'];

  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant, className }))}
      {...props}
    >
      {icon && <IconComponent weight="fill" />}
      <div className="flex-1">{children}</div>
    </div>
  );
}

export function AlertTitle({
  className,
  ...props
}: React.ComponentProps<'h5'>) {
  return (
    <h5
      data-slot="alert-title"
      className={cn('font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  );
}

export function AlertDescription({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        'text-sm text-(--void-muted) [&_p]:leading-relaxed',
        className
      )}
      {...props}
    />
  );
}
