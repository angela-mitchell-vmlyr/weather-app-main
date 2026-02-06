import type { Meta, StoryObj } from '@storybook/react';
import { WeatherIcon } from './WeatherIcon';

const meta: Meta<typeof WeatherIcon> = {
  title: 'Atoms/WeatherIcon',
  component: WeatherIcon,
  tags: ['autodocs'],
  argTypes: {
    weatherCode: { control: 'number', description: 'Weather code from API' },
    isDay: { control: 'boolean', description: 'Day or night icon variant' },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'xlarge'],
      description: 'Icon size',
    },
  },
};

export default meta;
type Story = StoryObj<typeof WeatherIcon>;

export const ClearDay: Story = {
  args: { weatherCode: 0, isDay: true, size: 'large' },
};

export const ClearNight: Story = {
  args: { weatherCode: 0, isDay: false, size: 'large' },
};

export const Cloudy: Story = {
  args: { weatherCode: 3, isDay: true, size: 'large' },
};

export const Rain: Story = {
  args: { weatherCode: 61, isDay: true, size: 'large' },
};

export const Thunderstorm: Story = {
  args: { weatherCode: 95, isDay: true, size: 'large' },
};

export const Snow: Story = {
  args: { weatherCode: 71, isDay: true, size: 'large' },
};
