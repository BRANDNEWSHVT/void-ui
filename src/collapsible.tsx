import { Collapsible as BaseCollapsible } from '@base-ui-components/react/collapsible';
import { CaretDown } from '@phosphor-icons/react';
import { cn } from './utils';

export function Collapsible(
  props: React.ComponentProps<typeof BaseCollapsible.Root>
) {
  return <BaseCollapsible.Root data-slot="collapsible" {...props} />;
}

export interface CollapsibleTriggerProps
  extends React.ComponentProps<typeof BaseCollapsible.Trigger> {
  showIcon?: boolean;
}

export function CollapsibleTrigger({
  className,
  children,
  showIcon = true,
  ...props
}: CollapsibleTriggerProps) {
  return (
    <BaseCollapsible.Trigger
      data-slot="collapsible-trigger"
      className={cn(
        'group flex w-full items-center justify-between gap-2 py-2 text-sm text-(--void-text)',
        'transition-colors hover:text-(--void-primary) cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
      {showIcon && (
        <CaretDown
          size={14}
          weight="bold"
          className="text-(--void-muted) shrink-0 transition-transform duration-200 group-data-panel-open:rotate-180"
        />
      )}
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
        'overflow-hidden transition-[height] duration-300 ease-out h-(--collapsible-panel-height)',
        'data-ending-style:h-0 data-starting-style:h-0',
        className
      )}
      {...props}
    />
  );
}
