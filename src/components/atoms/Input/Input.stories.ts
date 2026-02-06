import type { Meta, StoryObj } from '@storybook/html-vite';
import { createInput, InputProps } from './Input';
import './Input.scss';

const meta: Meta<InputProps> = {
  title: 'Atoms/Input',
  tags: ['autodocs'],
  render: (args: InputProps) => {
    const container = document.createElement('div');
    container.innerHTML = createInput(args);
    return container;
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    value: {
      control: 'text',
      description: 'Input value',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'search'],
      description: 'Input type',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
};

export default meta;
type Story = StoryObj<InputProps>;

export const Default: Story = {
  args: {
    placeholder: 'Search for a place...',
    value: '',
    type: 'text',
    disabled: false,
  },
};

export const WithValue: Story = {
  args: {
    placeholder: 'Search for a place...',
    value: 'Berlin',
    type: 'text',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Search for a place...',
    value: '',
    type: 'text',
    disabled: true,
  },
};

export const SearchType: Story = {
  args: {
    placeholder: 'Search...',
    value: '',
    type: 'search',
    disabled: false,
  },
};
