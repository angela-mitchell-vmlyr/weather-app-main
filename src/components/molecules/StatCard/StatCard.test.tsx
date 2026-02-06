import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { StatCard } from './StatCard';

describe('StatCard', () => {
  it('renders the label and value', () => {
    render(<StatCard label="Humidity" value="46%" />);
    expect(screen.getByText('Humidity')).toBeInTheDocument();
    expect(screen.getByText('46%')).toBeInTheDocument();
  });

  it('applies the default variant class', () => {
    const { container } = render(<StatCard label="Wind" value="14 km/h" />);
    const card = container.querySelector('.stat-card');
    expect(card?.className).not.toContain('stat-card--highlighted');
  });

  it('applies the highlighted variant class', () => {
    const { container } = render(<StatCard label="Feels Like" value="18°" variant="highlighted" />);
    const card = container.querySelector('.stat-card');
    expect(card?.className).toContain('stat-card--highlighted');
  });
});
