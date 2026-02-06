import type { Meta, StoryObj } from '@storybook/react';
import { ErrorState } from './ErrorState';

const meta: Meta<typeof ErrorState> = {
  title: 'Organisms/ErrorState',
  component: ErrorState,
  tags: ['autodocs'],
  argTypes: {
    message: { control: 'text', description: 'Error message' },
  },
};

export default meta;
type Story = StoryObj<typeof ErrorState>;

export const Default: Story = {
  args: {},
};

export const CustomMessage: Story = {
  args: {
    message: 'Network timeout. Check your connection and try again.',
  },
};

export const WithRetry: Story = {
  args: {
    message: "We couldn't connect to the server (API error). Please try again in a few moments.",
  },
};
