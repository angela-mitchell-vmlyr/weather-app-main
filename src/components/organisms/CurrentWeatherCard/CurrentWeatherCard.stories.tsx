import type { Meta, StoryObj } from '@storybook/react';
import { CurrentWeatherCard } from './CurrentWeatherCard';

const meta: Meta<typeof CurrentWeatherCard> = {
  title: 'Organisms/CurrentWeatherCard',
  component: CurrentWeatherCard,
  tags: ['autodocs'],
  argTypes: {
    location: { control: 'text', description: 'City name' },
    country: { control: 'text', description: 'Country name' },
    date: { control: 'text', description: 'Formatted date' },
    temperature: { control: 'text', description: 'Temperature display' },
    weatherCode: { control: 'number', description: 'Weather code' },
  },
};

export default meta;
type Story = StoryObj<typeof CurrentWeatherCard>;

export const ClearDay: Story = {
  args: {
    location: 'Berlin',
    country: 'Germany',
    date: 'Tuesday, Aug 5, 2025',
    temperature: '20°',
    weatherCode: 0,
  },
  parameters: {
    docs: {
      source: {
        code: `<CurrentWeatherCard
  location="Berlin"
  country="Germany"
  date="Tuesday, Aug 5, 2025"
  temperature="20°"
  weatherCode={0}
/>`,
      },
    },
  },
};

export const Rainy: Story = {
  args: {
    location: 'London',
    country: 'United Kingdom',
    date: 'Wednesday, Aug 6, 2025',
    temperature: '15°',
    weatherCode: 61,
  },
  parameters: {
    docs: {
      source: {
        code: `<CurrentWeatherCard
  location="London"
  country="United Kingdom"
  date="Wednesday, Aug 6, 2025"
  temperature="15°"
  weatherCode={61}
/>`,
      },
    },
  },
};
