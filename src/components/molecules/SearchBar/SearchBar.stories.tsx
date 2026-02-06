import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './SearchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'Molecules/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text', description: 'Placeholder text' },
    value: { control: 'text', description: 'Current search value' },
    loading: { control: 'boolean', description: 'Loading state' },
    error: { control: 'text', description: 'Error message' },
  },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: { placeholder: 'Search for a place...', value: '', loading: false },
};

export const WithValue: Story = {
  args: { placeholder: 'Search for a place...', value: 'Berlin' },
};

export const Loading: Story = {
  args: { placeholder: 'Search for a place...', value: 'Berlin', loading: true },
};

export const WithError: Story = {
  args: { placeholder: 'Search for a place...', value: '', error: 'No search result found!' },
};
