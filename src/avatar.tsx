import { Avatar as BaseAvatar } from '@base-ui/react/avatar';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './utils';

export const avatarVariants = cva(
  'relative inline-flex shrink-0 overflow-hidden rounded-full select-none',
  {
    variants: {
      size: {
        xs: 'size-6 text-[10px]',
        sm: 'size-8 text-xs',
        md: 'size-10 text-sm',
        lg: 'size-12 text-base',
        xl: 'size-14 text-lg',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export interface AvatarProps
  extends Omit<React.ComponentProps<typeof BaseAvatar.Root>, 'children'>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  fallback?: string;
  name?: string;
}

export function Avatar({
  size,
  className,
  src,
  alt,
  fallback,
  name,
  ...props
}: AvatarProps) {
  const initials = fallback || (name ? getInitials(name) : '?');

  return (
    <BaseAvatar.Root
      data-slot="avatar"
      className={cn(avatarVariants({ size, className }))}
      {...props}
    >
      {src && (
        <BaseAvatar.Image
          src={src}
          alt={alt || name || 'Avatar'}
          className="size-full rounded-full object-cover"
        />
      )}
      <BaseAvatar.Fallback
        className={cn(
          'flex size-full items-center justify-center rounded-full',
          'bg-(--void-bg-muted) text-(--void-text) font-medium'
        )}
      >
        {initials}
      </BaseAvatar.Fallback>
    </BaseAvatar.Root>
  );
}

export function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof BaseAvatar.Image>) {
  return (
    <BaseAvatar.Image
      data-slot="avatar-image"
      className={cn('size-full rounded-full object-cover', className)}
      {...props}
    />
  );
}

export function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof BaseAvatar.Fallback>) {
  return (
    <BaseAvatar.Fallback
      data-slot="avatar-fallback"
      className={cn(
        'flex size-full items-center justify-center rounded-full',
        'bg-(--void-bg-muted) text-(--void-text) font-medium',
        className
      )}
      {...props}
    />
  );
}

export const avatarIndicatorVariants = cva(
  'absolute flex items-center justify-center rounded-full',
  {
    variants: {
      position: {
        top: 'top-0 right-0',
        bottom: 'bottom-0 right-0',
      },
      size: {
        sm: 'size-2.5',
        md: 'size-3',
        lg: 'size-3.5',
      },
    },
    defaultVariants: {
      position: 'bottom',
      size: 'md',
    },
  }
);

export function AvatarIndicator({
  position,
  size,
  className,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof avatarIndicatorVariants>) {
  return (
    <div
      data-slot="avatar-indicator"
      className={cn(avatarIndicatorVariants({ position, size, className }))}
      {...props}
    />
  );
}
