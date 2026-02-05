import type { Meta, StoryObj } from '@storybook/html-vite';
import { createHourlyItem, HourlyItemProps } from './HourlyItem';
import './HourlyItem.css';

const meta: Meta<HourlyItemProps> = {
  title: 'Molecules/HourlyItem',
  tags: ['autodocs'],
  render: (args: HourlyItemProps) => {
    const container = document.createElement('div');
    container.style.maxWidth = '400px';
    container.innerHTML = createHourlyItem(args);
    return container;
  },
  argTypes: {
    time: {
      control: 'text',
      description: 'Time of day',
    },
    weatherCode: {
      control: 'select',
      options: [0, 1, 2, 3, 61, 63, 65, 71, 73, 75, 95],
      description: 'Weather code',
    },
    temperature: {
      control: 'text',
      description: 'Temperature',
    },
  },
};

export default meta;
type Story = StoryObj<HourlyItemProps>;

export const Morning: Story = {
  args: {
    time: '3 PM',
    weatherCode: 0,
    temperature: '20°',
  },
};

export const Afternoon: Story = {
  args: {
    time: '4 PM',
    weatherCode: 2,
    temperature: '20°',
  },
};

export const Evening: Story = {
  args: {
    time: '5 PM',
    weatherCode: 1,
    temperature: '20°',
  },
};

export const RainyHour: Story = {
  args: {
    time: '6 PM',
    weatherCode: 61,
    temperature: '19°',
  },
};

export const Night: Story = {
  args: {
    time: '10 PM',
    weatherCode: 0,
    temperature: '17°',
  },
};
