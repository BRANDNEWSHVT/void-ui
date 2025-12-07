import { Accordion as BaseAccordion } from '@base-ui-components/react/accordion';
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
        'rounded-xl border border-(--void-border) bg-white/5',
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
          'flex w-full items-center justify-between px-4 py-3',
          'font-mono text-sm text-(--void-text) transition-colors',
          'hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--void-accent)',
          'data-panel-open:text-(--void-accent)',
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
      </BaseAccordion.Trigger>
    </BaseAccordion.Header>
  );
}

export function AccordionContent({
  className,
  ...props
}: React.ComponentProps<typeof BaseAccordion.Panel>) {
  return (
    <BaseAccordion.Panel
      data-slot="accordion-content"
      className={cn(
        'overflow-hidden transition-[height] data-ending-style:h-0 data-starting-style:h-0',
        className
      )}
      {...props}
    >
      <div className="px-4 pb-4 font-mono text-sm text-(--void-muted)">
        {props.children}
      </div>
    </BaseAccordion.Panel>
  );
}
