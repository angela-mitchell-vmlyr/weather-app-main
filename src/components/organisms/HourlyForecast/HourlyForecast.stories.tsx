import type { Meta, StoryObj } from '@storybook/react';
import { HourlyForecast } from './HourlyForecast';

const meta: Meta<typeof HourlyForecast> = {
  title: 'Organisms/HourlyForecast',
  component: HourlyForecast,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HourlyForecast>;

export const Default: Story = {
  args: {
    selectedDay: 'Tuesday',
    hours: [
      { time: '3 PM', weatherCode: 3, temperature: '20°' },
      { time: '4 PM', weatherCode: 2, temperature: '20°' },
      { time: '5 PM', weatherCode: 0, temperature: '20°' },
      { time: '6 PM', weatherCode: 2, temperature: '19°' },
      { time: '7 PM', weatherCode: 3, temperature: '18°' },
      { time: '8 PM', weatherCode: 61, temperature: '18°' },
      { time: '9 PM', weatherCode: 3, temperature: '17°' },
      { time: '10 PM', weatherCode: 3, temperature: '17°' },
    ],
  },
  parameters: {
    docs: {
      source: {
        code: `<HourlyForecast selectedDay="Tuesday" hours={hourlyData} />`,
      },
    },
  },
};
