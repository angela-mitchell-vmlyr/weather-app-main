import type { Meta, StoryObj } from '@storybook/html-vite';
import { createDayCard, DayCardProps } from './DayCard';
import './DayCard.scss';

const meta: Meta<DayCardProps> = {
  title: 'Molecules/DayCard',
  tags: ['autodocs'],
  render: (args: DayCardProps) => {
    const container = document.createElement('div');
    container.style.maxWidth = '120px';
    container.innerHTML = createDayCard(args);
    return container;
  },
  argTypes: {
    day: {
      control: 'text',
      description: 'Day name',
    },
    weatherCode: {
      control: 'select',
      options: [0, 1, 2, 3, 61, 63, 65, 71, 73, 75, 95],
      description: 'Weather code',
    },
    maxTemp: {
      control: 'text',
      description: 'Maximum temperature',
    },
    minTemp: {
      control: 'text',
      description: 'Minimum temperature',
    },
    isSelected: {
      control: 'boolean',
      description: 'Selected state',
    },
  },
};

export default meta;
type Story = StoryObj<DayCardProps>;

export const Default: Story = {
  args: {
    day: 'Tue',
    weatherCode: 0,
    maxTemp: '20°',
    minTemp: '14°',
    isSelected: false,
  },
};

export const Selected: Story = {
  args: {
    day: 'Wed',
    weatherCode: 2,
    maxTemp: '21°',
    minTemp: '15°',
    isSelected: true,
  },
};

export const Rainy: Story = {
  args: {
    day: 'Thu',
    weatherCode: 61,
    maxTemp: '24°',
    minTemp: '14°',
    isSelected: false,
  },
};

export const Snowy: Story = {
  args: {
    day: 'Fri',
    weatherCode: 71,
    maxTemp: '25°',
    minTemp: '13°',
    isSelected: false,
  },
};

export const Stormy: Story = {
  args: {
    day: 'Sat',
    weatherCode: 95,
    maxTemp: '21°',
    minTemp: '15°',
    isSelected: false,
  },
};
