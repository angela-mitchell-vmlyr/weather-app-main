import type { Meta, StoryObj } from '@storybook/react';
import { StatCard } from './StatCard';

const meta: Meta<typeof StatCard> = {
  title: 'Molecules/StatCard',
  component: StatCard,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Stat label' },
    value: { control: 'text', description: 'Stat value' },
    variant: {
      control: 'select',
      options: ['default', 'highlighted'],
      description: 'Card variant',
    },
  },
};

export default meta;
type Story = StoryObj<typeof StatCard>;

export const Default: Story = {
  args: { label: 'Humidity', value: '46%' },
  parameters: {
    docs: {
      source: { code: `<StatCard label="Humidity" value="46%" />` },
    },
  },
};

export const Highlighted: Story = {
  args: { label: 'Feels Like', value: '18°', variant: 'highlighted' },
  parameters: {
    docs: {
      source: { code: `<StatCard label="Feels Like" value="18°" variant="highlighted" />` },
    },
  },
};

export const Wind: Story = {
  args: { label: 'Wind', value: '14 km/h' },
  parameters: {
    docs: {
      source: { code: `<StatCard label="Wind" value="14 km/h" />` },
    },
  },
};

export const Precipitation: Story = {
  args: { label: 'Precipitation', value: '0 mm' },
  parameters: {
    docs: {
      source: { code: `<StatCard label="Precipitation" value="0 mm" />` },
    },
  },
};
