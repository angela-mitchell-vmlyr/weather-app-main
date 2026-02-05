import { getWeatherIcon } from '../../atoms/WeatherIcon/WeatherIcon';

export interface DayCardProps {
  day: string;
  weatherCode: number;
  maxTemp: string;
  minTemp: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export function createDayCard(props: DayCardProps): string {
  const { day, weatherCode, maxTemp, minTemp, isSelected = false } = props;
  const icon = getWeatherIcon(weatherCode, true);
  
  const baseClass = 'day-card';
  const selectedClass = isSelected ? `${baseClass}--selected` : '';
  
  return `
    <button class="${baseClass} ${selectedClass}">
      <div class="${baseClass}__day">${day}</div>
      <div class="${baseClass}__icon">${icon}</div>
      <div class="${baseClass}__temp-max">${maxTemp}</div>
      <div class="${baseClass}__temp-min">${minTemp}</div>
    </button>
  `;
}
