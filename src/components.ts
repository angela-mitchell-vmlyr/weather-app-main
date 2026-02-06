// Component integration module - exports all atomic components
export { createButton } from './components/atoms/Button/Button';
export type { ButtonProps } from './components/atoms/Button/Button';

export { createInput } from './components/atoms/Input/Input';
export type { InputProps } from './components/atoms/Input/Input';

export { createWeatherIcon, getWeatherIcon } from './components/atoms/WeatherIcon/WeatherIcon';
export type { WeatherIconProps } from './components/atoms/WeatherIcon/WeatherIcon';

export { createSpinner } from './components/atoms/Spinner/Spinner';
export type { SpinnerProps } from './components/atoms/Spinner/Spinner';

export { createSearchBar } from './components/molecules/SearchBar/SearchBar';
export { createStatCard } from './components/molecules/StatCard/StatCard';
export { createDayCard } from './components/molecules/DayCard/DayCard';
export { createHourlyItem } from './components/molecules/HourlyItem/HourlyItem';
export { createDropdown } from './components/molecules/Dropdown/Dropdown';

export type { SearchBarProps } from './components/molecules/SearchBar/SearchBar';
export type { StatCardProps } from './components/molecules/StatCard/StatCard';
export type { DayCardProps } from './components/molecules/DayCard/DayCard';
export type { HourlyItemProps } from './components/molecules/HourlyItem/HourlyItem';
export type { DropdownProps, DropdownOption } from './components/molecules/Dropdown/Dropdown';

export { createCurrentWeatherCard } from './components/organisms/CurrentWeatherCard/CurrentWeatherCard';
export { createDailyForecast } from './components/organisms/DailyForecast/DailyForecast';
export { createHourlyForecast } from './components/organisms/HourlyForecast/HourlyForecast';
export { createHeader } from './components/organisms/Header/Header';

export type { CurrentWeatherCardProps } from './components/organisms/CurrentWeatherCard/CurrentWeatherCard';
export type { DailyForecastProps } from './components/organisms/DailyForecast/DailyForecast';
export type { HourlyForecastProps } from './components/organisms/HourlyForecast/HourlyForecast';
export type { HeaderProps } from './components/organisms/Header/Header';
