import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Spinner } from './Spinner';

describe('Spinner', () => {
  it('renders with the medium size class by default', () => {
    const { container } = render(<Spinner />);
    const spinner = container.querySelector('.spinner');
    expect(spinner).toBeInTheDocument();
    expect(spinner?.className).toContain('spinner--medium');
  });

  it('renders with the small size class', () => {
    const { container } = render(<Spinner size="small" />);
    const spinner = container.querySelector('.spinner');
    expect(spinner?.className).toContain('spinner--small');
  });

  it('renders with the large size class', () => {
    const { container } = render(<Spinner size="large" />);
    const spinner = container.querySelector('.spinner');
    expect(spinner?.className).toContain('spinner--large');
  });
});
