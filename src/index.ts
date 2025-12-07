// Void UI - A dark-first React component library
// Built on Base UI and Tailwind CSS

// Utils
export { cn } from './utils'

// Button
export { Button, buttonVariants } from './button'
export type { ButtonProps } from './button'

// Input
export { Input, Field } from './input'
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
  SelectRoot,
  SelectValue,
  SelectIcon,
  SelectPortal,
  SelectPositioner,
  SelectPopup,
  SelectItem,
  SelectItemText,
  SelectItemIndicator,
} from './select'
export type { SelectOption, SelectProps } from './select'

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

// Popover
export {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
} from './popover'

// Tooltip
export {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from './tooltip'

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
export type { MenuItem as MenuItemType } from './menu'

// Tabs
export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsIndicator,
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
  ToastViewport,
  Toast,
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastClose,
} from './toast'
export type { ToastRootProps } from './toast'

// Progress
export {
  Progress,
  ProgressRoot,
  ProgressTrack,
  ProgressIndicator,
} from './progress'
export type { ProgressProps } from './progress'

// Slider
export {
  Slider,
  SliderRoot,
  SliderControl,
  SliderTrack,
  SliderIndicator,
  SliderThumb,
} from './slider'
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
export { Alert, AlertTitle, AlertDescription, alertVariants } from './alert'

// Avatar
export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarIndicator,
  avatarVariants,
  avatarIndicatorVariants,
} from './avatar'

// Badge
export { Badge, badgeVariants } from './badge'

// Card
export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardBody,
  CardFooter,
  cardVariants,
} from './card'

// Chip
export { Chip, ChipButton, chipVariants } from './chip'

// Collapsible
export { Collapsible, CollapsibleTrigger, CollapsibleContent } from './collapsible'

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

// Fieldset
export { Fieldset, FieldsetLegend } from './fieldset'

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

// Label
export { Label } from './label'

// Pagination
export {
  Pagination,
  PaginationList,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from './pagination'
export type { PaginationItemProps } from './pagination'

// Radio
export { Radio, RadioGroup, RadioItem } from './radio'
export type { RadioItemProps } from './radio'

// Separator
export { Separator, separatorVariants } from './separator'

// Spinner
export { Spinner } from './spinner'
export type { SpinnerProps } from './spinner'

// Stack
export { Stack, stackVariants } from './stack'

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
export { Text, TextLink, Strong, Code } from './text'

// Textarea
export { Textarea, textareaVariants } from './textarea'

// Icons (re-export from Phosphor)
export * from './icons'
