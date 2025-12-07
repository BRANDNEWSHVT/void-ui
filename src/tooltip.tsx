import { Tooltip as BaseTooltip } from '@base-ui-components/react/tooltip';
import { cn } from './utils';

export function TooltipProvider(
  props: React.ComponentProps<typeof BaseTooltip.Provider>
) {
  return <BaseTooltip.Provider {...props} />;
}

export function Tooltip(props: React.ComponentProps<typeof BaseTooltip.Root>) {
  return <BaseTooltip.Root data-slot="tooltip" {...props} />;
}

export function TooltipTrigger({
  className,
  ...props
}: React.ComponentProps<typeof BaseTooltip.Trigger>) {
  return (
    <BaseTooltip.Trigger
      data-slot="tooltip-trigger"
      className={cn('inline-flex', className)}
      {...props}
    />
  );
}

export function TooltipContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseTooltip.Popup>) {
  return (
    <BaseTooltip.Portal>
      <BaseTooltip.Positioner sideOffset={8}>
        <BaseTooltip.Popup
          data-slot="tooltip-content"
          className={cn(
            'rounded-lg border border-(--void-border) bg-(--void-bg) px-3 py-2',
            'font-mono text-xs text-(--void-text) shadow-lg',
            'transition-[transform,opacity] data-[ending-style]:scale-95 data-[ending-style]:opacity-0',
            'data-[starting-style]:scale-95 data-[starting-style]:opacity-0',
            className
          )}
          {...props}
        >
          <BaseTooltip.Arrow className="fill-(--void-bg)">
            <svg width="12" height="6" viewBox="0 0 12 6">
              <path d="M0 6L6 0L12 6H0Z" />
            </svg>
          </BaseTooltip.Arrow>
          {children}
        </BaseTooltip.Popup>
      </BaseTooltip.Positioner>
    </BaseTooltip.Portal>
  );
}
