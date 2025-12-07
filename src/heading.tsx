import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './utils';

export const headingVariants = cva('font-semibold text-(--void-text)', {
  variants: {
    size: {
      sm: 'text-lg',
      md: 'text-2xl',
      lg: 'text-3xl',
      xl: 'text-4xl',
    },
  },
  defaultVariants: {
    size: 'lg',
  },
});

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps
  extends React.ComponentProps<'h1'>,
    VariantProps<typeof headingVariants> {
  level?: HeadingLevel;
}

export function Heading({ level, size, className, ...props }: HeadingProps) {
  const levelMap: Record<NonNullable<typeof size>, HeadingLevel> = {
    xl: 1,
    lg: 1,
    md: 2,
    sm: 3,
  };

  const selectedLevel = level ?? levelMap[size ?? 'lg'];
  const Tag = `h${selectedLevel}` as const;

  return (
    <Tag
      data-slot="heading"
      className={cn(headingVariants({ size, className }))}
      {...props}
    />
  );
}
