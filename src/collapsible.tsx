import { Collapsible as BaseCollapsible } from '@base-ui-components/react/collapsible';
import { cn } from './utils';

export function Collapsible(
  props: React.ComponentProps<typeof BaseCollapsible.Root>
) {
  return <BaseCollapsible.Root data-slot="collapsible" {...props} />;
}

export function CollapsibleTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseCollapsible.Trigger>) {
  return (
    <BaseCollapsible.Trigger
      data-slot="collapsible-trigger"
      className={cn(
        'flex w-full items-center justify-between py-2 font-mono text-sm text-(--void-text)',
        'transition-colors hover:text-(--void-primary)',
        className
      )}
      {...props}
    >
      {children}
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        className="text-(--void-muted) transition-transform data-panel-open:rotate-180"
      >
        <path
          d="M3 4.5L6 7.5L9 4.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </BaseCollapsible.Trigger>
  );
}

export function CollapsibleContent({
  className,
  ...props
}: React.ComponentProps<typeof BaseCollapsible.Panel>) {
  return (
    <BaseCollapsible.Panel
      data-slot="collapsible-content"
      className={cn(
        'overflow-hidden transition-[height] h-(--collapsible-panel-height)',
        'data-ending-style:h-0 data-starting-style:h-0',
        className
      )}
      {...props}
    />
  );
}
