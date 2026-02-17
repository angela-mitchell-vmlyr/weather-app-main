import type { Meta, StoryObj } from '@storybook/react';
import { HourlyItem } from './HourlyItem';

const meta: Meta<typeof HourlyItem> = {
  title: 'Molecules/HourlyItem',
  component: HourlyItem,
  tags: ['autodocs'],
  argTypes: {
    time: { control: 'text', description: 'Time label' },
    weatherCode: { control: 'number', description: 'Weather code' },
    temperature: { control: 'text', description: 'Temperature value' },
  },
};

export default meta;
type Story = StoryObj<typeof HourlyItem>;

export const Default: Story = {
  args: { time: '3 PM', weatherCode: 3, temperature: '20°' },
  parameters: {
    docs: {
      source: { code: `<HourlyItem time="3 PM" weatherCode={3} temperature="20°" />` },
    },
  },
};

export const Sunny: Story = {
  args: { time: '5 PM', weatherCode: 0, temperature: '20°' },
  parameters: {
    docs: {
      source: { code: `<HourlyItem time="5 PM" weatherCode={0} temperature="20°" />` },
    },
  },
};

export const Rainy: Story = {
  args: { time: '8 PM', weatherCode: 61, temperature: '18°' },
  parameters: {
    docs: {
      source: { code: `<HourlyItem time="8 PM" weatherCode={61} temperature="18°" />` },
    },
  },
};
