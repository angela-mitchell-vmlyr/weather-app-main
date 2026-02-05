# Weather App Component Library

This document outlines the component architecture following **Atomic Design** principles with **BEM naming conventions** and a **3-tier CSS token model**.

## Architecture Overview

### Atomic Design Pattern

Components are organized into three levels:

- **Atoms**: Basic building blocks (Button, Input, WeatherIcon, Spinner)
- **Molecules**: Simple combinations of atoms (SearchBar, StatCard, DayCard, HourlyItem)
- **Organisms**: Complex UI sections (CurrentWeatherCard, DailyForecast, HourlyForecast)

### BEM Naming Convention

All CSS classes follow the Block Element Modifier pattern:

```css
.block { }
.block__element { }
.block--modifier { }
.block__element--modifier { }
```

**Examples:**
- `.button` - Block
- `.button--primary` - Block with modifier
- `.search-bar__input` - Element within block
- `.day-card--selected` - Block with modifier

### 3-Tier CSS Token Model

**Tier 1: Base Tokens** - Raw color values
```css
--blue-500: #3b82f6;
--slate-800: #1e293b;
```

**Tier 2: Semantic Tokens** - Purpose-based naming
```css
--primary-color-500: var(--blue-500);
--neutral-color-800: var(--slate-800);
```

**Tier 3: Component Tokens** - Specific usage
```css
--button-primary-bg: var(--primary-color-600);
--background-card: rgba(30, 41, 59, 0.5);
```

## Component Catalog

### Atoms

#### Button
**Location:** `src/components/atoms/Button/`

**Props:**
- `text` (string): Button label
- `variant` ('primary' | 'secondary'): Visual style
- `disabled` (boolean): Disabled state

**BEM Classes:**
- `.button`
- `.button--primary`
- `.button--secondary`
- `.button--disabled`

**States:**
- Default
- Hover
- Disabled

---

#### Input
**Location:** `src/components/atoms/Input/`

**Props:**
- `placeholder` (string): Placeholder text
- `value` (string): Input value
- `type` (string): Input type
- `disabled` (boolean): Disabled state

**BEM Classes:**
- `.input`
- `.input--disabled`

**States:**
- Default
- Focus
- Disabled

---

#### WeatherIcon
**Location:** `src/components/atoms/WeatherIcon/`

**Props:**
- `weatherCode` (number): WMO weather code
- `isDay` (boolean): Day/night indicator
- `size` ('small' | 'medium' | 'large' | 'xlarge'): Icon size

**BEM Classes:**
- `.weather-icon`
- `.weather-icon--small`
- `.weather-icon--medium`
- `.weather-icon--large`
- `.weather-icon--xlarge`

**Weather Codes:**
- 0: Clear sky ☀️/🌙
- 1-3: Cloudy variations
- 45-48: Fog
- 51-65: Rain
- 71-77: Snow
- 80-86: Showers
- 95-99: Thunderstorm

---

#### Spinner
**Location:** `src/components/atoms/Spinner/`

**Props:**
- `size` ('small' | 'medium' | 'large'): Spinner size

**BEM Classes:**
- `.spinner`
- `.spinner--small`
- `.spinner--medium`
- `.spinner--large`

**States:**
- Animating (always)

---

### Molecules

#### SearchBar
**Location:** `src/components/molecules/SearchBar/`

**Props:**
- `placeholder` (string): Input placeholder
- `value` (string): Search value
- `loading` (boolean): Loading state
- `error` (string): Error message

**BEM Classes:**
- `.search-bar`
- `.search-bar__input-group`
- `.search-bar__input`
- `.search-bar__button`
- `.search-bar__error`

**States:**
- Default
- Loading (disabled inputs)
- Error (shows error message)

---

#### StatCard
**Location:** `src/components/molecules/StatCard/`

**Props:**
- `label` (string): Stat label
- `value` (string): Stat value
- `variant` ('default' | 'highlighted'): Card style

**BEM Classes:**
- `.stat-card`
- `.stat-card__label`
- `.stat-card__value`
- `.stat-card--highlighted`

**Use Cases:**
- Feels Like temperature
- Humidity percentage
- Wind speed
- Precipitation amount

---

#### DayCard
**Location:** `src/components/molecules/DayCard/`

**Props:**
- `day` (string): Day name
- `weatherCode` (number): Weather code
- `maxTemp` (string): Maximum temperature
- `minTemp` (string): Minimum temperature
- `isSelected` (boolean): Selected state

**BEM Classes:**
- `.day-card`
- `.day-card__day`
- `.day-card__icon`
- `.day-card__temp-max`
- `.day-card__temp-min`
- `.day-card--selected`

**States:**
- Default
- Hover
- Selected

---

#### HourlyItem
**Location:** `src/components/molecules/HourlyItem/`

**Props:**
- `time` (string): Time of day
- `weatherCode` (number): Weather code
- `temperature` (string): Temperature

**BEM Classes:**
- `.hourly-item`
- `.hourly-item__info`
- `.hourly-item__icon`
- `.hourly-item__time`
- `.hourly-item__temp`

---

### Organisms

#### CurrentWeatherCard
**Location:** `src/components/organisms/CurrentWeatherCard/`

**Props:**
- `location` (string): City name
- `country` (string): Country name
- `date` (string): Current date
- `temperature` (string): Current temperature
- `weatherCode` (number): Weather code

**BEM Classes:**
- `.current-weather-card`
- `.current-weather-card__decoration`
- `.current-weather-card__decoration--sun`
- `.current-weather-card__decoration--cloud`
- `.current-weather-card__content`
- `.current-weather-card__location`
- `.current-weather-card__date`
- `.current-weather-card__weather`
- `.current-weather-card__icon`
- `.current-weather-card__temperature`

**Features:**
- Gradient background
- Decorative weather icons
- Large temperature display

---

#### DailyForecast
**Location:** `src/components/organisms/DailyForecast/`

**Props:**
- `days` (DayCardProps[]): Array of day data
- `selectedIndex` (number): Selected day index

**BEM Classes:**
- `.daily-forecast`
- `.daily-forecast__title`
- `.daily-forecast__grid`

**Features:**
- 7-day forecast grid
- Responsive layout (2 cols mobile, 7 cols desktop)
- Day selection

---

#### HourlyForecast
**Location:** `src/components/organisms/HourlyForecast/`

**Props:**
- `hours` (HourlyItemProps[]): Array of hourly data
- `selectedDay` (string): Selected day name

**BEM Classes:**
- `.hourly-forecast`
- `.hourly-forecast__header`
- `.hourly-forecast__title`
- `.hourly-forecast__select`
- `.hourly-forecast__list`

**Features:**
- Scrollable hourly list
- Day selector dropdown
- Custom scrollbar styling

---

## Storybook Integration

All components have interactive Storybook stories with:

✅ **Controls** - Adjust props in real-time
✅ **Multiple States** - View all component variations
✅ **Documentation** - Auto-generated from TypeScript types
✅ **Accessibility** - A11y addon for testing

### Running Storybook

```bash
npm run storybook
```

Opens at `http://localhost:6006`

### Story Organization

```
Atoms/
  ├── Button
  ├── Input
  ├── WeatherIcon
  └── Spinner

Molecules/
  ├── SearchBar
  ├── StatCard
  ├── DayCard
  └── HourlyItem

Organisms/
  ├── CurrentWeatherCard
  ├── DailyForecast
  └── HourlyForecast
```

## Design Tokens Reference

### Colors

**Primary (Blue)**
- `--primary-color-500` through `--primary-color-900`

**Neutral (Slate)**
- `--neutral-color-50` through `--neutral-color-950`

**Component-Specific**
- `--background-primary`: Main background
- `--background-card`: Card backgrounds
- `--text-primary`: Primary text color
- `--text-secondary`: Secondary text color
- `--button-primary-bg`: Primary button background

### Spacing

- `--spacing-xs`: 0.25rem (4px)
- `--spacing-sm`: 0.5rem (8px)
- `--spacing-md`: 1rem (16px)
- `--spacing-lg`: 1.5rem (24px)
- `--spacing-xl`: 2rem (32px)
- `--spacing-2xl`: 3rem (48px)

### Border Radius

- `--radius-sm`: 0.5rem
- `--radius-md`: 0.75rem
- `--radius-lg`: 1rem
- `--radius-xl`: 1.5rem
- `--radius-2xl`: 2rem

### Typography

**Font Sizes**
- `--font-size-xs` through `--font-size-8xl`

**Font Weights**
- `--font-weight-normal`: 400
- `--font-weight-medium`: 500
- `--font-weight-semibold`: 600
- `--font-weight-bold`: 700

### Transitions

- `--transition-fast`: 150ms ease-in-out
- `--transition-base`: 200ms ease-in-out
- `--transition-slow`: 300ms ease-in-out

## File Structure

```
src/
├── components/
│   ├── atoms/
│   │   ├── Button/
│   │   │   ├── Button.ts
│   │   │   ├── Button.css
│   │   │   └── Button.stories.ts
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
├── styles/
│   └── tokens.css
├── weatherService.ts
├── weatherStore.ts
└── types.ts
```

## Best Practices

### Component Creation

1. **Each component has its own folder** with:
   - TypeScript file (`.ts`)
   - CSS file (`.css`)
   - Storybook story (`.stories.ts`)

2. **Use BEM naming** for all CSS classes

3. **Follow the 3-tier token model** for all CSS values

4. **Export typed interfaces** for all component props

5. **Create multiple story variants** showing different states

### CSS Guidelines

✅ **DO:**
- Use CSS custom properties (tokens)
- Keep selectors flat (avoid nesting)
- Use BEM naming consistently
- Define component-specific tokens when needed

❌ **DON'T:**
- Use hard-coded color values
- Create deeply nested selectors
- Mix naming conventions
- Use inline styles

### Accessibility

- Use semantic HTML elements
- Add ARIA labels only when necessary
- Ensure keyboard navigation works
- Test with Storybook's A11y addon

## Testing

Run component tests:
```bash
npm test
```

Run Storybook:
```bash
npm run storybook
```

Build Storybook:
```bash
npm run build-storybook
```
