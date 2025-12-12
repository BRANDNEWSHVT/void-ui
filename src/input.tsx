import { Input as BaseInput } from '@base-ui/react/input';
import { cn } from './utils';

export interface InputProps extends React.ComponentProps<typeof BaseInput> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <BaseInput
      data-slot="input"
      className={cn(
        'flex h-10 w-full rounded-lg px-3 py-2',
        'bg-(--void-surface) text-sm text-(--void-text)',
        'border border-(--void-border)',
        'placeholder:text-(--void-muted)',
        'transition-colors duration-200',
        'hover:border-(--void-border-hover)',
        'focus:border-(--void-primary) focus:outline-none focus:ring-2 focus:ring-(--void-primary)/20',
        'disabled:pointer-events-none disabled:opacity-50 disabled:bg-(--void-bg-muted)',
        className
      )}
      {...props}
    />
  );
}
