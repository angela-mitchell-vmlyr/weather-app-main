import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Molecules/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'text', description: 'Width of the skeleton' },
    height: { control: 'text', description: 'Height of the skeleton' },
    borderRadius: { control: 'text', description: 'Border radius' },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: { width: '100%', height: '1rem' },
  parameters: {
    docs: {
      source: { code: `<Skeleton width="100%" height="1rem" />` },
    },
  },
};

export const Card: Story = {
  args: { width: '100%', height: '8rem', borderRadius: 'var(--radius-24)' },
  parameters: {
    docs: {
      source: { code: `<Skeleton width="100%" height="8rem" borderRadius="var(--radius-24)" />` },
    },
  },
};

export const Circle: Story = {
  args: { width: '3rem', height: '3rem', borderRadius: '50%' },
  parameters: {
    docs: {
      source: { code: `<Skeleton width="3rem" height="3rem" borderRadius="50%" />` },
    },
  },
};
