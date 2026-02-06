import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

// Import SCSS design system (Tier 1, 2, 3)
import './styles/component.scss';

// Import component styles
import './components/atoms/Button/Button.scss';
import './components/atoms/Input/Input.scss';
import './components/atoms/WeatherIcon/WeatherIcon.scss';
import './components/atoms/Spinner/Spinner.scss';
import './components/molecules/SearchBar/SearchBar.scss';
import './components/molecules/StatCard/StatCard.scss';
import './components/molecules/DayCard/DayCard.scss';
import './components/molecules/HourlyItem/HourlyItem.scss';
import './components/molecules/Dropdown/Dropdown.scss';
import './components/organisms/CurrentWeatherCard/CurrentWeatherCard.scss';
import './components/organisms/DailyForecast/DailyForecast.scss';
import './components/organisms/HourlyForecast/HourlyForecast.scss';
import './components/organisms/Header/Header.scss';
import './components/molecules/Skeleton/Skeleton.scss';
import './components/organisms/ErrorState/ErrorState.scss';

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
