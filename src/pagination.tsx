import { cn } from './utils';
import { buttonVariants } from './button';

export function Pagination({
  className,
  ...props
}: React.ComponentProps<'nav'>) {
  return (
    <nav
      data-slot="pagination"
      aria-label="Pagination"
      className={cn('flex justify-center', className)}
      {...props}
    />
  );
}

export function PaginationList({
  className,
  ...props
}: React.ComponentProps<'ul'>) {
  return (
    <ul
      data-slot="pagination-list"
      className={cn('flex items-center gap-1', className)}
      {...props}
    />
  );
}

export interface PaginationItemProps extends React.ComponentProps<'a'> {
  active?: boolean;
  disabled?: boolean;
}

export function PaginationItem({
  active,
  disabled,
  className,
  ...props
}: PaginationItemProps) {
  return (
    <li>
      <a
        data-slot="pagination-item"
        aria-current={active ? 'page' : undefined}
        aria-disabled={disabled ? true : undefined}
        className={cn(
          buttonVariants({
            variant: active ? 'primary' : 'ghost',
            size: 'icon',
          }),
          'cursor-pointer',
          active && 'pointer-events-none',
          disabled && 'pointer-events-none opacity-50',
          className
        )}
        {...props}
      />
    </li>
  );
}

export function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<'a'>) {
  return (
    <li>
      <a
        data-slot="pagination-previous"
        aria-label="Go to previous page"
        className={cn(
          buttonVariants({ variant: 'ghost', size: 'sm' }),
          'cursor-pointer gap-1',
          className
        )}
        {...props}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
        Previous
      </a>
    </li>
  );
}

export function PaginationNext({
  className,
  ...props
}: React.ComponentProps<'a'>) {
  return (
    <li>
      <a
        data-slot="pagination-next"
        aria-label="Go to next page"
        className={cn(
          buttonVariants({ variant: 'ghost', size: 'sm' }),
          'cursor-pointer gap-1',
          className
        )}
        {...props}
      >
        Next
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </a>
    </li>
  );
}

export function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <li>
      <span
        data-slot="pagination-ellipsis"
        className={cn(
          'flex h-10 w-10 items-center justify-center text-(--void-muted)',
          className
        )}
        {...props}
      >
        ...
      </span>
    </li>
  );
}
