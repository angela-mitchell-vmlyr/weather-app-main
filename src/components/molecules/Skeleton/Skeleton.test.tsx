import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Skeleton } from './Skeleton';

describe('Skeleton', () => {
  it('renders with the skeleton class', () => {
    const { container } = render(<Skeleton />);
    expect(container.querySelector('.skeleton')).toBeInTheDocument();
  });

  it('applies the default dimensions', () => {
    const { container } = render(<Skeleton />);
    const el = container.querySelector('.skeleton') as HTMLElement;
    expect(el.style.width).toBe('100%');
    expect(el.style.height).toBe('1rem');
  });

  it('applies custom dimensions', () => {
    const { container } = render(<Skeleton width="10rem" height="5rem" />);
    const el = container.querySelector('.skeleton') as HTMLElement;
    expect(el.style.width).toBe('10rem');
    expect(el.style.height).toBe('5rem');
  });

  it('applies custom border radius', () => {
    const { container } = render(<Skeleton borderRadius="50%" />);
    const el = container.querySelector('.skeleton') as HTMLElement;
    expect(el.style.borderRadius).toBe('50%');
  });
});
