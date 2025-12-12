import * as React from 'react';
import { Select as BaseSelect } from '@base-ui/react/select';
import { CaretDownIcon, CheckIcon } from '@phosphor-icons/react';
import { cn } from './utils';

function isElementWithChildren(
  node: React.ReactNode
): node is React.ReactElement<{ children?: React.ReactNode }> {
  return React.isValidElement(node);
}

function getTextFromNode(node: React.ReactNode): string | null {
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node);
  }

  if (Array.isArray(node)) {
    const text = node
      .map((child) => getTextFromNode(child))
      .filter(Boolean)
      .join('')
      .trim();
    return text || null;
  }

  if (isElementWithChildren(node)) {
    return getTextFromNode(node.props.children);
  }

  return null;
}

function extractOptionLabels(
  children: React.ReactNode
): Record<string, string> {
  const labels: Record<string, string> = {};

  const visit = (node: React.ReactNode) => {
    if (Array.isArray(node)) {
      node.forEach(visit);
      return;
    }

    if (isSelectItemElement(node) && node.props.value != null) {
      const text =
        node.props.textValue ??
        getTextFromNode(node.props.children) ??
        String(node.props.value);
      labels[String(node.props.value)] = text;
    }

    if (isElementWithChildren(node)) {
      visit(node.props.children);
    }
  };

  visit(children);
  return labels;
}

export type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

export interface SelectItemProps
  extends React.ComponentProps<typeof BaseSelect.Item> {
  textValue?: string;
}

function isSelectItemElement(
  node: React.ReactNode
): node is React.ReactElement<SelectItemProps> {
  return React.isValidElement(node) && node.type === SelectItem;
}

type SelectOptionRegistry = {
  labels: Record<string, string>;
  registerOption: (value: string, label: string) => void;
  unregisterOption: (value: string) => void;
};

const SelectOptionContext = React.createContext<SelectOptionRegistry | null>(
  null
);

function useSelectOptionContext() {
  return React.useContext(SelectOptionContext);
}

export function Select(props: React.ComponentProps<typeof BaseSelect.Root>) {
  const staticLabels = React.useMemo(
    () => extractOptionLabels(props.children),
    [props.children]
  );
  const [labels, setLabels] =
    React.useState<Record<string, string>>(staticLabels);

  React.useEffect(() => {
    setLabels(staticLabels);
  }, [staticLabels]);

  const registerOption = React.useCallback((value: string, label: string) => {
    setLabels((prev) =>
      prev[value] === label ? prev : { ...prev, [value]: label }
    );
  }, []);

  const unregisterOption = React.useCallback((value: string) => {
    setLabels((prev) => {
      if (!(value in prev)) {
        return prev;
      }
      const next = { ...prev };
      delete next[value];
      return next;
    });
  }, []);

  const contextValue = React.useMemo(
    () => ({ labels, registerOption, unregisterOption }),
    [labels, registerOption, unregisterOption]
  );

  return (
    <SelectOptionContext.Provider value={contextValue}>
      <BaseSelect.Root data-slot="select" {...props} />
    </SelectOptionContext.Provider>
  );
}

export interface SelectTriggerProps
  extends React.ComponentProps<typeof BaseSelect.Trigger> {
  placeholder?: string;
}

export function SelectTrigger({
  className,
  placeholder = 'Select...',
  ...props
}: SelectTriggerProps) {
  const optionContext = useSelectOptionContext();
  return (
    <BaseSelect.Trigger
      data-slot="select-trigger"
      className={cn(
        'flex h-10 w-full items-center justify-between rounded-lg px-3',
        'bg-(--void-surface) text-sm text-(--void-text)',
        'border border-(--void-border)',
        'transition-colors duration-150',
        'hover:border-(--void-border-hover)',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--void-primary)/30 focus-visible:border-(--void-primary)',
        'data-popup-open:border-(--void-primary) data-popup-open:ring-2 data-popup-open:ring-(--void-primary)/30',
        'disabled:opacity-50 disabled:pointer-events-none',
        className
      )}
      {...props}
    >
      <BaseSelect.Value aria-placeholder={placeholder}>
        {(value: string | null) => {
          if (!value) {
            return <span className="text-(--void-muted)">{placeholder}</span>;
          }

          const label = optionContext?.labels?.[value];
          return label ?? value;
        }}
      </BaseSelect.Value>
      <BaseSelect.Icon className="text-(--void-muted)">
        <CaretDownIcon size={14} />
      </BaseSelect.Icon>
    </BaseSelect.Trigger>
  );
}

export function SelectContent({
  className,
  children,
  side = 'bottom',
  ...props
}: React.ComponentProps<typeof BaseSelect.Positioner>) {
  return (
    <BaseSelect.Portal>
      <BaseSelect.Positioner side={side} sideOffset={8} {...props}>
        <BaseSelect.Popup
          data-slot="select-content"
          className={cn(
            'origin-(--transform-origin) min-w-(--anchor-width) rounded-lg p-1.5',
            'bg-(--void-surface) border border-(--void-border)',
            'shadow-(--void-shadow-lg)',
            'transition-all duration-150',
            'data-starting-style:scale-95 data-starting-style:opacity-0',
            'data-ending-style:scale-95 data-ending-style:opacity-0',
            className
          )}
        >
          {children}
        </BaseSelect.Popup>
      </BaseSelect.Positioner>
    </BaseSelect.Portal>
  );
}

export interface SelectItemProps
  extends React.ComponentProps<typeof BaseSelect.Item> {
  textValue?: string;
}

export function SelectItem({
  className,
  children,
  textValue,
  value,
  ...props
}: SelectItemProps) {
  const optionContext = useSelectOptionContext();

  React.useEffect(() => {
    if (!optionContext || value == null) {
      return;
    }

    const labelText =
      textValue ?? (typeof children === 'string' ? children : String(value));

    optionContext.registerOption(String(value), labelText);

    return () => {
      optionContext.unregisterOption(String(value));
    };
  }, [optionContext, value, textValue, children]);

  return (
    <BaseSelect.Item
      data-slot="select-item"
      value={value}
      className={cn(
        'relative flex cursor-pointer select-none items-center rounded-md px-2.5 py-1.5 pr-8',
        'text-sm text-(--void-text) outline-none',
        'transition-colors duration-100',
        'data-highlighted:bg-(--void-bg-muted)',
        'data-disabled:pointer-events-none data-disabled:opacity-50',
        className
      )}
      {...props}
    >
      <BaseSelect.ItemText>{children}</BaseSelect.ItemText>
      <BaseSelect.ItemIndicator className="absolute right-2 text-(--void-primary)">
        <CheckIcon size={14} weight="bold" />
      </BaseSelect.ItemIndicator>
    </BaseSelect.Item>
  );
}

export function SelectGroup({
  className,
  ...props
}: React.ComponentProps<typeof BaseSelect.Group>) {
  return (
    <BaseSelect.Group
      data-slot="select-group"
      className={cn(className)}
      {...props}
    />
  );
}

export function SelectGroupLabel({
  className,
  ...props
}: React.ComponentProps<typeof BaseSelect.GroupLabel>) {
  return (
    <BaseSelect.GroupLabel
      data-slot="select-group-label"
      className={cn(
        'px-2.5 py-1.5 text-xs font-medium text-(--void-muted)',
        className
      )}
      {...props}
    />
  );
}

export function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="select-separator"
      className={cn('my-1.5 h-px bg-(--void-border)', className)}
      {...props}
    />
  );
}
