import { Progress as BaseProgress } from '@base-ui-components/react/progress';
import { cn } from './utils';

export interface ProgressProps
  extends React.ComponentProps<typeof BaseProgress.Root> {
  label?: string;
}

export function Progress({ label, value, className, ...props }: ProgressProps) {
  return (
    <BaseProgress.Root
      data-slot="progress"
      value={value}
      className={cn('w-full', className)}
      {...props}
    >
      {label && (
        <div className="mb-2 flex items-center justify-between font-mono text-xs text-(--void-muted)">
          <span>{label}</span>
          <span>{Math.round(value ?? 0)}%</span>
        </div>
      )}
      <BaseProgress.Track className="h-2 overflow-hidden rounded-full bg-(--void-bg-muted)">
        <BaseProgress.Indicator
          data-slot="progress-indicator"
          className="h-full bg-(--void-accent) shadow-[0_0_10px_var(--void-accent)] transition-[width]"
        />
      </BaseProgress.Track>
    </BaseProgress.Root>
  );
}

export const ProgressRoot = BaseProgress.Root;
export const ProgressTrack = BaseProgress.Track;
export const ProgressIndicator = BaseProgress.Indicator;
