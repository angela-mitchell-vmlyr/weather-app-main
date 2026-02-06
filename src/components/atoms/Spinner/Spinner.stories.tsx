import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Atoms/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Spinner size',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Small: Story = {
  args: { size: 'small' },
};

export const Medium: Story = {
  args: { size: 'medium' },
};

export const Large: Story = {
  args: { size: 'large' },
};
