# Component Usage Guidelines

## Importing and Using Atomic Components

When building applications with the atomic component library, components should be **imported and rendered using their component functions**, not just by applying BEM class names to HTML elements.

### ✅ Correct Approach: Import and Use Component Functions

**In TypeScript/JavaScript files:**
```typescript
// Import components from the centralized module
import { 
  createButton, 
  createSearchBar,
  createStatCard 
} from './components';

// Use component functions to generate HTML
const buttonHTML = createButton({ 
  text: 'Click Me', 
  variant: 'primary', 
  disabled: false 
});

const searchBarHTML = createSearchBar({
  placeholder: 'Search...',
  value: '',
  loading: false,
  error: null
});
```

**In Alpine.js applications:**
```html
<!-- Import component rendering methods in the Alpine store -->
<div x-data="weatherApp">
  <!-- Use x-html to render components dynamically -->
  <div x-html="renderButton({ text: 'Submit', variant: 'primary', disabled: false })"></div>
  
  <div x-html="renderSearchBar({ 
    placeholder: 'Search for a place...', 
    value: searchQuery,
    loading: loading,
    error: error 
  })"></div>
  
  <div x-html="weatherData && renderStatCard({ 
    label: 'Temperature', 
    value: formatTemperature(weatherData.temperature), 
    variant: 'highlighted' 
  })"></div>
</div>
```

### ❌ Incorrect Approach: Only Using BEM Classes

```html
<!-- DON'T: Just applying BEM classes without importing components -->
<div class="stat-card stat-card--highlighted">
  <div class="stat-card__label">Temperature</div>
  <div class="stat-card__value">72°F</div>
</div>

<!-- This approach loses the benefits of component encapsulation -->
```

---

## Why Import and Use Component Functions?

### 1. **Single Source of Truth**
Component functions define both structure AND styling. Changes to the component automatically propagate everywhere it's used.

### 2. **Type Safety**
TypeScript interfaces ensure you pass the correct props:
```typescript
interface ButtonProps {
  text: string;
  variant: 'primary' | 'secondary';
  disabled: boolean;
}
```

### 3. **Consistency**
All instances of a component are guaranteed to have the same structure and behavior.

### 4. **Maintainability**
Update the component once in its source file, and all usages update automatically.

### 5. **Testability**
Components can be tested in isolation in Storybook with various prop combinations.

---

## Component Integration Pattern

### Step 1: Create Central Export Module

Create `src/components.ts` to export all components:

```typescript
// Component integration module
export { createButton } from './components/atoms/Button/Button';
export type { ButtonProps } from './components/atoms/Button/Button';

export { createInput } from './components/atoms/Input/Input';
export type { InputProps } from './components/atoms/Input/Input';

// ... export all other components
```

### Step 2: Import in Application Store/Logic

```typescript
import { 
  createButton, 
  createInput,
  createSearchBar,
  // ... other components
} from './components';

export interface AppStore {
  // Component rendering methods
  renderButton: typeof createButton;
  renderInput: typeof createInput;
  renderSearchBar: typeof createSearchBar;
}

export function createAppStore(): AppStore {
  return {
    // Assign component functions
    renderButton: createButton,
    renderInput: createInput,
    renderSearchBar: createSearchBar,
    // ... other methods
  };
}
```

### Step 3: Use in HTML with Alpine.js

```html
<div x-data="appStore">
  <!-- Render components using x-html -->
  <div x-html="renderButton({ text: 'Click Me', variant: 'primary', disabled: false })"></div>
  
  <!-- Pass dynamic data from store -->
  <div x-html="renderSearchBar({ 
    placeholder: 'Search...', 
    value: searchQuery,
    loading: isLoading,
    error: errorMessage 
  })"></div>
  
  <!-- Conditional rendering with components -->
  <div x-html="userData && renderStatCard({ 
    label: 'Score', 
    value: userData.score.toString(), 
    variant: 'highlighted' 
  })"></div>
</div>
```

---

## Handling Interactivity with Alpine.js

Since `x-html` renders static HTML, you need to maintain Alpine.js directives for interactivity:

### Pattern 1: Wrapper Element with Event Handler

```html
<!-- Wrap component in div with Alpine event handler -->
<div @click="handleClick()" 
     x-html="renderButton({ text: 'Click Me', variant: 'primary', disabled: false })">
</div>
```

### Pattern 2: Hidden Interactive Elements

```html
<!-- Render component for display -->
<div x-html="renderSearchBar({ placeholder: 'Search...', value: searchQuery })"></div>

<!-- Hidden input maintains Alpine.js binding -->
<input 
  type="text" 
  x-model="searchQuery"
  @keyup.enter="performSearch()"
  style="display: none;">
```

### Pattern 3: Template Loops for Lists

```html
<!-- Render list component -->
<div x-html="renderDailyForecast({ days: forecastDays, selectedIndex: selectedDay })"></div>

<!-- Hidden buttons maintain click handlers -->
<template x-for="(day, index) in forecastDays" :key="index">
  <button @click="selectDay(index)" style="display: none;"></button>
</template>
```

---

## Component CSS Import

All component CSS must be imported in the main application entry point:

```typescript
// src/main.ts
import './styles/tokens.css';

// Import all component styles
import './components/atoms/Button/Button.css';
import './components/atoms/Input/Input.css';
import './components/atoms/WeatherIcon/WeatherIcon.css';
// ... import all other component CSS files
```

This ensures:
- Design tokens are available globally
- Component styles are bundled and optimized
- BEM classes work correctly when components render

---

## Summary

✅ **DO:**
- Import component functions from `src/components.ts`
- Use `x-html` to render components in Alpine.js
- Pass props as objects to component functions
- Import all component CSS in main entry point
- Use wrapper elements or hidden elements for Alpine.js interactivity

❌ **DON'T:**
- Manually write HTML with only BEM classes
- Skip importing component functions
- Forget to import component CSS files
- Try to add Alpine directives inside `x-html` (they won't work)

This approach ensures components are truly reusable, maintainable, and type-safe across your application.
