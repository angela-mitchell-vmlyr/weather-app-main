import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HourlyForecast } from './HourlyForecast';

describe('HourlyForecast', () => {
  const defaultProps = {
    selectedDay: 'Tuesday',
    hours: [
      { time: '3 PM', weatherCode: 3, temperature: '20°' },
      { time: '4 PM', weatherCode: 2, temperature: '20°' },
      { time: '5 PM', weatherCode: 0, temperature: '20°' },
    ],
  };

  it('renders the title', () => {
    render(<HourlyForecast {...defaultProps} />);
    expect(screen.getByText('Hourly forecast')).toBeInTheDocument();
  });

  it('renders all hourly items', () => {
    render(<HourlyForecast {...defaultProps} />);
    expect(screen.getByText('3 PM')).toBeInTheDocument();
    expect(screen.getByText('4 PM')).toBeInTheDocument();
    expect(screen.getByText('5 PM')).toBeInTheDocument();
  });

  it('renders the selected day in the select element', () => {
    render(<HourlyForecast {...defaultProps} />);
    expect(screen.getByText('Tuesday')).toBeInTheDocument();
  });

  it('renders with the correct BEM class structure', () => {
    const { container } = render(<HourlyForecast {...defaultProps} />);
    expect(container.querySelector('.hourly-forecast')).toBeInTheDocument();
    expect(container.querySelector('.hourly-forecast__header')).toBeInTheDocument();
    expect(container.querySelector('.hourly-forecast__list')).toBeInTheDocument();
  });
});
