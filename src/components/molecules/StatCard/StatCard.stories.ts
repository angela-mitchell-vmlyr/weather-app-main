import type { Meta, StoryObj } from '@storybook/html-vite';
import { createStatCard, StatCardProps } from './StatCard';
import './StatCard.scss';

const meta: Meta<StatCardProps> = {
  title: 'Molecules/StatCard',
  tags: ['autodocs'],
  render: (args: StatCardProps) => {
    const container = document.createElement('div');
    container.style.maxWidth = '200px';
    container.innerHTML = createStatCard(args);
    return container;
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Stat label',
    },
    value: {
      control: 'text',
      description: 'Stat value',
    },
    variant: {
      control: 'select',
      options: ['default', 'highlighted'],
      description: 'Card variant',
    },
  },
};

export default meta;
type Story = StoryObj<StatCardProps>;

export const FeelsLike: Story = {
  args: {
    label: 'Feels Like',
    value: '18°',
    variant: 'default',
  },
};

export const Humidity: Story = {
  args: {
    label: 'Humidity',
    value: '46%',
    variant: 'default',
  },
};

export const Wind: Story = {
  args: {
    label: 'Wind',
    value: '14 km/h',
    variant: 'default',
  },
};

export const Precipitation: Story = {
  args: {
    label: 'Precipitation',
    value: '0 mm',
    variant: 'default',
  },
};

export const Highlighted: Story = {
  args: {
    label: 'Temperature',
    value: '20°',
    variant: 'highlighted',
  },
};
