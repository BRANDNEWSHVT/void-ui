# Void UI

A dark-first, composable React component library built on [Base UI](https://base-ui.com) and [Tailwind CSS v4](https://tailwindcss.com).

> **Note:** This is an experimental personal project. APIs may change without notice.

## Installation

```bash
pnpm add @radenadri/void-ui
```

## Requirements

- React 18+
- Tailwind CSS 4+

## Setup

### 1. Import Styles

```css
/* app.css */
@import "tailwindcss";
@import "@radenadri/void-ui/styles.css";

@source "../node_modules/@radenadri/void-ui/dist";
```

### 2. Add Dark Class

```html
<html class="dark">
```

## Usage

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from '@radenadri/void-ui'

function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to Void UI</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Get Started</Button>
      </CardContent>
    </Card>
  )
}
```

## Components

### Layout
- **Stack** - Flexbox layout with spacing
- **Separator** - Horizontal/vertical divider

### Forms
- **Button** - Multiple variants and sizes
- **Input** - Text input
- **Textarea** - Multi-line input
- **Checkbox** - Checkbox with group support
- **Switch** - Toggle with label/description
- **Radio** - Radio group
- **Select** - Composable dropdown (SelectTrigger, SelectContent, SelectItem)
- **Slider** - Range slider with value display
- **Field** - Form field wrapper (FieldRoot, FieldLabel, FieldDescription, FieldError)
- **Fieldset** - Group of fields
- **NumberField** - Numeric input with increment/decrement

### Display
- **Alert** - Contextual feedback
- **Avatar** - User avatar with fallback
- **Badge** - Status indicators
- **Card** - Content container
- **Spinner** - Loading indicator
- **Table** - Data table (TableContainer, TableHeader, TableBody, etc.)
- **Text** - Typography
- **Heading** - Semantic headings
- **Kbd** - Keyboard shortcuts

### Navigation
- **Tabs** - Tab panels (Tabs, TabsList, TabsTrigger, TabsContent)
- **Accordion** - Collapsible sections
- **Pagination** - Page navigation
- **Menu** - Dropdown menu
- **Dropdown** - Enhanced dropdown with checkbox items

### Overlay
- **Dialog** - Modal dialog
- **AlertDialog** - Confirmation dialog
- **Popover** - Floating content
- **Tooltip** - Hover hints
- **Toast** - Notifications
- **Collapsible** - Expandable panel

### Feedback
- **Progress** - Progress bar with variants

## Icons

Void UI re-exports [Phosphor Icons](https://phosphoricons.com):

```tsx
import { Bell, Gear, User } from '@radenadri/void-ui'
```

## License

MIT
