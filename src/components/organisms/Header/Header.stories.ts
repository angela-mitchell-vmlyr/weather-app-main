import type { Meta, StoryObj } from '@storybook/html-vite';
import { createHeader } from './Header';
import type { HeaderProps } from './Header';

const meta = {
  title: 'Organisms/Header',
  tags: ['autodocs'],
  render: (args) => {
    const container = document.createElement('div');
    container.innerHTML = createHeader(args);
    return container;
  },
  argTypes: {
    onUnitsClick: { action: 'units-clicked' }
  }
} satisfies Meta<HeaderProps>;

export default meta;

export type Story = StoryObj<HeaderProps>;

export const Default: Story = {
  args: {}
};
