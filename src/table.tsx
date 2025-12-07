import { cn } from './utils';

export function Table({ className, ...props }: React.ComponentProps<'table'>) {
  return (
    <table
      data-slot="table"
      className={cn(
        'w-full text-(--void-text) text-left font-mono text-sm',
        className
      )}
      {...props}
    />
  );
}

export function TableContainer({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="table-container"
      className={cn(
        'overflow-x-auto rounded-lg border border-(--void-border)',
        className
      )}
      {...props}
    />
  );
}

export function TableHeader({
  className,
  ...props
}: React.ComponentProps<'thead'>) {
  return (
    <thead
      data-slot="table-header"
      className={cn('bg-(--void-bg-subtle)', className)}
      {...props}
    />
  );
}

export function TableHead({ className, ...props }: React.ComponentProps<'th'>) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        'px-4 py-3 text-(--void-muted) font-medium text-xs uppercase tracking-wider border-b border-(--void-border)',
        className
      )}
      {...props}
    />
  );
}

export function TableBody({
  className,
  ...props
}: React.ComponentProps<'tbody'>) {
  return (
    <tbody
      data-slot="table-body"
      className={cn('divide-y divide-(--void-border)', className)}
      {...props}
    />
  );
}

export function TableRow({ className, ...props }: React.ComponentProps<'tr'>) {
  return (
    <tr
      data-slot="table-row"
      className={cn('transition-colors hover:bg-(--void-bg-subtle)', className)}
      {...props}
    />
  );
}

export function TableCell({ className, ...props }: React.ComponentProps<'td'>) {
  return (
    <td
      data-slot="table-cell"
      className={cn('px-4 py-3', className)}
      {...props}
    />
  );
}

export function TableFooter({
  className,
  ...props
}: React.ComponentProps<'tfoot'>) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn('text-xs text-(--void-muted) bg-(--void-bg-subtle)', className)}
      {...props}
    />
  );
}

export function TableCaption({
  side = 'bottom',
  className,
  ...props
}: React.ComponentProps<'caption'> & { side?: 'top' | 'bottom' }) {
  return (
    <caption
      data-slot="table-caption"
      className={cn(
        'text-sm text-(--void-muted) py-3',
        side === 'top' ? 'caption-top' : 'caption-bottom',
        className
      )}
      {...props}
    />
  );
}
