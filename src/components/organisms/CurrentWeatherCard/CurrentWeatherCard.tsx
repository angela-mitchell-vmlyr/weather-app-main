import { getWeatherIcon } from '../../atoms/WeatherIcon/WeatherIcon';

export interface CurrentWeatherCardProps {
  location: string;
  country: string;
  date: string;
  temperature: string;
  weatherCode: number;
}

export function CurrentWeatherCard({
  location,
  country,
  date,
  temperature,
  weatherCode,
}: CurrentWeatherCardProps) {
  const icon = getWeatherIcon(weatherCode, true);
  const baseClass = 'current-weather-card';

  return (
    <div className={baseClass}>
      <div className={`${baseClass}__decoration ${baseClass}__decoration--sun`}>☀️</div>
      <div className={`${baseClass}__decoration ${baseClass}__decoration--cloud`}>☁️</div>

      <div className={`${baseClass}__content`}>
        <h3 className={`${baseClass}__location`}>
          {location}, {country}
        </h3>
        <p className={`${baseClass}__date`}>{date}</p>

        <div className={`${baseClass}__weather`}>
          <div className={`${baseClass}__icon`}>{icon}</div>
          <div className={`${baseClass}__temperature`}>{temperature}</div>
        </div>
      </div>
    </div>
  );
}
