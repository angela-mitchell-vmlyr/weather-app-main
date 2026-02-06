import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text', description: 'Button text content' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Button style variant',
    },
    disabled: { control: 'boolean', description: 'Disabled state' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { text: 'Search', variant: 'primary', disabled: false },
};

export const Secondary: Story = {
  args: { text: 'Cancel', variant: 'secondary', disabled: false },
};

export const Disabled: Story = {
  args: { text: 'Disabled Button', variant: 'primary', disabled: true },
};
