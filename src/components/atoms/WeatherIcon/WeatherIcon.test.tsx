import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { WeatherIcon, getWeatherIcon } from './WeatherIcon';

describe('getWeatherIcon', () => {
  it('returns sun emoji for clear sky during day', () => {
    expect(getWeatherIcon(0, true)).toBe('☀️');
  });

  it('returns moon emoji for clear sky at night', () => {
    expect(getWeatherIcon(0, false)).toBe('🌙');
  });

  it('returns rain emoji for rain codes', () => {
    expect(getWeatherIcon(61, true)).toBe('🌧️');
  });

  it('returns thunderstorm emoji for thunderstorm codes', () => {
    expect(getWeatherIcon(95, true)).toBe('⛈️');
  });

  it('returns default cloud emoji for unknown codes', () => {
    expect(getWeatherIcon(999, true)).toBe('☁️');
  });
});

describe('WeatherIcon', () => {
  it('renders with the correct size class', () => {
    const { container } = render(<WeatherIcon weatherCode={0} size="large" />);
    const icon = container.querySelector('.weather-icon');
    expect(icon?.className).toContain('weather-icon--large');
  });

  it('renders the correct icon for the weather code', () => {
    const { container } = render(<WeatherIcon weatherCode={0} isDay={true} />);
    expect(container.textContent).toContain('☀️');
  });

  it('renders the night variant icon', () => {
    const { container } = render(<WeatherIcon weatherCode={0} isDay={false} />);
    expect(container.textContent).toContain('🌙');
  });
});
