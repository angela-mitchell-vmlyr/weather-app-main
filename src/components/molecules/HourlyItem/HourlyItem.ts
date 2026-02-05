import { getWeatherIcon } from '../../atoms/WeatherIcon/WeatherIcon';

export interface HourlyItemProps {
  time: string;
  weatherCode: number;
  temperature: string;
}

export function createHourlyItem(props: HourlyItemProps): string {
  const { time, weatherCode, temperature } = props;
  const icon = getWeatherIcon(weatherCode, true);
  
  const baseClass = 'hourly-item';
  
  return `
    <div class="${baseClass}">
      <div class="${baseClass}__info">
        <div class="${baseClass}__icon">${icon}</div>
        <span class="${baseClass}__time">${time}</span>
      </div>
      <div class="${baseClass}__temp">${temperature}</div>
    </div>
  `;
}
