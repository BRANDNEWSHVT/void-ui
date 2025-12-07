import { Dialog as BaseDialog } from '@base-ui-components/react/dialog';
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
      className={cn(
        'inline-flex items-center justify-center rounded-full bg-(--void-accent) px-6 py-3',
        'font-mono text-sm uppercase tracking-wider text-white transition-all',
        'hover:bg-(--void-accent)/90 hover:shadow-[0_0_20px_rgba(255,42,0,0.4)]',
        className
      )}
      {...props}
    />
  );
}

export function DialogContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseDialog.Popup>) {
  return (
    <BaseDialog.Portal>
      <BaseDialog.Backdrop
        className={cn(
          'fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity',
          'data-[ending-style]:opacity-0 data-[starting-style]:opacity-0'
        )}
      />
      <BaseDialog.Popup
        data-slot="dialog-content"
        className={cn(
          'fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2',
          'rounded-2xl border border-(--void-border) bg-(--void-bg) p-6',
          'shadow-[0_20px_80px_rgba(0,0,0,0.5)]',
          'transition-[transform,opacity] data-[ending-style]:scale-95 data-[ending-style]:opacity-0',
          'data-[starting-style]:scale-95 data-[starting-style]:opacity-0',
          className
        )}
        {...props}
      >
        {children}
        <DialogClose className="absolute right-4 top-4" />
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
      className={cn(
        'mb-2 font-sans text-xl font-bold uppercase tracking-tight text-(--void-text)',
        className
      )}
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
      className={cn('font-mono text-sm text-(--void-muted)', className)}
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
      className={cn('mt-6 flex justify-end gap-3', className)}
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
        'rounded-full p-2 text-(--void-muted) transition-colors',
        'hover:bg-(--void-bg-muted) hover:text-(--void-text)',
        className
      )}
      {...props}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M12 4L4 12M4 4L12 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </BaseDialog.Close>
  );
}
