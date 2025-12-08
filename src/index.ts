// Void UI - A dark-first React component library
// Built on Base UI and Tailwind CSS

// Utils
export { cn } from './utils'

// Button
export { Button, buttonVariants } from './button'
export type { ButtonProps } from './button'

// Input
export { Input } from './input'
export type { InputProps } from './input'

// Checkbox
export { Checkbox, CheckboxGroup } from './checkbox'
export type { CheckboxProps } from './checkbox'

// Switch
export { Switch } from './switch'
export type { SwitchProps } from './switch'

// Select
export {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectGroupLabel,
  SelectSeparator,
} from './select'
export type { SelectOption, SelectTriggerProps } from './select'

// Dialog
export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from './dialog'
export type { DialogContentProps } from './dialog'

// Popover
export {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
  PopoverTitle,
  PopoverDescription,
} from './popover'
export type { PopoverContentProps } from './popover'

// Tooltip
export {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipPortal,
  TooltipPositioner,
  TooltipPopup,
  TooltipArrow,
  TooltipContent,
} from './tooltip'
export type { TooltipContentProps } from './tooltip'

// Menu
export {
  Menu,
  MenuTrigger,
  MenuContent,
  MenuItem,
  MenuSeparator,
  MenuGroup,
  MenuGroupLabel,
} from './menu'
export type { MenuItem as MenuItemType, MenuItemProps } from './menu'

// Tabs
export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from './tabs'

// Accordion
export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './accordion'

// Toast
export {
  ToastProvider,
  ToastPortal,
  ToastViewport,
  ToastRoot,
  ToastContent,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastClose,
  toastManager,
  useToastManager,
} from './toast'

// Progress
export { Progress, ProgressLabel, progressVariants } from './progress'
export type { ProgressProps } from './progress'

// Slider
export { Slider, SliderLabel } from './slider'
export type { SliderProps } from './slider'

// Alert Dialog
export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from './alert-dialog'

// Alert
export { Alert, AlertTitle, AlertDescription, AlertClose, alertVariants } from './alert'
export type { AlertProps, AlertCloseProps } from './alert'

// Avatar
export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarIndicator,
  avatarVariants,
  avatarIndicatorVariants,
} from './avatar'
export type { AvatarProps } from './avatar'

// Badge
export { Badge, badgeVariants } from './badge'

// Card
export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardBody,
  CardFooter,
  cardVariants,
} from './card'

// Chip
export { Chip, ChipButton, chipVariants } from './chip'
export type { ChipProps } from './chip'

// Collapsible
export { Collapsible, CollapsibleTrigger, CollapsibleContent } from './collapsible'
export type { CollapsibleTriggerProps } from './collapsible'

// Divider
export { Divider, dividerVariants } from './divider'

// Dropdown
export {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
  DropdownGroup,
  DropdownGroupLabel,
  DropdownCheckboxItem,
  DropdownRadioGroup,
  DropdownRadioItem,
} from './dropdown'

// Field
export {
  Field as FieldRoot,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldValidity,
} from './field'
export type { FieldLabelProps } from './field'

// Fieldset
export { Fieldset, FieldsetLegend, FieldsetDescription } from './fieldset'

// Heading
export { Heading, headingVariants } from './heading'
export type { HeadingProps } from './heading'

// Icon Box
export { IconBox, iconBoxVariants } from './icon-box'

// Item
export {
  Item,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemMedia,
  ItemAction,
  itemVariants,
} from './item'

// Kbd
export { Kbd, KbdGroup, kbdVariants } from './kbd'
export type { KbdProps } from './kbd'

// Label
export { Label } from './label'
export type { LabelProps } from './label'

// Pagination
export {
  Pagination,
  PaginationList,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from './pagination'
export type {
  PaginationItemProps,
  PaginationPreviousProps,
  PaginationNextProps,
} from './pagination'

// Radio
export { Radio, RadioGroup, RadioItem } from './radio'
export type { RadioItemProps } from './radio'

// Separator
export { Separator } from './separator'
export type { SeparatorProps } from './separator'

// Spinner
export { Spinner, spinnerVariants } from './spinner'
export type { SpinnerProps } from './spinner'

// Stack
export { Stack, stackVariants } from './stack'
export type { StackProps } from './stack'

// Table
export {
  Table,
  TableContainer,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  TableCaption,
} from './table'

// Text
export { Text, TextLink, Strong, Code, textVariants } from './text'
export type { TextProps } from './text'

// Textarea
export { Textarea, textareaVariants } from './textarea'
export type { TextareaProps } from './textarea'

// Icons (re-export from Phosphor)
export * from './icons'
