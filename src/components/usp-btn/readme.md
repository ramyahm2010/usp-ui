# Button `<usp-btn>`

A customizable button component designed for flexibility, supporting various colors, sizes, and variants. Built with Stencil.

---

## Features

- Supports both design tokens (e.g., `primary-500`) and raw color values (e.g., `#FF5733`).
- Multiple sizes: `sm`, `md`, `lg`.
- Variants: `flat` and `outlined`.
- Fully customizable styles with support for CSS variables.

---

## Usage

### Basic Example

```html
<usp-btn color="primary-500" size="md" variant="flat">Click Me</usp-btn> <usp-btn color="#FF5733" size="lg" variant="outlined" disabled>Disabled</usp-btn>
```

---

## Properties

| Property   | Type                              | Default    | Description                                                                                   |
| ---------- | --------------------------------- | ---------- | --------------------------------------------------------------------------------------------- |
| `color`    | `string`                          | `null`     | The color of the button. Accepts design tokens (e.g., `primary-500`) or hex code (`#FF5733`). |
| `size`     | `'sm' \| 'md' \| 'lg'`            | `'md'`     | The size of the button.                                                                       |
| `variant`  | `'flat' \| 'outlined'`            | `'flat'`   | The style variant of the button.                                                              |
| `disabled` | `boolean`                         | `false`    | Whether the button is disabled.                                                               |
| `type`     | `'button' \| 'submit' \| 'reset'` | `'button'` | The HTML type of the button.                                                                  |

---

## Styling

### CSS Variables

This component leverages CSS variables for styling when using color tokens. Ensure your design tokens are defined in your global styles.

#### Example:

```css
:root {
  --primary-500: #25935f;
  --accent-100: #f3fcf6;
}
```

### Inline Styling with Hex Codes

If you don't use tokens, you can pass a hex value directly to the `color` property:

```html
<usp-btn color="#FF5733" variant="outlined">Hex Color</usp-btn>
```

---

## Examples

### Flat Variant (Using Tokens)

```html
<usp-btn color="primary-500" size="sm">Small Button</usp-btn>
<usp-btn color="accent-100" size="md">Medium Button</usp-btn>
<usp-btn color="secondary-300" size="lg">Large Button</usp-btn>
```

### Outlined Variant (Using Hex)

```html
<usp-btn color="#FF5733" variant="outlined">Outlined Button</usp-btn> <usp-btn color="#000000" size="lg" variant="outlined">Outlined Black</usp-btn>
```

### Disabled Button

```html
<usp-btn color="primary-500" size="md" disabled>Disabled Button</usp-btn>
```

---

## Accessibility

- Use the `disabled` property for non-interactive states.
- Ensure sufficient contrast between the button’s `backgroundColor` and `color` for readability.

---

## Notes

- **Design Token Support**: For consistent styling across your application, use design tokens with the `color` property (e.g., `primary-500`).
- **Customizable Styles**: Modify button styles globally using CSS variables.
