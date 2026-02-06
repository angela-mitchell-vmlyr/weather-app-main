import { getWeatherIcon } from '../../atoms/WeatherIcon/WeatherIcon';

export interface DayCardProps {
  day: string;
  weatherCode: number;
  maxTemp: string;
  minTemp: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export function DayCard({
  day,
  weatherCode,
  maxTemp,
  minTemp,
  isSelected = false,
  onClick,
}: DayCardProps) {
  const icon = getWeatherIcon(weatherCode, true);
  const baseClass = 'day-card';
  const selectedClass = isSelected ? `${baseClass}--selected` : '';

  return (
    <button className={`${baseClass} ${selectedClass}`.trim()} onClick={onClick}>
      <div className={`${baseClass}__day`}>{day}</div>
      <div className={`${baseClass}__icon`}>{icon}</div>
      <div className={`${baseClass}__temp-max`}>{maxTemp}</div>
      <div className={`${baseClass}__temp-min`}>{minTemp}</div>
    </button>
  );
}
