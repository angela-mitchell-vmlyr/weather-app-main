import { getWeatherIcon } from '../../atoms/WeatherIcon/WeatherIcon';

export interface HourlyItemProps {
  time: string;
  weatherCode: number;
  temperature: string;
}

export function HourlyItem({ time, weatherCode, temperature }: HourlyItemProps) {
  const icon = getWeatherIcon(weatherCode, true);
  const baseClass = 'hourly-item';

  return (
    <div className={baseClass}>
      <div className={`${baseClass}__info`}>
        <div className={`${baseClass}__icon`}>{icon}</div>
        <span className={`${baseClass}__time`}>{time}</span>
      </div>
      <div className={`${baseClass}__temp`}>{temperature}</div>
    </div>
  );
}
