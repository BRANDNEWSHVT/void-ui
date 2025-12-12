import { AlertDialog as BaseAlertDialog } from '@base-ui/react/alert-dialog';
import { cn } from './utils';
import { buttonVariants } from './button';

export function AlertDialog(
  props: React.ComponentProps<typeof BaseAlertDialog.Root>
) {
  return <BaseAlertDialog.Root data-slot="alert-dialog" {...props} />;
}

export function AlertDialogTrigger({
  className,
  ...props
}: React.ComponentProps<typeof BaseAlertDialog.Trigger>) {
  return (
    <BaseAlertDialog.Trigger
      data-slot="alert-dialog-trigger"
      className={cn(className)}
      {...props}
    />
  );
}

export function AlertDialogContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseAlertDialog.Popup>) {
  return (
    <BaseAlertDialog.Portal>
      <BaseAlertDialog.Backdrop
        className={cn(
          'fixed inset-0 bg-black/60 backdrop-blur-sm',
          'transition-opacity duration-200',
          'data-ending-style:opacity-0 data-starting-style:opacity-0'
        )}
      />
      <BaseAlertDialog.Popup
        data-slot="alert-dialog-content"
        className={cn(
          'fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2',
          'rounded-lg border border-(--void-border) bg-(--void-surface) p-6',
          'shadow-[var(--void-shadow-xl)]',
          'transition-all duration-200',
          'data-ending-style:scale-95 data-ending-style:opacity-0',
          'data-starting-style:scale-95 data-starting-style:opacity-0',
          className
        )}
        {...props}
      >
        {children}
      </BaseAlertDialog.Popup>
    </BaseAlertDialog.Portal>
  );
}

export function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof BaseAlertDialog.Title>) {
  return (
    <BaseAlertDialog.Title
      data-slot="alert-dialog-title"
      className={cn('text-lg font-semibold text-(--void-text)', className)}
      {...props}
    />
  );
}

export function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof BaseAlertDialog.Description>) {
  return (
    <BaseAlertDialog.Description
      data-slot="alert-dialog-description"
      className={cn('mt-2 text-sm text-(--void-muted)', className)}
      {...props}
    />
  );
}

export function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn('mt-6 flex justify-end gap-3', className)}
      {...props}
    />
  );
}

export function AlertDialogCancel({
  className,
  ...props
}: React.ComponentProps<typeof BaseAlertDialog.Close>) {
  return (
    <BaseAlertDialog.Close
      data-slot="alert-dialog-cancel"
      className={cn(
        buttonVariants({ variant: 'secondary', size: 'sm' }),
        className
      )}
      {...props}
    />
  );
}

export function AlertDialogAction({
  className,
  ...props
}: React.ComponentProps<typeof BaseAlertDialog.Close>) {
  return (
    <BaseAlertDialog.Close
      data-slot="alert-dialog-action"
      className={cn(
        buttonVariants({ variant: 'danger', size: 'sm' }),
        className
      )}
      {...props}
    />
  );
}
