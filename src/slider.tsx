import { Slider as BaseSlider } from '@base-ui-components/react/slider';
import { cn } from './utils';

export interface SliderProps
  extends React.ComponentProps<typeof BaseSlider.Root> {
  label?: string;
}

export function Slider({ label, className, ...props }: SliderProps) {
  return (
    <BaseSlider.Root
      data-slot="slider"
      className={cn('flex w-full flex-col gap-2', className)}
      {...props}
    >
      {label && (
        <div className="font-mono text-xs text-(--void-muted)">
          <span>{label}</span>
        </div>
      )}
      <BaseSlider.Control className="flex items-center">
        <BaseSlider.Track className="h-2 w-full rounded-full bg-(--void-bg-muted)">
          <BaseSlider.Indicator
            data-slot="slider-indicator"
            className="h-full rounded-full bg-(--void-primary) shadow-[0_0_10px_var(--void-primary)]"
          />
          <BaseSlider.Thumb
            data-slot="slider-thumb"
            className={cn(
              'block h-5 w-5 rounded-full border-2 border-(--void-primary) bg-(--void-bg) shadow-lg',
              'transition-transform hover:scale-110',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--void-primary)'
            )}
          />
        </BaseSlider.Track>
      </BaseSlider.Control>
    </BaseSlider.Root>
  );
}

export const SliderRoot = BaseSlider.Root;
export const SliderControl = BaseSlider.Control;
export const SliderTrack = BaseSlider.Track;
export const SliderIndicator = BaseSlider.Indicator;
export const SliderThumb = BaseSlider.Thumb;
