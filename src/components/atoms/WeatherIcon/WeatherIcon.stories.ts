import type { Meta, StoryObj } from '@storybook/html-vite';
import { createWeatherIcon, WeatherIconProps } from './WeatherIcon';
import './WeatherIcon.scss';

const meta: Meta<WeatherIconProps> = {
  title: 'Atoms/WeatherIcon',
  tags: ['autodocs'],
  render: (args: WeatherIconProps) => {
    const container = document.createElement('div');
    container.innerHTML = createWeatherIcon(args);
    return container;
  },
  argTypes: {
    weatherCode: {
      control: 'select',
      options: [0, 1, 2, 3, 45, 48, 51, 53, 55, 61, 63, 65, 71, 73, 75, 77, 80, 81, 82, 85, 86, 95, 96, 99],
      description: 'Weather code (WMO Weather interpretation codes)',
      mapping: {
        0: 'Clear sky',
        1: 'Mainly clear',
        2: 'Partly cloudy',
        3: 'Overcast',
        45: 'Foggy',
        48: 'Depositing rime fog',
        51: 'Light drizzle',
        53: 'Moderate drizzle',
        55: 'Dense drizzle',
        61: 'Slight rain',
        63: 'Moderate rain',
        65: 'Heavy rain',
        71: 'Slight snow',
        73: 'Moderate snow',
        75: 'Heavy snow',
        77: 'Snow grains',
        80: 'Slight rain showers',
        81: 'Moderate rain showers',
        82: 'Violent rain showers',
        85: 'Slight snow showers',
        86: 'Heavy snow showers',
        95: 'Thunderstorm',
        96: 'Thunderstorm with slight hail',
        99: 'Thunderstorm with heavy hail',
      },
    },
    isDay: {
      control: 'boolean',
      description: 'Day or night',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'xlarge'],
      description: 'Icon size',
    },
  },
};

export default meta;
type Story = StoryObj<WeatherIconProps>;

export const ClearDay: Story = {
  args: {
    weatherCode: 0,
    isDay: true,
    size: 'medium',
  },
};

export const ClearNight: Story = {
  args: {
    weatherCode: 0,
    isDay: false,
    size: 'medium',
  },
};

export const PartlyCloudy: Story = {
  args: {
    weatherCode: 2,
    isDay: true,
    size: 'medium',
  },
};

export const Rainy: Story = {
  args: {
    weatherCode: 61,
    isDay: true,
    size: 'medium',
  },
};

export const Thunderstorm: Story = {
  args: {
    weatherCode: 95,
    isDay: true,
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    weatherCode: 0,
    isDay: true,
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    weatherCode: 0,
    isDay: true,
    size: 'large',
  },
};

export const ExtraLarge: Story = {
  args: {
    weatherCode: 0,
    isDay: true,
    size: 'xlarge',
  },
};
