import { Avatar as BaseAvatar } from '@base-ui-components/react/avatar';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './utils';

export const avatarVariants = cva(
  'relative rounded-full select-none bg-(--void-bg-muted) flex items-center justify-center text-(--void-text) font-semibold',
  {
    variants: {
      size: {
        sm: 'size-8 text-xs',
        md: 'size-10 text-sm',
        lg: 'size-12 text-base',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export function Avatar({
  size,
  className,
  ...props
}: React.ComponentProps<typeof BaseAvatar.Root> &
  VariantProps<typeof avatarVariants>) {
  return (
    <BaseAvatar.Root
      data-slot="avatar"
      className={cn(avatarVariants({ size, className }))}
      {...props}
    />
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
        'flex items-center justify-center size-full rounded-full',
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
