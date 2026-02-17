import type { Meta, StoryObj } from '@storybook/react';
import { DayCard } from './DayCard';

const meta: Meta<typeof DayCard> = {
  title: 'Molecules/DayCard',
  component: DayCard,
  tags: ['autodocs'],
  argTypes: {
    day: { control: 'text', description: 'Day name' },
    weatherCode: { control: 'number', description: 'Weather code' },
    maxTemp: { control: 'text', description: 'Max temperature' },
    minTemp: { control: 'text', description: 'Min temperature' },
    isSelected: { control: 'boolean', description: 'Selected state' },
  },
};

export default meta;
type Story = StoryObj<typeof DayCard>;

export const Default: Story = {
  args: { day: 'Tue', weatherCode: 2, maxTemp: '20°', minTemp: '14°' },
  parameters: {
    docs: {
      source: {
        code: `<DayCard day="Tue" weatherCode={2} maxTemp="20°" minTemp="14°" onClick={() => setSelectedDay(0)} />`,
      },
    },
  },
};

export const Selected: Story = {
  args: { day: 'Wed', weatherCode: 0, maxTemp: '24°', minTemp: '15°', isSelected: true },
  parameters: {
    docs: {
      source: {
        code: `<DayCard day="Wed" weatherCode={0} maxTemp="24°" minTemp="15°" isSelected onClick={() => setSelectedDay(1)} />`,
      },
    },
  },
};

export const Rainy: Story = {
  args: { day: 'Fri', weatherCode: 61, maxTemp: '21°', minTemp: '13°' },
  parameters: {
    docs: {
      source: {
        code: `<DayCard day="Fri" weatherCode={61} maxTemp="21°" minTemp="13°" onClick={() => setSelectedDay(2)} />`,
      },
    },
  },
};
