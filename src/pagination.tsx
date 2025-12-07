import { CaretLeft, CaretRight, DotsThree } from '@phosphor-icons/react';
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

export interface PaginationItemProps extends React.ComponentProps<'button'> {
  active?: boolean;
}

export function PaginationItem({
  active,
  disabled,
  className,
  ...props
}: PaginationItemProps) {
  return (
    <li>
      <button
        type="button"
        data-slot="pagination-item"
        aria-current={active ? 'page' : undefined}
        disabled={disabled}
        className={cn(
          buttonVariants({
            variant: active ? 'primary' : 'ghost',
            size: 'icon',
          }),
          active && 'pointer-events-none',
          className
        )}
        {...props}
      />
    </li>
  );
}

export interface PaginationPreviousProps
  extends React.ComponentProps<'button'> {
  iconOnly?: boolean;
}

export function PaginationPrevious({
  className,
  iconOnly,
  disabled,
  ...props
}: PaginationPreviousProps) {
  return (
    <li>
      <button
        type="button"
        data-slot="pagination-previous"
        aria-label="Go to previous page"
        disabled={disabled}
        className={cn(
          buttonVariants({ variant: 'ghost', size: iconOnly ? 'icon' : 'sm' }),
          'gap-1',
          className
        )}
        {...props}
      >
        <CaretLeft size={16} />
        {!iconOnly && <span>Previous</span>}
      </button>
    </li>
  );
}

export interface PaginationNextProps extends React.ComponentProps<'button'> {
  iconOnly?: boolean;
}

export function PaginationNext({
  className,
  iconOnly,
  disabled,
  ...props
}: PaginationNextProps) {
  return (
    <li>
      <button
        type="button"
        data-slot="pagination-next"
        aria-label="Go to next page"
        disabled={disabled}
        className={cn(
          buttonVariants({ variant: 'ghost', size: iconOnly ? 'icon' : 'sm' }),
          'gap-1',
          className
        )}
        {...props}
      >
        {!iconOnly && <span>Next</span>}
        <CaretRight size={16} />
      </button>
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
        aria-hidden
        className={cn(
          'flex size-9 items-center justify-center text-(--void-muted)',
          className
        )}
        {...props}
      >
        <DotsThree size={20} weight="bold" />
      </span>
    </li>
  );
}
