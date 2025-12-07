import { Toast as BaseToast } from '@base-ui-components/react/toast';
import { cn } from './utils';

export function ToastProvider({
  children,
  ...props
}: React.ComponentProps<typeof BaseToast.Provider>) {
  return (
    <BaseToast.Provider {...props}>
      {children}
      <ToastViewport />
    </BaseToast.Provider>
  );
}

export function ToastViewport({
  className,
  ...props
}: Omit<React.ComponentProps<typeof BaseToast.Viewport>, 'children'>) {
  return (
    <BaseToast.Viewport
      data-slot="toast-viewport"
      className={cn(
        'fixed bottom-6 right-6 z-50 flex flex-col gap-2',
        className
      )}
      {...props}
    />
  );
}

export interface ToastRootProps
  extends React.ComponentProps<typeof BaseToast.Root> {
  title?: string;
  description?: string;
}

export function Toast({
  title,
  description,
  className,
  ...props
}: ToastRootProps) {
  return (
    <BaseToast.Root
      data-slot="toast"
      className={cn(
        'flex items-center gap-3 rounded-xl border border-(--void-border) bg-(--void-surface) px-4 py-3',
        'shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl',
        'transition-[transform,opacity] data-ending-style:translate-x-full data-ending-style:opacity-0',
        'data-starting-style:translate-x-full data-starting-style:opacity-0',
        className
      )}
      {...props}
    >
      <div className="flex-1">
        {title && (
          <BaseToast.Title className="font-mono text-sm font-medium text-(--void-text)">
            {title}
          </BaseToast.Title>
        )}
        {description && (
          <BaseToast.Description className="font-mono text-xs text-(--void-muted)">
            {description}
          </BaseToast.Description>
        )}
      </div>
      <BaseToast.Close className="rounded-full p-1 text-(--void-muted) transition-colors hover:bg-(--void-bg-muted) hover:text-(--void-text)">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            d="M9 3L3 9M3 3L9 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </BaseToast.Close>
    </BaseToast.Root>
  );
}

export const ToastRoot = BaseToast.Root;
export const ToastTitle = BaseToast.Title;
export const ToastDescription = BaseToast.Description;
export const ToastClose = BaseToast.Close;
