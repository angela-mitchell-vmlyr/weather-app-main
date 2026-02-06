import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './Input';

describe('Input', () => {
  it('renders with the provided placeholder', () => {
    render(<Input placeholder="Search for a place..." />);
    expect(screen.getByPlaceholderText('Search for a place...')).toBeInTheDocument();
  });

  it('renders with the provided value', () => {
    render(<Input value="Berlin" onChange={() => {}} />);
    expect(screen.getByDisplayValue('Berlin')).toBeInTheDocument();
  });

  it('applies the disabled attribute when disabled', () => {
    render(<Input placeholder="Search" disabled />);
    expect(screen.getByPlaceholderText('Search')).toBeDisabled();
  });

  it('calls onChange when the user types', async () => {
    const handleChange = vi.fn();
    render(<Input placeholder="Type here" onChange={handleChange} />);
    await userEvent.type(screen.getByPlaceholderText('Type here'), 'a');
    expect(handleChange).toHaveBeenCalled();
  });

  it('renders with the correct input type', () => {
    render(<Input type="email" placeholder="Email" />);
    expect(screen.getByPlaceholderText('Email')).toHaveAttribute('type', 'email');
  });
});
