import type { Meta, StoryObj } from '@storybook/html-vite';
import { createButton, ButtonProps } from './Button';
import './Button.scss';

const meta: Meta<ButtonProps> = {
  title: 'Atoms/Button',
  tags: ['autodocs'],
  render: (args: ButtonProps) => {
    const container = document.createElement('div');
    container.innerHTML = createButton(args);
    return container;
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Button text content',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Button style variant',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    text: 'Search',
    variant: 'primary',
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    text: 'Cancel',
    variant: 'secondary',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    text: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
};

export const LongText: Story = {
  args: {
    text: 'Button with Very Long Text Content',
    variant: 'primary',
    disabled: false,
  },
};
