import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './utils';

export const headingVariants = cva(
  'font-semibold text-(--void-text) tracking-tight',
  {
    variants: {
      size: {
        xs: 'text-sm',
        sm: 'text-base',
        md: 'text-lg',
        lg: 'text-2xl',
        xl: 'text-3xl',
        '2xl': 'text-4xl',
        '3xl': 'text-5xl',
      },
      weight: {
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
      },
    },
    defaultVariants: {
      size: 'lg',
      weight: 'semibold',
    },
  }
);

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps
  extends Omit<React.ComponentProps<'h1'>, 'ref'>,
    VariantProps<typeof headingVariants> {
  as?: `h${HeadingLevel}`;
}

export function Heading({
  as,
  size,
  weight,
  className,
  ...props
}: HeadingProps) {
  const sizeToLevel: Record<NonNullable<typeof size>, HeadingLevel> = {
    '3xl': 1,
    '2xl': 1,
    xl: 1,
    lg: 2,
    md: 3,
    sm: 4,
    xs: 5,
  };

  const Tag = as ?? `h${sizeToLevel[size ?? 'lg']}`;

  return (
    <Tag
      data-slot="heading"
      className={cn(headingVariants({ size, weight, className }))}
      {...props}
    />
  );
}
