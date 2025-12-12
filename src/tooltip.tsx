import { Tooltip as BaseTooltip } from '@base-ui/react/tooltip';
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
      className={cn('inline-flex cursor-default', className)}
      render={props.render}
      {...props}
    />
  );
}

export function TooltipPortal(
  props: React.ComponentProps<typeof BaseTooltip.Portal>
) {
  return <BaseTooltip.Portal {...props} />;
}

export function TooltipPositioner({
  className,
  sideOffset = 6,
  ...props
}: React.ComponentProps<typeof BaseTooltip.Positioner>) {
  return (
    <BaseTooltip.Positioner
      data-slot="tooltip-positioner"
      sideOffset={sideOffset}
      className={cn('outline-none', className)}
      {...props}
    />
  );
}

export function TooltipPopup({
  className,
  ...props
}: React.ComponentProps<typeof BaseTooltip.Popup>) {
  return (
    <BaseTooltip.Popup
      data-slot="tooltip-popup"
      className={cn(
        'rounded-lg border border-(--void-border) bg-(--void-surface) px-3 py-1.5',
        'text-sm text-(--void-text)',
        'shadow-(--void-shadow-md)',
        'origin-(--transform-origin)',
        'transition-all duration-150',
        'data-starting-style:scale-95 data-starting-style:opacity-0',
        'data-ending-style:scale-95 data-ending-style:opacity-0',
        className
      )}
      {...props}
    />
  );
}

export function TooltipArrow({
  className,
  ...props
}: React.ComponentProps<typeof BaseTooltip.Arrow>) {
  return (
    <BaseTooltip.Arrow
      data-slot="tooltip-arrow"
      className={cn(
        'data-side-bottom:top-[-6px] data-side-top:bottom-[-6px]',
        'data-side-left:right-[-6px] data-side-right:left-[-6px]',
        className
      )}
      {...props}
    >
      <svg
        width="12"
        height="6"
        viewBox="0 0 12 6"
        className="fill-(--void-surface)"
      >
        <path d="M0 6L6 0L12 6H0Z" />
      </svg>
    </BaseTooltip.Arrow>
  );
}

// Convenience component that composes Portal + Positioner + Popup + Arrow
export interface TooltipContentProps
  extends React.ComponentProps<typeof BaseTooltip.Popup> {
  side?: 'top' | 'bottom' | 'left' | 'right';
  sideOffset?: number;
  showArrow?: boolean;
}

export function TooltipContent({
  className,
  children,
  side = 'top',
  sideOffset = 6,
  showArrow = true,
  ...props
}: TooltipContentProps) {
  return (
    <TooltipPortal>
      <TooltipPositioner side={side} sideOffset={sideOffset}>
        <TooltipPopup className={className} {...props}>
          {showArrow && <TooltipArrow />}
          {children}
        </TooltipPopup>
      </TooltipPositioner>
    </TooltipPortal>
  );
}
