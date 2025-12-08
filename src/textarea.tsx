import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './utils';

export const textareaVariants = cva(
  [
    'flex w-full text-(--void-text) text-sm',
    'placeholder:text-(--void-muted)',
    'rounded-lg border border-(--void-border) bg-(--void-surface)',
    'transition-colors duration-150',
    'focus:border-(--void-primary) focus:outline-none focus:ring-2 focus:ring-(--void-primary)/20',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'resize-y',
  ],
  {
    variants: {
      size: {
        sm: 'min-h-20 px-3 py-2 text-sm',
        md: 'min-h-24 px-3 py-2.5',
        lg: 'min-h-32 px-4 py-3 text-base',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export interface TextareaProps
  extends React.ComponentProps<'textarea'>,
    VariantProps<typeof textareaVariants> {}

export function Textarea({ className, size, ...props }: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(textareaVariants({ size }), className)}
      {...props}
    />
  );
}
