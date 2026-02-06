import { DayCard } from '../../molecules/DayCard/DayCard';

export interface DailyForecastDay {
  day: string;
  weatherCode: number;
  maxTemp: string;
  minTemp: string;
}

export interface DailyForecastProps {
  days: DailyForecastDay[];
  selectedIndex?: number;
  onSelectDay?: (index: number) => void;
}

export function DailyForecast({
  days,
  selectedIndex = 0,
  onSelectDay,
}: DailyForecastProps) {
  const baseClass = 'daily-forecast';

  return (
    <div className={baseClass}>
      <h3 className={`${baseClass}__title`}>Daily forecast</h3>
      <div className={`${baseClass}__grid`}>
        {days.map((day, index) => (
          <DayCard
            key={index}
            day={day.day}
            weatherCode={day.weatherCode}
            maxTemp={day.maxTemp}
            minTemp={day.minTemp}
            isSelected={index === selectedIndex}
            onClick={() => onSelectDay?.(index)}
          />
        ))}
      </div>
    </div>
  );
}
