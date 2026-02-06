import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ErrorState } from './ErrorState';

describe('ErrorState', () => {
  it('renders the title', () => {
    render(<ErrorState />);
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });

  it('renders the default error message', () => {
    render(<ErrorState />);
    expect(screen.getByText(/couldn't connect to the server/i)).toBeInTheDocument();
  });

  it('renders a custom error message', () => {
    render(<ErrorState message="Custom error" />);
    expect(screen.getByText('Custom error')).toBeInTheDocument();
  });

  it('renders the retry button when onRetry is provided', () => {
    render(<ErrorState onRetry={() => {}} />);
    expect(screen.getByRole('button', { name: /Retry/i })).toBeInTheDocument();
  });

  it('does not render the retry button when onRetry is not provided', () => {
    render(<ErrorState />);
    expect(screen.queryByRole('button', { name: /Retry/i })).not.toBeInTheDocument();
  });

  it('calls onRetry when the retry button is clicked', async () => {
    const handleRetry = vi.fn();
    render(<ErrorState onRetry={handleRetry} />);
    await userEvent.click(screen.getByRole('button', { name: /Retry/i }));
    expect(handleRetry).toHaveBeenCalledOnce();
  });

  it('renders with the correct BEM class structure', () => {
    const { container } = render(<ErrorState onRetry={() => {}} />);
    expect(container.querySelector('.error-state')).toBeInTheDocument();
    expect(container.querySelector('.error-state__icon')).toBeInTheDocument();
    expect(container.querySelector('.error-state__title')).toBeInTheDocument();
    expect(container.querySelector('.error-state__message')).toBeInTheDocument();
    expect(container.querySelector('.error-state__action')).toBeInTheDocument();
  });
});
