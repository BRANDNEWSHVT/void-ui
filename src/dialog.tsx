import { Dialog as BaseDialog } from '@base-ui-components/react/dialog';
import { X } from '@phosphor-icons/react';
import { cn } from './utils';

export function Dialog(props: React.ComponentProps<typeof BaseDialog.Root>) {
  return <BaseDialog.Root data-slot="dialog" {...props} />;
}

export function DialogTrigger({
  className,
  ...props
}: React.ComponentProps<typeof BaseDialog.Trigger>) {
  return (
    <BaseDialog.Trigger
      data-slot="dialog-trigger"
      className={cn('cursor-pointer', className)}
      {...props}
    />
  );
}

export interface DialogContentProps
  extends React.ComponentProps<typeof BaseDialog.Popup> {
  showClose?: boolean;
}

export function DialogContent({
  className,
  children,
  showClose = true,
  ...props
}: DialogContentProps) {
  return (
    <BaseDialog.Portal>
      <BaseDialog.Backdrop
        className={cn(
          'fixed inset-0 bg-black/60 backdrop-blur-sm',
          'transition-opacity duration-200',
          'data-ending-style:opacity-0 data-starting-style:opacity-0'
        )}
      />
      <BaseDialog.Popup
        data-slot="dialog-content"
        className={cn(
          'fixed left-1/2 top-1/2 w-full max-w-lg -translate-x-1/2 -translate-y-1/2',
          'rounded-xl bg-(--void-surface) p-6',
          'border border-(--void-border)',
          'shadow-(--void-shadow-xl)',
          'transition-all duration-200',
          'data-ending-style:scale-95 data-ending-style:opacity-0',
          'data-starting-style:scale-95 data-starting-style:opacity-0',
          className
        )}
        {...props}
      >
        {children}
        {showClose && <DialogClose />}
      </BaseDialog.Popup>
    </BaseDialog.Portal>
  );
}

export function DialogHeader({
  className,
  ...props
}: React.ComponentProps<'header'>) {
  return (
    <header
      data-slot="dialog-header"
      className={cn('mb-4', className)}
      {...props}
    />
  );
}

export function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof BaseDialog.Title>) {
  return (
    <BaseDialog.Title
      data-slot="dialog-title"
      className={cn('text-lg font-semibold text-(--void-text)', className)}
      {...props}
    />
  );
}

export function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof BaseDialog.Description>) {
  return (
    <BaseDialog.Description
      data-slot="dialog-description"
      className={cn('text-sm text-(--void-muted) mt-1', className)}
      {...props}
    />
  );
}

export function DialogFooter({
  className,
  ...props
}: React.ComponentProps<'footer'>) {
  return (
    <footer
      data-slot="dialog-footer"
      className={cn('mt-6 flex items-center justify-end gap-2', className)}
      {...props}
    />
  );
}

export function DialogClose({
  className,
  ...props
}: React.ComponentProps<typeof BaseDialog.Close>) {
  return (
    <BaseDialog.Close
      data-slot="dialog-close"
      className={cn(
        'absolute right-4 top-4 rounded-lg p-1.5',
        'text-(--void-muted) transition-colors duration-200',
        'hover:bg-(--void-bg-muted) hover:text-(--void-text)',
        className
      )}
      {...props}
    >
      <X size={16} weight="bold" />
    </BaseDialog.Close>
  );
}
