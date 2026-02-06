import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HourlyItem } from './HourlyItem';

describe('HourlyItem', () => {
  it('renders the time and temperature', () => {
    render(<HourlyItem time="3 PM" weatherCode={3} temperature="20°" />);
    expect(screen.getByText('3 PM')).toBeInTheDocument();
    expect(screen.getByText('20°')).toBeInTheDocument();
  });

  it('renders the weather icon for the given code', () => {
    const { container } = render(<HourlyItem time="5 PM" weatherCode={0} temperature="20°" />);
    expect(container.textContent).toContain('☀️');
  });

  it('renders with the correct BEM class structure', () => {
    const { container } = render(<HourlyItem time="6 PM" weatherCode={61} temperature="19°" />);
    expect(container.querySelector('.hourly-item')).toBeInTheDocument();
    expect(container.querySelector('.hourly-item__info')).toBeInTheDocument();
    expect(container.querySelector('.hourly-item__time')).toBeInTheDocument();
    expect(container.querySelector('.hourly-item__temp')).toBeInTheDocument();
  });
});
