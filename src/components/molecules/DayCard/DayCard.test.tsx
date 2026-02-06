import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DayCard } from './DayCard';

describe('DayCard', () => {
  const defaultProps = {
    day: 'Tue',
    weatherCode: 2,
    maxTemp: '20°',
    minTemp: '14°',
  };

  it('renders the day, temperatures, and icon', () => {
    render(<DayCard {...defaultProps} />);
    expect(screen.getByText('Tue')).toBeInTheDocument();
    expect(screen.getByText('20°')).toBeInTheDocument();
    expect(screen.getByText('14°')).toBeInTheDocument();
  });

  it('applies the selected class when isSelected is true', () => {
    const { container } = render(<DayCard {...defaultProps} isSelected />);
    const card = container.querySelector('.day-card');
    expect(card?.className).toContain('day-card--selected');
  });

  it('does not apply the selected class by default', () => {
    const { container } = render(<DayCard {...defaultProps} />);
    const card = container.querySelector('.day-card');
    expect(card?.className).not.toContain('day-card--selected');
  });

  it('calls onClick when clicked', async () => {
    const handleClick = vi.fn();
    render(<DayCard {...defaultProps} onClick={handleClick} />);
    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledOnce();
  });
});
