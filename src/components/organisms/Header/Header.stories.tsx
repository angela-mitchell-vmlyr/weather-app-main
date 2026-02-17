import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Organisms/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    units: {
      control: 'select',
      options: ['metric', 'imperial'],
      description: 'Current unit system',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Metric: Story = {
  args: { units: 'metric' },
  parameters: {
    docs: {
      source: {
        code: `<Header units="metric" onUnitsChange={(unit) => setUnits(unit)} />`,
      },
    },
  },
};

export const Imperial: Story = {
  args: { units: 'imperial' },
  parameters: {
    docs: {
      source: {
        code: `<Header units="imperial" onUnitsChange={(unit) => setUnits(unit)} />`,
      },
    },
  },
};
