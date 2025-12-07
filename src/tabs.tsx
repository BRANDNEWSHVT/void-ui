import { Tabs as BaseTabs } from '@base-ui-components/react/tabs';
import { cn } from './utils';

export function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof BaseTabs.Root>) {
  return (
    <BaseTabs.Root
      data-slot="tabs"
      className={cn('flex flex-col gap-3', className)}
      {...props}
    />
  );
}

export function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof BaseTabs.List>) {
  return (
    <BaseTabs.List
      data-slot="tabs-list"
      className={cn(
        'inline-flex h-10 items-center gap-1 rounded-lg p-1',
        'bg-(--void-bg-muted)',
        className
      )}
      {...props}
    />
  );
}

export function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof BaseTabs.Tab>) {
  return (
    <BaseTabs.Tab
      data-slot="tabs-trigger"
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5',
        'text-sm font-medium text-(--void-muted)',
        'transition-all duration-150',
        'hover:text-(--void-text) hover:bg-(--void-bg-subtle)',
        'active:scale-[0.98]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--void-primary)/30',
        'disabled:pointer-events-none disabled:opacity-50',
        'data-selected:bg-(--void-surface) data-selected:text-(--void-text) data-selected:shadow-sm',
        className
      )}
      {...props}
    />
  );
}

export function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof BaseTabs.Panel>) {
  return (
    <BaseTabs.Panel
      data-slot="tabs-content"
      className={cn(
        'text-(--void-text) outline-none',
        'focus-visible:outline-none',
        className
      )}
      {...props}
    />
  );
}
