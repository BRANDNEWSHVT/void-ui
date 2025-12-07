import { AlertDialog as BaseAlertDialog } from '@base-ui-components/react/alert-dialog';
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
      className={cn(
        'inline-flex items-center justify-center rounded-full border border-(--void-danger) bg-transparent px-6 py-3',
        'font-mono text-sm uppercase tracking-wider text-(--void-danger) transition-all',
        'hover:bg-(--void-danger) hover:text-white',
        className
      )}
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
          'fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity',
          'data-ending-style:opacity-0 data-starting-style:opacity-0'
        )}
      />
      <BaseAlertDialog.Popup
        data-slot="alert-dialog-content"
        className={cn(
          'fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2',
          'rounded-2xl border border-(--void-border) bg-(--void-bg) p-6',
          'shadow-[0_20px_80px_rgba(0,0,0,0.5)]',
          'transition-[transform,opacity] data-ending-style:scale-95 data-ending-style:opacity-0',
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
      className={cn(
        'mb-2 font-sans text-xl font-bold uppercase tracking-tight text-(--void-text)',
        className
      )}
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
      className={cn('mb-6 font-mono text-sm text-(--void-muted)', className)}
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
      className={cn('flex justify-end gap-3', className)}
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
        buttonVariants({ variant: 'primary', size: 'sm' }),
        className
      )}
      {...props}
    />
  );
}
