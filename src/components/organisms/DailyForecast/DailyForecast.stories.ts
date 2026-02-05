import type { Meta, StoryObj } from '@storybook/html-vite';
import { createDailyForecast, DailyForecastProps } from './DailyForecast';
import './DailyForecast.css';

const meta: Meta<DailyForecastProps> = {
  title: 'Organisms/DailyForecast',
  tags: ['autodocs'],
  render: (args: DailyForecastProps) => {
    const container = document.createElement('div');
    container.innerHTML = createDailyForecast(args);
    return container;
  },
  argTypes: {
    selectedIndex: {
      control: { type: 'number', min: 0, max: 6 },
      description: 'Selected day index',
    },
  },
};

export default meta;
type Story = StoryObj<DailyForecastProps>;

const mockDays = [
  { day: 'Tue', weatherCode: 0, maxTemp: '20°', minTemp: '14°' },
  { day: 'Wed', weatherCode: 2, maxTemp: '21°', minTemp: '15°' },
  { day: 'Thu', weatherCode: 3, maxTemp: '24°', minTemp: '14°' },
  { day: 'Fri', weatherCode: 61, maxTemp: '25°', minTemp: '13°' },
  { day: 'Sat', weatherCode: 80, maxTemp: '21°', minTemp: '15°' },
  { day: 'Sun', weatherCode: 1, maxTemp: '26°', minTemp: '16°' },
  { day: 'Mon', weatherCode: 0, maxTemp: '24°', minTemp: '15°' },
];

export const Default: Story = {
  args: {
    days: mockDays,
    selectedIndex: 0,
  },
};

export const SecondDaySelected: Story = {
  args: {
    days: mockDays,
    selectedIndex: 1,
  },
};

export const RainyWeek: Story = {
  args: {
    days: [
      { day: 'Tue', weatherCode: 61, maxTemp: '18°', minTemp: '12°' },
      { day: 'Wed', weatherCode: 63, maxTemp: '17°', minTemp: '11°' },
      { day: 'Thu', weatherCode: 61, maxTemp: '19°', minTemp: '13°' },
      { day: 'Fri', weatherCode: 80, maxTemp: '20°', minTemp: '14°' },
      { day: 'Sat', weatherCode: 61, maxTemp: '18°', minTemp: '12°' },
      { day: 'Sun', weatherCode: 63, maxTemp: '17°', minTemp: '11°' },
      { day: 'Mon', weatherCode: 61, maxTemp: '19°', minTemp: '13°' },
    ],
    selectedIndex: 3,
  },
};

export const MixedWeather: Story = {
  args: {
    days: [
      { day: 'Tue', weatherCode: 0, maxTemp: '25°', minTemp: '18°' },
      { day: 'Wed', weatherCode: 2, maxTemp: '23°', minTemp: '16°' },
      { day: 'Thu', weatherCode: 61, maxTemp: '20°', minTemp: '14°' },
      { day: 'Fri', weatherCode: 71, maxTemp: '15°', minTemp: '8°' },
      { day: 'Sat', weatherCode: 95, maxTemp: '18°', minTemp: '12°' },
      { day: 'Sun', weatherCode: 1, maxTemp: '22°', minTemp: '15°' },
      { day: 'Mon', weatherCode: 0, maxTemp: '26°', minTemp: '19°' },
    ],
    selectedIndex: 4,
  },
};
