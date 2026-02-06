import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Dropdown } from './Dropdown';

describe('Dropdown', () => {
  const defaultProps = {
    label: 'Units',
    options: [
      { label: 'Metric (°C)', value: 'metric', selected: true },
      { label: 'Imperial (°F)', value: 'imperial' },
    ],
  };

  it('renders the trigger button with the label', () => {
    render(<Dropdown {...defaultProps} />);
    expect(screen.getByRole('button', { name: /Units/i })).toBeInTheDocument();
  });

  it('starts with the menu closed', () => {
    const { container } = render(<Dropdown {...defaultProps} />);
    const menu = container.querySelector('.dropdown__menu');
    expect(menu?.getAttribute('aria-hidden')).toBe('true');
  });

  it('opens the menu when the trigger is clicked', async () => {
    const { container } = render(<Dropdown {...defaultProps} />);
    await userEvent.click(screen.getByRole('button', { name: /Units/i }));
    const menu = container.querySelector('.dropdown__menu');
    expect(menu?.getAttribute('aria-hidden')).toBe('false');
  });

  it('closes the menu when the trigger is clicked again', async () => {
    const { container } = render(<Dropdown {...defaultProps} />);
    const trigger = screen.getByRole('button', { name: /Units/i });
    await userEvent.click(trigger);
    await userEvent.click(trigger);
    const menu = container.querySelector('.dropdown__menu');
    expect(menu?.getAttribute('aria-hidden')).toBe('true');
  });

  it('calls onSelect when a single-select option is clicked', async () => {
    const handleSelect = vi.fn();
    render(<Dropdown {...defaultProps} onSelect={handleSelect} />);
    await userEvent.click(screen.getByRole('button', { name: /Units/i }));
    await userEvent.click(screen.getByText('Imperial (°F)'));
    expect(handleSelect).toHaveBeenCalledWith('imperial');
  });

  it('marks the selected option with the selected class', async () => {
    const { container } = render(<Dropdown {...defaultProps} />);
    await userEvent.click(screen.getByRole('button', { name: /Units/i }));
    const selectedOption = container.querySelector('.dropdown__option--selected');
    expect(selectedOption).toBeInTheDocument();
    expect(selectedOption?.textContent).toContain('Metric');
  });
});
