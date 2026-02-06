import type { Meta, StoryObj } from '@storybook/html-vite';
import { createDropdown } from './Dropdown';
import type { DropdownProps } from './Dropdown';

const meta = {
  title: 'Molecules/Dropdown',
  tags: ['autodocs'],
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.minHeight = '20rem';
    container.innerHTML = createDropdown(args);
    return container;
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['single', 'multi']
    }
  }
} satisfies Meta<DropdownProps>;

export default meta;

export type Story = StoryObj<DropdownProps>;

export const SingleSelect: Story = {
  args: {
    label: 'Units',
    variant: 'single',
    icon: '⚙️',
    options: [
      { label: 'Celsius (°C)', value: 'celsius', selected: true },
      { label: 'Fahrenheit (°F)', value: 'fahrenheit', selected: false }
    ]
  }
};

export const MultiSelect: Story = {
  args: {
    label: 'Units',
    variant: 'multi',
    icon: '⚙️',
    options: [
      { label: 'Celsius (°C)', value: 'celsius', selected: true },
      { label: 'Fahrenheit (°F)', value: 'fahrenheit', selected: false },
      { label: 'km/h', value: 'kmh', selected: true },
      { label: 'mph', value: 'mph', selected: false },
      { label: 'Millimeters (mm)', value: 'mm', selected: true },
      { label: 'Inches (in)', value: 'in', selected: false }
    ]
  }
};

export const DaySelector: Story = {
  args: {
    label: 'Tuesday',
    variant: 'single',
    icon: '',
    options: [
      { label: 'Monday', value: 'monday', selected: false },
      { label: 'Tuesday', value: 'tuesday', selected: true },
      { label: 'Wednesday', value: 'wednesday', selected: false },
      { label: 'Thursday', value: 'thursday', selected: false },
      { label: 'Friday', value: 'friday', selected: false },
      { label: 'Saturday', value: 'saturday', selected: false },
      { label: 'Sunday', value: 'sunday', selected: false }
    ]
  }
};
