import type { Meta, StoryObj } from '@storybook/react';
import { DailyForecast } from './DailyForecast';

const meta: Meta<typeof DailyForecast> = {
  title: 'Organisms/DailyForecast',
  component: DailyForecast,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DailyForecast>;

export const Default: Story = {
  args: {
    days: [
      { day: 'Tue', weatherCode: 2, maxTemp: '20°', minTemp: '14°' },
      { day: 'Wed', weatherCode: 3, maxTemp: '21°', minTemp: '15°' },
      { day: 'Thu', weatherCode: 0, maxTemp: '24°', minTemp: '14°' },
      { day: 'Fri', weatherCode: 61, maxTemp: '25°', minTemp: '13°' },
      { day: 'Sat', weatherCode: 95, maxTemp: '21°', minTemp: '15°' },
      { day: 'Sun', weatherCode: 2, maxTemp: '25°', minTemp: '16°' },
      { day: 'Mon', weatherCode: 3, maxTemp: '24°', minTemp: '15°' },
    ],
    selectedIndex: 0,
  },
  parameters: {
    docs: {
      source: {
        code: `<DailyForecast
  days={forecastDays}
  selectedIndex={selectedDay}
  onDaySelect={(index) => setSelectedDay(index)}
/>`,
      },
    },
  },
};

export const ThirdDaySelected: Story = {
  args: {
    ...Default.args,
    selectedIndex: 2,
  },
  parameters: {
    docs: {
      source: {
        code: `<DailyForecast days={forecastDays} selectedIndex={2} onDaySelect={(index) => setSelectedDay(index)} />`,
      },
    },
  },
};
