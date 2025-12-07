import { cva, type VariantProps } from 'class-variance-authority';
import { X } from '@phosphor-icons/react';
import { cn } from './utils';

export const chipVariants = cva(
  'inline-flex items-center gap-1.5 text-sm border transition-colors',
  {
    variants: {
      variant: {
        default:
          'bg-(--void-bg-subtle) border-(--void-border) text-(--void-text)',
        primary:
          'bg-(--void-primary)/15 border-(--void-primary)/30 text-(--void-primary)',
        secondary:
          'bg-(--void-bg-muted) border-(--void-border) text-(--void-text)',
        success:
          'bg-(--void-success)/15 border-(--void-success)/30 text-(--void-success)',
        warning:
          'bg-(--void-warning)/15 border-(--void-warning)/30 text-(--void-warning)',
        danger:
          'bg-(--void-danger)/15 border-(--void-danger)/30 text-(--void-danger)',
        info: 'bg-(--void-info)/15 border-(--void-info)/30 text-(--void-info)',
      },
      size: {
        sm: 'px-2 h-6 rounded text-xs *:[svg]:size-3',
        md: 'px-2.5 h-7 rounded-md *:[svg]:size-3.5',
        lg: 'px-3 h-8 rounded-lg *:[svg]:size-4',
      },
      pill: {
        true: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface ChipProps
  extends Omit<React.ComponentProps<'div'>, 'children'>,
    VariantProps<typeof chipVariants> {
  children: React.ReactNode;
  onRemove?: () => void;
}

export function Chip({
  variant,
  size,
  pill,
  className,
  children,
  onRemove,
  ...props
}: ChipProps) {
  return (
    <div
      data-slot="chip"
      className={cn(chipVariants({ variant, size, pill, className }))}
      {...props}
    >
      {children}
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="ml-0.5 -mr-1 p-0.5 rounded-full opacity-60 hover:opacity-100 hover:bg-current/10 transition-all cursor-pointer"
          aria-label="Remove"
        >
          <X weight="bold" className="size-3" />
        </button>
      )}
    </div>
  );
}

export function ChipButton({
  className,
  ...props
}: React.ComponentProps<'button'>) {
  return (
    <button
      data-slot="chip-button"
      className={cn(
        'opacity-60 hover:opacity-100 transition-opacity cursor-pointer',
        className
      )}
      {...props}
    />
  );
}
