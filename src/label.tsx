import { cn } from './utils';

export function Label({ className, ...props }: React.ComponentProps<'label'>) {
  return (
    <label
      data-slot="label"
      className={cn(
        'font-mono text-xs uppercase tracking-wider text-(--void-muted) flex items-center gap-2',
        className
      )}
      {...props}
    />
  );
}
