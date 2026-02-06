import type { Preview } from '@storybook/react';
import '../src/styles/component.scss';
import '../src/components/atoms/Button/Button.scss';
import '../src/components/atoms/Input/Input.scss';
import '../src/components/atoms/WeatherIcon/WeatherIcon.scss';
import '../src/components/atoms/Spinner/Spinner.scss';
import '../src/components/molecules/SearchBar/SearchBar.scss';
import '../src/components/molecules/StatCard/StatCard.scss';
import '../src/components/molecules/DayCard/DayCard.scss';
import '../src/components/molecules/HourlyItem/HourlyItem.scss';
import '../src/components/molecules/Dropdown/Dropdown.scss';
import '../src/components/organisms/CurrentWeatherCard/CurrentWeatherCard.scss';
import '../src/components/organisms/DailyForecast/DailyForecast.scss';
import '../src/components/organisms/HourlyForecast/HourlyForecast.scss';
import '../src/components/organisms/Header/Header.scss';
import '../src/components/molecules/Skeleton/Skeleton.scss';
import '../src/components/organisms/ErrorState/ErrorState.scss';
import '../index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#0f172a',
        },
        {
          name: 'light',
          value: '#ffffff',
        },
      ],
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;