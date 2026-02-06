import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DailyForecast } from './DailyForecast';

describe('DailyForecast', () => {
  const defaultProps = {
    days: [
      { day: 'Tue', weatherCode: 2, maxTemp: '20°', minTemp: '14°' },
      { day: 'Wed', weatherCode: 3, maxTemp: '21°', minTemp: '15°' },
      { day: 'Thu', weatherCode: 0, maxTemp: '24°', minTemp: '14°' },
    ],
    selectedIndex: 0,
  };

  it('renders the title', () => {
    render(<DailyForecast {...defaultProps} />);
    expect(screen.getByText('Daily forecast')).toBeInTheDocument();
  });

  it('renders all day cards', () => {
    render(<DailyForecast {...defaultProps} />);
    expect(screen.getByText('Tue')).toBeInTheDocument();
    expect(screen.getByText('Wed')).toBeInTheDocument();
    expect(screen.getByText('Thu')).toBeInTheDocument();
  });

  it('marks the selected day card', () => {
    const { container } = render(<DailyForecast {...defaultProps} />);
    const selectedCards = container.querySelectorAll('.day-card--selected');
    expect(selectedCards).toHaveLength(1);
  });

  it('calls onSelectDay when a day card is clicked', async () => {
    const handleSelectDay = vi.fn();
    render(<DailyForecast {...defaultProps} onSelectDay={handleSelectDay} />);
    await userEvent.click(screen.getByText('Wed'));
    expect(handleSelectDay).toHaveBeenCalledWith(1);
  });
});
