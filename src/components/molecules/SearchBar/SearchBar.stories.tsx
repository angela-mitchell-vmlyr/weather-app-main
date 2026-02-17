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
  parameters: {
    docs: {
      source: {
        code: `<SearchBar
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  onSearch={handleSearch}
/>`,
      },
    },
  },
};

export const WithValue: Story = {
  args: { placeholder: 'Search for a place...', value: 'Berlin' },
  parameters: {
    docs: {
      source: {
        code: `<SearchBar
  value="Berlin"
  onChange={(e) => setQuery(e.target.value)}
  onSearch={handleSearch}
/>`,
      },
    },
  },
};

export const Loading: Story = {
  args: { placeholder: 'Search for a place...', value: 'Berlin', loading: true },
  parameters: {
    docs: {
      source: {
        code: `<SearchBar
  value="Berlin"
  loading
  onChange={(e) => setQuery(e.target.value)}
  onSearch={handleSearch}
/>`,
      },
    },
  },
};

export const WithError: Story = {
  args: { placeholder: 'Search for a place...', value: '', error: 'No search result found!' },
  parameters: {
    docs: {
      source: {
        code: `<SearchBar
  value=""
  error="No search result found!"
  onChange={(e) => setQuery(e.target.value)}
  onSearch={handleSearch}
/>`,
      },
    },
  },
};
