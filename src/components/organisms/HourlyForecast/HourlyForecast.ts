import { createHourlyItem, HourlyItemProps } from '../../molecules/HourlyItem/HourlyItem';

export interface HourlyForecastProps {
  hours: HourlyItemProps[];
  selectedDay?: string;
}

export function createHourlyForecast(props: HourlyForecastProps): string {
  const { hours, selectedDay = 'Tuesday' } = props;
  
  const baseClass = 'hourly-forecast';
  
  const hourlyItems = hours.map(hour => createHourlyItem(hour)).join('');
  
  return `
    <div class="${baseClass}">
      <div class="${baseClass}__header">
        <h3 class="${baseClass}__title">Hourly forecast</h3>
        <select class="${baseClass}__select">
          <option>${selectedDay}</option>
        </select>
      </div>
      
      <div class="${baseClass}__list">
        ${hourlyItems}
      </div>
    </div>
  `;
}
