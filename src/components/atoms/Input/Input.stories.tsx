import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text', description: 'Placeholder text' },
    value: { control: 'text', description: 'Input value' },
    type: { control: 'text', description: 'Input type' },
    disabled: { control: 'boolean', description: 'Disabled state' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { placeholder: 'Search for a place...', value: '', type: 'text' },
  parameters: {
    docs: {
      source: {
        code: `<Input placeholder="Search for a place..." onChange={(e) => setValue(e.target.value)} />`,
      },
    },
  },
};

export const WithValue: Story = {
  args: { placeholder: 'Search for a place...', value: 'Berlin', type: 'text' },
  parameters: {
    docs: {
      source: {
        code: `<Input placeholder="Search for a place..." value={query} onChange={(e) => setQuery(e.target.value)} />`,
      },
    },
  },
};

export const Disabled: Story = {
  args: { placeholder: 'Search for a place...', value: '', disabled: true },
  parameters: {
    docs: {
      source: {
        code: `<Input placeholder="Search for a place..." disabled />`,
      },
    },
  },
};
