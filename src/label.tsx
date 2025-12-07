import { cn } from './utils';

export interface LabelProps extends React.ComponentProps<'label'> {
  required?: boolean;
}

export function Label({ className, required, children, ...props }: LabelProps) {
  return (
    <label
      data-slot="label"
      className={cn('text-sm font-medium text-(--void-text)', className)}
      {...props}
    >
      {children}
      {required && <span className="text-(--void-danger) ml-0.5">*</span>}
    </label>
  );
}
