import type { Meta, StoryObj } from '@storybook/react';
import { WeatherSkeleton } from './WeatherSkeleton';

const meta: Meta<typeof WeatherSkeleton> = {
  title: 'Organisms/WeatherSkeleton',
  component: WeatherSkeleton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof WeatherSkeleton>;

export const Default: Story = {
  parameters: {
    docs: {
      source: { code: `<WeatherSkeleton />` },
    },
  },
};
