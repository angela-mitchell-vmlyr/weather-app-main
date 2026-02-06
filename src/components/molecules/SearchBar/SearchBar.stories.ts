import type { Meta, StoryObj } from '@storybook/html-vite';
import { createSearchBar, SearchBarProps } from './SearchBar';
import './SearchBar.scss';

const meta: Meta<SearchBarProps> = {
  title: 'Molecules/SearchBar',
  tags: ['autodocs'],
  render: (args: SearchBarProps) => {
    const container = document.createElement('div');
    container.style.maxWidth = '42rem';
    container.innerHTML = createSearchBar(args);
    return container;
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    value: {
      control: 'text',
      description: 'Search input value',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state',
    },
    error: {
      control: 'text',
      description: 'Error message',
    },
  },
};

export default meta;
type Story = StoryObj<SearchBarProps>;

export const Default: Story = {
  args: {
    placeholder: 'Search for a place...',
    value: '',
    loading: false,
    error: '',
  },
};

export const WithValue: Story = {
  args: {
    placeholder: 'Search for a place...',
    value: 'Berlin',
    loading: false,
    error: '',
  },
};

export const Loading: Story = {
  args: {
    placeholder: 'Search for a place...',
    value: 'Berlin',
    loading: true,
    error: '',
  },
};

export const WithError: Story = {
  args: {
    placeholder: 'Search for a place...',
    value: 'InvalidCity',
    loading: false,
    error: 'Location not found. Please try another search.',
  },
};

export const LoadingWithError: Story = {
  args: {
    placeholder: 'Search for a place...',
    value: '',
    loading: true,
    error: 'Failed to fetch weather data',
  },
};
