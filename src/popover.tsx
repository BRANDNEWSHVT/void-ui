import { Popover as BasePopover } from '@base-ui-components/react/popover';
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
      className={cn(
        'inline-flex items-center justify-center rounded-full border border-(--void-border) bg-white/5 px-4 py-2',
        'font-mono text-sm text-(--void-text) transition-colors',
        'hover:border-(--void-border-hover) hover:bg-white/10',
        className
      )}
      {...props}
    />
  );
}

export function PopoverContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BasePopover.Popup>) {
  return (
    <BasePopover.Portal>
      <BasePopover.Positioner sideOffset={8}>
        <BasePopover.Popup
          data-slot="popover-content"
          className={cn(
            'max-w-xs rounded-xl border border-(--void-border) bg-(--void-surface) p-4',
            'shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl',
            'transition-[transform,opacity] data-[ending-style]:scale-95 data-[ending-style]:opacity-0',
            'data-[starting-style]:scale-95 data-[starting-style]:opacity-0',
            className
          )}
          {...props}
        >
          <BasePopover.Arrow className="fill-(--void-surface)">
            <svg width="20" height="10" viewBox="0 0 20 10">
              <path d="M0 10L10 0L20 10H0Z" />
            </svg>
          </BasePopover.Arrow>
          {children}
        </BasePopover.Popup>
      </BasePopover.Positioner>
    </BasePopover.Portal>
  );
}

export function PopoverClose({
  className,
  ...props
}: React.ComponentProps<typeof BasePopover.Close>) {
  return (
    <BasePopover.Close
      data-slot="popover-close"
      className={cn(
        'rounded-full p-1 text-(--void-muted) transition-colors',
        'hover:bg-white/10 hover:text-(--void-text)',
        className
      )}
      {...props}
    />
  );
}
