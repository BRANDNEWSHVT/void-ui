import { Separator as BaseSeparator } from '@base-ui-components/react/separator';
import { cn } from './utils';

export interface SeparatorProps
  extends React.ComponentProps<typeof BaseSeparator> {}

export function Separator({
  className,
  orientation = 'horizontal',
  ...props
}: SeparatorProps) {
  return (
    <BaseSeparator
      data-slot="separator"
      orientation={orientation}
      className={cn(
        'shrink-0 bg-(--void-border)',
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
        className
      )}
      {...props}
    />
  );
}
