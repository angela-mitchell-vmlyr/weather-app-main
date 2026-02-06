import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CurrentWeatherCard } from './CurrentWeatherCard';

describe('CurrentWeatherCard', () => {
  const defaultProps = {
    location: 'Berlin',
    country: 'Germany',
    date: 'Tuesday, Aug 5, 2025',
    temperature: '20°',
    weatherCode: 0,
  };

  it('renders the location and country', () => {
    render(<CurrentWeatherCard {...defaultProps} />);
    expect(screen.getByText('Berlin, Germany')).toBeInTheDocument();
  });

  it('renders the date', () => {
    render(<CurrentWeatherCard {...defaultProps} />);
    expect(screen.getByText('Tuesday, Aug 5, 2025')).toBeInTheDocument();
  });

  it('renders the temperature', () => {
    render(<CurrentWeatherCard {...defaultProps} />);
    expect(screen.getByText('20°')).toBeInTheDocument();
  });

  it('renders the weather icon for the given code', () => {
    const { container } = render(<CurrentWeatherCard {...defaultProps} />);
    expect(container.textContent).toContain('☀️');
  });

  it('renders the decoration elements', () => {
    const { container } = render(<CurrentWeatherCard {...defaultProps} />);
    expect(container.querySelector('.current-weather-card__decoration--sun')).toBeInTheDocument();
    expect(container.querySelector('.current-weather-card__decoration--cloud')).toBeInTheDocument();
  });
});
