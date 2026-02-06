import type { Meta, StoryObj } from '@storybook/html-vite';
import { createSpinner, SpinnerProps } from './Spinner';
import './Spinner.scss';

const meta: Meta<SpinnerProps> = {
  title: 'Atoms/Spinner',
  tags: ['autodocs'],
  render: (args: SpinnerProps) => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    container.style.padding = '2rem';
    container.innerHTML = createSpinner(args);
    return container;
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Spinner size',
    },
  },
};

export default meta;
type Story = StoryObj<SpinnerProps>;

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};
