import { cn } from './utils';

export function Text({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot="text"
      className={cn('text-base text-(--void-text) leading-relaxed', className)}
      {...props}
    />
  );
}

export function TextLink({ className, ...props }: React.ComponentProps<'a'>) {
  return (
    <a
      data-slot="text-link"
      className={cn(
        'text-(--void-text) underline underline-offset-2 hover:text-(--void-accent) transition-colors',
        className
      )}
      {...props}
    />
  );
}

export function Strong({
  className,
  ...props
}: React.ComponentProps<'strong'>) {
  return (
    <strong
      data-slot="text-strong"
      className={cn('font-semibold text-(--void-text)', className)}
      {...props}
    />
  );
}

export function Code({ className, ...props }: React.ComponentProps<'code'>) {
  return (
    <code
      data-slot="text-code"
      className={cn(
        'font-mono text-sm text-(--void-accent) bg-white/5 px-1.5 py-0.5 rounded',
        className
      )}
      {...props}
    />
  );
}
