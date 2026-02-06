import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from './Header';

describe('Header', () => {
  it('renders the logo', () => {
    render(<Header units="metric" />);
    expect(screen.getByAltText('Weather Now')).toBeInTheDocument();
  });

  it('renders the units dropdown', () => {
    render(<Header units="metric" />);
    expect(screen.getByRole('button', { name: /Units/i })).toBeInTheDocument();
  });

  it('calls onSetUnits when a unit option is selected', async () => {
    const handleSetUnits = vi.fn();
    render(<Header units="metric" onSetUnits={handleSetUnits} />);
    await userEvent.click(screen.getByRole('button', { name: /Units/i }));
    await userEvent.click(screen.getByText(/Imperial/i));
    expect(handleSetUnits).toHaveBeenCalledWith('imperial');
  });

  it('renders with the correct BEM class structure', () => {
    const { container } = render(<Header units="metric" />);
    expect(container.querySelector('.header')).toBeInTheDocument();
    expect(container.querySelector('.header__brand')).toBeInTheDocument();
    expect(container.querySelector('.header__actions')).toBeInTheDocument();
  });
});
