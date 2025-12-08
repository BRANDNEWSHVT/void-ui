import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './utils';

export const textVariants = cva('leading-relaxed', {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    },
    variant: {
      default: 'text-(--void-text)',
      muted: 'text-(--void-muted)',
      primary: 'text-(--void-primary)',
      success: 'text-(--void-success)',
      warning: 'text-(--void-warning)',
      danger: 'text-(--void-danger)',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'default',
    weight: 'normal',
  },
});

export interface TextProps
  extends React.ComponentProps<'p'>,
    VariantProps<typeof textVariants> {
  as?: 'p' | 'span' | 'div';
}

export function Text({
  as: Component = 'p',
  size,
  variant,
  weight,
  className,
  ...props
}: TextProps) {
  return (
    <Component
      data-slot="text"
      className={cn(textVariants({ size, variant, weight }), className)}
      {...props}
    />
  );
}

export function TextLink({ className, ...props }: React.ComponentProps<'a'>) {
  return (
    <a
      data-slot="text-link"
      className={cn(
        'text-(--void-primary) underline underline-offset-4',
        'decoration-(--void-primary)/30 hover:decoration-(--void-primary)',
        'transition-colors duration-150',
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
        'relative rounded-md px-[0.4em] py-[0.2em]',
        'bg-(--void-bg-muted) text-(--void-primary)',
        'font-mono text-[0.9em] font-medium',
        className
      )}
      {...props}
    />
  );
}
