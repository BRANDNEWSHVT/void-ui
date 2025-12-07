import { Tabs as BaseTabs } from '@base-ui-components/react/tabs';
import { cn } from './utils';

export function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof BaseTabs.Root>) {
  return (
    <BaseTabs.Root
      data-slot="tabs"
      className={cn('flex flex-col gap-4', className)}
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
        'flex gap-1 rounded-full border border-(--void-border) bg-white/5 p-1',
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
        'rounded-full px-4 py-2 font-mono text-sm text-(--void-muted) transition-colors',
        'hover:text-(--void-text) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--void-accent)',
        'data-selected:bg-(--void-accent) data-selected:text-white',
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
      className={cn('outline-none', className)}
      {...props}
    />
  );
}

export function TabsIndicator({
  className,
  ...props
}: React.ComponentProps<typeof BaseTabs.Indicator>) {
  return (
    <BaseTabs.Indicator
      data-slot="tabs-indicator"
      className={cn(
        'absolute h-full rounded-full bg-(--void-accent) transition-all',
        className
      )}
      {...props}
    />
  );
}
