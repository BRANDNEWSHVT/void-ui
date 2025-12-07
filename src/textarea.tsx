import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './utils';

export const textareaVariants = cva(
  [
    'w-full text-(--void-text) placeholder:text-(--void-muted) font-mono text-sm',
    'rounded-lg border border-(--void-border) bg-(--void-bg-subtle) transition-colors',
    'focus:border-(--void-accent) focus:outline-none focus:ring-1 focus:ring-(--void-accent)',
    'disabled:opacity-50 disabled:cursor-not-allowed',
  ],
  {
    variants: {
      size: {
        md: 'min-h-24 p-3',
        lg: 'min-h-32 p-4',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export function Textarea({
  className,
  size,
  ...props
}: React.ComponentProps<'textarea'> & VariantProps<typeof textareaVariants>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(textareaVariants({ size, className }))}
      {...props}
    />
  );
}
