import { Slider as BaseSlider } from '@base-ui/react/slider';
import { cn } from './utils';

export interface SliderProps
  extends React.ComponentProps<typeof BaseSlider.Root> {
  showValue?: boolean;
}

export function Slider({ className, showValue, ...props }: SliderProps) {
  return (
    <BaseSlider.Root
      data-slot="slider"
      className={cn('flex w-full touch-none flex-col gap-2', className)}
      {...props}
    >
      {showValue && (
        <BaseSlider.Value className="text-sm text-(--void-muted) tabular-nums self-end" />
      )}
      <BaseSlider.Control className="flex items-center py-1">
        <BaseSlider.Track className="h-1.5 w-full rounded-full bg-(--void-bg-muted)">
          <BaseSlider.Indicator
            data-slot="slider-indicator"
            className="h-full rounded-full bg-(--void-primary)"
          />
          <BaseSlider.Thumb
            data-slot="slider-thumb"
            className={cn(
              'block size-4 rounded-full bg-(--void-primary)',
              'shadow-(--void-shadow-sm)',
              'transition-transform duration-100',
              'hover:scale-110',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--void-primary)/30',
              'disabled:pointer-events-none disabled:opacity-50'
            )}
          />
        </BaseSlider.Track>
      </BaseSlider.Control>
    </BaseSlider.Root>
  );
}

export function SliderLabel({
  className,
  ...props
}: React.ComponentProps<'label'>) {
  return (
    <label
      data-slot="slider-label"
      className={cn('text-sm font-medium text-(--void-text)', className)}
      {...props}
    />
  );
}
