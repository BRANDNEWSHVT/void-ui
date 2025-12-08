import { Toast as BaseToast } from '@base-ui-components/react/toast';
import { cn } from './utils';

// Create a global toast manager for use outside React tree
export const toastManager = BaseToast.createToastManager();

// Re-export useToastManager hook
export const useToastManager = BaseToast.useToastManager;

export function ToastProvider({
  children,
  ...props
}: React.ComponentProps<typeof BaseToast.Provider>) {
  return (
    <BaseToast.Provider toastManager={toastManager} {...props}>
      {children}
      <ToastPortal />
    </BaseToast.Provider>
  );
}

function DefaultToastRenderer() {
  const { toasts } = BaseToast.useToastManager();

  return toasts.map((toast) => (
    <ToastRoot key={toast.id} toast={toast}>
      <ToastContent>
        {toast.title && <ToastTitle>{toast.title}</ToastTitle>}
        {toast.description && (
          <ToastDescription>{toast.description}</ToastDescription>
        )}
        {toast.actionProps && <ToastAction {...toast.actionProps} />}
      </ToastContent>
      <ToastClose />
    </ToastRoot>
  ));
}

export function ToastPortal({
  children,
  ...props
}: React.ComponentProps<typeof BaseToast.Portal>) {
  return (
    <BaseToast.Portal {...props}>
      <ToastViewport>{children ?? <DefaultToastRenderer />}</ToastViewport>
    </BaseToast.Portal>
  );
}

export function ToastViewport({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseToast.Viewport>) {
  return (
    <BaseToast.Viewport
      data-slot="toast-viewport"
      className={cn(
        'fixed bottom-6 right-6 z-50 flex flex-col-reverse gap-3 p-4',
        'outline-none',
        className
      )}
      {...props}
    >
      {children}
    </BaseToast.Viewport>
  );
}

export function ToastRoot({
  className,
  ...props
}: React.ComponentProps<typeof BaseToast.Root>) {
  return (
    <BaseToast.Root
      data-slot="toast"
      className={cn(
        'group relative flex w-80 items-start gap-3 rounded-xl p-4',
        'border border-(--void-border) bg-(--void-surface)',
        'shadow-(--void-shadow-lg)',
        'transition-all duration-200',
        'data-starting-style:translate-x-[calc(100%+1rem)] data-starting-style:opacity-0',
        'data-ending-style:translate-x-[calc(100%+1rem)] data-ending-style:opacity-0',
        'data-swipe-direction-right:data-ending-style:translate-x-[calc(var(--toast-swipe-movement-x)+150%)]',
        'data-swipe-direction-left:data-ending-style:translate-x-[calc(var(--toast-swipe-movement-x)-150%)]',
        className
      )}
      {...props}
    />
  );
}

export function ToastContent({
  className,
  ...props
}: React.ComponentProps<typeof BaseToast.Content>) {
  return (
    <BaseToast.Content
      data-slot="toast-content"
      className={cn('flex-1 overflow-hidden', className)}
      {...props}
    />
  );
}

export function ToastTitle({
  className,
  ...props
}: React.ComponentProps<typeof BaseToast.Title>) {
  return (
    <BaseToast.Title
      data-slot="toast-title"
      className={cn('text-sm font-medium text-(--void-text)', className)}
      {...props}
    />
  );
}

export function ToastDescription({
  className,
  ...props
}: React.ComponentProps<typeof BaseToast.Description>) {
  return (
    <BaseToast.Description
      data-slot="toast-description"
      className={cn('mt-1 text-sm text-(--void-muted)', className)}
      {...props}
    />
  );
}

export function ToastAction({
  className,
  ...props
}: React.ComponentProps<typeof BaseToast.Action>) {
  return (
    <BaseToast.Action
      data-slot="toast-action"
      className={cn(
        'mt-2 inline-flex h-8 items-center justify-center rounded-md px-3',
        'bg-(--void-primary) text-sm font-medium text-(--void-primary-foreground)',
        'transition-colors hover:bg-(--void-primary-hover)',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--void-primary)/30',
        className
      )}
      {...props}
    />
  );
}

export function ToastClose({
  className,
  ...props
}: React.ComponentProps<typeof BaseToast.Close>) {
  return (
    <BaseToast.Close
      data-slot="toast-close"
      className={cn(
        'absolute right-2 top-2 rounded-md p-1',
        'text-(--void-muted) opacity-0 transition-opacity',
        'hover:bg-(--void-bg-muted) hover:text-(--void-text)',
        'focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--void-primary)/30',
        'group-hover:opacity-100',
        className
      )}
      {...props}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </BaseToast.Close>
  );
}
