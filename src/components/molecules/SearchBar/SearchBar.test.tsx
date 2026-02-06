import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
  it('renders with the default placeholder', () => {
    render(<SearchBar />);
    expect(screen.getByPlaceholderText('Search for a place...')).toBeInTheDocument();
  });

  it('renders the search button', () => {
    render(<SearchBar />);
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  });

  it('displays the provided value', () => {
    render(<SearchBar value="Berlin" onChange={() => {}} />);
    expect(screen.getByDisplayValue('Berlin')).toBeInTheDocument();
  });

  it('disables input and button when loading', () => {
    render(<SearchBar loading />);
    expect(screen.getByPlaceholderText('Search for a place...')).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Search' })).toBeDisabled();
  });

  it('displays an error message', () => {
    render(<SearchBar error="No search result found!" />);
    expect(screen.getByText('No search result found!')).toBeInTheDocument();
  });

  it('does not display error element when error is empty', () => {
    const { container } = render(<SearchBar error="" />);
    expect(container.querySelector('.search-bar__error')).not.toBeInTheDocument();
  });

  it('calls onSearch when the search button is clicked', async () => {
    const handleSearch = vi.fn();
    render(<SearchBar onSearch={handleSearch} />);
    await userEvent.click(screen.getByRole('button', { name: 'Search' }));
    expect(handleSearch).toHaveBeenCalledOnce();
  });

  it('calls onSearch when Enter is pressed', async () => {
    const handleSearch = vi.fn();
    render(<SearchBar onSearch={handleSearch} />);
    const input = screen.getByPlaceholderText('Search for a place...');
    await userEvent.type(input, '{Enter}');
    expect(handleSearch).toHaveBeenCalledOnce();
  });
});
