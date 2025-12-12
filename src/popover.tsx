import { Popover as BasePopover } from '@base-ui/react/popover';
import { X } from '@phosphor-icons/react';
import { cn } from './utils';

export function Popover(props: React.ComponentProps<typeof BasePopover.Root>) {
  return <BasePopover.Root data-slot="popover" {...props} />;
}

export function PopoverTrigger({
  className,
  ...props
}: React.ComponentProps<typeof BasePopover.Trigger>) {
  return (
    <BasePopover.Trigger
      data-slot="popover-trigger"
      className={cn(className)}
      {...props}
    />
  );
}

export interface PopoverContentProps
  extends React.ComponentProps<typeof BasePopover.Positioner> {
  showArrow?: boolean;
}

export function PopoverContent({
  className,
  children,
  showArrow = true,
  ...props
}: PopoverContentProps) {
  return (
    <BasePopover.Portal>
      <BasePopover.Positioner sideOffset={8} {...props}>
        <BasePopover.Popup
          data-slot="popover-content"
          className={cn(
            'origin-(--transform-origin) rounded-lg p-4',
            'bg-(--void-surface) border border-(--void-border)',
            'shadow-(--void-shadow-lg)',
            'transition-all duration-150',
            'data-starting-style:scale-95 data-starting-style:opacity-0',
            'data-ending-style:scale-95 data-ending-style:opacity-0',
            className
          )}
        >
          {showArrow && (
            <BasePopover.Arrow className="fill-(--void-surface) [&>path]:stroke-(--void-border)">
              <svg width="20" height="10" viewBox="0 0 20 10">
                <path d="M0 10L10 0L20 10H0Z" fill="inherit" />
                <path d="M1 10L10 1L19 10" fill="none" strokeWidth="1" />
              </svg>
            </BasePopover.Arrow>
          )}
          {children}
        </BasePopover.Popup>
      </BasePopover.Positioner>
    </BasePopover.Portal>
  );
}

export function PopoverClose({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BasePopover.Close>) {
  return (
    <BasePopover.Close
      data-slot="popover-close"
      className={cn(
        'absolute right-2 top-2 rounded-md p-1',
        'text-(--void-muted) transition-colors',
        'hover:bg-(--void-bg-muted) hover:text-(--void-text)',
        className
      )}
      {...props}
    >
      {children ?? <X size={16} />}
    </BasePopover.Close>
  );
}

export function PopoverTitle({
  className,
  ...props
}: React.ComponentProps<'h3'>) {
  return (
    <h3
      data-slot="popover-title"
      className={cn('text-sm font-semibold text-(--void-text)', className)}
      {...props}
    />
  );
}

export function PopoverDescription({
  className,
  ...props
}: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot="popover-description"
      className={cn('text-sm text-(--void-muted)', className)}
      {...props}
    />
  );
}
