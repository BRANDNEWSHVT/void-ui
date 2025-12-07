# Void UI

A dark-first React component library built on [Base UI](https://base-ui.com) and [Tailwind CSS](https://tailwindcss.com).

## Installation

```bash
npm install void-ui
# or
yarn add void-ui
# or
pnpm add void-ui
# or
bun add void-ui
```

## Requirements

- React 18+
- Tailwind CSS 4+

## Setup

### 1. Import the styles

Add the Void UI styles to your main CSS file:

```css
@import "void-ui/styles.css";
```

Or import in your entry file:

```tsx
import "void-ui/styles.css";
```

### 2. Configure Tailwind CSS

Make sure your `tailwind.config.js` includes the Void UI package:

```js
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/void-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
};
```

## Usage

```tsx
import { Button, Card, CardHeader, CardTitle, CardBody } from "void-ui";

function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to Void UI</CardTitle>
      </CardHeader>
      <CardBody>
        <Button variant="primary">Get Started</Button>
      </CardBody>
    </Card>
  );
}
```

## Components

### Layout
- `Stack` - Flexbox layout helper
- `Separator` - Horizontal/vertical divider
- `Divider` - Divider with optional text

### Forms
- `Button` - Primary, Secondary, Ghost, Danger variants
- `Input` - Text input with label and validation
- `Textarea` - Multi-line text input
- `Checkbox` - Checkbox with label
- `Switch` - Toggle switch
- `Radio` - Radio buttons
- `Select` - Dropdown select
- `Slider` - Range slider
- `Field` - Form field wrapper
- `Fieldset` - Group of form fields

### Display
- `Alert` - Notification banners
- `Avatar` - User avatar
- `Badge` - Status badges
- `Card` - Content container
- `Chip` - Tags/chips
- `IconBox` - Icon container
- `Item` - List item
- `Spinner` - Loading spinner
- `Table` - Data table
- `Heading` - Semantic headings
- `Text` - Paragraph text
- `Label` - Form labels
- `Kbd` - Keyboard shortcuts

### Navigation
- `Tabs` - Tab navigation
- `Accordion` - Collapsible sections
- `Pagination` - Page navigation
- `Menu` - Dropdown menu
- `Dropdown` - Enhanced dropdown

### Overlay
- `Dialog` - Modal dialog
- `AlertDialog` - Confirmation dialog
- `Popover` - Floating popover
- `Tooltip` - Hover tooltip
- `Toast` - Notification toasts
- `Collapsible` - Collapsible panel

### Feedback
- `Progress` - Progress bar

## License

MIT
