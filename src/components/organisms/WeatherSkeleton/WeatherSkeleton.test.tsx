import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { WeatherSkeleton } from './WeatherSkeleton';

describe('WeatherSkeleton', () => {
  it('renders the loading text', () => {
    const { container } = render(<WeatherSkeleton />);
    expect(container.textContent).toContain('Loading...');
  });

  it('renders skeleton placeholders for daily forecast', () => {
    const { container } = render(<WeatherSkeleton />);
    const skeletons = container.querySelectorAll('.skeleton');
    expect(skeletons.length).toBeGreaterThan(0);
  });

  it('renders stat card labels with dash values', () => {
    const { container } = render(<WeatherSkeleton />);
    expect(container.textContent).toContain('Feels Like');
    expect(container.textContent).toContain('Humidity');
    expect(container.textContent).toContain('Wind');
    expect(container.textContent).toContain('Precipitation');
  });

  it('renders the weather grid structure', () => {
    const { container } = render(<WeatherSkeleton />);
    expect(container.querySelector('.weather-grid')).toBeInTheDocument();
    expect(container.querySelector('.weather-grid__main')).toBeInTheDocument();
    expect(container.querySelector('.weather-grid__sidebar')).toBeInTheDocument();
  });
});
