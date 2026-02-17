import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Molecules/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Trigger label' },
    variant: {
      control: 'select',
      options: ['single', 'multi'],
      description: 'Selection variant',
    },
    icon: { control: 'text', description: 'Trigger icon' },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const SingleSelect: Story = {
  args: {
    label: 'Units',
    icon: '⚙️',
    variant: 'single',
    options: [
      { label: 'Metric (°C, km/h)', value: 'metric', selected: true },
      { label: 'Imperial (°F, mph)', value: 'imperial' },
    ],
  },
  parameters: {
    docs: {
      source: {
        code: `<Dropdown
  label="Units"
  icon="⚙️"
  variant="single"
  options={[
    { label: 'Metric (°C, km/h)', value: 'metric', selected: true },
    { label: 'Imperial (°F, mph)', value: 'imperial' },
  ]}
  onSelect={(value) => setUnits(value)}
/>`,
      },
    },
  },
};

export const MultiSelect: Story = {
  args: {
    label: 'Options',
    icon: '⚙️',
    variant: 'multi',
    options: [
      { label: 'Option A', value: 'a', selected: true },
      { label: 'Option B', value: 'b' },
      { label: 'Option C', value: 'c', selected: true },
    ],
  },
  parameters: {
    docs: {
      source: {
        code: `<Dropdown
  label="Options"
  icon="⚙️"
  variant="multi"
  options={[
    { label: 'Option A', value: 'a', selected: true },
    { label: 'Option B', value: 'b' },
    { label: 'Option C', value: 'c', selected: true },
  ]}
  onSelect={(value) => toggleOption(value)}
/>`,
      },
    },
  },
};
