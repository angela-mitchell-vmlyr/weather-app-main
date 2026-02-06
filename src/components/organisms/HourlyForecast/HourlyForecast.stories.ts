import type { Meta, StoryObj } from '@storybook/html-vite';
import { createHourlyForecast, HourlyForecastProps } from './HourlyForecast';
import './HourlyForecast.scss';

const meta: Meta<HourlyForecastProps> = {
  title: 'Organisms/HourlyForecast',
  tags: ['autodocs'],
  render: (args: HourlyForecastProps) => {
    const container = document.createElement('div');
    container.style.maxWidth = '400px';
    container.innerHTML = createHourlyForecast(args);
    return container;
  },
  argTypes: {
    selectedDay: {
      control: 'text',
      description: 'Selected day name',
    },
  },
};

export default meta;
type Story = StoryObj<HourlyForecastProps>;

const mockHours = [
  { time: '3 PM', weatherCode: 0, temperature: '20°' },
  { time: '4 PM', weatherCode: 0, temperature: '20°' },
  { time: '5 PM', weatherCode: 1, temperature: '20°' },
  { time: '6 PM', weatherCode: 2, temperature: '19°' },
  { time: '7 PM', weatherCode: 2, temperature: '18°' },
  { time: '8 PM', weatherCode: 3, temperature: '18°' },
  { time: '9 PM', weatherCode: 3, temperature: '17°' },
  { time: '10 PM', weatherCode: 3, temperature: '17°' },
];

export const Default: Story = {
  args: {
    hours: mockHours,
    selectedDay: 'Tuesday',
  },
};

export const RainyDay: Story = {
  args: {
    hours: [
      { time: '3 PM', weatherCode: 61, temperature: '18°' },
      { time: '4 PM', weatherCode: 61, temperature: '18°' },
      { time: '5 PM', weatherCode: 63, temperature: '17°' },
      { time: '6 PM', weatherCode: 63, temperature: '17°' },
      { time: '7 PM', weatherCode: 61, temperature: '16°' },
      { time: '8 PM', weatherCode: 61, temperature: '16°' },
      { time: '9 PM', weatherCode: 61, temperature: '15°' },
      { time: '10 PM', weatherCode: 61, temperature: '15°' },
    ],
    selectedDay: 'Wednesday',
  },
};

export const ClearEvening: Story = {
  args: {
    hours: [
      { time: '3 PM', weatherCode: 0, temperature: '25°' },
      { time: '4 PM', weatherCode: 0, temperature: '24°' },
      { time: '5 PM', weatherCode: 0, temperature: '23°' },
      { time: '6 PM', weatherCode: 1, temperature: '22°' },
      { time: '7 PM', weatherCode: 1, temperature: '21°' },
      { time: '8 PM', weatherCode: 1, temperature: '20°' },
      { time: '9 PM', weatherCode: 0, temperature: '19°' },
      { time: '10 PM', weatherCode: 0, temperature: '18°' },
    ],
    selectedDay: 'Friday',
  },
};

export const StormyAfternoon: Story = {
  args: {
    hours: [
      { time: '3 PM', weatherCode: 2, temperature: '20°' },
      { time: '4 PM', weatherCode: 3, temperature: '19°' },
      { time: '5 PM', weatherCode: 95, temperature: '18°' },
      { time: '6 PM', weatherCode: 95, temperature: '17°' },
      { time: '7 PM', weatherCode: 95, temperature: '17°' },
      { time: '8 PM', weatherCode: 61, temperature: '16°' },
      { time: '9 PM', weatherCode: 61, temperature: '16°' },
      { time: '10 PM', weatherCode: 2, temperature: '15°' },
    ],
    selectedDay: 'Saturday',
  },
};
