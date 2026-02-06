# Design System Documentation

## Overview

The weather application now uses a **3-tier SCSS-based design system** that follows the specifications from the style guide. This ensures consistency, maintainability, and adherence to the design requirements.

---

## Design System Architecture

### Tier 1: Base Design Tokens (SCSS Variables)
**File:** `src/styles/base.scss`

Foundational values from the style guide. These are **SCSS variables** (`$variable-name`) that define the raw design values.

#### Colors
```scss
// Neutral Colors
$neutral-900: hsl(243, 96%, 9%);
$neutral-800: hsl(243, 27%, 20%);
$neutral-700: hsl(243, 23%, 24%);
$neutral-600: hsl(243, 23%, 30%);
$neutral-300: hsl(240, 6%, 70%);
$neutral-200: hsl(250, 6%, 84%);
$neutral-0: hsl(0, 0%, 100%);

// Orange Colors
$orange-500: hsl(28, 100%, 52%);

// Blue Colors
$blue-500: hsl(233, 67%, 56%);
$blue-700: hsl(248, 70%, 36%);
```

#### Typography
```scss
// Font Families
$font-family-primary: 'DM Sans', sans-serif;
$font-family-display: 'Bricolage Grotesque', sans-serif;

// Font Weights
$font-weight-light: 300;
$font-weight-medium: 500;
$font-weight-semibold: 600;
$font-weight-bold: 700;

// Base Font Size
$font-size-base: 1.125rem; // 18px
```

#### Breakpoints
```scss
$breakpoint-mobile: 23.4375rem;  // 375px
$breakpoint-desktop: 90rem;      // 1440px
```

#### Spacing (Relative Units)
```scss
$spacing-xs: 0.5rem;   // 8px
$spacing-sm: 1rem;     // 16px
$spacing-md: 1.5rem;   // 24px
$spacing-lg: 2rem;     // 32px
$spacing-xl: 3rem;     // 48px
$spacing-2xl: 4rem;    // 64px
```

#### Border Radius
```scss
$radius-sm: 0.5rem;    // 8px
$radius-md: 1rem;      // 16px
$radius-lg: 1.5rem;    // 24px
$radius-xl: 2rem;      // 32px
```

#### Transitions
```scss
$transition-fast: 150ms ease-in-out;
$transition-base: 200ms ease-in-out;
$transition-slow: 300ms ease-in-out;
```

---

### Tier 2: Semantic Design Tokens (CSS Custom Properties)
**File:** `src/styles/semantic.scss`

Maps base tokens to semantic purposes. These are **CSS Custom Properties** (`--variable-name`) that give meaning to the base values.

#### Background Colors
```scss
--background-primary: #{$neutral-900};
--background-secondary: #{$neutral-800};
--background-tertiary: #{$neutral-700};
--background-elevated: #{$neutral-600};
```

#### Text Colors
```scss
--text-primary: #{$neutral-0};
--text-secondary: #{$neutral-200};
--text-tertiary: #{$neutral-300};
--text-inverse: #{$neutral-900};
```

#### Accent Colors
```scss
--accent-primary: #{$blue-500};
--accent-primary-dark: #{$blue-700};
--accent-secondary: #{$orange-500};
```

#### Interactive States
```scss
--interactive-default: #{$blue-500};
--interactive-hover: #{$blue-700};
--interactive-disabled: #{$neutral-600};
```

#### Typography
```scss
--font-primary: #{$font-family-primary};
--font-display: #{$font-family-display};

--font-weight-light: #{$font-weight-light};
--font-weight-medium: #{$font-weight-medium};
--font-weight-semibold: #{$font-weight-semibold};
--font-weight-bold: #{$font-weight-bold};

--font-size-base: #{$font-size-base};
--font-size-sm: 0.875rem;   // 14px
--font-size-lg: 1.25rem;    // 20px
--font-size-xl: 1.5rem;     // 24px
--font-size-2xl: 2rem;      // 32px
--font-size-3xl: 2.5rem;    // 40px
--font-size-4xl: 3rem;      // 48px
--font-size-5xl: 4rem;      // 64px
```

---

### Tier 3: Component-Specific Design Tokens (CSS Custom Properties)
**Location:** Co-located in each component's SCSS file (e.g. `src/components/atoms/Button/Button.scss`)

Component-specific values that use semantic tokens. Each component declares its own `:root` block with its CSS Custom Properties.

#### Example: Button Component (`Button.scss`)
```scss
:root {
  --button-bg-primary: var(--accent-primary);
  --button-bg-primary-hover: var(--accent-primary-dark);
  --button-text-primary: var(--text-primary);
  --button-padding-x: var(--spacing-md);
  --button-padding-y: var(--spacing-sm);
  --button-radius: var(--radius-md);
}
```

---

## Color Palette

Based on the style guide, only these colors are used:

### Neutral
- **Neutral 900**: `hsl(243, 96%, 9%)` - Primary background
- **Neutral 800**: `hsl(243, 27%, 20%)` - Secondary background
- **Neutral 700**: `hsl(243, 23%, 24%)` - Tertiary background
- **Neutral 600**: `hsl(243, 23%, 30%)` - Elevated background
- **Neutral 300**: `hsl(240, 6%, 70%)` - Tertiary text
- **Neutral 200**: `hsl(250, 6%, 84%)` - Secondary text
- **Neutral 0**: `hsl(0, 0%, 100%)` - Primary text (white)

### Orange
- **Orange 500**: `hsl(28, 100%, 52%)` - Secondary accent (errors, warnings)

### Blue
- **Blue 500**: `hsl(233, 67%, 56%)` - Primary accent
- **Blue 700**: `hsl(248, 70%, 36%)` - Primary accent dark (hover states)

---

## Typography

### Font Families
- **Primary**: DM Sans (300, 500, 600, 600i, 700)
  - Used for: Body text, labels, UI elements
- **Display**: Bricolage Grotesque (700)
  - Used for: Large numbers, headings, emphasis

### Font Sizes (Relative Units)
- **Base**: 1.125rem (18px)
- **Small**: 0.875rem (14px)
- **Large**: 1.25rem (20px)
- **XL**: 1.5rem (24px)
- **2XL**: 2rem (32px)
- **3XL**: 2.5rem (40px)
- **4XL**: 3rem (48px)
- **5XL**: 4rem (64px)

### Font Weights
- **Light**: 300
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700

---

## Spacing Scale (Relative Units)

All spacing uses **rem** units for accessibility and scalability:

- **XS**: 0.5rem (8px)
- **SM**: 1rem (16px)
- **MD**: 1.5rem (24px)
- **LG**: 2rem (32px)
- **XL**: 3rem (48px)
- **2XL**: 4rem (64px)

---

## Breakpoints

- **Mobile**: 23.4375rem (375px)
- **Desktop**: 90rem (1440px)

Responsive design tested from 320px to large screens.

---

## Component Usage

### Importing the Design System

The design system is imported via barrel files in `src/main.tsx`:

```typescript
// Import SCSS design system (Tier 1 + 2)
import './styles/semantic.scss';

// Import component styles
import './components/atoms/index.scss';
import './components/molecules/index.scss';
import './components/organisms/index.scss';
```

`semantic.scss` uses `@use './base.scss' as *` to load Tier 1 variables.

### Using Design Tokens in Components

Each component SCSS file declares its own Tier 3 variables in a `:root` block, then uses them in flat BEM selectors:

```scss
:root {
  --button-bg-primary: var(--accent-primary);
  --button-padding-y: var(--spacing-sm);
}

.button {
  padding: var(--button-padding-y) var(--button-padding-x);
  background: var(--button-bg-primary);
}

.button--primary {
  &:hover {
    background: var(--button-bg-primary-hover);
  }
}
```

---

## Benefits

### 1. **Consistency**
All components use the same color palette, typography, and spacing from the style guide.

### 2. **Maintainability**
- Change a Tier 1 variable → Updates all semantic and component tokens
- Change a Tier 2 variable → Updates all components using that semantic token
- Change a Tier 3 variable → Updates specific component styling

### 3. **Type Safety**
SCSS variables provide compile-time checking for typos and invalid values.

### 4. **Scalability**
Easy to add new colors, spacing values, or component tokens following the same pattern.

### 5. **Accessibility**
- Relative units (rem, em, %) ensure proper scaling
- Semantic color names improve readability
- Consistent spacing improves usability

---

## File Structure

```
src/
├── styles/
│   ├── base.scss              # Tier 1: SCSS variables (base tokens)
│   └── semantic.scss          # Tier 2: CSS custom properties (semantic tokens)
├── components/
│   ├── atoms/
│   │   ├── index.ts           # Barrel export (components)
│   │   ├── index.scss         # Barrel import (styles)
│   │   └── Button/
│   │       ├── Button.tsx     # React component
│   │       ├── Button.scss    # Styles + Tier 3 tokens (:root)
│   │       ├── Button.test.tsx
│   │       └── Button.stories.tsx
│   ├── molecules/
│   │   ├── index.ts
│   │   ├── index.scss
│   │   └── ...
│   └── organisms/
│       ├── index.ts
│       ├── index.scss
│       └── ...
├── components.ts              # Top-level barrel (re-exports all)
└── main.tsx                   # Entry point, imports semantic.scss + barrel SCSS
```

---

## Design Alignment

The design system matches the desktop design image:

✅ **Colors**: Only uses colors from style guide (Neutral, Orange, Blue)  
✅ **Typography**: DM Sans and Bricolage Grotesque with correct weights  
✅ **Spacing**: Relative units (rem) throughout  
✅ **Breakpoints**: Mobile (375px) and Desktop (1440px)  
✅ **Components**: Match design with proper styling and hierarchy  

---

## Summary

The weather application now has a **production-ready, scalable design system** with:

1. **3-tier token architecture** (Base → Semantic → Component)
2. **SCSS variables** for Tier 1 (compile-time values)
3. **CSS Custom Properties** for Tiers 2 & 3 (runtime flexibility)
4. **Style guide compliance** (only specified colors, fonts, breakpoints)
5. **Relative units** throughout (rem, em, %)
6. **Component-specific tokens** for easy customization

All styling is centralized, maintainable, and follows industry best practices.
