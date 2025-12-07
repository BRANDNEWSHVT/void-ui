import { Progress as BaseProgress } from '@base-ui-components/react/progress';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './utils';

export const progressVariants = cva(
  'h-full rounded-full transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-(--void-primary)',
        success: 'bg-(--void-success)',
        warning: 'bg-(--void-warning)',
        danger: 'bg-(--void-danger)',
        info: 'bg-(--void-info)',
      },
      size: {
        sm: '',
        md: '',
        lg: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

const trackSizes = {
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-3',
};

export interface ProgressProps
  extends Omit<React.ComponentProps<typeof BaseProgress.Root>, 'children'>,
    VariantProps<typeof progressVariants> {
  showValue?: boolean;
}

export function Progress({
  value = 0,
  variant,
  size = 'md',
  showValue,
  className,
  ...props
}: ProgressProps) {
  return (
    <BaseProgress.Root
      data-slot="progress"
      value={value}
      className={cn('w-full', className)}
      {...props}
    >
      <BaseProgress.Track
        className={cn(
          'overflow-hidden rounded-full bg-(--void-bg-muted)',
          trackSizes[size ?? 'md']
        )}
      >
        <BaseProgress.Indicator
          data-slot="progress-indicator"
          className={progressVariants({ variant, size })}
        />
      </BaseProgress.Track>
      {showValue && (
        <span className="mt-1.5 block text-right text-xs text-(--void-muted)">
          {Math.round(value!)}%
        </span>
      )}
    </BaseProgress.Root>
  );
}

export function ProgressLabel({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="progress-label"
      className={cn(
        'mb-1.5 flex items-center justify-between text-sm',
        className
      )}
      {...props}
    />
  );
}
