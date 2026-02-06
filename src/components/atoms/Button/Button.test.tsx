import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
  it('renders with the provided text', () => {
    render(<Button text="Search" />);
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  });

  it('applies the primary variant class by default', () => {
    render(<Button text="Search" />);
    const button = screen.getByRole('button');
    expect(button.className).toContain('button--primary');
  });

  it('applies the secondary variant class', () => {
    render(<Button text="Cancel" variant="secondary" />);
    const button = screen.getByRole('button');
    expect(button.className).toContain('button--secondary');
  });

  it('applies the disabled class and attribute when disabled', () => {
    render(<Button text="Submit" disabled />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button.className).toContain('button--disabled');
  });

  it('calls onClick when clicked', async () => {
    const handleClick = vi.fn();
    render(<Button text="Click me" onClick={handleClick} />);
    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledOnce();
  });

  it('does not call onClick when disabled', async () => {
    const handleClick = vi.fn();
    render(<Button text="Click me" disabled onClick={handleClick} />);
    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });
});
