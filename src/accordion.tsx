import { Accordion as BaseAccordion } from '@base-ui/react/accordion';
import { CaretDown } from '@phosphor-icons/react';
import { cn } from './utils';

export function Accordion({
  className,
  ...props
}: React.ComponentProps<typeof BaseAccordion.Root>) {
  return (
    <BaseAccordion.Root
      data-slot="accordion"
      className={cn('space-y-2', className)}
      {...props}
    />
  );
}

export function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof BaseAccordion.Item>) {
  return (
    <BaseAccordion.Item
      data-slot="accordion-item"
      className={cn(
        'rounded-lg border border-(--void-border) bg-(--void-surface)',
        'transition-colors duration-200',
        'data-disabled:opacity-50 data-disabled:pointer-events-none',
        className
      )}
      {...props}
    />
  );
}

export function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseAccordion.Trigger>) {
  return (
    <BaseAccordion.Header>
      <BaseAccordion.Trigger
        data-slot="accordion-trigger"
        className={cn(
          'flex w-full items-center justify-between rounded-lg px-4 py-3',
          'text-sm font-medium text-(--void-text)',
          'transition-all duration-200',
          'hover:bg-(--void-bg-muted)',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--void-primary)',
          'data-panel-open:text-(--void-primary)',
          'disabled:pointer-events-none disabled:opacity-50',
          className
        )}
        {...props}
      >
        {children}
        <CaretDown
          size={14}
          weight="bold"
          className="shrink-0 text-(--void-muted) transition-transform duration-200 data-panel-open:rotate-180"
        />
      </BaseAccordion.Trigger>
    </BaseAccordion.Header>
  );
}

export function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseAccordion.Panel>) {
  return (
    <BaseAccordion.Panel
      data-slot="accordion-content"
      className={cn(
        'overflow-hidden transition-[height] duration-200',
        'data-ending-style:h-0 data-starting-style:h-0',
        className
      )}
      {...props}
    >
      <div className="px-4 pb-4 text-sm text-(--void-muted)">{children}</div>
    </BaseAccordion.Panel>
  );
}
