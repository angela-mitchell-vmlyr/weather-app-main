import { createDayCard, DayCardProps } from '../../molecules/DayCard/DayCard';

export interface DailyForecastProps {
  days: DayCardProps[];
  selectedIndex?: number;
}

export function createDailyForecast(props: DailyForecastProps): string {
  const { days, selectedIndex = 0 } = props;
  
  const baseClass = 'daily-forecast';
  
  const dayCards = days.map((day, index) => 
    createDayCard({ ...day, isSelected: index === selectedIndex })
  ).join('');
  
  return `
    <div class="${baseClass}">
      <h3 class="${baseClass}__title">Daily forecast</h3>
      <div class="${baseClass}__grid">
        ${dayCards}
      </div>
    </div>
  `;
}
