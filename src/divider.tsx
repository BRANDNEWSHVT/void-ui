import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './utils';

export const dividerVariants = cva('flex items-center gap-3', {
  variants: {
    variant: {
      default: 'before:bg-(--void-border) before:h-px before:flex-1',
      center:
        'before:bg-(--void-border) after:bg-(--void-border) before:h-px before:flex-1 after:h-px after:flex-1',
      left: 'after:bg-(--void-border) after:h-px after:flex-1',
      right: 'before:bg-(--void-border) before:h-px before:flex-1',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export function Divider({
  children,
  variant,
  className,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof dividerVariants>) {
  if (!children) {
    return (
      <div
        data-slot="divider"
        className={cn('h-px w-full bg-(--void-border)', className)}
        {...props}
      />
    );
  }

  return (
    <div
      data-slot="divider"
      className={cn(dividerVariants({ variant, className }))}
      {...props}
    >
      <span className="text-sm text-(--void-muted) whitespace-nowrap">
        {children}
      </span>
    </div>
  );
}
