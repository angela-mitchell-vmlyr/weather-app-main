import { HourlyItem } from '../../molecules/HourlyItem/HourlyItem';

export interface HourlyForecastHour {
  time: string;
  weatherCode: number;
  temperature: string;
}

export interface HourlyForecastProps {
  hours: HourlyForecastHour[];
  selectedDay?: string;
}

export function HourlyForecast({ hours, selectedDay = '' }: HourlyForecastProps) {
  const baseClass = 'hourly-forecast';

  return (
    <div className={baseClass}>
      <div className={`${baseClass}__header`}>
        <h3 className={`${baseClass}__title`}>Hourly forecast</h3>
        <select className={`${baseClass}__select`} value={selectedDay} onChange={() => {}}>
          <option>{selectedDay}</option>
        </select>
      </div>

      <div className={`${baseClass}__list`}>
        {hours.map((hour, index) => (
          <HourlyItem
            key={index}
            time={hour.time}
            weatherCode={hour.weatherCode}
            temperature={hour.temperature}
          />
        ))}
      </div>
    </div>
  );
}
