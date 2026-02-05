import type { Meta, StoryObj } from '@storybook/html-vite';
import { createCurrentWeatherCard, CurrentWeatherCardProps } from './CurrentWeatherCard';
import './CurrentWeatherCard.css';

const meta: Meta<CurrentWeatherCardProps> = {
  title: 'Organisms/CurrentWeatherCard',
  tags: ['autodocs'],
  render: (args: CurrentWeatherCardProps) => {
    const container = document.createElement('div');
    container.style.maxWidth = '600px';
    container.innerHTML = createCurrentWeatherCard(args);
    return container;
  },
  argTypes: {
    location: {
      control: 'text',
      description: 'City name',
    },
    country: {
      control: 'text',
      description: 'Country name',
    },
    date: {
      control: 'text',
      description: 'Current date',
    },
    temperature: {
      control: 'text',
      description: 'Current temperature',
    },
    weatherCode: {
      control: 'select',
      options: [0, 1, 2, 3, 61, 63, 65, 71, 73, 75, 95],
      description: 'Weather code',
    },
  },
};

export default meta;
type Story = StoryObj<CurrentWeatherCardProps>;

export const Berlin: Story = {
  args: {
    location: 'Berlin',
    country: 'Germany',
    date: 'Tuesday, Aug 5, 2025',
    temperature: '20°',
    weatherCode: 0,
  },
};

export const NewYork: Story = {
  args: {
    location: 'New York',
    country: 'United States',
    date: 'Tuesday, Aug 5, 2025',
    temperature: '75°F',
    weatherCode: 2,
  },
};

export const Tokyo: Story = {
  args: {
    location: 'Tokyo',
    country: 'Japan',
    date: 'Wednesday, Aug 6, 2025',
    temperature: '28°',
    weatherCode: 1,
  },
};

export const RainyDay: Story = {
  args: {
    location: 'London',
    country: 'United Kingdom',
    date: 'Tuesday, Aug 5, 2025',
    temperature: '16°',
    weatherCode: 61,
  },
};

export const SnowyDay: Story = {
  args: {
    location: 'Oslo',
    country: 'Norway',
    date: 'Tuesday, Aug 5, 2025',
    temperature: '-2°',
    weatherCode: 71,
  },
};
