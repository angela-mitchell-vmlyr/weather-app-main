# Component Integration Guide

## Overview

The weather application now properly **imports and uses atomic component functions** rather than just applying BEM class names. This ensures true component reusability, type safety, and maintainability.

## What Changed

### Before: BEM Classes Only ❌
```html
<!-- Just applying CSS classes -->
<div class="stat-card stat-card--highlighted">
  <div class="stat-card__label">Temperature</div>
  <div class="stat-card__value">72°F</div>
</div>
```

### After: Component Functions ✅
```html
<!-- Importing and rendering component -->
<div x-html="renderStatCard({ 
  label: 'Temperature', 
  value: '72°F', 
  variant: 'highlighted' 
})"></div>
```

---

## Architecture

### 1. Component Export Module

**File:** `src/components.ts`

Central module that exports all atomic components:

```typescript
// Functions
export { createButton } from './components/atoms/Button/Button';
export { createInput } from './components/atoms/Input/Input';
export { createWeatherIcon, getWeatherIcon } from './components/atoms/WeatherIcon/WeatherIcon';
export { createSpinner } from './components/atoms/Spinner/Spinner';
export { createSearchBar } from './components/molecules/SearchBar/SearchBar';
export { createStatCard } from './components/molecules/StatCard/StatCard';
export { createDayCard } from './components/molecules/DayCard/DayCard';
export { createHourlyItem } from './components/molecules/HourlyItem/HourlyItem';
export { createCurrentWeatherCard } from './components/organisms/CurrentWeatherCard/CurrentWeatherCard';
export { createDailyForecast } from './components/organisms/DailyForecast/DailyForecast';
export { createHourlyForecast } from './components/organisms/HourlyForecast/HourlyForecast';

// Types (using export type for isolatedModules)
export type { ButtonProps } from './components/atoms/Button/Button';
export type { InputProps } from './components/atoms/Input/Input';
// ... all other type exports
```

### 2. Alpine.js Store Integration

**File:** `src/weatherStore.ts`

The store imports component functions and exposes them as rendering methods:

```typescript
import { 
  createButton, 
  createInput, 
  createSpinner,
  createSearchBar,
  createStatCard,
  createDayCard,
  createHourlyItem,
  createCurrentWeatherCard,
  createDailyForecast,
  createHourlyForecast
} from './components';

export interface WeatherStore {
  // ... state properties
  
  // Component rendering methods
  renderButton: typeof createButton;
  renderInput: typeof createInput;
  renderSpinner: typeof createSpinner;
  renderSearchBar: typeof createSearchBar;
  renderStatCard: typeof createStatCard;
  renderDayCard: typeof createDayCard;
  renderHourlyItem: typeof createHourlyItem;
  renderCurrentWeatherCard: typeof createCurrentWeatherCard;
  renderDailyForecast: typeof createDailyForecast;
  renderHourlyForecast: typeof createHourlyForecast;
}

export function createWeatherStore(): WeatherStore {
  return {
    // ... state initialization
    
    // Assign component functions
    renderButton: createButton,
    renderInput: createInput,
    renderSpinner: createSpinner,
    renderSearchBar: createSearchBar,
    renderStatCard: createStatCard,
    renderDayCard: createDayCard,
    renderHourlyItem: createHourlyItem,
    renderCurrentWeatherCard: createCurrentWeatherCard,
    renderDailyForecast: createDailyForecast,
    renderHourlyForecast: createHourlyForecast
  };
}
```

### 3. HTML Usage with Alpine.js

**File:** `index.html`

Components are rendered using `x-html` directive:

```html
<div x-data="weatherApp" x-init="init()">
  
  <!-- Button Component -->
  <div @click="toggleUnits()" 
       x-html="renderButton({ text: '⚙️ Units', variant: 'secondary', disabled: false })">
  </div>
  
  <!-- Search Bar Component -->
  <div x-html="renderSearchBar({ 
    placeholder: 'Search for a place...', 
    value: searchQuery,
    loading: loading,
    error: error 
  })"></div>
  
  <!-- Spinner Component -->
  <div x-show="loading" x-html="renderSpinner({ size: 'large' })"></div>
  
  <!-- Current Weather Card Component -->
  <div x-html="weatherData && renderCurrentWeatherCard({
    location: weatherData.location,
    country: weatherData.country,
    date: weatherData.date,
    temperature: formatTemperature(weatherData.temperature),
    weatherCode: weatherData.weatherCode
  })"></div>
  
  <!-- Stat Cards Components -->
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div x-html="weatherData && renderStatCard({ 
      label: 'Feels Like', 
      value: formatTemperature(weatherData.feelsLike), 
      variant: 'highlighted' 
    })"></div>
    <div x-html="weatherData && renderStatCard({ 
      label: 'Humidity', 
      value: weatherData.humidity + '%', 
      variant: 'default' 
    })"></div>
    <div x-html="weatherData && renderStatCard({ 
      label: 'Wind', 
      value: formatWind(weatherData.wind), 
      variant: 'default' 
    })"></div>
    <div x-html="weatherData && renderStatCard({ 
      label: 'Precipitation', 
      value: formatPrecipitation(weatherData.precipitation), 
      variant: 'default' 
    })"></div>
  </div>
  
  <!-- Daily Forecast Component -->
  <div x-html="weatherData && renderDailyForecast({
    days: weatherData.dailyForecast.map((day, index) => ({
      day: day.day,
      weatherCode: day.weatherCode,
      maxTemp: formatTemperature(day.maxTemp),
      minTemp: formatTemperature(day.minTemp),
      isSelected: selectedDay === index
    })),
    selectedIndex: selectedDay
  })"></div>
  
  <!-- Hourly Forecast Component -->
  <div x-html="weatherData && renderHourlyForecast({
    hours: getHourlyForecastForDay().map(hour => ({
      time: hour.time,
      weatherCode: hour.weatherCode,
      temperature: formatTemperature(hour.temperature)
    })),
    selectedDay: weatherData.dailyForecast[selectedDay]?.day || ''
  })"></div>
  
</div>
```

---

## Handling Interactivity

Since `x-html` renders static HTML, Alpine.js directives inside the rendered HTML won't work. Here's how to handle interactivity:

### Pattern 1: Wrapper with Event Handler

```html
<!-- Wrap component in element with Alpine event handler -->
<div @click="toggleUnits()" 
     x-html="renderButton({ text: '⚙️ Units', variant: 'secondary', disabled: false })">
</div>
```

### Pattern 2: Hidden Interactive Elements

```html
<!-- Visible component for display -->
<div x-html="renderSearchBar({ placeholder: 'Search...', value: searchQuery })"></div>

<!-- Hidden input maintains Alpine.js two-way binding -->
<input 
  type="text" 
  x-model="searchQuery"
  @keyup.enter="searchWeather()"
  style="display: none;">
```

### Pattern 3: Hidden Buttons for List Items

```html
<!-- Render list component -->
<div x-html="renderDailyForecast({ days: forecastDays, selectedIndex: selectedDay })"></div>

<!-- Hidden buttons maintain click handlers -->
<template x-for="(day, index) in weatherData?.dailyForecast" :key="index">
  <button @click="selectDay(index)" style="display: none;"></button>
</template>
```

---

## Benefits

### 1. **Type Safety**
```typescript
// TypeScript ensures correct props
renderButton({ 
  text: 'Click Me',        // ✅ string
  variant: 'primary',      // ✅ 'primary' | 'secondary'
  disabled: false          // ✅ boolean
});

renderButton({ 
  text: 123,               // ❌ Type error!
  variant: 'invalid',      // ❌ Type error!
  disabled: 'yes'          // ❌ Type error!
});
```

### 2. **Single Source of Truth**
Component structure and styling defined once:
```typescript
// Button/Button.ts
export function createButton(props: ButtonProps): string {
  return `
    <button class="button button--${props.variant} ${props.disabled ? 'button--disabled' : ''}">
      ${props.text}
    </button>
  `;
}
```

All usages automatically get updates when you modify the component.

### 3. **Consistency**
Every button rendered through `renderButton()` has identical structure and styling.

### 4. **Storybook Integration**
Components can be developed and tested in isolation:
```typescript
// Button.stories.ts
export const Primary: Story = {
  args: {
    text: 'Primary Button',
    variant: 'primary',
    disabled: false
  }
};
```

### 5. **Maintainability**
Change component once, update everywhere:
- Modify `Button.ts` → All buttons update
- Modify `Button.css` → All button styles update
- No need to find/replace HTML across files

---

## CSS Import

All component CSS is imported in the main entry point:

```typescript
// src/main.ts
import './styles/tokens.css';

// Import all component styles
import './components/atoms/Button/Button.css';
import './components/atoms/Input/Input.css';
import './components/atoms/WeatherIcon/WeatherIcon.css';
import './components/atoms/Spinner/Spinner.css';
import './components/molecules/SearchBar/SearchBar.css';
import './components/molecules/StatCard/StatCard.css';
import './components/molecules/DayCard/DayCard.css';
import './components/molecules/HourlyItem/HourlyItem.css';
import './components/organisms/CurrentWeatherCard/CurrentWeatherCard.css';
import './components/organisms/DailyForecast/DailyForecast.css';
import './components/organisms/HourlyForecast/HourlyForecast.css';
```

This ensures:
- Design tokens available globally
- Component styles bundled by Vite
- BEM classes work when components render

---

## File Structure

```
src/
├── components.ts                    # Central export module
├── main.ts                          # CSS imports + Alpine init
├── weatherStore.ts                  # Store with render methods
├── components/
│   ├── atoms/
│   │   ├── Button/
│   │   │   ├── Button.ts           # createButton()
│   │   │   ├── Button.css          # BEM styles
│   │   │   └── Button.stories.ts   # Storybook
│   │   ├── Input/
│   │   ├── WeatherIcon/
│   │   └── Spinner/
│   ├── molecules/
│   │   ├── SearchBar/
│   │   ├── StatCard/
│   │   ├── DayCard/
│   │   └── HourlyItem/
│   └── organisms/
│       ├── CurrentWeatherCard/
│       ├── DailyForecast/
│       └── HourlyForecast/
└── styles/
    └── tokens.css                   # Design tokens
```

---

## Summary

✅ **Components are imported and used as functions**  
✅ **Type safety through TypeScript interfaces**  
✅ **Single source of truth for structure and styling**  
✅ **Alpine.js interactivity maintained through wrapper elements**  
✅ **All component CSS imported in main.ts**  
✅ **Storybook integration for isolated development**

The application now follows true component-based architecture where components are imported, rendered, and maintained as reusable, type-safe modules.
